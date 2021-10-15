import IMG from "../misc/images/img1.jpg";
import { Button } from "./widgets";

const Hero = () => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow justify-sb align-center">
        <div>
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Random Name
          </p>
          <h1 className="textColor ls-1 mtb-10">Welcome to my portfolio</h1>
          <p className="font-12 grey mtb-10">Another text if necessary</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="testing" />
            </div>
            <div className="mlr-10">
              <Button label="another button" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <div className="rightImgContainer">
            <img src={IMG} alt="hutao" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
