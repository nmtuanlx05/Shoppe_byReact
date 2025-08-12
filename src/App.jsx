import Banner from "./components/Banner";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCategory from "./components/ProductCategory";
import ShoppeMall from "./components/ShoppeMall";
import TopSearch from "./components/TopSearch";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Banner />
      <ProductCategory />
      <FlashSale />
      <ShoppeMall />
      <TopSearch />
      <Footer/>
    </div>
  );
}

export default App;
