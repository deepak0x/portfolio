import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaPython,
    FaGitAlt,
    FaRobot,
    FaLinux
} from 'react-icons/fa';
import {
    SiFirebase,
    SiMongodb,
    SiPostgresql,
    SiFlutter,
    SiNextdotjs,
    SiCplusplus,
    SiAmazonaws,
    SiDjango,
    SiDocker,
    SiKubernetes
} from 'react-icons/si';

const skills = [
    { name: 'PYTHON', icon: <FaPython />, color: '#3776AB' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'JAVASCRIPT', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'REACT', icon: <FaReact />, color: '#61DAFB' },
    { name: 'NEXT JS', icon: <SiNextdotjs />, color: '#E8E8E8' },
    { name: 'NODE JS', icon: <FaNodeJs />, color: '#339933' },
    { name: 'DJANGO', icon: <SiDjango />, color: '#44B78B' },
    { name: 'FLUTTER', icon: <SiFlutter />, color: '#02569B' },
    { name: 'POSTGRESQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'MONGODB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'FIREBASE', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' },
    { name: 'DOCKER', icon: <SiDocker />, color: '#2496ED' },
    { name: 'KUBERNETES', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'GIT', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'AI / ML', icon: <FaRobot />, color: '#FF5722' },
];



const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto p-4 text-white bg-black" id="skills">
            <h1 className="mt-0 mb-10 text-4xl font-bold">My Skills</h1>
            <div className="flex max-w-[1200px] gap-8 md:gap-12 flex-wrap justify-center">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center m-4 transition-transform transform hover:scale-110"
                    >
                        <div className="mb-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl" style={{ color: skill.color }}>{skill.icon}</div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
