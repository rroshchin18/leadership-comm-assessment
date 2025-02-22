export type CommunicatorTrait = 'Listener' | 'Influencer' | 'Empathetic' | 'Information Sharer';

export interface TraitDescription {
  trait: CommunicatorTrait;
  description: string;
  indicators: string[];
  strengths: string[];
  improvements: string[];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  traitWeights: Record<CommunicatorTrait, number>[];
}

export interface Assessment {
  currentStep: number;
  answers: number[];
}