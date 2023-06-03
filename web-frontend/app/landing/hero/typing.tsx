"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type AnimatedTextWordProps = {
  texts: string[];
};

const TypeWriter: React.FunctionComponent<AnimatedTextWordProps> = ({
  texts,
}) => {
  const [words, setWords] = useState(texts);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex].split("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [currentWordIndex, words]);

  const letterVariants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 50, y: 50 },
  };

  return (
    <span>
      {currentWord.map((letter, index) => (
        <motion.span
          key={`${currentWord}-{letter}-${index}`}
          className="text-primary-vermilion"
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            delay: index * 0.07,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default TypeWriter;
