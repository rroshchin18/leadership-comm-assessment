import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="relative pt-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold inline-block text-[#C0E021]">
          Question {current} of {total}
        </span>
        <span className="text-xs font-semibold inline-block text-[#C0E021]">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-[#1C1A31]">
        <div
          className="transition-all duration-300 ease-out bg-[#C0E021]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};