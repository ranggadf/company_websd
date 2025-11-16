"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Footer from "@/components/Footer";
import { apiEndpoints, image_url } from "@/app/api/api";
import { motion } from "framer-motion";


export default function Ekskul() {
  interface EkskulItem {
    id: number;
    judul: string;
    deskripsi: string;
    Gambar: string;
  }

  const [ekskul, setEkskul] = useState<EkskulItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEkskul = async () => {
    try {
      const response = await axios.get(apiEndpoints.GETEkskul);

      const data = Array.isArray(response.data) ? response.data : [];
      setEkskul(data);
    } catch (error) {
      console.error("Gagal mengambil data ekstrakulikuler:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEkskul();
  }, []);

  const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.15, // muncul satu-satu berdasarkan index
    },
  }),
};


  return (
    <main className="pt-16">
     {/* Section Judul */}
      <section className="relative bg-red-800 bg-center h-64 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            EKSTRAKULIKULER SDN 01 MANGUHARJO KOTA MADIUN
          </h1>
        </div>
      </section>

      {/* =============== SECTION EKSKUL =============== */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LOADING SKELETON */}
          {loading &&
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg shadow-md h-72 animate-pulse"
              />
            ))}

          {/* DATA EKSKUL */}
          {!loading &&
  ekskul.map((item, index) => (
    <motion.div
      key={item.id}
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
    >
      {item.Gambar ? (
        <Image
          src={`${image_url}/${item.Gambar}`}
          alt={item.judul ?? ""}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
          unoptimized
        />
      ) : (
        <div className="w-full h-48 bg-gray-300" />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold text-red-800 mb-2">
          {item.judul}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.deskripsi}
        </p>
      </div>
    </motion.div>
  ))}

        </div>
      </section>

      <Footer />
    </main>
  );
}
