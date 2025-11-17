"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { apiEndpoints, image_url } from "@/app/api/api";

export default function LandingPage() {
  const [section1, setSection1] = useState<any>(null);
  const [section2, setSection2] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
const [section3, setSection3] = useState<any>(null);
const [section4, setSection4] = useState<any[]>([]);
const [berita, setBerita] = useState<any[]>([]);
const [loadingBerita, setLoadingBerita] = useState(true);
  const [fasilitas, setFasilitas] = useState<FasilitasItem[]>([]);
  const [loadingFasilitas, setLoadingFasilitas] = useState<boolean>(true);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        const res = await axios.get(apiEndpoints.GETFASILITAS);
        setFasilitas(res.data.data || res.data);
      } catch (error) {
        console.error("Gagal memuat data fasilitas:", error);
      } finally {
        setLoadingFasilitas(false);
      }
    };
    fetchFasilitas();
  }, []);

interface FasilitasItem {
  id: number;
  judul: string;
  deskripsi: string;
  gambar: string;
}

useEffect(() => {
  const fetchFasilitas = async () => {
    try {
      const res = await axios.get(apiEndpoints.GETFASILITAS);
      setFasilitas(res.data.data || res.data);
    } catch (error) {
      console.error("Gagal memuat data fasilitas:", error);
    } finally {
      setLoadingFasilitas(false);
    }
  };
  fetchFasilitas();
}, []);


useEffect(() => {
  const fetchBerita = async () => {
    try {
      const res = await axios.get(apiEndpoints.GETBERITA);
      setBerita(res.data.data || res.data);
    } catch (error) {
      console.error("Gagal memuat berita:", error);
    } finally {
      setLoadingBerita(false);
    }
  };
  fetchBerita();
}, []);


useEffect(() => {
  const fetchLanding = async () => {
    try {
      const res = await axios.get(apiEndpoints.GETLANDING);

      const sec1 = res.data.filter((item: any) => item.section === "1");
      const sec2 = res.data.filter((item: any) => item.section === "2");
      const sec3 = res.data.filter((item: any) => item.section === "3");
      const sec4 = res.data.filter((item: any) => item.section === "4");

      setSection1(sec1[0]);
      setSection2(sec2[0]);
      setSection3(sec3[0]);
      setSection4(sec4); // ⬅️ bisa lebih dari 1 (karena ada beberapa card)
    } catch (error) {
      console.error("Gagal memuat data landing:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchLanding();
}, []);

if (loading) {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-[80vh] animate-pulse">
      <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  );
}


  if (!section1) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-600 text-lg">Data tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <>
      {/* === SECTION 1 === */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('/coba1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center px-4">
          <Image
            src={`${image_url}/${section1.Gambar}`}
            alt={section1.judul || "Landing Image"}
            width={180}
            height={180}
            className="mb-6 drop-shadow-lg rounded-lg object-cover"
            unoptimized
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {section1.judul}
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl">
            {section1.deskripsi}
          </p>
          <Link
            href="/client/profilesekolah"
            className="border-2 border-white text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all"
          >
            TENTANG KAMI →
          </Link>
        </div>
      </section>

      {/* === SECTION 2 - Profil Kepala Sekolah === */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-12 text-center text-black">
          {section2?.judul || "SAMBUTAN KEPALA SEKOLAH"}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Foto Kepala Sekolah */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
            src={`${image_url}/${section2.Gambar}`}
            alt={section2.judul || "Landing Image"}
            width={180}
            height={180}
            className="mb-6 drop-shadow-lg rounded-lg object-cover"
            unoptimized
          />
          </div>

          {/* Sambutan Kepala Sekolah */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {section2?.nama || "Drs. SUDJIANTO, M.M"}
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Kepala Sekolah SDN 01 Manguharjo
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {section2?.deskripsi ||
                "Selamat datang di website SDN 01 Manguharjo Kota Madiun..."}
            </p>
          </div>
        </div>
      </section>

     {/* === SECTION 3: Data Peserta Didik === */}
<section className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 py-20 text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Judul */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide">
      {section3?.judul || "Data Peserta Didik SDN 01 Manguharjo"}
    </h2>

    {/* Grid Statistik */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Total Siswa */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-5xl font-bold text-yellow-300 drop-shadow-sm">
          {section3?.total_siswa ?? 0}
        </h3>
        <p className="mt-2 text-lg opacity-90">Total Siswa</p>
      </div>

      {/* Siswa Laki-laki */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-5xl font-bold text-blue-300 drop-shadow-sm">
          {section3?.jml_siswa_laki ?? 0}
        </h3>
        <p className="mt-2 text-lg opacity-90">Laki-laki</p>
      </div>

      {/* Siswa Perempuan */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-5xl font-bold text-pink-300 drop-shadow-sm">
          {section3?.jml_siswa_perempuan ?? 0}
        </h3>
        <p className="mt-2 text-lg opacity-90">Perempuan</p>
      </div>
    </div>

    {/* Deskripsi tambahan */}
    <p className="mt-12 text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
      {section3?.deskripsi ||
        "Data peserta didik SDN 01 Manguharjo mencerminkan semangat belajar dan keberagaman yang menjadi kekuatan utama sekolah kami dalam membentuk generasi unggul dan berkarakter."}
    </p>
  </div>
</section>

{/* === SECTION 4: Keunggulan Sekolah === */}
<section className="bg-white py-16">
  <h1 className="text-3xl font-bold mb-8 text-center text-black">
    KEUNGGULAN SDN 01 MANGUHARJO <br /> KOTA MADIUN
  </h1>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {section4.length > 0 ? (
      section4.map((item, index) => (
        <div
          key={index}
          className="bg-red-800 rounded-lg p-4 flex flex-col items-center"
        >
          <div className="bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col items-center">
            <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded mb-4 text-center">
              {item.judul || "Judul Keunggulan"}
            </span>

            {/* Gambar dari API */}
            <img
              src={`${image_url}/${item.Gambar}`}
              alt={item.judul || "Gambar Keunggulan"}
              className="w-32 h-32 mb-4 object-contain"
            />

            <p className="text-[#333] text-lg text-center mb-4 px-2">
              {item.deskripsi || "Deskripsi belum tersedia."}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center col-span-3 text-gray-600">
        Belum ada data keunggulan.
      </p>
    )}
  </div>
</section>

{/* === SECTION 5: Fasilitas Sekolah === */}
<section className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 py-20 text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Judul */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide">
      Fasilitas Sekolah
    </h2>

    {loadingFasilitas ? (
      <p className="text-center text-gray-200">Memuat data fasilitas...</p>
    ) : fasilitas.length === 0 ? (
      <p className="text-center text-gray-200">Belum ada data fasilitas.</p>
    ) : (
      <>
        {/* Grid fasilitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {fasilitas.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {item.gambar && (
                <div className="relative w-full h-48">
                  <Image
                    src={`${image_url}/${item.gambar}`}
                    alt={item.judul}
                    fill
                    className="object-contain bg-white p-4"
                    unoptimized
                  />
                </div>
              )}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {item.judul}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="flex justify-center">
          <Link
            href="/client/Fasilitas"
            className="inline-block bg-yellow-400 text-red-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
          >
            Lihat Semua Fasilitas
          </Link>
        </div>
      </>
    )}
  </div>
</section>


{/* === SECTION 7: Berita Sekolah === */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    {/* Judul */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
      BERITA TERBARU SDN 01 MANGUHARJO
    </h2>

    {/* Konten */}
    {loadingBerita ? (
      <p className="text-center text-gray-500">Memuat berita...</p>
    ) : berita.length === 0 ? (
      <p className="text-center text-gray-500">Belum ada berita yang tersedia.</p>
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {berita.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Gambar */}
            <div className="relative w-full h-56">
              <Image
                src={`${image_url}/${item.gambar}`}
                alt={item.judul}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Konten Teks */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                {item.judul}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {item.deskripsi}
              </p>
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>
                  {new Date(item.created_at).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href="/client/berita"
                  className="text-red-700 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Tombol Lihat Semua */}
    <div className="text-center mt-12">
      <Link
        href="/admin/CMS_berita/Berita"
        className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-800 transition"
      >
        Lihat Semua Berita
      </Link>
    </div>
  </div>
</section>

    {/* SECTION 6 - Lokasi Sekolah */}
<section id="section-6" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
      Lokasi SDN 01 Manguharjo Kota Madiun
    </h2>
    <p className="text-gray-600 mb-8">
      Berikut adalah lokasi sekolah kami di Google Maps. Silakan kunjungi untuk mendapatkan arah terbaik.
    </p>
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5028535597626!2d111.50683767532378!3d-7.628943692386682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be449530b50f%3A0x74dd84532cdf3ff8!2sSDN%2001%20Manguharjo%20Kota%20Madiun!5e0!3m2!1sen!2sid!4v1758957695332!5m2!1sen!2sid"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

    </div>
  </div>
</section>




      {/* --- SECTION 3, 4, 5, 6 (kodenya kamu tetap pakai) --- */}
      {/* tambahkan semua bagian berikutnya yang sudah kamu punya di bawah ini */}

      <Footer />
    </>
  );
}
