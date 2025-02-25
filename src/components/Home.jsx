import React from 'react'

const Home = () => {
  return (
    <section id="home">
    <div className='content'>
    <h2>Hello..!</h2>
    <h1>I'm <b>SundaraPandi T</b></h1>
    <h3>(Computer Science Engineering Student)</h3>
    <button onClick={() => window.open('https://www.linkedin.com/in/sundarapandi-t-5a1772247', '_blank')}>Contact me</button>
    </div>
    <div className='image'>
     <img src="/mypicture.png" alt="mypic" />
    </div>
  </section>
  )
}

export default Home