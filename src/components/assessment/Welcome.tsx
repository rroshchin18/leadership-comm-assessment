import React from 'react';
import { MessageCircle, Users, Brain, LineChart, ArrowRight } from 'lucide-react';
import { TraitCard } from './TraitCard';

interface WelcomeProps {
  onStart: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onStart }) => (
  <div className="space-y-8">
    {/* Header Section */}
    <div className="text-center space-y-4">
      <div className="relative inline-block">
        <MessageCircle className="w-14 h-14 text-[#9263D9] animate-pulse" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#C0E021] rounded-full" />
      </div>
      <h1 className="text-3xl font-bold text-white">
        Communication Trait Assessment
      </h1>
      <p className="text-[#FFFFFF]/70 text-base max-w-2xl mx-auto">
        Discover your workplace communication trait and get personalized insights
        to enhance your effectiveness.
      </p>
    </div>

    {/* Traits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <TraitCard
        icon={Brain}
        title="Listener"
        description="Asks clarifying questions, avoids interruptions"
      />
      <TraitCard
        icon={Users}
        title="Influencer"
        description="Inspires action through clear messaging"
      />
      <TraitCard
        icon={MessageCircle}
        title="Empathetic"
        description="Understands team needs and responds thoughtfully"
      />
      <TraitCard
        icon={LineChart}
        title="Information Sharer"
        description="Communicates updates transparently and concisely"
      />
    </div>

    {/* CTA Button */}
    <button
      onClick={onStart}
      className="group w-full py-3 px-6 bg-[#9263D9] text-white rounded-lg
               hover:bg-[#a77fe2] transition-all duration-300
               focus:outline-none focus:ring-2 focus:ring-[#C0E021]
               flex items-center justify-center space-x-2"
    >
      <span className="text-lg font-semibold">Start Assessment</span>
      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  </div>
);