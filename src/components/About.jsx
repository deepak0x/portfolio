import React, { useState } from 'react';

const About = () => {
    const [activeSection, setActiveSection] = useState('skills');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="w-full h-auto px-4 pb-12 mx-auto pt-14 xl:py-24 bg-dark md sm:px-8 md:px-6 lg:px-16 xl:px-20" id="about">
            <div className="flex flex-col max-w-[1200px] h-full mx-auto  md:flex-row ">
                <div className="flex w-full h-full mb-6 md:w-5/12 lg:w-4/12 bg-zinc-800 rounded-2xl md:mb-0">
                    <img
                        src="images/about4.jpg"
                        alt="Card Image"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12 md:px-5 lg:px-10">
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-4xl lg:text-5xl">
                        About Me
                    </h2>
                    <p className="mb-6 leading-relaxed text-gray-400">
                        I’m Deepak Bhagat, a B.Tech. student at IIT Roorkee and Head of Tech at E-Cell, IIT Roorkee. As a Founding Backend &amp; Mobile Engineer, I’ve shipped Flutter apps live on the Play Store and App Store, built Django REST backends on Google Cloud and AWS, and engineered offline-first systems with on-device ML. I love turning hard problems into reliable, real-world products — from enterprise ERP apps to platforms serving thousands of users.
                    </p>

                    <nav className="my-5">
                        <ul className="flex mt-4 space-x-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {['skills', 'experience', 'education'].map((section) => (
                                <li key={section} className="relative group">
                                    <button
                                        onClick={() => handleSectionClick(section)}
                                        className={`block rounded py-1 text-gray-400 hover:text-white transition-colors ${activeSection === section ? 'text-white' : ''}`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </button>
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 ${activeSection === section ? 'w-full' : 'group-hover:w-full'}`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex flex-col mt-6 space-y-4">
                        {activeSection === 'skills' && (
                            <div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        Backend Engineer
                                    </span>
                                    <p className="text-gray-400">
                                        Building REST APIs with Django REST Framework and PostgreSQL, deployed on Google Cloud and AWS.
                                    </p>
                                </div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        Mobile Engineer
                                    </span>
                                    <p className="text-gray-400">
                                        Shipping cross-platform Flutter apps end-to-end, live on the Play Store and App Store.
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        AI Engineer
                                    </span>
                                    <p className="text-gray-400">
                                        Integrating on-device ML (FaceNet TFLite, YOLO) and agentic AI into production systems.
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'experience' && (
                            <div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        Nov 2025 - Mar 2026
                                    </span>
                                    <p className="text-gray-400">
                                        Software Engineer at Zen Software Solutions Inc.
                                    </p>
                                </div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        May 2025 - Nov 2025
                                    </span>
                                    <p className="text-gray-400">
                                        Founding Backend &amp; Mobile Engineer at Eve
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        Apr 2025 - Present
                                    </span>
                                    <p className="text-gray-400">
                                        Head of Tech at E-Cell, IIT Roorkee
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'education' && (
                            <div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        2023 – 2027
                                    </span>
                                    <p className="text-gray-400">
                                        B.Tech. in Mechanical Engineering at IIT Roorkee
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        CBSE Class XII — 91.4%
                                    </span>
                                    <p className="text-gray-400">
                                        Govt. Co-Ed Sarvodaya Vidyalaya, Delhi
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
