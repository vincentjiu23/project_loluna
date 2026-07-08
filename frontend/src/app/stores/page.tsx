"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const storeLocations = [
  {
    city: "Jakarta",
    stores: [
      { name: "Agung Toys", address: "Jl. Buaran Raya No.34, RT.6/RW.13, Klender, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440" },
      { name: "Yens Baby Shop - TK II", address: "Jl. Kemanggisan Ilir Raya No.15, RT.1/RW.7, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480" }
    ]
  },
  {
    city: "Depok",
    stores: [
      { name: "Faza Baby Shop", address: "Ruko Grha Kintamani, Jl. Radar Auri, Cisalak Ps., Kec. Cimanggis, Kota Depok, Jawa Barat 16452" }
    ]
  },
  {
    city: "Banten",
    stores: [
      { name: "Cilapop Baby Shop", address: "Jl. Yusuf Martadilaga Serang No.46, Cipare, Kec. Serang, Kota Serang, Banten 42117" }
    ]
  },
  {
    city: "Tangerang",
    stores: [
      { name: "Babywise BSD", address: "Jl. Boulevard BSD Tim. No.3C-3D Kav. AH 2, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310" },
      { name: "Mae Bebe", address: "Jl. Bintaro Utama 5 Blok. EA No. 5, Jurangmangu Timur, Pondok Aren, Pd. Ranji, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412" }
    ]
  },
  {
    city: "Bekasi",
    stores: [
      { name: "Calista Baby Shop", address: "Prima Orchard Trade Mall, Prima Orchard Trade Mall RT 001, RT.001/RW.012, Harapan Baru, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17123" },
      { name: "Hello Baby Bintara", address: "Jl. Bintara VIII No.14D, RT.005/RW.003, Bintara, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17134" },
      { name: "Hello Baby Tambun", address: "Jl. Raya Mangun Jaya No.8a, Mangunjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17112" }
    ]
  },
  {
    city: "Cirebon",
    stores: [
      { name: "Yogya Cirebon", address: "Jl. Kartini No.26, Sukapura, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45123" }
    ]
  },
  {
    city: "Garut",
    stores: [
      { name: "Yogya Garut", address: "Jl. Siliwangi No.21, Pakuwon, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44110" }
    ]
  },
  {
    city: "Sukabumi",
    stores: [
      { name: "Yogya Sukabumi", address: "Jl. R. E. Martadinata No.3, Gunungparang, Kec. Cikole, Kota Sukabumi, Jawa Barat 43111" }
    ]
  },
  {
    city: "Sumedang",
    stores: [
      { name: "Griya Plaza Sumedang", address: "Jl. Mayor Abdurahman No.163, Kotakaler, Kec. Sumedang Utara, Kabupaten Sumedang, Jawa Barat 45322" }
    ]
  },
  {
    city: "Surabaya",
    stores: [
      { name: "Mama Asi Baby Shop", address: "Perum Alam Bukit Raya Blok A 15 no. 27, Dahanreja, Kec. Gresik, Kabupaten Gresik, Jawa Timur 61124" },
      { name: "Palapa Toserba", address: "Jl. Adityawarman No.47, Sawunggaling, Kec. Wonokromo, Surabaya, Jawa Timur 60242" },
      { name: "Makmur Mulyosari", address: "Jl. Raya Mulyosari, Kalisari, Kec. Mulyorejo, Surabaya, Jawa Timur 60112" },
      { name: "Makmur Lidah Wetan", address: "Raya Lidah Wetan No.844, Lidah Kulon, Kec. Lakarsantri, Surabaya, Jawa Timur 60213" },
      { name: "Makmur Kapas Krampung", address: "Jl. Kapas Krampung No.138, Ploso, Kec. Tambaksari, Surabaya, Jawa Timur 60133" },
      { name: "Makmur Krampung 2", address: "Jl. Kapas Krampung No.75-E, Ploso, Kec. Tambaksari, Surabaya, Jawa Timur 60133" },
      { name: "Makmur Pucang", address: "Jl. Pucang Anom No.50, Pucang Sewu, Kec. Gubeng, Surabaya, Jawa Timur 60283" }
    ]
  },
  {
    city: "Bandung",
    stores: [
      { name: "Borma - Cijerah", address: "Jl. Raya Cijerah No.90, Cijerah, Kec. Bandung Kulon, Kota Bandung, Jawa Barat 40213" },
      { name: "Borma - Cikutra SMR", address: "Jl. Cikutra Barat No.66, Cigadung, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191" },
      { name: "Borma - DS Cipandung / SM Cipandung", address: "Borma Cipandung, Jl. A.H. Nasution No.4, Cipandung Kulon, Kec. Panyileukan, Kota Bandung, Jawa Barat 40615" },
      { name: "Borma - DS Setiabudi", address: "Jl. Dr. Setiabudi, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat" },
      { name: "Borma Gempol", address: "Melong, Cimahi Selatan, Cimahi City, Jawa Barat" },
      { name: "Borma Kerkop", address: "Jl. Kerkof No.35, Leuwigajah, Kec. Cimahi Sel., Kota Cimahi, Jawa Barat 40532" },
      { name: "Ciku Ciku Baby & Kids Shop", address: "Jl. Astana Anyar No.60, Cibadak, Kec. Astanaanyar, Kota Bandung, Jawa Barat 40241" },
      { name: "Indokids - Antapani", address: "Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291" },
      { name: "Indokids - Jatos", address: "Jl. Raya Jatinangor No.150, Jatinangor Town Square, GFA05, Kec. Sumedang, Jawa Barat 45363" },
      { name: "Lavie Baby House", address: "Jl. Imam Bonjol No.6, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132" },
      { name: "Prama Fresh Burangrang", address: "Jl. Burangrang No.37, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262" },
      { name: "Prama Fresh Garuda", address: "Jl. Garuda No.81, Garuda, Kec. Andir, Kota Bandung, Jawa Barat 40184" },
      { name: "Prama Fresh Perintis", address: "Jl. Perintis No.72, Sarijadi, Kec. Sukasari, Kota Bandung, Jawa Barat 40151" },
      { name: "Prama Toserba Babakan Sari", address: "Jl. Babakan Sari No.11, Babakan Sari, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40283" },
      { name: "Prama Toserba Ciparay", address: "Jl. Raya Laswi No.382, Serangmekar, Kec. Ciparay, Kabupaten Bandung, Jawa Barat 40381" },
      { name: "Prama Toserba Panjaran", address: "Jl. Raya Banjaran Barat No.588, Lebakwangi, Kec. Arjasari, Kabupaten Bandung, Jawa Barat 40379" },
      { name: "Suzana Babyshop", address: "Jl. Lembong No.12 14, RT.16/RW.18, Braga, Sumurbandung, Bandung City, West Java 40111" },
      { name: "Yens Baby Shop - Dakota", address: "Jl. Dakota No.109, Sukaraja, Kec. Cicendo, Kota Bandung, Jawa Barat 40175" },
      { name: "Yens Baby Shop - Lembang", address: "Jl. Raya Lembang 289 (Borma), Lembang, Bandung, Jawa Barat 40391" },
      { name: "Yens Baby Shop - Setiabudi", address: "Jl. Dr. Setiabudi No.174, Hegarmanah, Kec. Sukasari, Kota Bandung, Jawa Barat 40141" },
      { name: "Yogya Riau Junction", address: "LLRE Martadinata St, Citarum, Bandung Wetan, Bandung City, West Java 40115" }
    ]
  }
];

export default function Stores() {
  const { t } = useTranslation();
  const [activeCity, setActiveCity] = useState(storeLocations[0].city);
  const activeRegion = storeLocations.find(r => r.city === activeCity);

  return (
    <main className="pt-24 pb-32 bg-surface-container-lowest min-h-screen">
      {/* Header */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 pt-8 text-center">
        <ScrollReveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-sm shadow-sm mb-6">
            {t("stores.badge")}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {t("stores.title")}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            {t("stores.desc")}
          </p>
        </ScrollReveal>
      </section>

      {/* Tabs */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {storeLocations.map((region) => (
            <button
              key={region.city}
              onClick={() => setActiveCity(region.city)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCity === region.city
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-surface text-on-surface-variant hover:bg-primary-container hover:text-primary shadow-sm"
              }`}
            >
              {region.city}
            </button>
          ))}
        </div>
      </section>

      {/* Stores Horizontal Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeRegion?.stores.map((store, i) => (
              <div key={i} className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">storefront</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-lg">
                      {store.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-auto">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm mt-1 shrink-0">location_on</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {store.address}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
