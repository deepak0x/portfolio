import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const works = [
    {
        title: "Trip Tracker by Zen",
        description: "Enterprise Flutter + Odoo ERP app — offline-first with FaceNet TFLite biometric attendance. Live on Play Store & App Store.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60",
        link: "https://play.google.com/store/search?q=Trip%20Tracker%20by%20Zen&c=apps",
    },
    {
        title: "E-Summit Portal – IIT Roorkee",
        description: "Django + PostgreSQL platform serving 2,500+ participants, with a real-time event-day control panel.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60",
        link: "https://esummit.in/",
    },
    {
        title: "Eve – Social App",
        description: "Real-time activity-based social platform. 12+ Django REST APIs on GCP, Flutter app live on Play Store & App Store.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=60",
        link: "https://meetwitheve.com/",
    },
    {
        title: "AI Interviewer",
        description: "AI-powered live coding interview platform with dual admin/candidate portals and real-time code analysis.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/deepak0x/Ai_interviewer",
    },
    {
        title: "RAGGaze",
        description: "RAG-powered AI assistant suite — LangChain/FAISS/OpenAI backend with React chat frontends for PDF & API Q&A.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/deepak0x/RAGGaze",
    },
    {
        title: "Editron",
        description: "Browser-based dev environment powered by WebContainers, Monaco Editor, and integrated AI — build & run without local setup.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/deepak0x/Editron",
    },
];



const Work = () => {
    const [visibleWorks, setVisibleWorks] = useState(3);
    const [fadeIn, setFadeIn] = useState(false);

    const showMoreWorks = () => {
        setFadeIn(true);
        setTimeout(() => {
            setVisibleWorks((prev) => prev + 3);
            setFadeIn(false);
        }, 300);
    };

    const showLessWorks = () => {
        setFadeIn(true);
        setTimeout(() => {
            setVisibleWorks(3);
            setFadeIn(false);
        }, 300);
    };

    return (
        <div className="bg-dark p-6 max-w-[1200px] mx-auto text-white h-auto flex flex-col items-center pb-6 xl:pb-6 lg:px-0" id="works">
            {/* Section Title */}
            <h1 className="w-full my-4 text-4xl font-bold text-center xl:my-7 xl:mt-0">My Works</h1>

            {/* Work Items Container with Grid System */}
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-6 transition-opacity duration-300 ${fadeIn ? 'opacity-50' : 'opacity-100'}`}
                style={{ minHeight: '400px', width: '100%' }}
            >
                {works.slice(0, visibleWorks).map((work, index) => (
                    <div
                        key={index}
                        className="relative w-full overflow-hidden transition-transform duration-300 rounded-lg shadow-lg h-96 hover:scale-105 group"
                    >
                        {/* Image and Overlay */}
                        <img src={work.image} alt={work.title} className="object-cover object-center w-full h-full" />
                        <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 text-center transition-all duration-700 ease-in-out bg-black bg-opacity-50 opacity-0 top-full group-hover:top-0 group-hover:opacity-100">
                            <h2 className="mb-2 text-2xl font-bold">{work.title}</h2>
                            <p className="mb-4 text-gray-300">{work.description}</p>
                            <a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 text-white transition-transform duration-300 bg-red-500 rounded-full hover:scale-110"
                            >
                                <FiExternalLink size={24} />
                            </a>

                        </div>
                    </div>
                ))}
            </div>

            {/* Show More/Show Less Buttons */}
            <div className="flex gap-4 mt-6 md:mt-11">
                {visibleWorks < works.length && (
                    <button
                        onClick={showMoreWorks}
                        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-red-500 rounded-full hover:scale-105 hover:bg-red-600"
                    >
                        See more
                    </button>
                )}
                {visibleWorks > 3 && (
                    <button
                        onClick={showLessWorks}
                        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-gray-500 rounded-full hover:scale-105 hover:bg-gray-600"
                    >
                        See less
                    </button>
                )}
            </div>
        </div>
    );
};

export default Work;
