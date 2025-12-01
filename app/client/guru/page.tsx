"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer";
import { apiEndpoints, image_url } from "@/app/api/api";

export default function DaftarGuru() {
  const [kepalaSekolah, setKepalaSekolah] = useState<any[]>([]);
  const [guruMapel, setGuruMapel] = useState<any[]>([]);
  const [guruKelas, setGuruKelas] = useState<any[]>([]);
  const [karyawan, setKaryawan] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuru = async () => {
      try {
        const res = await axios.get(apiEndpoints.GETGuru);
        console.log("DATA DARI API:", res.data);

        const data = res.data;

        // Pisah berdasarkan kategori
        setKepalaSekolah(data.filter((x: any) => x.kategori === "Kepala Sekolah"));
        setGuruMapel(data.filter((x: any) => x.kategori === "Guru Mapel"));
        setGuruKelas(data.filter((x: any) => x.kategori === "Guru Kelas"));
        setKaryawan(data.filter((x: any) => x.kategori === "Karyawan"));
      } catch (err) {
        console.log("Error fetch guru:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGuru();
  }, []);

  // Grid Reusable
  const GridGuru = ({ data }: { data: any[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-10 max-w-7xl mx-auto px-6 py-10">
      {data.map((guru, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden border"
        >
          <img
            src={`${image_url}/${guru.gambar}`}
            alt={guru.nama}
            className="w-full h-[350px] object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold text-xl">{guru.nama}</h2>
            <p className="mt-1 text-gray-700">• {guru.jabatan}</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading)
    return (
      <div className="py-32 text-center text-xl font-semibold">
        Loading data guru...
      </div>
    );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-red-800 h-64 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Daftar Guru dan Staf SDN 01 Manguharjo
        </h1>
      </div>

      {/* KEPALA SEKOLAH */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mt-16">
        Kepala Sekolah
      </h2>

      <div className="flex justify-center py-10">
        {kepalaSekolah.length > 0 ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border w-[300px]">
            <img
              src={`${image_url}/${kepalaSekolah[0].gambar}`}
              alt={kepalaSekolah[0].nama}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="font-bold text-xl">{kepalaSekolah[0].nama}</h2>
              <p className="mt-1 text-gray-700">• {kepalaSekolah[0].jabatan}</p>
            </div>
          </div>
        ) : (
          <p>Tidak ada data kepala sekolah.</p>
        )}
      </div>

      {/* GURU MAPEL */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mt-16">
        Guru Mapel
      </h2>
      <GridGuru data={guruMapel} />

      {/* GURU KELAS */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mt-16">
        Guru Kelas
      </h2>
      <GridGuru data={guruKelas} />

      {/* KARYAWAN */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mt-16">
        Karyawan
      </h2>
      <GridGuru data={karyawan} />

      <Footer />
    </div>
  );
}
