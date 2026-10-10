import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import CurvedDivider from "../components/CurvedDivider";
import TrendingNow from "../components/TrendingNow";
import ReasonsToJoin from "../components/ReasonsToJoin";
import FAQ from "../components/FAQ";
import EmailSignupCTA from "../components/EmailSignupCTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroBanner />
      <CurvedDivider />
      <TrendingNow />
      <ReasonsToJoin />
      <FAQ />
      <EmailSignupCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;