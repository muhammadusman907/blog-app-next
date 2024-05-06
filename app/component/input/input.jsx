"use client";
import React from "react";

const Input = ({ classAdd, ...prop }) => {
  return (
    <>
      <input
        type="text"
        // id="confirm_password"
        className={`bg-gray-50 border border-gray-300  text-sm 
        rounded-lg focus:ring-blue-500 focus:border-red-500 
        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${classAdd}`}
        require
        {...prop}
      />
    </>
  );
};

export default Input;
