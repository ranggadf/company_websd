"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { apiEndpoints } from "@/app/api/api";

interface NavbarItem {
  id: number;
  label: string;
  path_to: string;
}

export default function NavigationBar() {
  const [dropdownItems, setDropdownItems] = useState<NavbarItem[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 🔹 Ambil data dropdown dari backend
  useEffect(() => {
    const fetchDropdown = async () => {
      try {
        const res = await axios.get(apiEndpoints.GETNAVBAR);
        // Pastikan respons sesuai (cek di console bila beda)
        setDropdownItems(res.data.data || res.data);
      } catch (error) {
        console.error("Gagal memuat data dropdown navbar:", error);
      }
    };
    fetchDropdown();
  }, []);

  // 🔹 Dropdown hover handler
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md py-3 px-6 z-50">
      <div className="flex justify-between items-center ml-20">
        {/* === Logo === */}
        <div className="flex items-center gap-10">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logosd.png" width={50} height={50} alt="Logo Sekolah" />
            </Link>
          </div>

          {/* === Menu Utama (Manual) === */}
          <div className="hidden md:flex items-center gap-8">
            {/* Dropdown Profile (Dinamis dari Backend) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-[16px] font-semibold flex items-center gap-1 hover:text-red-600 transition-colors duration-200">
                Profile <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-0 mt-3 bg-white shadow-lg rounded-lg w-[200px] overflow-hidden transform transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <ul className="flex flex-col">
                  {dropdownItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path_to}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu lainnya (manual) */}
            <Link
              href="/client/berita"
              className="text-[16px] font-semibold hover:text-red-600 transition-colors duration-200"
            >
              Berita
            </Link>
            <Link
              href="/client/ekstrakulikuler"
              className="text-[16px] font-semibold hover:text-red-600 transition-colors duration-200"
            >
              Ekstrakurikuler
            </Link>
            <Link
              href="/client/hubungi"
              className="text-[16px] font-semibold hover:text-red-600 transition-colors duration-200"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* === Menu kanan (PPDB) === */}
        <div>
          <a
            href="https://madiunkota.spmb.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-semibold hover:text-red-600 mr-20 transition-colors duration-200"
          >
            PPDB
          </a>
        </div>
      </div>
    </div>
  );
}
