"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions: { question: string; answer: string }[] = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with project in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor is free to use for all developers.",
    },
    {
      question: "Can i use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, Frontend Mentor offers you to use the projects in your portfolio. You can also use it for your personal projects.",
    },
    {
      question: "How can i get help if i'm stuck on challenge?",
      answer:
        "You can ask questions in the Frontend Mentor community forum. You can also ask questions in the Frontend Mentor help center.",
    },
  ];

  return (
    <div>
      <Image
        src="/background.svg"
        alt="Logo"
        width={500}
        height={500}
        className="-z-50 absolute top-0 left-0"
      />
      <main className="bg-white w-[440px] h-auto rounded-xl ml-4 mt-50 p-5">
        <div className="ml-5 mr-5">
          <div className="flex items-center gap-5 mt-5 mb-10">
            <Image src="/star.svg" alt="Logo" width={30} height={30} />
            <h1 className="text-5xl font-bold text-pink-900">FAQs</h1>
          </div>
          <div>
            {questions.map((q, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center border-b-1 pb-2 w-[100%] m-[22px_0] cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <h2 className="text-[1.5rem] font-[600] text-pink-900 transition duration-300 ease hover:text-pink-800">
                    {q.question}
                  </h2>
                  <span
                    className={`bg-center bg-no-repeat min-w-[30px] min-h-[31px] ${
                      openIndex === index
                        ? "bg-[url(/imageMinus.svg)]"
                        : "bg-[url(/imagePlus.svg)]"
                    }`}
                  ></span>
                </div>
                <div className={`${openIndex === index ? "block" : "hidden"}`}>
                  <p className="text-gray-700">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
