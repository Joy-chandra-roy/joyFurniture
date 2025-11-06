import React from "react";
import Button from "../../components/Button";

const WhyChoose = () => {
  return (
    <section className="section-container">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div>
          <h1 className="text-4xl font-bold">Why <br/>Choosing Us</h1>
        </div>
        <div>
            <h2 className="text-xl font-semibold">Luxury facilities</h2>
            <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            <Button text="Learn More"/>
        </div>
        <div>
            <h2 className="text-xl font-semibold" >Affordable Price</h2>
            <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
            <Button text="Learn More"/>
        </div>
        <div>
            <h2 className="text-xl font-semibold" >Many Choices</h2>
            <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
            <Button text="Learn More"/>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
