import knexfile from './knexfile'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexfile[environment]
const connection = knex(config)

interface CommentData {
  user_name: string
  comment: string
}

interface Comment extends CommentData {
  id: number
  photo_date: string
}
export function getCommentsByPhoto(
  dateOfPhoto: string,
  db = connection
): Promise<Comment[]> {
  return db('comments')
}

export function addCommentToPhoto(
  singleComment: CommentData,
  date: string,
  db = connection
): Promise<Comment> {}
