import React from 'react';
import resumePDF from '../assets/cv.pdf';

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Kent_Ortego_Resume.pdf'; // Set the desired filename for the downloaded PDF
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-[#242424] hover:bg-[#001b5e] text-white font-bold py-2 px-4 rounded mt-5"
    >
      Download Resume
    </button>
  );
};

export default DownloadResume;