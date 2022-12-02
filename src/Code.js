import Students from './Students'
import './Style.css'

export default function Code() {
    let name = 'francis'
  return (
    <>
        <h1>This is my react app</h1>
        <p>welcome to my home by {name.toUpperCase()}</p>
        <Students />
        <Students />
        <Students />
        <Students />

    </>
  
  )
}


