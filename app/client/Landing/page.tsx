"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; 
import Footer from '@/components/Footer';

export default function Section1() {
  return (
    <>
      {/* === Section 1 === */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('/coba1.png')", // ubah sesuai nama gambar kamu
          marginTop: "0px", // agar tidak menutupi navbar
        }}
      >
        {/* Overlay gelap biar teks lebih jelas */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Konten di tengah */}
        <div className="relative z-10 flex flex-col items-center px-4">
          {/* Logo Sekolah */}
          <Image
            src="/logosd.png"
            alt="Logo Sekolah"
            width={180}
            height={180}
            className="mb-6 drop-shadow-lg"
          />

          {/* Nama Sekolah */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            SD NEGERI 01 MANGUHARJO
          </h1>

          {/* Deskripsi */}
          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl">
            Salah Satu SD Terbaik Yang Ada Di Kota Madiun
          </p>

          {/* Tombol */}
          <Link
            href="/client/profilesekolah"
            className="border-2 border-white text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all"
          >
            TENTANG KAMI →
          </Link>
        </div>
      </section>


{/* === Section 2 === */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
    
    {/* === Kiri - Sambutan Kepala Sekolah === */}
    <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col justify-center">
      <div className="flex items-center gap-6">
        {/* Foto Kepala Sekolah */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
          <Image
            src="/kepalasekolah.png"
            alt="Kepala Sekolah"
            fill
            className="object-cover"
          />
        </div>

        {/* Sambutan */}
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-1">
            Sudarmadi S.Pd.
          </h4>
          <p className="text-green-600 font-medium mb-3">Kepala Sekolah</p>
          <p className="text-gray-700 leading-relaxed text-M">
              Assalamu’alaikum warahmatullahi wabarakatuh.
              Puji syukur ke hadirat Allah SWT atas rahmat dan karunia-Nya.
              Website ini hadir sebagai sarana informasi dan komunikasi antara sekolah, peserta didik, serta masyarakat.
              Semoga menjadi langkah menuju pendidikan yang unggul dan berkarakter.
           
          </p>
        </div>
      </div>
    </div>

    {/* === Kanan - Data Peserta Didik === */}
    <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-2xl shadow-lg text-white flex flex-col justify-center px-10 py-12">
      <h2 className="text-lg font-semibold mb-6 opacity-90">
        Data Peserta Didik SDN 01 Manguharjo
      </h2>

      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-4xl font-bold">691</h3>
          <p className="mt-1 text-sm opacity-90">Total Siswa</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">350</h3>
          <p className="mt-1 text-sm opacity-90">Laki-laki</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">341</h3>
          <p className="mt-1 text-sm opacity-90">Perempuan</p>
        </div>
      </div>
    </div>

  </div>
</section>



     {/* === Section 3 === */}
<section className="bg-white py-16">
  <h1 className="text-3xl font-bold mb-8 text-center">
    KEUNGGULAN SDN 01 MANGUHARJO <br /> KOTA MADIUN
  </h1>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-red-800 rounded-lg p-4 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col items-center">
        <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
          UNGGUL DALAM PRESTASI AKADEMIK
        </span>
        <Image
          src="/academy.png"
          width={128}
          height={128}
          alt="Visi"
          className="w-32 h-32 mb-4 object-contain"
        />
        <p className="text-[#333] text-lg text-center mb-4 px-2">
          Menjadi sekolah unggul dalam prestasi, berkarakter, dan peduli
          lingkungan.
        </p>
    
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-red-800 rounded-lg p-4 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col items-center">
        <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
          UNGGUL DALAM PRESTASI NON-AKADEMIK
        </span>
        <Image
          src="/prestasi.png"
          width={128}
          height={128}
          alt="Misi"
          className="w-32 h-32 mb-4 object-contain"
        />
        <p className="text-[#333] text-lg text-center mb-4 px-2">
          Meningkatkan mutu pendidikan, membentuk siswa berakhlak mulia, serta
          membangun budaya peduli lingkungan.
        </p>
    
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-red-800 rounded-lg p-4 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col items-center">
        <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
          UNGGUL DALAM PENDIDIKAN BERKARAKTER
        </span>
        <Image
          src="/teacher.png"
          width={128}
          height={128}
          alt="Karakter"
          className="w-32 h-32 mb-4 object-contain"
        />
        <p className="text-[#333] text-lg text-center mb-4 px-2">
          Membentuk siswa berkarakter kuat, peduli lingkungan, dan mampu
          bersaing secara global.
        </p>
    
      </div>
    </div>
  </div>
</section>
<section id="section-4">
      {/* Wrapper dengan background gradient */}
      <div className="py-16 px-bg-gradient-to-b from-white via-[#D7A298] to-white">
        {/* Judul + deskripsi */}
        <div className="mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            BERITA TERBARU
          </h2>
          <p className="text-gray-600 mx-auto max-w-3xl px-4">
            Dapatkan informasi terbaru seputar kegiatan, prestasi, dan program
            SDN 01 Manguharjo.
          </p>
        </div>

        {/* Grid Card Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-16 py-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md">
            <Image
              width={500}
              height={300}
              src="/pencaksingo.jpg"
              alt="Berita 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">
                Kegiatan Belajar Mengajar
              </h3>
              <p className="text-gray-600 mb-2">
                Suasana belajar yang menyenangkan dengan metode interaktif.
                <span className="text-red-400 text-medium ml-1">
                  Baca Selengkapnya
                </span>
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span className="text-black">12 September 2025 |</span>
                <span>by Admin</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md">
            <Image
              width={500}
              height={300}
              src="/pencaksingo.jpg"
              alt="Berita 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">
                Prestasi Lomba Akademik
              </h3>
              <p className="text-gray-600 mb-2">
                Siswa SDN 01 Manguharjo meraih juara olimpiade sains.
                <span className="text-red-400 text-medium ml-1">
                  Baca Selengkapnya
                </span>
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span className="text-black">05 September 2025 |</span>
                <span>by Guru</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md">
            <Image
              width={500}
              height={300}
              src="/pencaksingo.jpg"
              alt="Berita 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">
                Kegiatan Ekstrakurikuler
              </h3>
              <p className="text-gray-600 mb-2">
                Berbagai ekstrakurikuler untuk mengembangkan bakat siswa.
                <span className="text-red-400 text-medium ml-1">
                  Baca Selengkapnya
                </span>
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span className="text-black">28 Agustus 2025 |</span>
                <span>by OSIS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Selengkapnya */}
        <div className="text-center mt-8">
          <Link href="/client/news">
            <button className="bg-[#FF2A02] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Selengkapnya
            </button>
          </Link>
        </div>
      </div>
    </section>
    {/* SECTION 5 - Lokasi Sekolah */}
<section id="section-5" className="py-16 bg-white">
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
<Footer/>

    </>
  );
}
