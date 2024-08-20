import Hero from "@/components/Hero/Hero";
import Primaire from "@/components/Primaire/Primaire";
export const metadata = {
  title: "école-priamire",
};
export default function page() {
  return (
    <>
      <Hero>
        <div className="text-center">
          <h2 className="text-secondary">Primaire-préscolaire</h2>
          <h2 className="text-danger">Système éducatif français</h2>
        </div>
      </Hero>
      <Primaire />
    </>
  );
}
