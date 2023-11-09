export interface Progress {
  comment:string,
  createdAt:Date,
  skills: Skill[]
    
}

export interface NewProgress {
  projectId:number,
  comment:string,
  skills: Skill[]
}

interface Skill {
  name: string
}