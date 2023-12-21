import React from 'react';
import { Container } from 'react-bootstrap';
import { useEffect, useState  } from 'react';

import '../assets/Style.css'; // Import your CSS file

const NameReveal = () => {
    const [text, setText] = useState('');
  const fullText = 'I`m a Software Engineer Student '; // Replace with your desired text
  const delay = 200; // Adjust the delay between letters
  const repeatDelay = 2000; // Adjust the delay between repetitions

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const animateText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);

        setTimeout(() => {
          setText('');
          currentIndex = 0;
          intervalId = setInterval(animateText, delay);
        }, repeatDelay);
      }
    };

    // Start the initial animation
    intervalId = setInterval(animateText, delay);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [fullText, delay, repeatDelay]);

  return (
    <Container className="text-container">
      <h2 className="animated-text " style={{ color: 'white' }}>{text}</h2>
    </Container>
    );
  };
  
  export default NameReveal;
