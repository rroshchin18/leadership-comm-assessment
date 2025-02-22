import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResultSectionProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: string;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ 
  icon: Icon, 
  title, 
  items,
  color
}) => (
  <div className="bg-[#1C1A31] rounded-lg p-4 border border-[#9263D9]/30
                hover:border-[#9263D9] transition-all duration-300">
    <div className="flex items-center space-x-3 mb-3">
      <Icon className={`w-5 h-5 ${color}`} />
      <h3 className={`font-semibold ${color}`}>{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li 
          key={index}
          className="text-white/80 text-sm pl-4 relative before:content-[''] 
                     before:absolute before:left-0 before:top-[0.6em] before:w-2 
                     before:h-2 before:bg-current before:rounded-full 
                     before:opacity-50 hover:before:opacity-100
                     transition-all duration-200"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);