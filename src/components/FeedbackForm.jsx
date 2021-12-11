import { useState , useContext, useEffect} from "react"
import RatingSelection from "./RatingSelection"
import Card from "../shared/Card"
import Button from "../shared/Button"
import FeedbackContext from "../context/FeedbackContext"



function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const { addFeedback, feedbackEditState, updateFeedback } = useContext(FeedbackContext)
  
  useEffect(() => {
    if (feedbackEditState.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEditState.item.text)
      setRating(feedbackEditState.item.rating)
    }
  }, [feedbackEditState])

  const textChangeHandle = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== null && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    if (text.trim().length > 10) {
      const newfeedback = {
        text,
        rating
      }

      if (feedbackEditState.edit === true) {
        updateFeedback(feedbackEditState.item.id, newfeedback)
      } else {
        addFeedback(newfeedback)
      }

      
      setText('')
    }
    
    e.preventDefault()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate our service ? </h2>
        <RatingSelection select={(rating)=>setRating(rating) }/>
        <div className="input-group">
          <input
            onChange={textChangeHandle}
            type="text" value={text} placeholder='Write a review' />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{ message }</div>}
      </form>
    </Card>
   
  )
}

export default FeedbackForm
