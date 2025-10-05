"use client";
import React from "react";
import Footer from "@/components/Footer";

export default function Profil() {
  return (
    <>
      <main className="pt-1">
        {/* Section 1 - Judul */}
        <section
          className="relative bg-cover bg-center h-64 flex items-center justify-center"
          style={{
            backgroundImage: "url('/image.png')", // ganti path gambar background
          }}
        >
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              PROFILE SDN 01 MANGUHARJO KOTA MADIUN
            </h1>
          </div>
        </section>

        {/* Section 2 - Video YouTube */}
        <section className="container mx-auto px-4 text-center py-12">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3 aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/08SbA3cIpLQ"
                title="Profil SDN 01 MANGUHARJO KOTA MADIUN"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Section 3 - Sejarah Sekolah */}
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Kiri - Teks */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
              Sejarah Sekolah
            </h2>
            <p className="text-gray-700 leading-relaxed">
              SDN 01 Manguharjo Kota Madiun berdiri sejak tahun XXXX. Sejak awal
              berdirinya, sekolah ini telah menjadi salah satu lembaga pendidikan
              dasar yang berkomitmen memberikan layanan pendidikan terbaik kepada
              masyarakat. Dengan visi dan misi yang kuat, SDN 01 Manguharjo terus
              berkembang dalam kualitas akademik maupun non-akademik.
            </p>
          </div>

          {/* Kanan - Gambar */}
          <div className="flex justify-center">
            <img
              src="/p.jpg" // ganti dengan path gambar sejarah
              alt="Sejarah SDN 01 Manguharjo"
              className="rounded-lg shadow-lg w-full md:w-4/5"
            />
          </div>
        </section>

        {/* Section 4 - Kontak */}
        <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row gap-6">
          {/* Kiri - Teks */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold leading-tight">
              Ingin tahu lebih banyak tentang SDN 01 Manguharjo Kota Madiun?
            </h2>
            <p className="text-gray-600 mt-4">
              Kami siap memberikan informasi seputar profil sekolah, kegiatan
              belajar mengajar, maupun penerimaan peserta didik baru. Jangan
              ragu untuk menghubungi kami melalui kontak di samping ini.
            </p>
          </div>

          {/* Kanan - Info Kontak */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {[
              {
                title: "Location",
                value: "JL.Hayam Wuruk no 06 Kel.Manguharjo Kota Madiun",
                icon: "location",
              },
              {
                title: "Email Address",
                value: "sdn01manguharjo@gmail.com",
                icon: "email",
              },
              {
                title: "Phone number",
                value: "[0351]467898",
                icon: "phone",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-800 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
