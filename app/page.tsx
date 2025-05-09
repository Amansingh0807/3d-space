import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section id="home"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </>
  );
}
