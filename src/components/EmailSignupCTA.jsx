import React from "react";

const EmailSignupCTA = () => {
  return (
    <div className="text-center py-16 bg-black text-white">

      {/* Subtitle — small normal weight, not a bold heading */}
      <p className="text-base text-white mb-6">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      {/* Input + Button row — centered, max-w-2xl */}
      <div className="flex justify-center mx-auto" style={{ maxWidth: "660px" }}>
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 px-4 text-white placeholder-gray-400 outline-none"
          style={{
            backgroundColor: "#141414",
            border: "1px solid #808080",
            height: "60px",
            fontSize: "1rem",
          }}
        />
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold flex items-center gap-2 whitespace-nowrap"
          style={{
            padding: "0 24px",
            height: "60px",
            fontSize: "1.2rem",
            borderRadius: "4px",
          }}
        >
          Get Started
          <span style={{ fontSize: "1.4rem", fontWeight: 300 }}>›</span>
        </button>
      </div>

    </div>
  );
};

export default EmailSignupCTA;