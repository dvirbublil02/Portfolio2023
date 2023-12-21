
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export const About =() =>{
  const [typedText, setTypedText] = useState('');
  const [text] = useState(`
    I am a dedicated software engineering student with about a year and a half left in my academic journey.
    As both a team player and an individual contributor, I thrive in collaborative environments.
    My passion for learning drives me to explore new technologies and broaden my skill set continuously.
    Motivated by challenges, I set ambitious targets and work diligently to achieve them.
    I am committed to not only academic excellence but also to personal and professional growth,
    always seeking opportunities to contribute meaningfully to the world of software development.
  `);

  useEffect(() => {
    let index = 0;
    const speed = 50;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        ...fadeIn,
        backgroundColor: '#66d9ff',
        color: '#000',
        height: '100vh',
        width: '90%', // Adjust the width as needed
        margin: '0 auto', // Center the container horizontally
        marginLeft: 'auto', // Make left margin auto (thin)
        marginRight: 'auto', // Make right margin auto (thin)
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '8px',
        
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>About Me</h1>
      <p style={{ textAlign: 'center', lineHeight: '1.6', overflow: 'hidden' }}>
        {typedText}
      </p>
    </animated.div>
    );
};