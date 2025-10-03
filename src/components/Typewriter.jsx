// src/components/Typewriter.jsx
import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ words, speed = 100 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textRef = useRef(''); // to keep latest text without triggering re-renders

  useEffect(() => {
    let typingInterval;

    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      let updatedText = textRef.current;

      if (isDeleting) {
        updatedText = currentWord.substring(0, updatedText.length - 1);
      } else {
        updatedText = currentWord.substring(0, updatedText.length + 1);
      }

      textRef.current = updatedText; 
      setText(updatedText);

      let currentSpeed = isDeleting ? speed * 1.2: speed;

      if (!isDeleting && updatedText === currentWord) {
        currentSpeed = 1500; // pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        currentSpeed = 500; // short pause before typing next word
      }

      clearInterval(typingInterval);
      typingInterval = setInterval(handleTyping, currentSpeed);
    };

    typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [wordIndex, isDeleting, words, speed]);

  return (
    <span className="border-r-4 border-yellow-400 pr-1">
      {text}
    </span>
  );
};

export default Typewriter;
