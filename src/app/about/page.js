import Introduction from "@/components/About/Introduction";
import Hero from "@/components/Hero/Hero";
export const metadata = {
  title: "About",
};
export default function page() {
  return (
    <>
      <Hero>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="fs-2" style={{ color: "#ebe0c2" }}>
              <span className=""> À propos de notre établissement</span>
            </h2>
          </div>
        </div>
      </Hero>
      <Introduction />
    </>
  );
}
