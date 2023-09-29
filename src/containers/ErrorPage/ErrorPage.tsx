import React from "react";

const Error: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h1 className="text-4xl text-gray-800 font-bold mb-4">
          404 - Not Found
        </h1>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default Error;
