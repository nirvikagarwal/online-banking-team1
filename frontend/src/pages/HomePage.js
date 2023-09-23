import "./HomePage.css";
import "bootstrap";
import "../assets/images/online-banking-image.png";

const HomePage = () => {
  return (
    <>
      <div className="bg">
        <br></br>
        <br></br>
        <br></br>
        <h3
          style={{
            marginLeft: "80px",
            textAlign: "left",
            width: "600px",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: "bold",
            fontStretch: "expanded",
            color: "purple",
            fontSize: "32px",
          }}
        >
          At CashSwift, we are committed to empowering individuals and
          businesses with financial solutions that drive growth and prosperity
          in our communities.
        </h3>
        <br></br>
        <ul
          style={{
            marginLeft: "70px",
            textAlign: "left",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: "bold",
            fontStretch: "expanded",
            color: "purple",
            width: "600px",
          }}
        >
          <li className="list-class">
            Explore our range of products and services, designed to meet your
            unique financial needs.
          </li>
          <li className="list-class">
            Simplify your banking with our mobile app for convenient on-the-go
            access to your accounts.
          </li>
          <li className="list-class">
            Experience seamless and secure online transactions with our internet
            banking platform.
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
