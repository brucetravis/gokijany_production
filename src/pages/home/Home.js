import React from "react";
import Contacts from "./sections/contacts/Contacts";
import Features from "./sections/features/Features";
import Objectives from "./sections/objectives/Objectives";
import Hero from "./sections/hero/Hero";
import Why from "./sections/whyus/Why";
import Who from "./sections/who/Who";
import "./Home.css";

// HOME PAGE
export default function Home() {
  return (
    <main>
      {/* SECTIONS */}
      <Hero />
      <Who />
      <Features />
      <Objectives />
      <Why />
      <Contacts />
    </main>
  );
}
