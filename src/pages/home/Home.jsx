import "./home.css"
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import Featured from "../../components/featured/Featured.jsx"
import CategoryList from "../../components/categoryList/CategoryList.jsx";
import ImageVideoCarousel from "../../components/carousel/ImageVideoCarousel"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div>
      <ImageVideoCarousel/>
    </div>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse By Category</h1>
        <CategoryList />
      </div>

    </div>
  ); 
};



export default Home