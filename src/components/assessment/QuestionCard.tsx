import React from 'react';
import { QuestionNavigation } from './QuestionNavigation';
import type { Question as QuestionType } from '../../types';

interface QuestionCardProps {
  question: QuestionType;
  isLastQuestion: boolean;
  selectedOption: number | null;
  onAnswer: (score: number) => void;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isLastQuestion,
  selectedOption,
  onAnswer,
  onBack,
  onNext,
  onSubmit,
}) => {
  const handleOptionClick = (index: number) => {
    onAnswer(index);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-200 
                      ${selectedOption === index 
                        ? 'border-[#C0E021] bg-[#9263D9]/20' 
                        : 'border-[#9263D9]/20 bg-[#2d2a4d] hover:bg-[#9263D9]/10 hover:border-[#9263D9]'
                      }
                      text-white focus:outline-none focus:ring-2 focus:ring-[#C0E021]`}
          >
            {option}
          </button>
        ))}
      </div>

      <QuestionNavigation
        isLastQuestion={isLastQuestion}
        onBack={onBack}
        onNext={onNext}
        onSubmit={onSubmit}
        canProceed={selectedOption !== null}
      />
    </div>
  );
};