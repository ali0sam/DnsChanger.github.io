import Contributors from "../Contributors";
import Features from "../Features";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Screenshots from "../Screenshots";
import ShowCase from "../ShowCase";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ShowCase />
      <Features />
      <Screenshots />
      <Contributors />
      <Footer />
    </div>
  );
}
