import React from 'react'
import Section from './Section'
import Footer from './Footer'
import Header from './Header'

const App = () => {

  const user = [ {
    name:'Poll',
    lastName:'rad ',
    age:'23',
    id:Date.now()
  },
  {
    name:'Tom ',
    lastName:'Holland',
    age:'24',
    id:Date.now()
  }, {
    name:'Tom',
    lastName:'Cruze',
    age:'25',
    id:Date.now()
  }]
 
  return (
    <div>
      <Header/>
    <Section user={user}/>
    <Footer/>
    </div>
  )
}

export default App