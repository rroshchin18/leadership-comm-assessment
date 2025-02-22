import { determineDominantTrait } from './scoring/determineTraits';
import type { CommunicatorTrait } from '../types';

export function calculateDominantTrait(answers: number[]): CommunicatorTrait {
  return determineDominantTrait(answers);
}