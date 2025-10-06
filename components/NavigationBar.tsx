"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function NavigationBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // delay 300ms sebelum menutup
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md py-3 px-6 z-50">
      <div className="flex justify-between items-center ml-20">
        {/* Logo + Menu kiri */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logosd.png" // ganti sesuai path logo
                width={50}
                height={50}
                alt="Logo Sekolah"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Profile dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-[16px] font-semibold flex items-center gap-1 hover:text-red-600">
                Profile <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-[180px] p-2 z-50">
                  <ul className="flex flex-col gap-2">
                    <Link href="/client/profilesekolah" className="hover:text-red-600">
                      Profile Sekolah
                    </Link>
                    <Link href="/client/Fasilitas" className="hover:text-red-600">
                      Fasilitas
                    </Link>
                    <Link href="/visi-misi" className="hover:text-red-600">
                      Visi & Misi
                    </Link>
                    <Link href="/client/guru" className="hover:text-red-600">
                      Data Guru
                    </Link>
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/berita"
              className="text-[16px] font-semibold hover:text-red-600"
            >
              Berita
            </Link>
            <Link
              href="/client/ekstrakulikuler"
              className="text-[16px] font-semibold hover:text-red-600"
            >
              Ekstrakulikuler
            </Link>
            <Link
              href="/hubungi-kami"
              className="text-[16px] font-semibold hover:text-red-600"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Menu kanan (PPDB) */}
        <div>
          <Link
            href="/ppdb"
            className="text-[16px] font-semibold hover:text-red-600 mr-20"
          >
            PPDB
          </Link>
        </div>
      </div>
    </div>
  );
}
