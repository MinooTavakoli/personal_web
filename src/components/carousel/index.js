import React from "react";
import CarouselSlider from "./Carousel";
import cr1 from '../../assets/images/cr1.jpg'
import cr2 from '../../assets/images/cr2.jpg'
import cr3 from '../../assets/images/cr3.jpg'
import cr4 from '../../assets/images/cr4.jpg'
import cr5 from '../../assets/images/cr5.jpg'
import cr6 from '../../assets/images/cr6.jpg'
import cr7 from '../../assets/images/cr7.jpg'
import cr8 from '../../assets/images/cr8.jpg'
import cr9 from '../../assets/images/cr9.jpg'
import cr10 from '../../assets/images/cr10.jpg'


let data = [
  {
    des: "1",
    imgSrc: cr1,
  },
  {
    des: "2",
    imgSrc: cr2,
  },
  {
    des: "3",
    imgSrc: cr3,
  },
  {
    des: "4",
    imgSrc: cr4,
  },
  {
    des: "5",
    imgSrc: cr5,
  },
  {
    des: "6",
    imgSrc: cr6,
  },
  {
    des: "7",
    imgSrc: cr7,
  },
  {
    des: "8",
    imgSrc: cr8,
  },
  {
    des: "9",
    imgSrc: cr9,
  },
  {
    des: "10",
    imgSrc: cr10,
  },
];


let sliderBoxStyle = {
  height: "250px",
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};

function CarouselSliderIndex() {
  return (
    <CarouselSlider
      slideItems={data}
      manner={manner}
      buttonSetting={buttonSetting}
      sliderBoxStyle={sliderBoxStyle}
      itemsStyle={itemsStyle}
      textBoxStyle={textBoxStyle}
    />
  );
}

export default CarouselSliderIndex;
