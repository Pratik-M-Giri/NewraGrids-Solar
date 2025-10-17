import React from 'react';
import { FaSun, FaUsers, FaAward, FaShieldAlt, FaLeaf, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import OurMission from '../components/about/OurMission';
import OurValues from '../components/about/OurValues';
import OurTeam from '../components/about/OurTeam';
import StatsCta from '../components/about/StatsCta';

const About = () => {




    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">About NewRa Grids</h1>
                        <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                            Pioneering the solar energy revolution with innovative solutions that power a sustainable future for all.
                        </p>
                    </motion.div>
                </div>
            </section>
            <OurMission />
            <OurValues />
            <OurTeam />
            <StatsCta />




        </div>
    );
};

export default About;