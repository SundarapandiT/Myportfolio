import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'React.js Engineer', 'Node.js Developer', 'Python Developer', 'DevOps Enthusiast'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const techStack = ['React', 'Node.js', 'Express', 'Python', 'SQL', 'Docker', 'Linux'];

  return (
    <section id="home">
      <div className='content'>
        <h2 className="home-greeting">Hello..!</h2>
        <h1>I'm <b>SundaraPandi</b></h1>
        <h3 className="typed-role">
          <span>{displayed}</span><span className="cursor">|</span>
        </h3>
        <div className="tech-stack-chips">
          {techStack.map(tech => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>
        <button onClick={() => window.open('https://www.linkedin.com/in/sundarapandi-t-5a1772247', '_blank')}>
          Contact me
        </button>
      </div>
      <div className='image'>
        <img src="/mypicture.png" alt="mypic" />
      </div>
    </section>
  )
}

export default Home
