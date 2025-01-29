import TestimonalCard from "../Cards/TestimonalCard";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonalpic from '../../../assets/Images/testmonalpic.jpg'


function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section>
      <h1 className="section-title">Testimonals</h1>
      <Slider {...settings}>
        <TestimonalCard clientname="Tewdros" testimonal="I had the pleasure of working with kabe on several projects at aau, and I can confidently say they are one of the most talented frontend developers I have encountered. his expertise in React and modern JavaScript frameworks allowed us to build highly responsive and user-friendly applications that significantly improved our user engagement metrics" image={testimonalpic}/>
        <TestimonalCard clientname="Tewdros" testimonal="I had the pleasure of working with kabe on several projects at aau, and I can confidently say they are one of the most talented frontend developers I have encountered. his expertise in React and modern JavaScript frameworks allowed us to build highly responsive and user-friendly applications that significantly improved our user engagement metrics" image={testimonalpic}/>
        <TestimonalCard clientname="Tewdros" testimonal="I had the pleasure of working with kabe on several projects at aau, and I can confidently say they are one of the most talented frontend developers I have encountered. his expertise in React and modern JavaScript frameworks allowed us to build highly responsive and user-friendly applications that significantly improved our user engagement metrics" image={testimonalpic}/>
      </Slider>
    </section>
  );
}

export default Testimonials;