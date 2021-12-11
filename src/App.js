// import { useState } from "react"

import{BrowserRouter as Router,Routes, Route}from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import AboutLinkIcon from "./shared/AboutLinkIcon"
import About from "./pages/About"

import { FeedbackProvider } from "./context/FeedbackContext"

import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

// import FeedbackData from "./data/FeedbackData"

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (

    <>
      <FeedbackProvider>
        <Router>
          <Header />
            <div className="container">
              <Routes>
                  <Route path='/' element={
                  <>
                    <FeedbackForm  />
                    <FeedbackStats  />
                    <FeedbackList  />
                  </>
                }> 
                </Route>
              
                <Route path='/about' element={<About/>} />
              </Routes>
              <AboutLinkIcon />
            </div>
          </Router>
        
      </FeedbackProvider>
    </>
  )
}

export default App
