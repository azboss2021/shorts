"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordion = () => {
  const [currentQuestion, setCurrentQuestion] = useState<null | number>(null);

  const handleSetQuestion = (index: number) => {
    if (index === currentQuestion) {
      setCurrentQuestion(null);
    } else {
      setCurrentQuestion(index);
    }
  };

  const questions: {
    question: string;
    answer: string;
  }[] = [
    {
      question:
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
      answer:
        "A woodchuck would chuck as much wood as a woodchuck could chuck if a woodchuck could chuck wood.",
    },
    {
      question: "She sells seashells by the seashore.",
      answer:
        "The seashells she sells are surely seashells, so if she sells shells on the seashore, I'm sure she sells seashore shells.",
    },
    {
      question: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.",
      answer: "Fuzzy Wuzzy wasn't very fuzzy, was he?",
    },
    {
      question: "Peter Piper picked a peck of pickled peppers.",
      answer:
        "If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?",
    },
    {
      question: "I scream, you scream, we all scream for ice cream!",
      answer: "Because ice cream is delicious and everyone loves a treat!",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {questions.map((question, index) => (
        <div key={index} className="rounded-xl bg-purple-500/20">
          <button
            onClick={() => handleSetQuestion(index)}
            className="flex w-full cursor-pointer items-start justify-between gap-4 px-4 py-4 text-left text-xl font-bold"
          >
            {question.question}
            <FaAngleDown
              className={`mt-1.5 transition-transform duration-300 ${currentQuestion === index ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`grid overflow-hidden px-4 text-white/80 transition-all duration-300 ${currentQuestion === index ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">{question.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
