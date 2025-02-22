import type { CommunicatorTrait } from '../../types';

// Initialize base scores for each trait
export function initializeTraitScores(): Record<CommunicatorTrait, number> {
  return {
    Listener: 0,
    Influencer: 0,
    Empathetic: 0,
    'Information Sharer': 0
  };
}

// Calculate weighted scores based on answer choices
export function calculateTraitScores(answers: number[]): Record<CommunicatorTrait, number> {
  const scores = initializeTraitScores();
  
  // Weight matrix for each answer choice
  // Each row represents a trait's weight for that answer choice
  const weights = {
    0: { Listener: 3, Influencer: 0, Empathetic: 1, 'Information Sharer': 0 }, // Listener-focused choice
    1: { Listener: 0, Influencer: 3, Empathetic: 0, 'Information Sharer': 1 }, // Influencer-focused choice
    2: { Listener: 1, Influencer: 0, Empathetic: 3, 'Information Sharer': 0 }, // Empathetic-focused choice
    3: { Listener: 0, Influencer: 1, Empathetic: 0, 'Information Sharer': 3 }  // Information Sharer-focused choice
  };

  answers.forEach((answerIndex) => {
    if (answerIndex >= 0 && answerIndex < 4) {
      const answerWeights = weights[answerIndex as keyof typeof weights];
      Object.entries(answerWeights).forEach(([trait, weight]) => {
        scores[trait as CommunicatorTrait] += weight;
      });
    }
  });

  return scores;
}