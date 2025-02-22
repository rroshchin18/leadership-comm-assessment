import React from 'react';
import { Download } from 'lucide-react';
import { exportAsPNG } from '../../utils/export';
import type { TraitDescription } from '../../types';

interface ExportButtonsProps {
  result: TraitDescription;
}

export function ExportButtons({ result }: ExportButtonsProps) {
  const handleExportPNG = async () => {
    await exportAsPNG(result, `communication-assessment-${result.trait.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleExportPNG}
        className="flex items-center gap-2 px-6 py-2.5 bg-[#1C1A31] text-white 
                   rounded-lg hover:bg-[#2d2a4d] transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#C0E021]"
      >
        <Download className="w-4 h-4" />
        <span>Save Results</span>
      </button>
    </div>
  );
}