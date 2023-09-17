import "./HomePage.css";
import hand from "../assets/images/hand.png";

const HomePage = () => {
  return (
    <>
      <div className="bg">
        <h1 className="txt display-1">Welcome to Premier Private Bank</h1>
        <h5 className="subtxt">
          At Premier Private Bank, we are committed to empowering individuals
          and businesses with financial solutions that drive growth and
          prosperity in our communities.
        </h5>
        <h1 className="feat">Featured Services :</h1>
        <h5 className="featcls">
          <img src={hand} alt="#" />
          Explore our range of products and services, designed to meet your
          unique financial needs.
        </h5>
        <h5 className="featcls">
          <img src={hand} alt="#" />
          Simplify your banking with our mobile app for convenient on-the-go
          access to your accounts.
        </h5>
        <h5 className="featcls">
          <img src={hand} alt="#" />
          Experience seamless and secure online transactions with our internet
          banking platform.
        </h5>
      </div>
    </>
  );
};

export default HomePage;
