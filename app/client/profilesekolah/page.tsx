"use client";
import React from "react";
import Footer from "@/components/Footer";

export default function Profil() {
  return (
    <>
      <main className="pt-1">
        {/* Section 1 - Judul */}
        <section className="relative bg-red-800 bg-center h-64 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              PROFILE SDN 01 MANGUHARJO KOTA MADIUN
            </h1>
          </div>
        </section>

        {/* Section 3 - Sejarah Sekolah */}
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-red-800 mb-4">
              Sejarah Sekolah
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              SDN 01 Manguharjo Kota Madiun berdiri sejak tahun XXXX. Sejak awal
              berdirinya, sekolah ini telah menjadi salah satu lembaga pendidikan
              dasar yang berkomitmen memberikan layanan pendidikan terbaik kepada
              masyarakat. Dengan visi dan misi yang kuat, SDN 01 Manguharjo terus
              berkembang dalam kualitas akademik maupun non-akademik.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/p.jpg"
              alt="Sejarah SDN 01 Manguharjo"
              className="rounded-lg shadow-lg w-full md:w-4/5"
            />
          </div>
        </section>

        {/* Section Baru - Program Sekolah */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">
            Program Unggulan Sekolah
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-red-800 text-white rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5V4H2v16h5m10 0v-6H7v6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Sekolah Ramah Anak</h3>
              <p className="text-gray-200">
                Bebas Bullying dan Berkomunitas Sehat
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-red-800 text-white rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Sekolah Budaya</h3>
              <p className="text-gray-200">
                Berwawasan Digital berinteraksi Budaya Lokal
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-red-800 text-white rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2l4 -4"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Sekolah Adiwiyata</h3>
              <p className="text-gray-200">
                Hijau dan Segar serta Rimbun di Semua Sudut
              </p>
            </div>
          </div>
        </section>

   {/* 🔹 Section Baru - Akreditasi Sekolah */}
<section className="bg-gray-50 py-16 px-6">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">
      Akreditasi Sekolah
    </h2>
    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      SDN 01 Manguharjo Kota Madiun telah memperoleh{" "}
      <span className="font-bold text-red-800">Akreditasi A</span> dari{" "}
      <span className="font-semibold">
        Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)
      </span>
      . Prestasi ini menjadi bukti nyata komitmen sekolah dalam menjaga mutu
      pendidikan serta memberikan pelayanan terbaik kepada peserta didik dan
      masyarakat.
    </p>

    <div className="flex justify-center mt-12">
      <img
        src="/akreditasi.png"
        alt="Sertifikat Akreditasi Sekolah"
        className="rounded-2xl shadow-2xl w-full md:w-4/5 lg:w-3/4 transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>

        {/* Section 4 - Kontak */}
        <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl text-red-800 font-bold leading-tight">
              Ingin tahu lebih banyak tentang SDN 01 Manguharjo Kota Madiun?
            </h2>
            <p className="text-gray-600 text-xl mt-4">
              Kami siap memberikan informasi seputar profil sekolah, kegiatan
              belajar mengajar, maupun penerimaan peserta didik baru. Jangan
              ragu untuk menghubungi kami melalui kontak di samping ini.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {[
              {
                title: "Location",
                value: "JL.Hayam Wuruk no 06 Kel.Manguharjo Kota Madiun",
              },
              {
                title: "Email Address",
                value: "sdn01manguharjo@gmail.com",
              },
              {
                title: "Phone number",
                value: "[0351]467898",
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
