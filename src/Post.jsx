/* eslint-disable react/prop-types */


// props = propriedades = author, content
export function Post(props){

  return (
    <div>
     
      <strong>{props.author}</strong>
      <p>{props.content}</p>
      
    </div>
  )
}