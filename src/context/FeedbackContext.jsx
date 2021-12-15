import { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import FeedbackData from '../data/FeedbackData'



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  
  const [feedback, setFeedback] = useState([])

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit:false,
  })

  useEffect(() => {
    feedbackFetch() 
  }, [])

  // Fetch FeedBack

  const feedbackFetch = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setLoading(false)
  }

  // Add Feedback
  const addFeedback = async(newFeedback) => {
    const response = await fetch('/feedback', { method: 'POST',
      headers: {
        'Content-Type':'application/json'
      }, body: JSON.stringify(newFeedback)}
     
  )

    const data = await response.json()

    // newFeedback.id = uuidv4()
    setFeedback([data, ...feedback])
  }

  // Delete Feedback
  const deleteFeedback = async(id) => {
    if (window.confirm('Confirm if you want to delete')) {
        await fetch(`/feedback/${id}`, {method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updatedNewItem) => {
    
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedNewItem)
    })

    const data = await response.json()


    setFeedback(
      feedback.map((item)=>(item.id === id ?{...item, ...data} : item))
    )
  }

  // Set Feedback item to Edit/Update
  const editFeedback = (item) => {
    setFeedbackEditState({
      item,
      edit: true,
    })
  }
  
  return <FeedbackContext.Provider value={{feedback,feedbackEditState, loading, deleteFeedback, addFeedback, editFeedback,updateFeedback }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext