import { useParams } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const { param } = useParams()

  return (
    <div className='contact'>
      <h1>CONTACT TO: {param}</h1>
    </div>
  )
}

export default Contact
