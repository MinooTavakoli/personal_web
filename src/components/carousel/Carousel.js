import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Carousel.css";

// const Carousel = ({ images }) => {
//   const settings = {
//     infinite: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     lazyLoad: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
//   return (
//     <>
//       <div className="tag">
//         <h1>Image Gallery</h1>
//       </div>
//       <div className="imgslider">
//         <Slider {...settings}>
//           {images.map((item) => (
//             <div key={item.id}>
//               <img src={item.src} alt={item.alt} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// };
// export default Carousel;

export default function Carousel() {
  const [isRunning, setIsRunning] = useState(true);
  const [count, setCount] = useState(0);

  const callback = () => {
    let previousCount = 10;
    //Can read new state and props
    setCount(count + 1);
    //when count is already greater than our array size go back to the first index.
    if (previousCount > gallery.length - 2) setCount(0);
  };

  function useInterval(callback, delay) {
    //create my reference object
    const savedCallback = useRef();

    useEffect(() => {
      //after every render save the newest callback our reference object
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        //call the latest timer
        savedCallback.current();
      }

      /*Using delay instead of isRunning because useEffect won't trigger a re-render when a boolean changes
        Whereas delay here is a parameter which isn't a boolean, and changes depending on isRunning state. 
        */
      if (delay !== null) {
        let timer = setInterval(tick, delay);
        return () => clearInterval(timer);
      }
    }, [delay]);
  }

  useInterval(callback, isRunning ? 5000 : null);

  const gallery = ["https://picsum.photos/id/1018/1000/600/", "https://picsum.photos/id/1018/1000/600/", "https://picsum.photos/id/1018/1000/600/"];
  const currentImg = count;
  return (
    <div>
      <img src={currentImg} alt="slide" />
    </div>
  );
}
