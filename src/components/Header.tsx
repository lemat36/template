"use client";

import Image from "next/image";
import React from "react";

import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function () {
  const [show, close] = useState(false);

  const onClick = () => {
    close(!show);
  };
  return (
    <div>
      <header className="justify-between w-full  h-5 bg-white flex px-32  py-4">
        <div>
          <Image
            src="/images/434x0w (1).webp"
            alt="img"
            width={50}
            height={100}
            className="w-[10vh] h-[10vh]"
          />
        </div>
        <div>
          <button onClick={onClick}>
            <CiMenuFries className="text-3xl font-bold mt-4 " />
          </button>
          <div
            className={`flex flex-col border border-black space-y-10 p-4 ${
              show ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col">
              <li>services</li>
              <li>Portifolio</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </header>
      <div
        style={{
          backgroundImage: `url('/images/hexgn_cover.jpg')`,
        }}
        className="w-full h-[90vh] bg-cover justify-center flex flex-col text-center "
      >
        <h1 className="font-bold text-2xl text-lem">Hello there!</h1>
        <p className="font-semibold">
          we are leon, Lorem ipsum dolor sit amet <br />
          Agency Web Template
        </p>
      </div>
    </div>
  );
}
