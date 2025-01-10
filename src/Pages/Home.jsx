
import PopulerService from "../Components/PopulerService";
import Banner from "../CommenPage/Banner";
import Card from "../Components/Card";
import RequestCard from "../Components/RequestCard";
import RemovalServices from "./RemovalServices";


const Home = () => {

    return (
        <div>
          <Banner></Banner>
          <PopulerService></PopulerService>
          <div>
            <Card></Card>
          </div>
          <div >
            <RemovalServices></RemovalServices>
          </div>
          <div>
            <RequestCard></RequestCard>
          </div>
        </div>
    );
};

export default Home;