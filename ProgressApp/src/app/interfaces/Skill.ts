export interface Skill {
  name: string;
}

export interface SkillExtended {
		id: number,
		name: string,
		Progresses: [ProgressExt]
		
}

export interface ProgressExt {
    id: number,
    projectId: number,
    comment: string,
    contributtorId: number,
    createdAt: Date
}
