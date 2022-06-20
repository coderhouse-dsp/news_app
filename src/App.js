import './App.css'
import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
// import NewsItem from './Components/NewsItem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LoadingBar from 'react-top-loading-bar'



const App =()=> {
  const pageSize = 15;
  const[progress,setProgress] = useState(0)
  

    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
        color='#f11946'
        progress={state.progress}
      /> */}
          <Routes>
            <Route
              exact
              path='/'
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key='general'
                  country='in'
                  category='general'
                />
              }
            ></Route>
            <Route
              exact
              path='/business'
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key='business'
                  country='in'
                  category='business'
                />
              }
            ></Route>
            <Route
              exact
              path='/entertainment'
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key='entertainment'
                  country='in'
                  category='entertainment'
                />
              }
            ></Route>
            <Route
              exact
              path='/health'
              element={
                <News setProgress={setProgress}
                  key='health'
                  pageSize={pageSize}
                  country='in'
                  category='health'
                />
              }
            ></Route>
            technology
            <Route
              exact
              path='/science'
              element={
                <News setProgress={setProgress}
                  key='science'
                  pageSize={pageSize}
                  country='in'
                  category='science'
                />
              }
            ></Route>
            <Route
              exact
              path='/sports'
              element={
                <News setProgress={setProgress}
                  key='sports'
                  pageSize={pageSize}
                  country='in'
                  category='sports'
                />
              }
            ></Route>
            <Route
              exact
              path='/technology'
              element={
                <News setProgress={setProgress}
                  pageSize={pageSize}
                  key='technology'
                  country='in'
                  category='technology'
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
export default App
