import React from 'react'
import Header from './Components/Header'
import PartOne from './Components/PartOne'
import PartTwo from './Components/PartTwo'
import PartThree from './Components/PartThree'
import PartFour from './Components/PartFour'
import PartFive from './Components/PartFive'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <main>
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartFive />
    </main>
    <Footer />
    </>
  )
}

export default App
