// Testimonials.jsx
import TestimonalCard from "../Cards/TestimonalCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonalpic from '../../../assets/Images/testmonalpic.jpg';

function Testimonials() {
  const testimonials = [
    {
      clientname: "Tewdros",
      testimonal:
        "I had the pleasure of working with Kabe on several projects at AAU, and I can confidently say he is one of the most talented frontend developers I have encountered. His expertise in React and modern JavaScript frameworks allowed us to build highly responsive and user-friendly applications that significantly improved our user engagement metrics.",
      image: testimonalpic,
    },
    {
      clientname: "Tewdros",
      testimonal:
        "I had the pleasure of working with Kabe on several projects at AAU, and I can confidently say he is one of the most talented frontend developers I have encountered. His expertise in React and modern JavaScript frameworks allowed us to build highly responsive and user-friendly applications that significantly improved our user engagement metrics.",
      image: testimonalpic,
    },
    {
      clientname: "Tewdros",
      testimonal:
        "I had the pleasure of working with Kabe on several projects at AAU, and I can confidently say he is one of the most talented frontend developers I have encountered. His expertise in React and modern JavaScript frameworks allowed us to build highly responsive and user-friendly applications that significantly improved our user engagement metrics.",
      image: testimonalpic,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    // Responsive settings
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
        
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-center">
            <span className="text-indigo-600 dark:text-indigo-400">        
             Testimonals
            </span>{' '}
          </h1>

          <div className="mt-4 h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real feedback from clients and collaborators I've worked with
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-2 md:px-4">
              <TestimonalCard
                clientname={item.clientname}
                testimonal={item.testimonal}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;