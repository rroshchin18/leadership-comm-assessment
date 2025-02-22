import React from 'react';
import { ArrowLeft, Trophy, Target, TrendingUp } from 'lucide-react';
import { ResultSection } from './ResultSection';
import { ExportButtons } from './ExportButtons';
import type { TraitDescription } from '../../types';

interface ResultCardProps {
  result: TraitDescription;
  onRestart: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart }) => {
  if (!result) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="relative inline-block">
          <div className="animate-pulse">
            <Trophy className="w-12 h-12 text-[#C0E021]" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#9263D9] rounded-full" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#C0E021]">
            {result.trait}
          </h2>
          <p className="text-white/90 text-sm mt-2 max-w-2xl mx-auto">
            {result.description}
          </p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultSection
          icon={Target}
          title="Key Indicators"
          items={result.indicators}
          color="text-[#C0E021]"
        />
        <ResultSection
          icon={Trophy}
          title="Your Strengths"
          items={result.strengths}
          color="text-[#9263D9]"
        />
        <ResultSection
          icon={TrendingUp}
          title="Growth Areas"
          items={result.improvements}
          color="text-[#FF9B42]"
        />
      </div>

      {/* Export Buttons */}
      <ExportButtons result={result} />

      {/* Action Button */}
      <button
        onClick={onRestart}
        className="group w-full py-3 px-4 bg-[#9263D9] text-white rounded-lg
                 hover:bg-[#a77fe2] transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-[#C0E021]
                 flex items-center justify-center space-x-2"
      >
        <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Take Assessment Again</span>
      </button>
    </div>
  );
};