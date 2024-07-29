import Contact from "@/components/Contact/Contact";
import Details from "@/components/Details/Details";
import Details2 from "@/components/Details/Details2";
import Hero from "@/components/Hero/Hero";
import HomeComponent from "@/components/Home/Home.jsx";
import Slogan from "@/components/Slogan/Slogan";
import Stats from "@/components/Stats/Stats";
import Systeme from "@/components/Systeme/Systeme";
import Testimonials from "@/components/Testimonials/Testimonials";

export const metadata = {
  title: "Accueil | Intello",
};
export default function Home() {
  return (
    <HomeComponent>
      <Hero>
        <Slogan />
      </Hero>
      <Details2 />
      <Details />
      <Systeme />
      <Stats />
      <Testimonials />
      <Contact />
    </HomeComponent>
  );
}
