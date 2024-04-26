"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [counter, setCounter] = useState(0);

  let addOneItem = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      counter = 20;
    }
  };
  let removeOneItem = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      counter = 0;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>This app is made by useState</div>
      <div>
        <h1 className="text-4xl font-serif">Counter: {counter}</h1>
      </div>
      <div>
        <button
          className="border-spacing-2 bg-blue-500 mx-4"
          onClick={addOneItem}
        >
          Add Item
        </button>
        <button
          className="border-spacing-2 bg-red-400 mx-4"
          onClick={removeOneItem}
        >
          Remove item
        </button>
      </div>
      <div>
        <h2 className="text-2xl"> Footer value: {counter}</h2>
      </div>
    </main>
  );
}
