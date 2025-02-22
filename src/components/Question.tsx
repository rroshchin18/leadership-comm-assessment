import React from 'react';
import type { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (score: number) => void;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(4 - index)}
            className="w-full p-4 text-left border rounded-lg hover:bg-blue-50 
                     transition-colors duration-200 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};