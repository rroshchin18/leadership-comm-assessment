import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "When in a meeting, what's your typical approach?",
    options: [
      "I focus on asking clarifying questions and ensuring I understand others",
      "I drive the conversation and inspire others to take action",
      "I pay attention to others' emotions and respond thoughtfully",
      "I ensure all relevant information is shared clearly and concisely"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 1, "Information Sharer": 2 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 2,
    text: "How do you handle feedback sessions with colleagues?",
    options: [
      "I create a safe space for open dialogue and active listening",
      "I provide clear, actionable suggestions for improvement",
      "I ensure the conversation is supportive and constructive",
      "I focus on specific examples and detailed observations"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 1, Empathetic: 2, "Information Sharer": 4 }
    ]
  },
  {
    id: 3,
    text: "During team conflicts, what's your primary focus?",
    options: [
      "Understanding all perspectives before forming opinions",
      "Guiding the team toward a resolution",
      "Ensuring everyone feels heard and supported",
      "Documenting key points and action items"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 4,
    text: "How do you contribute to project planning sessions?",
    options: [
      "I gather input from all team members",
      "I help set clear goals and motivate the team",
      "I ensure everyone's concerns are addressed",
      "I maintain detailed documentation of decisions"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 1, "Information Sharer": 2 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 5,
    text: "When presenting information to the team, you typically:",
    options: [
      "Encourage questions and discussion throughout",
      "Focus on inspiring and motivating action",
      "Adapt your style based on team members' needs",
      "Ensure all details are clearly communicated"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 1, "Information Sharer": 2 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 6,
    text: "In virtual meetings, you prioritize:",
    options: [
      "Creating pauses for questions and clarification",
      "Maintaining energy and engagement",
      "Checking in on participant comfort and involvement",
      "Sharing comprehensive written summaries"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 1, Empathetic: 2, "Information Sharer": 4 }
    ]
  },
  {
    id: 7,
    text: "When onboarding new team members, you focus on:",
    options: [
      "Understanding their questions and concerns",
      "Inspiring them about their role and impact",
      "Making them feel welcome and supported",
      "Providing comprehensive documentation"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 8,
    text: "During brainstorming sessions, you typically:",
    options: [
      "Focus on understanding others' ideas fully",
      "Energize the group and encourage participation",
      "Ensure everyone feels comfortable contributing",
      "Document and organize all suggestions"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 9,
    text: "When dealing with project setbacks, you:",
    options: [
      "Gather team input before making decisions",
      "Rally the team to overcome challenges",
      "Support team members' emotional well-being",
      "Ensure lessons learned are documented"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  },
  {
    id: 10,
    text: "In cross-functional collaborations, you prioritize:",
    options: [
      "Understanding each team's perspective",
      "Driving alignment and momentum",
      "Building trust between teams",
      "Maintaining clear communication channels"
    ],
    traitWeights: [
      { Listener: 4, Influencer: 1, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 1, Influencer: 4, Empathetic: 2, "Information Sharer": 1 },
      { Listener: 2, Influencer: 1, Empathetic: 4, "Information Sharer": 1 },
      { Listener: 1, Influencer: 2, Empathetic: 1, "Information Sharer": 4 }
    ]
  }
];