import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } =
    useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/cars?pickupLocation=${pickupLocation}&pickupDate=${pickupDate}&returnDate=${returnDate}`
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden min-h-screen">
      {/* Heading */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Drive Your Dream, Anytime
      </h1>

      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="mt-10 bg-white shadow-lg rounded-full px-10 py-5 flex flex-col sm:flex-row items-center gap-6"
      >
        {/* Pickup Location */}
        <div className="flex flex-col text-left">
          <label className="font-semibold">Pickup Location</label>
          <select
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="text-gray-600 border-none outline-none"
          >
            <option value="">Select Location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col text-left">
          <label className="font-semibold">Pick-up Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            required
            className="text-gray-600 border-none outline-none"
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col text-left">
          <label className="font-semibold">Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
            className="text-gray-600 border-none outline-none"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
        >
          Search
        </button>
      </form>

      {/* 🚗 Animated Car (Visible + Smooth Motion) */}
      <motion.img
        src={assets.main_car}
        alt="Car"
        className="w-[600px] mt-16 drop-shadow-2xl"
        animate={{
          y: [0, -5, 0, 5, 0],
          rotateY: [0, 5, 0, -5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </section>
  );
};

export default Hero;
