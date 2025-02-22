import type { TraitDescription } from '../types';

export const traitDescriptions: Record<string, TraitDescription> = {
  Listener: {
    trait: 'Listener',
    description: 'You excel at active listening and creating an environment where others feel heard and understood.',
    indicators: [
      'Asks clarifying questions',
      'Avoids interruptions',
      'Demonstrates full attention',
      'Provides thoughtful responses'
    ],
    strengths: [
      'Strong active listening skills',
      'Ability to gather detailed information',
      'Creating comfortable communication environments',
      'Building trust through attention'
    ],
    improvements: [
      'Practice summarizing key points',
      'Balance listening with contributing',
      'Share your own perspectives more often',
      'Document important conversations'
    ]
  },
  Influencer: {
    trait: 'Influencer',
    description: 'You have a natural ability to inspire action through clear and compelling communication.',
    indicators: [
      'Inspires action through clear messaging',
      'Presents ideas persuasively',
      'Drives engagement',
      'Builds consensus'
    ],
    strengths: [
      'Persuasive communication',
      'Clear message delivery',
      'Inspiring others to action',
      'Building momentum for initiatives'
    ],
    improvements: [
      'Listen more to opposing viewpoints',
      'Develop more inclusive approaches',
      'Balance assertiveness with empathy',
      'Gather more feedback before acting'
    ]
  },
  Empathetic: {
    trait: 'Empathetic',
    description: 'You excel at understanding team needs and responding with thoughtfulness and consideration.',
    indicators: [
      'Understands team needs',
      'Responds thoughtfully',
      'Shows genuine concern',
      'Supports others effectively'
    ],
    strengths: [
      'Strong emotional intelligence',
      'Building strong relationships',
      'Creating psychological safety',
      'Supporting team well-being'
    ],
    improvements: [
      'Balance empathy with decisiveness',
      'Set clearer boundaries',
      'Communicate difficult messages more directly',
      'Document emotional insights'
    ]
  },
  'Information Sharer': {
    trait: 'Information Sharer',
    description: 'You excel at communicating updates transparently and concisely, ensuring everyone stays informed.',
    indicators: [
      'Communicates updates transparently',
      'Shares information concisely',
      'Maintains clear documentation',
      'Ensures consistent communication'
    ],
    strengths: [
      'Clear information delivery',
      'Maintaining transparency',
      'Organizing complex information',
      'Consistent communication'
    ],
    improvements: [
      'Add more context to updates',
      'Gather feedback on communication effectiveness',
      'Personalize information delivery',
      'Build more two-way communication'
    ]
  }
};