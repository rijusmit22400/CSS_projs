import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/carasoul/Hero";
import Footer from "../../components/footer/Footer";

import "./Home.css";
import Category from "../../components/category/Category";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    let name = params.get('username');
    let key = params.get('key');
    let stored_name = localStorage.getItem("user");
    let stored_key = localStorage.getItem("key"); 
    useEffect(() => {
      if(name === null || name !== stored_name){
        name = "guest";
    }
    
    if(key === null || key !== stored_key){
      key = "no-key";

    }
    if (localStorage.getItem("token") === null) {
        navigate("/home?username=guest&key=no-key");
    }
    }, []);
    
  return (
    <div>
      <Navbar></Navbar>
      <div className ="categories-heading">
        <p>Top Products</p>
      </div>
      <Hero></Hero>
      <div className="categories-heading">
        <p>Browse Other Categories</p>
      </div>
      <div id="categories-container">
        <Category link={`/product/1?username=${name}&key=${key}`} image="https://photos5.appleinsider.com/gallery/59195-120810-Apple-Robot-AI-xl.jpg" text="Robots"></Category>
        <Category link={`/product/6?username=${name}&key=${key}`} image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Camera"></Category>
        <Category link={`/product/4?username=${name}&key=${key}`} image="https://cdn.thewirecutter.com/wp-content/media/2023/09/smartphone-2048px-0778-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" text="Mobiles"></Category>
        <Category link={`/product/2?username=${name}&key=${key}`} image="https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/652039bbf7bd832237a890e3_podcast-microphone.jpeg" text="Microphones"></Category>
        <Category link={`/product/9?username=${name}&key=${key}`} image="https://imgeng.jagran.com/images/2023/aug/Smart%20TV%20Buying%20Guide%202023%20How%20To%20Pick%20The%20Best%20TV%20In%20India1692186762568.jpg" text="TV"></Category>
        <Category link={`/product/8?username=${name}&key=${key}`} image="https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/11/24212247/Air-Conditioner-Buying-Guide.jpg" text="AC"></Category>
        <Category link={`/product/8?username=${name}&key=${key}`} image="https://media.product.which.co.uk/prod/images/original/22a475e555d7-best-laptop-deals.jpg" text="Laptops"></Category>
        <Category link={`/product/5?username=${name}&key=${key}`} image="https://images.crutchfieldonline.com/ImageBank/v20210226083100/core/learn/article/4236/Wall-of-speakers-1200x800.jpg" text="Speakers"></Category>
        <Category link={`/product/10?username=${name}&key=${key}`} image="https://media.bazaarvoice.com/Shutterstock_1875797686.png" text="Accessories"></Category>
        <Category link={`/product/7?username=${name}&key=${key}`} image="https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB-1200-80.jpg" text="Headphones"></Category>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;