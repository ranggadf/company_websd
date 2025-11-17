"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import Footer from "@/components/Footer";
import { apiEndpoints, image_url } from "@/app/api/api";
import Image from "next/image";

interface FasilitasItem {
  id: number;
  judul: string;
  deskripsi: string;
  gambar: string;
}

export default function Fasilitas() {
  const [fasilitas, setFasilitas] = useState<FasilitasItem[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef<Toast>(null);

  // 🔹 Ambil data dari API GETFASILITAS
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiEndpoints.GETFASILITAS);
      setFasilitas(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.current?.show({
        severity: "error",
        summary: "Gagal Memuat",
        detail: "Tidak dapat mengambil data fasilitas.",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Jalankan fetchData saat komponen dimuat
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="pt-16">
      <Toast ref={toast} />

      {/* Section Judul */}
      <section className="relative bg-red-800 bg-center h-64 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            FASILITAS SDN 01 MANGUHARJO KOTA MADIUN
          </h1>
        </div>
      </section>

      {/* Section Fasilitas */}
      <section className="container mx-auto px-4 py-12">
        {loading ? (
          <p className="text-center text-gray-500">Memuat data fasilitas...</p>
        ) : fasilitas.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada data fasilitas.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fasilitas.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {item.gambar && (
                  <Image
                    src={`${image_url}/${item.gambar}`}
                    alt={item.judul}
                    width={400}
                    height={400}
                    className="max-w-full max-h-48 object-contain"
                    unoptimized // ⬅️ penting kalau localhost tanpa domain https
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">
                    {item.judul}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
