import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="http://github.com/SuayMack.png" />
          <div className={styles.authorInfo}>
            <strong>PiscilaCS</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="23 de novembro de 2023 às 10:03" dateTime="2023-11-23 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href='#'>👉 jane.design/doctorcare</a></p>

        <p className={styles.hashtags}>
          <a href='#'>#novoprojeto</a>
          <a href='#'>#nlw</a>
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <div>
          <button type="submit">Publicar</button>
        </div>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}