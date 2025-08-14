import React, { useState, useEffect } from 'react';

// Main App component for the text carousel.
export default function App() {
  // Array of text content to be displayed in the carousel.
  const texts = [
    {
      org: "SRGSSR",
      content: "Brilliant and innovative solutions provided by Ficufish. Their expertise and know-how to manage huge projects and delivery of complex and innovative solutions.",
      author: "Theo M.",
    },
    {
      org: "SWISS TXT",
      content: "Insightful UX research and fast prototyping with Ficufish. The skills of the team are exceptional.",
      author: "Rahel L.",
    },
    {
      org: "IMPACT HUB",
      content: "Ficufish is a true partner for our project. They provided us with a unique and innovative solution that exceeded our expectations. We are grateful for their expertise and professionalism.",
      author: "Tommaso T.",
    },
    {
      org: "Andicap Ticino",
      content: "The entire Ficufish team was a pleasure to work with. They were knowledgeable, professional, and always willing to go the extra mile to ensure our needs were met.",
      author: "Mirella S.",
    },
  ];

  // State to keep track of the current text block's index.
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Auto-play feature: moves to the next text block every 5 seconds.
  // The empty dependency array `[]` ensures this runs once when the component mounts.
  useEffect(() => {
    const intervalId = setInterval(() => {
      // The modulo operator (%) creates an infinite loop by wrapping the index around.
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change the number here to adjust the interval

    // Cleanup function to clear the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, [texts.length]);

  // Function to move to the next text block.
  const handleNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  // Function to move to the previous text block.
  const handlePrev = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">

        {/* Carousel Content */}
        <div className="text-center transition-opacity duration-1000 ease-in-out">

          <p className="text-xl md:text-xl dark:text-gray-300 font-serif leading-relaxed italic mb-4">
            "{texts[currentTextIndex].content}"
          </p>
          <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400">
            {texts[currentTextIndex].author}</p>
            <p className="text-md md:text-md text-gray-900 dark:text-gray-100 mb-2">
            {texts[currentTextIndex].org}
          </p>
        </div>
        
      </div>
    </div>
  );
}




