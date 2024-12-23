import { useState } from "react";
import PopulerService from "../Components/PopulerService";
import Banner from "../CommenPage/Banner";


const Home = () => {

    return (
        <div>
          <p> this is a home page </p>
          <Banner></Banner>
          <PopulerService></PopulerService>
        </div>
    );
};

export default Home;