import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface QuestionNavigationProps {
  isLastQuestion: boolean;
  onBack: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  canProceed: boolean;
}

export const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  isLastQuestion,
  onBack,
  onNext,
  onSubmit,
  canProceed
}) => (
  <div className="flex justify-between space-x-4 mt-6">
    <button
      onClick={onBack}
      className="group px-4 py-2 text-white/80 hover:text-white
                 flex items-center space-x-2 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-[#C0E021]"
    >
      <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
      <span>Back</span>
    </button>
    
    {isLastQuestion ? (
      <button
        onClick={onSubmit}
        disabled={!canProceed}
        className="group px-6 py-2 bg-[#C0E021] text-[#1C1A31] font-semibold
                   rounded-lg flex items-center space-x-2
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-[#d4f535] transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-[#9263D9]"
      >
        <span>Submit</span>
        <Check className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
      </button>
    ) : (
      <button
        onClick={onNext}
        disabled={!canProceed}
        className="group px-6 py-2 bg-[#9263D9] text-white
                   rounded-lg flex items-center space-x-2
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-[#a77fe2] transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-[#C0E021]"
      >
        <span>Next</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    )}
  </div>
);