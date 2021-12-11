import { FaRegQuestionCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutLinkIcon() {
  return (
    <div className='about-link'>
      <Link to={{
        pathname: '/about',
        
      }}>
      <FaRegQuestionCircle size={30} />
      </Link>
    </div>
  )
}

export default AboutLinkIcon
