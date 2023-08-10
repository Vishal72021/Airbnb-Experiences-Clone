import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./data";

export default function App() {
  const cardGroup = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-group">{cardGroup}</div>
    </>
  );
}
