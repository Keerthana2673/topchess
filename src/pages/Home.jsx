import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../animations.min.css';
import { reviews } from '../data/review';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Users, Trophy, UserCheck, ThumbsUp } from 'lucide-react'; // Swap with your icon set if needed
import CountUp from 'react-countup'; //anna
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = () => {
    window.open('https://www.google.com/maps/place/Thirumal+Chess+Academy,+Tambaram+Corporation/@12.91707,80.07425,17z/data=!4m8!3m7!1s0x3a52f5899cb25019:0xb401e6efaa80188!8m2!3d12.9170735!4d80.076828!9m1!1b1!16s%2Fg%2F11b8_knpx4?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer');
  };

  const backgrounds = [
    "/images/hero/hero1.jpg",
    "/images/hero/hero2.jpg",
    "/images/hero/hero3.jpg"
  ];


  const stats = [
    {
      label: 'Member Satisfaction',
      value: 864,
      icon: <Users className="w-12 h-12 text-[#3a7d44] mb-4" />,
      bg: 'bg-zinc-900 text-white',
    },
    {
      label: 'Winner Trophy',
      value: 260,
      icon: <Trophy className="w-12 h-12 text-[#3a7d44] mb-4" />,
      bg: 'bg-white text-black',
    },
    {
      label: 'Professional Team',
      value: 60,
      icon: <UserCheck className="w-12 h-12 text-[#3a7d44] mb-4" />,
      bg: 'bg-zinc-900 text-white',
    },
    {
      label: 'Many Courses',
      value: 40,
      icon: <ThumbsUp className="w-12 h-12 text-[#3a7d44] mb-4" />,
      bg: 'bg-white text-black',
    },
  ]; //anna

  const heroContent = {
    title: "Elevate Your Chess Game",
    subtitle: "Join our Top-Rated masterclass programs with world-class instructors",
    cta: "Explore Courses"
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: true
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <>
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={bg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.8)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center max-w-[1200px]">
          <div data-aos="fadeInLeft" data-aos-delay="100">
            <h1
              className="text-5xl font-serif sm:text-6xl md:text-[72px] font-bold text-white mb-6 leading-tight"
            >
              {heroContent.title}
              <span className="block w-20 h-1 bg-[#3a7d44] mt-4" data-aos="fade-right" data-aos-delay="300"></span>
            </h1>
            <p className="text-xl text-white/80 mb-8 font-serif italic ">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/courses"
                className="bg-[#3a7d44] hover:bg-[#2e6336] text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-[#3a7d44]/50 hover:-translate-y-1 elementor-animation-grow"
              >
                {heroContent.cta}
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-200 hover:-translate-y-1 elementor-animation-bounce-in"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Card 1 - Black background */}
          <div
            className="bg-[#1e1e1e] text-white p-10 md:p-12 text-center transition-transform duration-300  hover:shadow-2xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative group">
              <i className="fas fa-award text-5xl text-[#3a7d44] mb-4 group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-2">Master Strategy</h3>
            <p className="text-gray-300">Learn proven techniques used by grandmasters to outmaneuver your opponent.</p>
          </div>

          {/* Card 2 - White background */}
          <div className="bg-white text-gray-900 p-10 md:p-12 text-center transition-transform duration-300  hover:shadow-2xl shadow-lg"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="relative group">
              <i className="fas fa-user-check text-5xl text-[#3a7d44] mb-4 group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-2">Expert Coaching</h3>
            <p className="text-gray-600">Train with top-rated instructors who've played at the highest levels.</p>
          </div>

          {/* Card 3 - Black background */}
          <div
            className="bg-[#1e1e1e] text-white p-10 md:p-12 text-center hover:-translate-y-2 transition-transform duration-300  hover:shadow-2xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative group">
              <i className="fas fa-users text-5xl text-[#3a7d44] mb-4 group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-2">Play. Learn. Grow.</h3>
            <p className="text-gray-300">Apply your skills in regular competitions and get real feedback.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6 md:flex md:items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <img
              src="/images/homeabout.jpg"
              alt="About Chess Club"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <span className="text-[#3a7d44] uppercase tracking-wide font-semibold text-sm mb-2 block">
              About Us
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Building Grandmasters One Move at a Time
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Thirumal Chess Academy, we cultivate critical thinking and competitive strategy through our professional chess training. From beginners to advanced players, our coaching programs are designed to transform enthusiasts into champions.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#3a7d44] hover:shadow-[#3a7d44]/50 hover:-translate-y-1 text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:bg-[#2e6336] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#3a7d44]/40 shadow-md hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-28 sm:py-36 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/aboutheader.jpg')" }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 opacity-90"></div>
        </div>

        {/* Stat Cards */}
        <div className="relative z-10 container mx-auto px-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 md:p-12"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => {
              const isDark = index % 2 === 0; // Alternate
              return (
                <div
                  key={index}
                  className={`
              p-8  shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-center
              ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
            `}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-center mb-6 text-4xl text-[#3a7d44] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className={`text-5xl font-extrabold flex justify-center items-center gap-1`}>
                    <CountUp end={stat.value} duration={3} />
                    <span className="text-[#3a7d44] text-3xl font-bold">+</span>
                  </h3>
                  <p className={`text-md font-medium mt-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Our Courses Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#a1860a] uppercase tracking-widest font-semibold text-sm mb-3 block" data-aos="fade-up">
            Our Signature Course
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
            Master Chess With Confidence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg" data-aos="fade-up" data-aos-delay="200">
            Unlock your full potential with our all-in-one chess program — perfect for aspiring players of all levels. Learn strategy, tactics, openings, and endgames with expert instruction and practical lessons.
          </p>

          <div className="flex justify-center">
            <div
              className="bg-[#1e1e1e] text-white shadow-xl p-0 overflow-hidden rounded-xl max-w-md w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative">
                <img
                  src="/images/course/homeintermediate.jpg"
                  alt="Chess Masterclass"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-serif font-semibold mb-3">Chess Masterclass</h3>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-semibold mr-2">4.9</span>
                  <div className="text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star mr-0.5"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  A complete journey from beginner fundamentals to advanced concepts — designed to elevate your play and sharpen your decision-making on the board.
                </p>
                <Link
                  to="/courses"
                  className="block bg-gold hover:bg-gold-dark text-white text-center py-3 rounded-lg font-medium transition transform hover:-translate-y-1"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text & Progress Bars */}
          <div data-aos="fade-right">
            <span className="text-[#a1860a] uppercase font-semibold text-sm mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Get The Best Coaching From Us
            </h2>
            <p className="text-gray-600 mb-8">
              Our programs are tailored to develop chess mastery at every level. Learn from expert coaches, win tournaments, and earn certifications.
            </p>

            {/* Progress Bars */}
            {[
              { label: "Expert Coaches", value: 98 },
              { label: "Best Courses", value: 95 },
              { label: "Top Awards", value: 90 },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gold h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div data-aos="fade-left">
            <img src="/images/chooseus.jpg" alt="Why Choose Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/testimonialsbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">

          {/* QUOTE ICON ABOVE TESTIMONIALS */}
          <div className="flex justify-center mb-6">
            <i className="fa-solid fa-quote-right text-yellow-400 text-6xl"></i>
          </div>

          <h3 className="text-yellow-500 text-xl mb-2 font-medium">Our Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">What Students And Parents Say</h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000 }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {reviews.map((review, index) => {
              const isExpanded = expandedIndex === index;
              const isLong = review.quote.length > 200;

              return (
                <SwiperSlide key={index}>
                  <div className="bg-black bg-opacity-80 rounded-xl p-6 text-white flex flex-col items-center justify-between h-[340px]">
                    <div className="flex-1 w-full">
                      <p className={`italic text-lg mb-4 text-left ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}>
                        {review.quote}
                      </p>
                      {isLong && (
                        <button
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
                          className="text-yellow-400 mt-2 hover:text-yellow-300 underline text-sm"
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-col items-center mt-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-16 h-16 rounded-full border-2 border-yellow-500 mb-2"
                      />
                      <div className="flex justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 mx-0.5 ${i < review.rating ? "text-yellow-400" : "text-gray-600"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.967z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-semibold text-sm mt-1">{review.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" bg-gradient-to-br flex flex-col items-center justify-center p-6">
            {/* The rating button */}
            <div className="relative group">
              {/* Snake border animation */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-transparent animate-snake-border"></div>
              </div>

              <button onClick={handleClick} className="relative z-10 border border-white/20 text-white bg-gray-900/60 px-8 py-4 rounded-xl text-2xl font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-purple-500/20">
                <span>How much will you rate us</span>

                <span className="stars flex gap-1 ml-4">
                  {/* Yellow stars with sequential animation */}
                  <span className="star text-yellow-400 animate-star-pulse animate-[glow_2s_infinite]">★</span>
                  <span className="star text-yellow-400 animate-star-pulse animation-delay-500 ">★</span>
                  <span className="star text-yellow-400 animate-star-pulse animation-delay-1000">★</span>
                  <span className="star text-yellow-400 animate-star-pulse animation-delay-1500">★</span>
                  <span className="star text-yellow-400 animate-star-pulse animation-delay-2000">★</span>

                  {/* Pink glowing star */}
                  <span className="star text-pink-500 animate-pink-star-glow animation-delay-2500">★</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="relative overflow-hidden">
        <div className='relative'>
        <div className="custom-shape-divider-bottom-1750249223">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
          </svg>
        </div>
        </div>
        <div
          className="relative py-32 px-6 text-white text-center bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('/images/cta-bg.jpg')`,
          }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
              Join Our Class This Year
              <br />
              And Get <span className="text-[#e6c44c]">50% Off</span>!
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
            <button className="bg-[#e6c44c] hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
              Join Now
            </button>
          </div>
        </div>
        <div className="custom-shape-divider-top-1750250055">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
          </svg>
        </div>
      </section>
        */}
    </>
  );
};

export default Home;