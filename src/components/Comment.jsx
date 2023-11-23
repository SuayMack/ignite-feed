import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  <div className={styles.comment}>
    <img src="http://github.com/SuayMack.png" />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header></header>
        <div className={styles.authorAndTime}>
          <strong>PiscilaCS</strong>
          <time title="23 de novembro de 2023 às 10:03" dateTime="2023-11-23 08:13:00">Cerca de 1h atrás</time>
        </div>
        <button title="Deletar comentário">
          <Trash size={24} />
        </button>
      </div>
      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  </div>
}