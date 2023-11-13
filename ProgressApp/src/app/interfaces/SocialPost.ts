export interface SocialPost {
  _id: string,
  content: string,
  progress: string,
  authorId: number,
  publishedAt: Date,
  comments: [ Comment ]
  }

export interface Comment {
  content: string,
  authorId: number,
  _id: string,
  createdAt: Date
}