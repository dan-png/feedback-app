import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Spinner from '../shared/Spinner'
import Feedbackitem from "./Feedbackitem"
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext)
  if (!loading && (!feedback || feedback.length === 0)) {
    return <p>
      No Feedback Yet
    </p>
  }

   return loading ? <Spinner/> :( 
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0 }}
          >
          <Feedbackitem
                  key={item.id}
                  item={item}
                   />
          </motion.div>
        ))}
      </AnimatePresence>
     
    </div>
  )
  

  //  return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => {
  //       return <Feedbackitem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete} />
  //     })}
  //   </div>
  // )
}



export default FeedbackList
