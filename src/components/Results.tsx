import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { TraitDescription } from '../types';

interface ResultsProps {
  result: TraitDescription;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ result, onRestart }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <MessageCircle className="w-16 h-16 text-blue-600" />
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Communication Trait: {result.trait}
        </h2>
        <p className="mt-2 text-gray-600">{result.description}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Key Indicators</h3>
          <ul className="mt-2 space-y-2">
            {result.indicators.map((indicator, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {indicator}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">Your Strengths</h3>
          <ul className="mt-2 space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">Areas for Growth</h3>
          <ul className="mt-2 space-y-2">
            {result.improvements.map((improvement, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {improvement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Take Assessment Again
      </button>
    </div>
  );
};