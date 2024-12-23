import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../assets/Home-pictuer.png'
const Banner = () => {
    return (
        <Swiper className="mySwiper">
            <SwiperSlide>
                <div className="flex items-center gap-4 bg-[url('./assets/Home-pictuer.png')] bg-cover h-[500px] bg-center"> 
                    <div className="p-20">
                        <p>Sustainable Handyman Solution</p>
                    </div>
                </div>
            </SwiperSlide>
            {/* 2 slider */}
            <SwiperSlide>
                <div className="flex items-center gap-4 bg-[url('./assets/home-slide-3-1920x600.jpg')] bg-cover h-[500px] bg-center">
                    
                    <p>this a another section</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center gap-4 bg-[url('./assets/home-slide-3-1920x600.jpg')] bg-cover h-[500px] bg-center">
                    {/* <img src={banner1} alt="" /> */}
                    <p>this a another section</p>
                </div>
            </SwiperSlide>
          
            

        </Swiper >
    );
};

export default Banner;

