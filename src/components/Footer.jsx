import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-12" style={{ paddingLeft: "60px", paddingRight: "60px" }}>

      {/* Questions link */}
      <p className="mb-8 text-sm">
        <a href="#" className="underline hover:text-white transition-colors">
          Questions? Contact us.
        </a>
      </p>

      {/* 4-column link grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 mb-8 text-sm">
        <a href="#" className="hover:underline hover:text-white transition-colors">FAQ</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Help Center</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Account</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Media Center</a>

        <a href="#" className="hover:underline hover:text-white transition-colors">Investor Relations</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Jobs</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Ways to Watch</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Terms of Use</a>

        <a href="#" className="hover:underline hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Cookie Preferences</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Corporate Information</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Contact Us</a>

        <a href="#" className="hover:underline hover:text-white transition-colors">Speed Test</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Legal Notices</a>
        <a href="#" className="hover:underline hover:text-white transition-colors">Only on Netflix</a>
      </div>

      {/* Language selector button */}
      <button
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        style={{
          border: "1px solid #808080",
          padding: "6px 14px",
          borderRadius: "4px",
          fontSize: "0.85rem",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        English
        {/* Dropdown arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Netflix Pakistan */}
      <p className="text-sm mb-3">Netflix Pakistan</p>

      {/* reCAPTCHA notice */}
      <p className="text-xs" style={{ color: "#757575" }}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>

    </div>
  );
};

export default Footer;