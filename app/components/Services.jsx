import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";



const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-xl font-Ovo">What I offer</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo">My Services</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ">
                I am an entry-level frontend developer of professional expertise in the field.   Throughout my career, I have had the privilege of collaborating with prestigious organisations, contributing to their success and growth.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="grid grid-cols-auto gap-6 my-10">
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500  dark:hover:bg-darkHover dark:hover:shadow-white">
                        <Image src={icon} alt='' className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
                        <Link href={link} className="flex items-center gap-2 text-sm mt-5">
                            Read more<Image alt='' src={assets.right_arrow} className="w-4" />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
};

export default Services;
