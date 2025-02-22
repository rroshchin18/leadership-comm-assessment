import type { CommunicatorTrait } from '../../types';
import { calculateTraitScores } from './calculateScores';

export function determineDominantTrait(answers: number[]): CommunicatorTrait {
  const scores = calculateTraitScores(answers);
  
  // Find the highest score
  let maxScore = -1;
  let dominantTrait: CommunicatorTrait = 'Listener'; // Default fallback
  let hasTie = false;

  Object.entries(scores).forEach(([trait, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantTrait = trait as CommunicatorTrait;
      hasTie = false;
    } else if (score === maxScore) {
      hasTie = true;
    }
  });

  // If there's a tie, use tiebreaker questions
  if (hasTie) {
    return resolveTraitTie(answers, scores);
  }

  return dominantTrait;
}

// Resolve ties using specific tiebreaker questions
function resolveTraitTie(answers: number[], scores: Record<CommunicatorTrait, number>): CommunicatorTrait {
  // Use questions 5, 8, and 10 as tiebreakers (key decision-making questions)
  const tiebreakQuestions = [4, 7, 9]; // 0-based indices
  const tiebreakScores = initializeTraitScores();

  tiebreakQuestions.forEach(questionIndex => {
    const answer = answers[questionIndex];
    if (answer !== null && answer >= 0 && answer < 4) {
      // Give extra weight to tiebreaker questions
      const trait = getTiebreakTrait(answer);
      tiebreakScores[trait] += 2;
    }
  });

  // Combine original scores with tiebreaker scores
  const finalScores = Object.entries(scores).reduce((acc, [trait, score]) => {
    acc[trait as CommunicatorTrait] = score + tiebreakScores[trait as CommunicatorTrait];
    return acc;
  }, initializeTraitScores());

  // Return the trait with the highest combined score
  return Object.entries(finalScores).reduce((highest, [trait, score]) => {
    return score > finalScores[highest] ? trait as CommunicatorTrait : highest;
  }, 'Listener' as CommunicatorTrait);
}

// Map answer indices to traits for tiebreaker questions
function getTiebreakTrait(answerIndex: number): CommunicatorTrait {
  const traitMap: Record<number, CommunicatorTrait> = {
    0: 'Listener',
    1: 'Influencer',
    2: 'Empathetic',
    3: 'Information Sharer'
  };
  return traitMap[answerIndex] || 'Listener';
}

function initializeTraitScores(): Record<CommunicatorTrait, number> {
  return {
    Listener: 0,
    Influencer: 0,
    Empathetic: 0,
    'Information Sharer': 0
  };
}