import HeroSlider from "../components/HeroSlider";
import IntroSection from "../components/IntroSection";
import PortfolioGrid from "../components/PortfolioGrid";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <IntroSection/>
      <ProjectsSection/>
      <PortfolioGrid/>
    </div>
  );
}
