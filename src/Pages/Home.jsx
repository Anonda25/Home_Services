
import PopulerService from "../Components/PopulerService";
import Banner from "../CommenPage/Banner";
import Card from "../Components/Card";
import RequestCard from "../Components/RequestCard";


const Home = () => {

    return (
        <div>
          <Banner></Banner>
          <PopulerService></PopulerService>
          <div>
            <Card></Card>
          </div>
          <div>
            <RequestCard></RequestCard>
          </div>
        </div>
    );
};

export default Home;