// "use client";
// import { Typewriter } from "react-simple-typewriter";

// function TypewriterText({ words }: { words: string[] }) {
//   return (
//     <Typewriter
//       words={words}
//       loop
//       cursor
//       cursorStyle="|"
//       typeSpeed={70}
//       deleteSpeed={50}
//       delaySpeed={1000}
//     />
//   );
// }

// export default TypewriterText;

"use client";
import { Typewriter } from "react-simple-typewriter";

function TypewriterText({ words }: { words: string[] }) {
  // Find the longest word to reserve space
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span
      className="inline-block  text-center sm:text-left"
      style={{
        minWidth: `${longestWord.length * 0.6}em`, // Reserve space based on longest word
      }}
    >
      <Typewriter
        words={words}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}

export default TypewriterText;
