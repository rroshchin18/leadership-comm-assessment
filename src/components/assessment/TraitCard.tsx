import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TraitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TraitCard: React.FC<TraitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group p-4 bg-[#1C1A31] rounded-lg border border-[#9263D9]/30
                  hover:border-[#9263D9] transition-all duration-300
                  transform hover:-translate-y-1 flex items-center space-x-4">
    <div className="inline-block p-2 bg-[#9263D9]/10 rounded-lg
                    group-hover:bg-[#9263D9]/20 transition-colors duration-300
                    flex-shrink-0">
      <Icon className="w-5 h-5 text-[#9263D9]" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-semibold text-[#C0E021] mb-1">{title}</h3>
      <p className="text-[#FFFFFF]/70 text-sm line-clamp-2">{description}</p>
    </div>
  </div>
);