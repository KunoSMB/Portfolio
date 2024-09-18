import { useEffect, useState } from 'react'
import './index.css'
import Pages from './components/pages/Pages'
import About from './components/pages/About'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  


  return (
      <>
        <Pages />
      </>
  )
}

export default App
