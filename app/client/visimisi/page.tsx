"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
// PERBAIKAN: Menggunakan import relatif yang lebih andal (asumsi 3 level ke atas)
import Footer from "../../../components/Footer";
// PERBAIKAN: Menggunakan import relatif yang lebih andal (asumsi 3 level ke atas)
import { apiEndpoints } from "../../../app/api/api";

// Antarmuka untuk data Visi Misi yang diambil
interface VisiMisiData {
  id: string;
  visi: string;
  misi: string;
}

// Ikon VISI
const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

// Ikon MISI
const MissionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2m0 14v2m-9-9h2m14 0h2"
    />
  </svg>
);

export default function VisiMisiPage() {
  const [visi, setVisi] = useState<string>("");
  const [misi, setMisi] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVisiMisi = async () => {
    try {
      setLoading(true);
      const response = await axios.get<VisiMisiData[]>(
        apiEndpoints.GETVisiMisi
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        // Ambil data pertama dari array
        setVisi(response.data[0].visi || "");
        setMisi(response.data[0].misi || "");
      } else {
        setError("Data Visi & Misi tidak ditemukan atau tidak valid.");
      }
    } catch (err) {
      console.error("Gagal mengambil data visi misi:", err);
      setError(
        "Gagal menghubungkan ke server untuk mengambil data Visi & Misi."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisiMisi();
  }, []);

  // Animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.7 },
    },
  };

  // Fungsi untuk memparsing string misi yang dipisahkan koma menjadi list item
  const parseMisi = (misiString: string) => {
    if (!misiString) return [];
    return misiString
      .replace(/"/g, "") // hilangkan tanda kutip
      .split(",") // pecah berdasarkan koma
      .map((point) => point.trim())
      .filter((point) => point.length > 0); // Pastikan tidak ada string kosong
  };

  const misiList = parseMisi(misi);

  // Tampilan Loading
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 items-center justify-center p-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800"></div>
        <p className="mt-4 text-gray-600">Memuat Visi & Misi...</p>
      </div>
    );
  }

  // Tampilan Error
  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 items-center justify-center p-10 text-center">
        <p className="text-red-600 font-semibold text-lg">⚠️ Error Data</p>
        <p className="text-gray-600 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 to-pink-100 font-sans">
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 tracking-tight">
            Visi & Misi Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Membentuk masa depan yang cerah melalui pendidikan inovatif dan
            karakter yang kuat.
          </p>
        </motion.div>

        {/* Grid VISI & MISI */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full"
        >
          {/* VISI CARD */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            className="bg-white shadow-2xl rounded-2xl p-8 border border-red-200 flex flex-col items-center text-center"
          >
            <div className="bg-red-800 text-white rounded-full p-4 mb-6 shadow-xl w-fit mx-auto">
              <VisionIcon />
            </div>
            <h2 className="text-3xl font-bold text-red-800 mb-4">VISI</h2>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              {visi || "Tidak ada data visi yang tersedia."}
            </p>
          </motion.div>

          {/* MISI CARD */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            className="bg-white shadow-2xl rounded-2xl p-8 border border-red-200"
          >
            <div className="bg-red-800 text-white rounded-full p-4 mb-6 shadow-xl w-fit mx-auto">
              <MissionIcon />
            </div>
            <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">
              MISI
            </h2>

            {misiList.length > 0 ? (
              <ul className="list-disc list-inside text-left text-gray-700 space-y-3 leading-relaxed marker:text-red-500">
                {misiList.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="italic text-gray-600 text-center">
                Tidak ada data misi yang tersedia.
              </p>
            )}
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
