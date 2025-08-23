import Image from "next/image";
import ProductHighlights from "./components/ProductHighlights";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </>
  );
}
