"use client";

import classNames from "classnames";

import { useState } from "react";

export const Button = ({ props }) => {
  const buttonName = props.name;

  return (
    <button
      className={classNames(
        "px-8 py-4 mt-3 border text-black hover:text-blue hover:bg-white border-solid rounded"
      )}
    >
     
      {buttonName}
    </button>
  );
};
