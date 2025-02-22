export const getResult = (score: number): Result => {
  if (score >= 18) {
    return {
      score,
      category: "Expert Communicator",
      description: "You demonstrate excellent workplace communication skills! You're adept at adapting your style, listening actively, and handling difficult conversations professionally.",
      strengths: [
        "Active listening skills",
        "Adaptable communication style",
        "Constructive feedback delivery",
        "Conflict resolution"
      ],
      improvements: [
        "Continue mentoring others in communication",
        "Share best practices with team members",
        "Seek opportunities to facilitate difficult conversations"
      ]
    };
  } else if (score >= 14) {
    return {
      score,
      category: "Proficient Communicator",
      description: "You have strong communication skills with some areas for growth. You generally communicate well but could enhance certain aspects.",
      strengths: [
        "Good listening abilities",
        "Basic conflict management",
        "Clear message delivery"
      ],
      improvements: [
        "Practice active listening more consistently",
        "Develop confidence in giving feedback",
        "Work on adapting communication styles"
      ]
    };
  } else {
    return {
      score,
      category: "Developing Communicator",
      description: "You have foundational communication skills with significant room for improvement. Focus on developing key areas to enhance your workplace effectiveness.",
      strengths: [
        "Basic communication abilities",
        "Willingness to improve",
        "Understanding of importance"
      ],
      improvements: [
        "Practice active listening techniques",
        "Learn conflict resolution strategies",
        "Develop feedback delivery skills",
        "Work on message clarity and structure"
      ]
    };
  }
};