import React from 'react';
import ParallaxHeader from '../components/Parallaxheader';

const Courses = () => {
  const handleClick = () => {
    window.open("https://forms.gle/UJ9ypM8xgXj4jnSb8", "_blank");
  };

  return (
    <>
      <ParallaxHeader
        title="Chess Masterclass"
        breadcrumbs={[{ title: 'Courses', path: '/courses' }]}
        backgroundImage="/images/aboutheader.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
              Your Ultimate Chess Journey Begins Here
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our signature course designed for all levels — from foundational strategy to advanced tactical execution, taught by experienced mentors and crafted for real improvement.
            </p>
          </div>

          {/* Course Card */}
          <div className="flex justify-center">
            <div
              className="bg-[#1e1e1e] text-white rounded-xl overflow-hidden shadow-2xl w-full max-w-2xl transform transition duration-300 hover:scale-[1.01]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/course/homeintermediate.jpg"
                alt="Chess Masterclass"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-serif font-semibold mb-4">Chess Masterclass</h3>

                {/* Rating */}
                <div className="flex items-center mb-5">
                  <span className="text-yellow-400 font-bold text-lg mr-2">4.9</span>
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star mr-1"></i>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">(1,200+ ratings)</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  This comprehensive course offers invaluable lessons, practice drills, live feedback, and exclusive tactics breakdowns. Whether you're a casual player or a club competitor, this course will sharpen your skills and deepen your understanding of the game.
                </p>

                <button
                  onClick={handleClick}
                  className="w-full bg-[#a1860a] hover:bg-[#856f0b] text-white py-3 text-lg font-medium rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;