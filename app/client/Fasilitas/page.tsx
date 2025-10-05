"use client";
import React from "react";
import Footer from '@/components/Footer';


export default function Fasilitas() {
  const fasilitas = [
    {
      title: "Ruang Kelas",
      desc: "Setiap ruang kelas dilengkapi dengan meja, kursi, papan tulis, serta sirkulasi udara yang baik.",
      img: "/kelas.jpg",
    },
    {
      title: "Perpustakaan",
      desc: "Menyediakan berbagai koleksi buku bacaan, buku pelajaran, serta akses untuk siswa memperluas wawasan.",
      img: "/perpus.jpg",
    },
    {
      title: "Laboratorium Komputer",
      desc: "Fasilitas komputer untuk mendukung pembelajaran berbasis teknologi.",
      img: "/labkom.jpg",
    },
    {
      title: "Lapangan Olahraga",
      desc: "Lapangan multifungsi untuk kegiatan olahraga seperti sepak bola, basket, dan voli.",
      img: "/lapangan.jpg",
    },
    {
      title: "UKS (Unit Kesehatan Sekolah)",
      desc: "Fasilitas kesehatan untuk memberikan pertolongan pertama dan menjaga kesehatan siswa.",
      img: "/uks.jpg",
    },
    {
      title: "Mushola",
      desc: "Tempat ibadah bagi siswa dan guru untuk menunjang pembinaan spiritual.",
      img: "/mushola.jpg",
    },
  ];

  return (
    <main className="pt-16">
      {/* Section Judul */}
      <section className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            FASILITAS SDN 01 MANGUHARJO KOTA MADIUN
          </h1>
        </div>
      </section>

      {/* Section Fasilitas */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fasilitas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
    
  );
}
