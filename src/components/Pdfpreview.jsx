import React, { useState } from 'react';

const PdfPreview = ({ pdfLink, imageLink }) => {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="relative">
      {/* Button with PDF preview */}
      <button
        onClick={togglePreview}
        className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-gray-300 overflow-hidden focus:outline-none"
      >
        <img
          src={imageLink}
          alt="PDF Preview"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Preview iframe */}
      {showPreview && (
        <div className="absolute top-0 left-0 w-full h-full bg-white z-10 flex justify-center items-center">
          <div className="bg-gray-200 p-4 rounded-lg">
            <button onClick={togglePreview} className="text-red-500 text-lg font-bold absolute top-2 right-2">
              Close
            </button>
            <iframe
              src={pdfLink}
              title="PDF Preview"
              className="w-80 md:w-96 h-64 md:h-96"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfPreview;
