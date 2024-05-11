import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

function TebakAngka() {
  const [input, setInput] = useState(0);
  const [mysteryNumber, setMysteryNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [attempt, setAttempt] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const inputRef = useRef(0);
  const info = attempt > 1 ? "attempts" : "attempt";

  useEffect(() => {
    inputRef.current.focus();
    setMysteryNumber(Math.round(Math.random() * 200));
  }, []);

  const handleSubmit = () => {
    if (input === mysteryNumber) {
      setAttempt(attempt + 1);
      setMessage(
        `Congratulations! You've guessed the number ${mysteryNumber} in ${attempt} ${info}`
      );
    } else {
      setAttempt(attempt + 1);

      if (input > mysteryNumber) {
        setMessage("Too High! Try Again");
      }
      if (input < mysteryNumber) {
        setMessage("Too Low! Try Again");
      }
    }

    inputRef.current.focus();
  };

  const handleReset = () => {
    setIsSpinning(true);

    setInput(0);
    setMysteryNumber(Math.round(Math.random() * 200));
    setAttempt(1);
    setMessage("");
    inputRef.current.value = "";
    inputRef.current.focus();

    setTimeout(() => {
      setIsSpinning(false);
    }, 500);
  };

  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="w-4/5 mx-auto p-5 flex flex-col gap-5 justify-center items-center">
        <div>
          <h1 className="text-xl font-medium">Tebak Angka</h1>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <label className="ms-6">Enter your guess (0 - 200) :</label>
          <div className="flex gap-2 justify-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              className="border border-black rounded-lg px-3"
              onChange={(e) => setInput(+e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <button
              className="bg-black text-yellow-400 p-3 rounded-lg text-sm"
              onClick={() => handleSubmit()}
            >
              Guess
            </button>
            <button
              onClick={handleReset}
              className="flex flex-col justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="red"
                className={isSpinning ? "animate-spin" : ""}
              >
                <path
                  d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"
                  stroke="red"
                  strokeWidth="1"
                ></path>
              </svg>
              <p className="text-xs">reset</p>
            </button>
          </div>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default TebakAngka;
