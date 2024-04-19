import React from "react";

const InProgress = () => {
  return (
    <>
      <div class="flex flex-col justify-center items-center h-96">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Available
        </h1>

        <p class="mt-4 text-gray-500">
          This page will be available in the next update.
        </p>

        <a
          href="/"
          class="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </>
  );
};

export default InProgress;
