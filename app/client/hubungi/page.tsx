"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "@/components/Footer"; // Asumsi path komponen footer

// --- Definisi Ikon SVG (Tidak ada perubahan) ---
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
const TiktokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M21 7.9c-1.15-.36-2.5-1.55-3.66-2.61C15.8 4.1 13.5 3 12 3v18c3.2-1.7 5.75-5.3 6-9h-4.5V8.5c0-.6-.35-1.2-1-1.2-.65 0-1.1.6-1.1 1.2V11H9.8c-.5 0-.9.4-.9.9v1.2c0 .5.4.9.9.9h.8V19c0 1.1.9 2 2 2s2-.9 2-2v-4.5c2.7-.3 5.4-2.8 5.4-6.4 0-.1-.1-.2-.2-.2z" />
  </svg>
);

// --- Tipe Data Kontak ---
interface KontakData {
  judul: string;
  no_telp: string;
  email: string;
  alamat: string;
  instagram: string;
  youtube: string;
  tiktok: string;
}

// --- KONFIGURASI API ---
const API_CONFIG = {
  api_url: `http://127.0.0.1:8000/api`,
  GETHubungiKami: `http://127.0.0.1:8000/api/gethubungikami`,
};

const API_ENDPOINT = API_CONFIG.GETHubungiKami;

// Data Fallback (URL lengkap, tidak ada perubahan)
const DEFAULT_FALLBACK_DATA: KontakData = {
  judul: "Informasi Kontak Sekolah",
  no_telp: "+62 818-0411-6347",
  email: "sdnmanguharjo@gmail.com",
  alamat:
    "Jl. Hayam Wuruk No.06, Manguharjo, Kec. Manguharjo, Kota Madiun, Jawa Timur 63127",
  instagram: "https://www.instagram.com/sdnmanguharjo/",
  youtube: "https://youtube.com/@sdn01manguharjomadiun13",
  tiktok: "https://www.tiktok.com/@sdnmanguharjoesma",
};

// --- HAPUS: Konstanta FALLBACK_SOCIAL_MEDIA_URL yang menyeragamkan URL
// const FALLBACK_SOCIAL_MEDIA_URL = DEFAULT_FALLBACK_DATA.instagram;

const HubungiKamiPage = () => {
  const [hubungi, setHubungi] = useState<KontakData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);

      if (Array.isArray(response.data) && response.data.length > 0) {
        setHubungi(response.data[0] as KontakData);
      } else {
        console.warn("API returned empty data. Using fallback.");
        setHubungi(DEFAULT_FALLBACK_DATA);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHubungi(DEFAULT_FALLBACK_DATA);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    hubungi?.alamat || "SDN Manguharjo Madiun"
  )}`;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Memuat data kontak...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 bg-gradient-to-br from-red-50 to-pink-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Silakan hubungi kami jika ada pertanyaan atau informasi yang
            dibutuhkan.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl w-full"
        >
          {/* Kolom Informasi Kontak Utama */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-red-800 text-white shadow-xl rounded-2xl p-8 border border-red-900/50 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {hubungi?.judul || "Informasi Kontak"}
            </h2>
            <div className="space-y-6">
              <ContactItem
                icon={PhoneIcon}
                title="Whatsapp"
                value={hubungi?.no_telp || "-"}
              />
              <ContactItem
                icon={MailIcon}
                title="Email"
                value={hubungi?.email || "-"}
              />
              <ContactItem
                icon={LocationIcon}
                title="Alamat"
                value={hubungi?.alamat || "-"}
              />
            </div>
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 block w-full bg-white text-red-800 text-center font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wider"
            >
              Buka di Maps 🗺️
            </motion.a>
          </motion.div>

          {/* Kolom Sosial Media */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Follow Sosial Media Kami
            </h2>
            <div className="space-y-6">
              {/* PERBAIKAN: Menggunakan FALLBACK URL YANG SESUAI dengan platformnya */}
              <SocialMediaLink
                Icon={InstagramIcon}
                name="Instagram"
                href={hubungi?.instagram}
                color="text-pink-600"
                fallbackUrl={DEFAULT_FALLBACK_DATA.instagram} // Menggunakan Instagram fallback
              />
              <SocialMediaLink
                Icon={YoutubeIcon}
                name="YouTube"
                href={hubungi?.youtube}
                color="text-red-600"
                fallbackUrl={DEFAULT_FALLBACK_DATA.youtube} // Menggunakan YouTube fallback
              />
              <SocialMediaLink
                Icon={TiktokIcon}
                name="TikTok"
                href={hubungi?.tiktok}
                color="text-gray-800"
                fallbackUrl={DEFAULT_FALLBACK_DATA.tiktok} // Menggunakan TikTok fallback
              />
            </div>
          </motion.div>
        </motion.div>
      </main>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default HubungiKamiPage;

// Komponen Pembantu (ContactItem tidak ada perubahan)
const ContactItem = ({
  icon: Icon,
  title,
  value,
}: {
  icon: React.FC;
  title: string;
  value: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="bg-white/20 text-white rounded-full p-3 flex-shrink-0">
      <Icon />
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="break-words">{value}</p>
    </div>
  </div>
);

// Komponen Pembantu SocialMediaLink
const SocialMediaLink = ({
  Icon,
  name,
  href,
  color,
  fallbackUrl,
}: {
  Icon: React.FC;
  name: string;
  href: string | undefined;
  color: string;
  fallbackUrl: string; // Tipe string wajib
}) => (
  <motion.a
    // LOGIKA PERBAIKAN: Menggunakan URL yang tersedia dari API, jika kosong, pakai URL fallback yang spesifik (Instagram, YouTube, atau TikTok)
    href={href || fallbackUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, x: 5 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center p-4 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition-all duration-200`}
  >
    <div className={color}>
      <Icon />
    </div>
    <span className="ml-4 font-semibold text-lg text-gray-700">{name}</span>
  </motion.a>
);
