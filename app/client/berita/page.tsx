"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from '@/components/Footer';

export default function BeritaPage() {
  const posts = [
    {
      id: 1,
      title:
        "Bisnis Franchise Es Teh Semanis Rasanya, Segini Harga Buka Usahanya",
      date: "August 9, 2024",
      author: "Najhan Zufahmi",
      category: "UMKM & Wirausaha",
      readTime: "8 Mins Read",
      image: "/berita1.jpg",
    },
    {
      id: 2,
      title:
        "Inovasi Siswa SD Muhammadiyah Sapen: Membuat Robot Daur Ulang Ramah Lingkungan",
      date: "September 12, 2024",
      author: "Rangga Dhiya",
      category: "Prestasi Sekolah",
      readTime: "6 Mins Read",
      image: "/berita2.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ==== Section 1: Header Judul Halaman ==== */}
      <section className="relative w-full h-[20vh] flex items-center justify-center bg-red-800">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Berita Sekolah
          </h1>
          <p className="text-lg md:text-xl">
            Informasi dan kegiatan terbaru dari SDN 01 Manguharjo Kota Madiun
          </p>
        </div>
      </section>

      {/* ==== Section 2: Daftar Berita ==== */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold uppercase mb-10 text-gray-800">
            Latest Posts
          </h2>

          <div className="flex flex-col gap-14">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col">
                {/* Gambar */}
                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Konten teks */}
                <div className="mt-4 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-red-600 cursor-pointer">
                    {post.title}
                  </h3>

                  <div className="flex justify-between flex-wrap mt-2 text-sm text-gray-600">
                    <div>
                      <span>Posted on {post.date}</span>
                      <span className="mx-1">|</span>
                      <span>
                        By{" "}
                        <span className="text-blue-600 hover:underline">
                          {post.author}
                        </span>
                      </span>
                      <span className="mx-1">|</span>
                      <Link
                        href="#"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {post.category}
                      </Link>
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
