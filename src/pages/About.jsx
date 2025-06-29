import ParallaxHeader from '../components/Parallaxheader';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { Target, CheckCheck } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const coaches = [
    {
      name: 'John Doe',
      role: 'Senior Coach',
      image: '/images/coach1.jpg',
      bio: 'John has over 15 years of experience coaching elite athletes and guiding them to success at national competitions.',
    },
    {
      name: 'Jane Smith',
      role: 'IM Coach',
      image: '/images/coach2.jpg',
      bio: 'Jane specializes in individual medley training and has helped swimmers achieve personal bests for over a decade.',
    },
    {
      name: 'Alex Roy',
      role: 'Beginner Trainer',
      image: '/images/coach3.jpg',
      bio: 'Alex works with beginners to build strong foundational skills in a fun, supportive environment.',
    },
    {
      name: 'John Doe',
      role: 'Senior Coach',
      image: '/images/coach1.jpg',
      bio: 'John has over 15 years of experience coaching elite athletes and guiding them to success at national competitions.',
    },
    {
      name: 'Jane Smith',
      role: 'IM Coach',
      image: '/images/coach2.jpg',
      bio: 'Jane specializes in individual medley training and has helped swimmers achieve personal bests for over a decade.',
    },
    {
      name: 'Alex Roy',
      role: 'Beginner Trainer',
      image: '/images/coach3.jpg',
      bio: 'Alex works with beginners to build strong foundational skills in a fun, supportive environment.',
    },
  ];

  return (
    <>
      {/* Hero Parallax */}
      <ParallaxHeader
        title="About Our Chess Club"
        breadcrumbs={[{ title: 'About Us', path: '/about' }]}
        backgroundImage="/images/aboutheader.jpg"
      />

      {/* Intro Section */}
      <section className="w-full bg-white py-16 px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/images/about/aboutintro.jpg"
              alt="About Chess"
              className="rounded-xl shadow-xl w-full object-cover max-h-[500px] lg:max-h-[600px]"
            />
          </div>

          {/* Right Text */}
          <div data-aos="fade-left" className="flex flex-col justify-center h-full">
            <p className="text-yellow-600 text-sm uppercase font-medium mb-2">About Us</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 leading-tight">
              We Are Best <br /> Chess Club <br /> Since 2010
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              We are a team of professional chess players dedicated to promoting chess learning at all levels.
              Our structured curriculum and coaching help you master the game, whether you’re a beginner or an advanced player.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800">
                  <CountUp end={15} duration={4} />
                  <span className="text-yellow-600">+</span>
                </h3>
                <p className="text-gray-600">Years Experienced</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">
                  <CountUp end={800} duration={6} />
                  <span className="text-yellow-600">+</span>
                </h3>
                <p className="text-gray-600">Outstanding Members</p>
              </div>
            </div>
            {/*
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition">
              About Us
            </button>
            */}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 shadow-2xl">
          {/* Our Vision */}
          <div className="bg-black text-white p-10 flex flex-col items-center justify-center text-center">
            <Target className="w-12 h-12 text-yellow-500 mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-serif font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              To inspire strategic thinking and lifelong learning through chess, empowering students with confidence, patience, and decision-making skills.
            </p>
          </div>

          {/* Middle Image */}
          <div className="h-full w-full">
            <img
              src="/images/about/aboutmid.jpg" // Replace with your image path
              alt="Chess"
              className="h-full w-full object-cover rounded-none shadow-xl"
            />
          </div>

          {/* Our Mission */}
          <div className="bg-white text-gray-800 p-10 flex flex-col items-center justify-center text-center transition-transform duration-300 border">
            <CheckCheck className="w-12 h-12 text-yellow-500 mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-serif font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To build a global community of chess enthusiasts and make high-quality chess education accessible to everyone, from beginners to advanced learners.
            </p>
          </div>
        </div>
      </section>

      {/* why choose us Section */}
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

      {/* Coaches Section */}
      <section id="coaches" className="bg-gray-100 py-20 px-6 lg:px-24">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Meet Our Coaches
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {coaches.map((coach, idx) => (
            <div className="prespective group w-full h-96">
              <div className="relative w-full h-full duration-700 preserve-3d group-hover:rotate-y-180">

                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-xl overflow-hidden">
                  <img src={coach.image} alt={coach.name} className="w-full h-72 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800">{coach.name}</h3>
                    <p className="text-gray-600">{coach.role}</p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold text-gray-800">{coach.name}</h3>
                  <p className="text-gray-600 mb-4">{coach.role}</p>
                  <p className="text-sm text-gray-500">{coach.bio}</p>
                </div>
              </div>
            </div>


          ))}
        </div>
      </section>
    </>
  );
};

export default About;