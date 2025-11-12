"use client"
import { ContactUsPageData } from '@/lib/sanity/queries/contactUs';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { urlFor } from '@/lib/sanity/image'
import { motion, Variants } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

interface ContactOptionsProps {
    contactOptions: ContactUsPageData["contactOptions"]
}

function ContactOptions({ contactOptions }: ContactOptionsProps) {
    return (
        <div>
            <motion.div
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className='mt-4 mb-16 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4'
            >
                {contactOptions.map((option) => (
                    <motion.div
                        key={option.title}
                        variants={cardVariants}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className='flex flex-col items-start border border-[#DEE1E1] rounded-lg p-4 lg:p-5 gap-4 mb-4'
                    >
                        <div className=' border border-[#DEE1E1] rounded-lg p-2'>
                            <Image src={urlFor(option.icon.asset).url()} priority alt={option.icon.alt!} width={20} height={20} />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold text-[#010101] text-base'>{option.title}</h2>
                            <p className='text-[#363E3F] text-base'>{option.content}</p>
                        </div>

                        <Link href={option.action.url} target='_blank'>
                            <Button variant='outline' radius={8} style={{
                                border: "1px solid #DEE1E1",
                            }} vars={(theme, props) => {

                                return {
                                    root: {
                                        "--button-bg": "transparent",
                                        "--button-bd": "#DEE1E1",
                                        "--button-color": "#010101",
                                        "--button-hover": "#007F5E",
                                        "--button-hover-color": "#ffffff",
                                    },
                                };
                            }}>
                                {option.action.label}</Button>
                        </Link>

                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ContactOptions