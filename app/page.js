import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/banners/Banners";
import ProductSlider from "./components/sliders/ProductSlider";
import CashbackBanner from "./components/banners/CashbackBanner";
import CashBackSlider from "./components/sliders/CashBackSlider";
import HighProduct from "./components/sliders/HighProduct";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className=" bg-[#F9F9F9]">
      <Navbar />
      <Sidebar />
      <ProductSlider />
      <CashbackBanner
        img="/banner - chashback ad.png"
        width={1300}
        height={200}
      />
      <HighProduct delivary={true} index={6} />
      <CashBackSlider />
      <HighProduct delivary={false} index={8} />
      <CashbackBanner img="/gift card.png" width={1300} height={435} />{" "}
      <HighProduct delivary={false} index={10} />
      <CashbackBanner img="/countdown add.png" width={1300} height={465} />{" "}
      <HighProduct delivary={false} index={6} />
      <HighProduct delivary={false} index={10} />
      <Footer />
    </main>
  );
}
