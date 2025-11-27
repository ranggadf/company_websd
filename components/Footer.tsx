import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Music2, // sebagai pengganti TikTok
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-800 py-10 text-white">
      <div className="container mx-auto px-6">

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logosd.png"
                alt="SDN 01 Manguharjo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold tracking-wide">
                SDN 01 Manguharjo
              </h3>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Kami berkomitmen untuk mencetak siswa yang berprestasi,
              berkarakter, dan peduli lingkungan melalui pendidikan yang
              berkualitas dan berintegritas tinggi.
            </p>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-white/40 inline-block pb-1">
              Alamat
            </h4>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>
                Jl. Hayam Wuruk No. 06, Kecamatan Manguharjo, Kelurahan
                Manguharjo, Kota Madiun, Jawa Timur
              </span>
            </div>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-white/40 inline-block pb-1">
              Hubungi Kami
            </h4>
            <div className="flex items-center gap-3 text-sm mb-3 opacity-90 hover:opacity-100 transition-all">
              <Phone className="w-5 h-5" />
              <span>[0351] 467898</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition-all">
              <Mail className="w-5 h-5" />
              <span>sdnmanguharjo@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <hr className="border-t border-white/30 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left opacity-90">
            © 2025 SDN 01 Manguharjo Kota Madiun — All Rights Reserved
          </p>

          {/* Sosial Media */}
          <div className="flex gap-5">
            {[
              { icon: Youtube, href: "https://youtube.com/@sdn01manguharjomadiun13?si=l6R9t6KlgBXMPELM" },  
              { icon: Music2, href: "https://www.tiktok.com/@sdnmanguharjoesma?is_from_webapp=1&sender_device=pc" },   // TikTok → Music2 (tanpa error)
              { icon: Instagram, href: "https://www.instagram.com/sdnmanguharjo/?utm_source=ig_web_button_share_sheet" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-red-700 transition-all duration-300 transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
