import React from 'react'
import webImage from '../images/photo-2.png'
function Home() {
  return (
    <div className="alert alert-info mt-5 container" role="alert">
      <img className='with-border-radius' src='/images/photo-1.jpg' width='150px' alt='my photo'/>
     <p> Hello my name is Iskander 
      I am a Fullstack web Developer</p>
      <img src={webImage} style={{width:'100%'}} alt="web" />
    </div>
  )
}

export default Home