import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  
  const [feedback, setFeedback] = useState(FeedbackData)

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit:false,
  })

  // Add Feedback
   const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Confirm if you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = (id, updatedNewItem) => {
    setFeedback(
      feedback.map((item)=>(item.id === id ?{...item, ...updatedNewItem} : item))
    )
  }

  // Set Feedback item to Edit/Update
  const editFeedback = (item) => {
    setFeedbackEditState({
      item,
      edit: true,
    })
  }
  
  return <FeedbackContext.Provider value={{feedback,feedbackEditState, deleteFeedback, addFeedback, editFeedback,updateFeedback }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext