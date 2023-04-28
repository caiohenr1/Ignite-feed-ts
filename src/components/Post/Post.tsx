import { format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar/Avatar'
import { CommentForm } from '../Form/CommentForm'
import styles from './Post.module.css'

interface Author {
  avatarUrl: string,
  name: string,
  role: string,
}

interface Content {
  type: 'paragraph' | 'link',
  content: string,

}

interface PostProps {
  author: Author,
  content: Content[],
  publishedAt: Date,
}

export const Post = ( { author, content, publishedAt }: PostProps) => {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  } )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if(item.type === 'paragraph'){
            return <p key={item.content}>{item.content}</p>
          }else if (item.type === 'link') {
            return <p key={item.content}><a href='#'>{item.content}</a></p>
          }
        })}
        <p>
          <a href="">#novasideias</a>
          <a href=""> #gss</a>
          <a href="">    #petshop</a>
        </p>
      </div>
      <CommentForm />
    </article>
  )
}