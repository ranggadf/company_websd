import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-800 py-8">
      <div className="container mx-auto px-4">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Tagline */}
          <div>
            <img
              src="/logosd.png"
              alt="SDN 01 Manguharjo"
              className="h-12 mb-4"
            />
            <p className="text-sm text-white leading-relaxed">
              Kami menawarkan berbagai layanan pendidikan dan kegiatan
              untuk membentuk siswa yang berprestasi, berkarakter,
              dan peduli lingkungan.
            </p>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Alamat</h4>
            <div className="flex items-start gap-2 text-sm text-white">
              <MapPin className="w-5 h-5 mt-0.5" />
              <span>
                Jl. Hayam Wuruk No. 06, Kecamatan Manguharjo, Kelurahan
                Manguharjo, Kota Madiun - Jawa Timur
              </span>
            </div>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Hubungi Kami</h4>
            <div className="flex items-center gap-2 text-sm text-white mb-2">
              <Phone className="w-5 h-5" />
              <span>0811-0516-19</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white">
              <Mail className="w-5 h-5" />
              <span>info@godong.id</span>
            </div>
          </div>
        </div>

        

        {/* Garis Pembatas */}
        <hr className="mt-8 border-t border-white/50" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-sm text-white text-center md:text-left">
            © 2024 All rights reserved by SDN 01 Manguharjo Kota Madiun
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-[#366938]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-[#366938]">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-[#366938]">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
