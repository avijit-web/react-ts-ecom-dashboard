import React, { useEffect, useState, type SubmitEventHandler } from "react";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

function Coupon() {
  const [size, setSize] = useState<number>(8);

  const [prefix, setPrefix] = useState<string>("");

  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);

  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);

  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText = async () => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const submitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!includeNumbers && !includeCharacters && !includeSymbols) {
      return alert("Please select one at least");
    }

    let result: string = prefix || "";

    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";

      if (includeCharacters) entireString += allLetters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;

      const randomNum: number = Math.floor(Math.random() * entireString.length);

      result += entireString[randomNum];
    }
    setCoupon(result);
    setIsCopied(false);
  };

  return (
    <main className="dashboard-app-container">
      <h1>Coupon</h1>
      <section>
        <form className="coupon-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Text to include"
            onChange={(e) => setPrefix(e.target.value)}
            value={prefix}
            maxLength={size}
          />

          <input
            type="number"
            placeholder="coupon length"
            value={size}
            min={8}
            max={25}
            onChange={(e) => setSize(Number(e.target.value))}
          />

          <fieldset>
            <legend>Include</legend>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
            />
            <span>Numbers</span>

            <input
              type="checkbox"
              checked={includeCharacters}
              onChange={() => setIncludeCharacters((prev) => !prev)}
            />
            <span>Characters</span>

            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
            />
            <span>Symbols</span>
          </fieldset>

          <button type="submit">Generate</button>
        </form>

        {coupon && (
          <code>
            {coupon}{" "}
            <span onClick={copyText}>{isCopied ? "copied" : "Copy"}</span>
          </code>
        )}
      </section>
    </main>
  );
}

export default Coupon;
