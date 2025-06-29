import React from 'react';
import ParallaxHeader from '../components/Parallaxheader';

const Courses = () => {
    const handleClick = () => { window.open("https://forms.gle/UJ9ypM8xgXj4jnSb8", "_blank"); };
    const coaches = [
        { name: 'John Doe', role: 'Senior Coach', image: '/images/coach1.jpg' },
        { name: 'Jane Smith', role: 'IM Coach', image: '/images/coach2.jpg' },
        { name: 'Alex Roy', role: 'Beginner Trainer', image: '/images/coach3.jpg' },
        { name: 'John Doe', role: 'Senior Coach', image: '/images/coach1.jpg' },
        { name: 'Jane Smith', role: 'IM Coach', image: '/images/coach2.jpg' },
        { name: 'Alex Roy', role: 'Beginner Trainer', image: '/images/coach3.jpg' },
    ];

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
                                <button
                                    onClick={handleClick}
                                    className="w-full bg-[#a1860a] hover:bg-[#856f0b] text-white text-center py-3 rounded-lg font-medium transition transform hover:-translate-y-1">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="coaches" className="bg-gray-100 py-20 px-6 lg:px-24">
                <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                    Meet Our Coaches
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {coaches.map((coach, idx) => (
                        <div
                            key={idx}
                            data-aos="flip-left"
                            className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img src={coach.image} alt={coach.name} className="w-full h-72 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">{coach.name}</h3>
                                <p className="text-gray-600">{coach.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Courses;