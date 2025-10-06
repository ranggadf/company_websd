"use client";

import Footer from "@/components/Footer";

export default function DaftarGuruKaryawan() {
  return (
    <div className="w-full">
      {/* Section Judul Utama dengan Background Gambar */}
      <div
        className="bg-cover bg-[center_top_60%] h-64"
        style={{ backgroundImage: "url('/guru.jpeg')" }}
      >
        <h1 className="text-white text-[64px] font-bold text-center pt-24">
          Daftar Guru dan Karyawan
        </h1>
      </div>

      {/* Wrapper Section dengan Background Linear */}
      <div className="bg-[#FFFFFF]">
        {/* Section Kepala Sekolah */}
        <div className="py-16">
          <h1 className="text-[64px] font-bold text-center mb-10">
            Kepala Sekolah
          </h1>

          <div className="flex justify-center gap-8 flex-wrap">
            {/* Card Kepala Sekolah */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Kepala Sekolah
                </p>
              </div>
            </div>

            {/* Card Wakil Kepala Sekolah */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Wakil Kepala Sekolah
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Guru Kelas */}
        <div className="py-16">
          <h1 className="text-[64px] font-bold text-center mb-10">
            Guru Kelas
          </h1>

          <div className="flex justify-center gap-8 flex-wrap">
            {/* Guru Kelas 1 */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Kelas 1
                </p>
              </div>
            </div>

            {/* Guru Kelas 2 */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Kelas 2
                </p>
              </div>
            </div>

            {/* Guru Kelas 3 */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Kelas 3
                </p>
              </div>
            </div>

            {/* Guru Kelas 4 */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Kelas 4
                </p>
              </div>
            </div>

            {/* Guru Kelas 5 */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Kelas 5
                </p>
              </div>
            </div>

            {/* Guru Kelas 6 */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Kelas 6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Guru Mapel */}
        <div className="py-16">
          <h1 className="text-[64px] font-bold text-center mb-10">
            Guru Mapel
          </h1>

          <div className="flex justify-center gap-8 flex-wrap">
            {/* Guru Mapel B. Indonesia */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Mapel B. Indonesia
                </p>
              </div>
            </div>

            {/* Guru Mapel B. Inggris */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Mapel B. Inggris
                </p>
              </div>
            </div>

            {/* Guru Mapel B. Daerah */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Mapel B. Daerah
                </p>
              </div>
            </div>

            {/* Guru Mapel PJOK */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Mapel PJOK
                </p>
              </div>
            </div>

            {/* Guru Mapel PPKN */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Mapel PPKN
                </p>
              </div>
            </div>

            {/* Guru Mapel Agama */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Guru Mapel Agama
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Karyawan */}
        <div className="py-16">
          <h1 className="text-[64px] font-bold text-center mb-10">Karyawan</h1>

          <div className="flex justify-center gap-8 flex-wrap">
            {/* Guru Tenaga Kependidikan */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Tenaga Kependidikan
                </p>
              </div>
            </div>

            {/* Tenaga Tata Usaha */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Tenaga Tata Usaha
                </p>
              </div>
            </div>

            {/* Operator Sekolah */}
            <div className="bg-[#DF4043] w-[399px] h-[391px] rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-white bg-white w-[303px] h-[288px] rounded flex flex-col items-center justify-center">
                <img
                  src="/profil.png"
                  alt="Kepala Sekolah"
                  className="w-40 h-40 object-cover mb-4"
                />
                <p className="font-bold text-[20px]">Sri, S.Pd.</p>
                <p className="text-[#FF0000] font-bold text-[20px]">
                  Operator Sekolah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
