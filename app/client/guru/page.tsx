"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { apiEndpoints, image_url } from "@/app/api/api";
import Footer from "@/components/Footer";

interface Guru {
  id: number;
  kategori: string;
  nama: string;
  jabatan: string;
  gambar: string;
}

interface KategoriGuru {
  kategori: string;
  gurus: Guru[];
}

export default function DaftarGuruKaryawan() {
  const [kategoriGuru, setKategoriGuru] = useState<KategoriGuru[]>([]);

  useEffect(() => {
    axios
      .get<KategoriGuru[]>(apiEndpoints.GETGURU_BY_KATEGORI_ALL)
      .then((res) => setKategoriGuru(res.data))
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div
        className="bg-cover bg-[center_top_60%] h-64"
        style={{ backgroundImage: "url('/guru.jpeg')" }}
      >
        <h1 className="text-white text-[64px] font-bold text-center pt-24">
          Daftar Guru dan Karyawan
        </h1>
      </div>

      {/* Loop kategori */}
      {kategoriGuru.map((kategoriItem) => (
        <div key={kategoriItem.kategori} className="py-16 bg-[#FFFFFF]">
          <h1 className="text-[64px] font-bold text-center mb-10">
            {kategoriItem.kategori}
          </h1>

          <div className="flex justify-center gap-8 flex-wrap">
            {kategoriItem.gurus.length > 0 ? (
              kategoriItem.gurus.map((guru: Guru) => (
                <div
                  key={guru.id}
                  className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center"
                >
                  <div className="bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                    <img
                      src={`${image_url}/${guru.gambar}`}
                      alt={guru.nama}
                      className="w-40 h-40 object-cover mb-4 rounded-full"
                    />
                    <p className="font-bold text-[20px]">{guru.nama}</p>
                    <p className="text-[#FF0000] font-bold text-[20px]">
                      {guru.jabatan}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Tidak ada data</p>
            )}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
