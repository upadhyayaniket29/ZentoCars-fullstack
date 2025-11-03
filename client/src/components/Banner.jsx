import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 
                 bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#06b6d4] 
                 max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden shadow-lg'
    >
      <div className='text-white'>
        <h2 className='text-3xl font-semibold'>Do You Own a Luxury Car?</h2>
        <p className='mt-2 text-base opacity-90'>
          Monetize your vehicle effortlessly by listing it on Zento Cars.
        </p>
        <p className='max-w-130 opacity-80'>
          We take care of insurance, driver verification, and secure payments — 
          so you can earn passive income, stress-free.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='px-6 py-2 mt-5 rounded-lg text-sm font-medium 
                     bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] 
                     text-white shadow-md hover:shadow-lg transition-all cursor-pointer'
        >
          List your car
        </motion.button>
      </div>

      <motion.img 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_car_image} 
        alt="car" 
        className='max-h-45 mt-10 md:mt-0'
      />
    </motion.div>
  )
}

export default Banner
