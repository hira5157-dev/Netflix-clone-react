


import React, { useState } from "react";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1100 a month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-12 px-34">

      {/* Heading */}
      <h2 className="text-white font-bold mb-4" style={{ fontSize: "1.6rem" }}>
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="flex flex-col" style={{ gap: "8px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{ backgroundColor: "#2d2d2d" }}
          >
            {/* Question row */}
            <button
              onClick={() => toggleFaq(index)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
              className="hover:bg-[#414141] transition-colors duration-150"
            >
              <span className="text-white" style={{ fontSize: "1.8rem", fontWeight: 400 }}>
                {faq.question}
              </span>

              {/* + / × icon */}
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: 300,
                  lineHeight: 1,
                  flexShrink: 0,
                  marginLeft: "16px",
                  transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                }}
              >
                +
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div
                style={{
                  borderTop: "2px solid #555",
                  padding: "20px 24px",
                  backgroundColor: "#2d2d2d",
                }}
              >
                <span className="text-white" style={{ fontSize: "1.8rem", lineHeight: 1.6, fontWeight: 400 }}>
                  {faq.answer}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
