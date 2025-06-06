import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import resumePDF from '../assets/ORTEGO_KENTALEXANDRE_RESUME.pdf';

const DownloadResume = () => {
  const handleDownload = () => {
    const isConfirmed = window.confirm("Are you sure you want to download the Resume? Don't worry, it doesn't contain harmful files. I'm just asking for your confirmation. Click 'OK' if it's fine.");
    if (isConfirmed) {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'ORTEGO_KENTALEXANDRE_RESUME.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Resume downloaded successfully! Check it in your downloads');
    }
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="relative flex items-center justify-between px-6 py-4 bg-transparent border-2 border-black rounded-full mt-5 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer hover:scale-110 ease-in w-full"
      >
        <div className="flex items-center z-10 group-hover:text-black transition duration-300">
          <FaDownload className="mr-2" />
          <span>Download Resume</span>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 rounded-full transition duration-300"></div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default DownloadResume;
