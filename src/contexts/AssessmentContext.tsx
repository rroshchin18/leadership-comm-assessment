import React, { createContext, useContext, useState } from 'react';
import { questions } from '../data/questions';
import { traitDescriptions } from '../data/traits';
import { calculateDominantTrait } from '../utils/calculateTrait';
import type { Assessment, TraitDescription } from '../types';

interface AssessmentContextType {
  assessment: Assessment;
  handleStart: () => void;
  handleAnswer: (answerIndex: number) => void;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void;
  handleRestart: () => void;
  getResult: () => TraitDescription | null;
}

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [assessment, setAssessment] = useState<Assessment>({
    currentStep: 0,
    answers: Array(questions.length).fill(null),
  });

  const handleStart = () => {
    setAssessment({
      currentStep: 1,
      answers: Array(questions.length).fill(null),
    });
  };

  const handleAnswer = (answerIndex: number) => {
    setAssessment(prev => ({
      ...prev,
      answers: prev.answers.map((ans, i) => 
        i === prev.currentStep - 1 ? answerIndex : ans
      ),
    }));
  };

  const handleNext = () => {
    setAssessment(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  };

  const handleBack = () => {
    setAssessment(prev => ({
      ...prev,
      currentStep: Math.max(1, prev.currentStep - 1),
    }));
  };

  const handleSubmit = () => {
    setAssessment(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  };

  const handleRestart = () => {
    setAssessment({
      currentStep: 0,
      answers: Array(questions.length).fill(null),
    });
  };

  const getResult = () => {
    const allAnswered = assessment.answers.every(answer => answer !== null);
    if (allAnswered) {
      const trait = calculateDominantTrait(assessment.answers);
      return traitDescriptions[trait];
    }
    return null;
  };

  const value = {
    assessment,
    handleStart,
    handleAnswer,
    handleNext,
    handleBack,
    handleSubmit,
    handleRestart,
    getResult,
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}