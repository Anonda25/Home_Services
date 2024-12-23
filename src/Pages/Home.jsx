
import PopulerService from "../Components/PopulerService";
import Banner from "../CommenPage/Banner";
import Card from "../Components/Card";


const Home = () => {

    return (
        <div>
          <Banner></Banner>
          <PopulerService></PopulerService>
          <div>
            <Card></Card>
          </div>
        </div>
    );
};

export default Home;