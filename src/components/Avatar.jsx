import style from './Avatar.module.css'

export function Avatar(props) {
  return (   
    <img className={style.avatar} src={props.src} />   
  )
}