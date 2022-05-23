import React from 'react'
import Fetchdata from './components/Fetchdata'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Fetchdata/>


      <h6 className=' bg-purple-400 ' > Created by <a  className='font-bold' target="_blank" href="https://github.com/recebosman">Receb Osman</a>  </h6>
    </div>
  )
}

export default App