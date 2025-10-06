"use client";
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

// Komponen Ikon untuk Visi (Mata)
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

// Komponen Ikon untuk Misi (Target)
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
  // Varian animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Varian animasi untuk item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Konten utama */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Visi & Misi Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Membentuk masa depan yang cerah melalui pendidikan inovatif dan
            karakter yang kuat.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full"
        >
          {/* Kartu Visi */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            className="bg-red-800 shadow-xl rounded-2xl p-8 border border-red-900 flex flex-col items-center text-center text-white"
          >
            <div className="bg-white text-red-800 rounded-full p-4 mb-6 shadow-lg">
              <VisionIcon />
            </div>
            <h2 className="text-3xl font-bold mb-4">VISI</h2>
            <p className="mb-6 italic text-gray-100">
              "Menjadi lembaga pendidikan terdepan yang menghasilkan generasi
              unggul, kreatif, dan berakhlak mulia yang siap menghadapi
              tantangan global."
            </p>
            <ul className="list-inside list-disc text-left space-y-3 text-gray-100">
              <li>
                Menyelenggarakan pendidikan berkualitas yang terintegrasi dengan
                teknologi terkini.
              </li>
              <li>
                Menciptakan lingkungan belajar yang inspiratif dan mendukung
                potensi siswa.
              </li>
              <li>
                Membangun karakter siswa yang berintegritas, bertanggung jawab,
                dan peduli sesama.
              </li>
            </ul>
          </motion.div>

          {/* Kartu Misi */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            className="bg-red-800 shadow-xl rounded-2xl p-8 border border-red-900 flex flex-col items-center text-center text-white"
          >
            <div className="bg-white text-red-800 rounded-full p-4 mb-6 shadow-lg">
              <MissionIcon />
            </div>
            <h2 className="text-3xl font-bold mb-4">MISI</h2>
            <p className="mb-6 italic text-gray-100">
              "Membekali setiap siswa dengan pengetahuan, keterampilan, dan
              nilai-nilai luhur untuk meraih kesuksesan serta memberikan
              kontribusi positif bagi masyarakat."
            </p>
            <ul className="list-inside list-disc text-left space-y-3 text-gray-100">
              <li>
                Melaksanakan kurikulum yang adaptif dan relevan dengan
                perkembangan zaman.
              </li>
              <li>
                Mengembangkan program ekstrakurikuler untuk menyalurkan bakat
                dan minat siswa.
              </li>
              <li>
                Menjalin kemitraan strategis dengan orang tua, masyarakat, dan
                industri.
              </li>
              <li>
                Meningkatkan kompetensi pendidik dan tenaga kependidikan secara
                berkelanjutan.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer Full Width */}
      <div className="-mx-4 sm:-mx-6 md:-mx-10">
        <Footer />
      </div>
    </div>
  );
}
