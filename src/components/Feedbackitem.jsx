
import { useContext } from 'react'
import { FaTimes, FaRegEdit } from 'react-icons/fa'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'


function Feedbackitem({ item }) {
  
  const {deleteFeedback, editFeedback}= useContext(FeedbackContext)
  
  return (
    <Card>
      <div className="num-display">{item.rating}
      </div>

       <button className="close" onClick={()=> deleteFeedback(item.id)}>
        <FaTimes color='#FC997C'/>
      </button>
      <button className="edit" onClick={()=> editFeedback(item)}>
        <FaRegEdit color='#FC997C'/>
     </button>
      <div className="text-display">{item.text}
      </div>
      
    </Card>
  )
}

Feedbackitem.prototype = {
  item:PropTypes.object.isRequired,
}

export default Feedbackitem
