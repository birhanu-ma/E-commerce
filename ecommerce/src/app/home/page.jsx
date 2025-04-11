import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import NewLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function FeatureProduct() {
  return (
    <div className="flex flex-col items-center my-15">
      <h2 className="text-[clamp(1rem,5vw,3rem)]">Featured products</h2>
      <p className="text-[clamp(1rem,2vw,1.5rem)]">
        Summer collection new design
      </p>
    </div>
  );
}
function NewProduct() {
  return (
    <div className="flex flex-col items-center my-15">
      <h2 className="text-[clamp(1rem,5vw,3rem)]">New Arrivals</h2>
      <p className="text-[clamp(1rem,2vw,1.5rem)]">
        Summer collection new design
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Feature />
      <FeatureProduct/>
      <Product />
      <Banner />
      <NewProduct/>
      <NewArrival />
      <NewLetter />
      <Footer />
    </>
  );
}
