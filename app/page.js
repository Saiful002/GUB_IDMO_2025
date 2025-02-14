
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Organizer from "./components/Organizer";
import Contact from "./components/Contact";
import PrizeCard from "./components/PrizeCard";
import ProblemSetter from "./components/ProblemSetter";

export default function Home() {
  return (
    <div className="text-white bg-gray-100">
      <HeroSection></HeroSection>
      <PrizeCard></PrizeCard>
      <Countdown></Countdown>
      <About></About>
      <Organizer></Organizer>
      <ProblemSetter></ProblemSetter>
      {/* <Sponsor></Sponsor> */}
      <Contact></Contact>

    </div>
  );
}
