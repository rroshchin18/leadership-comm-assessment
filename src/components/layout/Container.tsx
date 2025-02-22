import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="min-h-screen bg-[#1C1A31] text-white">
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-[#2d2a4d] rounded-xl shadow-xl p-6 md:p-8 border border-[#9263D9]/20">
        {children}
      </div>
    </div>
  </div>
);