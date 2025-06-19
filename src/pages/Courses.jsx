import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParallaxHeader from '../components/Parallaxheader';

const courseList = [
  {
    name: "Beginner Chess Course",
    level: "Beginner",
    image: "/images/course/homebasic.jpg",
    duration: "2 Hours / Meeting",
    certification: true,
    rating: 4.9,
    theme: "light", // or 'dark'
  },
  {
    name: "Intermediate Chess Course",
    level: "Intermediate",
    image: "/images/course/homeintermediate.jpg",
    duration: "2 Hours / Meeting",
    certification: true,
    rating: 4.9,
    theme: "dark",
  },
  {
    name: "Advanced Chess Course",
    level: "Advanced",
    image: "/images/course/homeexpert.jpg",
    duration: "2 Hours / Meeting",
    certification: true,
    rating: 5.0,
    theme: "light",
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleJoinNow = (courseName) => {
    navigate('/contact', { state: { courseName } });
  };
  return (
    <>
      <ParallaxHeader
        title="Explore our courses"
        breadcrumbs={[{ title: 'Courses', path: '/courses' }]}
        backgroundImage="/images/aboutheader.jpg"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900" data-aos="fade-up">Our Courses</h2>
            <p className="mt-4 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Choose the right course for your level and goal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseList.map((course, index) => (
              <div
                key={index}
                className={`shadow-lg p-0 overflow-hidden rounded-lg ${course.theme === 'dark' ? 'bg-[#1e1e1e] text-white' : 'bg-white text-gray-900'}`}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="relative overflow-hidden">
                  <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{course.name}</h3>
                  <div className={`flex items-center mb-4 ${course.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <i className="far fa-clock mr-2"></i>
                    {course.duration}
                    {course.certification && (
                      <>
                        <i className="fas fa-certificate ml-4 mr-2"></i>
                        Certification
                      </>
                    )}
                  </div>
                  <div className="flex items-center mb-4">
                    <span className={`font-semibold mr-2 ${course.theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}>
                      {course.rating}
                    </span>
                    <div className={course.theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star mr-0.5"></i>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleJoinNow(course.name)}
                    className="w-full bg-[#a1860a] hover:bg-[#856f0b] text-white text-center py-3 rounded-lg font-medium transition transform hover:-translate-y-1"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;