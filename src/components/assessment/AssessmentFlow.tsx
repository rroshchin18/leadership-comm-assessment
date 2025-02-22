import React from 'react';
import { Welcome } from './Welcome';
import { QuestionCard } from './QuestionCard';
import { ResultCard } from '../results/ResultCard';
import { ProgressBar } from '../ui/ProgressBar';
import { questions } from '../../data/questions';
import { useAssessment } from '../../contexts/AssessmentContext';

export function AssessmentFlow() {
  const {
    assessment,
    handleStart,
    handleAnswer,
    handleNext,
    handleBack,
    handleSubmit,
    handleRestart,
    getResult
  } = useAssessment();

  const result = getResult();
  const showResults = assessment.currentStep > questions.length && result !== null;

  if (assessment.currentStep === 0) {
    return <Welcome onStart={handleStart} />;
  }

  if (assessment.currentStep <= questions.length) {
    return (
      <div className="space-y-6">
        <ProgressBar
          current={assessment.currentStep}
          total={questions.length}
        />
        <QuestionCard
          key={assessment.currentStep}
          question={questions[assessment.currentStep - 1]}
          isLastQuestion={assessment.currentStep === questions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          onNext={handleNext}
          onSubmit={handleSubmit}
          selectedOption={assessment.answers[assessment.currentStep - 1]}
        />
      </div>
    );
  }

  if (showResults && result) {
    return <ResultCard result={result} onRestart={handleRestart} />;
  }

  return null;
}