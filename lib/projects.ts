export type Project = {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  gradient: string;
  githubUrl: string;
  images: string[];
  details: {
    objective: string;
    features: string[];
    challenges: string;
    solutions: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "sistem-informasi-pengelolaan-inventaris-teknisi",
    title: "Sistem Informasi Pengelolaan Inventaris Teknisi Berbasis Web",
    description:
      "Aplikasi web yang dikembangkan untuk mendukung pengelolaan inventaris teknisi di PT. Aplikanusa Lintasarta Duri. Sistem menyediakan fitur manajemen data barang, kategori, peminjaman, pengembalian, laporan PDF, pencarian dan filter data, serta notifikasi email otomatis menggunakan Laravel dan MySQL.",
    techs: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Xampp"],
    gradient: "from-red-500/20 to-orange-500/20",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/inventaris.png",
      "/images/projects/inventaris-1.png",
      "/images/projects/inventaris-2.png",
      "/images/projects/inventaris-3.png",
      "/images/projects/inventaris-4.png",
      "/images/projects/magang.jpeg",
    ],
    details: {
      objective:
        "Membangun sistem terpusat yang memudahkan pengawasan inventaris barang, pelacakan peminjaman alat teknisi, dan pembuatan laporan secara cepat dan akurat.",
      features: [
        "Manajemen Data Inventaris",
        "Manajemen Peminjaman & Pengembalian Barang",
        "Manajemen Pengguna (Admin & Teknisi)",
        "Notifikasi Otomatis melalui Email",
        "Pencarian & Filter Data Inventaris",
        "Laporan Inventaris dan Riwayat Peminjaman",
        "Dashboard Admin & Teknisi",
        "Kelola Kategori dan Barang",

      ],
      challenges:
        "Pengelolaan inventaris masih dilakukan secara manual sehingga menyulitkan pencatatan, pelacakan, dan pemantauan aset.",
      solutions:
        "Mengembangkan aplikasi berbasis Laravel dengan fitur manajemen inventaris, notifikasi email, serta pencarian data untuk meningkatkan efisiensi pengelolaan inventaris.",
    },
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan tema Sakura Blossom menggunakan Next.js dan React. Menampilkan animasi interaktif dan desain modern glassmorphism.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-pink-500/20 to-purple-500/20",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/portfolio-1.png",
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-3.png",
      "/images/projects/portfolio-4.png",
    ],
    details: {
      objective:
        "Menampilkan identitas profesional, keterampilan, dan pengalaman kerja saya dalam antarmuka yang menarik, modern, dan sangat responsif.",
      features: [
        "Desain UI/UX Kustom dengan tema 'Sakura Blossom'",
        "Animasi partikel & floating tech modern",
        "Desain Fully Responsive untuk mobile, tablet, dan desktop",
        "Galeri Kolase Proyek 4 Kolom Interaktif",
        "SEO Optimized dengan metadata Next.js",
      ],
      challenges:
        "Membuat animasi partikel (kelopak sakura jatuh) dan menu mobile yang berjalan mulus tanpa mengganggu scroll page di perangkat seluler.",
      solutions:
        "Menggunakan animasi CSS Keyframes murni untuk rendering GPU serta menyelaraskan scroll-margin-top dan overflow lock pada mobile menu.",
    },
  },
  {
    slug: "analisis-interaktif-persebaran-dan-dampak-bencana-alam-di-indonesia-berdasarkan-lokasi-jenis-dan-waktu",
    title: "Analisis Interaktif Persebaran dan Dampak Bencana Alam di Indonesia Berdasarkan Lokasi, Jenis, dan Waktu",
    description:
      "Membangun dashboard interaktif menggunakan Tableau Public untuk menganalisis persebaran dan dampak bencana alam di Indonesia berdasarkan lokasi, jenis, dan waktu menggunakan data BNPB periode 2018–2024. Dashboard menyediakan visualisasi spasial, temporal, dan analisis dampak guna mendukung pengambilan keputusan serta mitigasi bencana.",
    techs: ["Tableau"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/datavisual.png",
      "/images/projects/datavisual-1.png",
      "/images/projects/datavisual-2.png",
      "/images/projects/datavisual-3.png",
      "/images/projects/datavisuall.jpeg",
    ],
    details: {
      objective:
        "Mengembangkan dashboard interaktif menggunakan Tableau Public untuk menganalisis persebaran dan dampak bencana alam di Indonesia berdasarkan lokasi, jenis bencana, dan waktu, sehingga menghasilkan wawasan yang dapat mendukung mitigasi bencana, pengambilan keputusan, serta meningkatkan kesiapsiagaan masyarakat..",
      features: [
        "Dashboard interaktif menggunakan Tableau Public.",
        "Peta persebaran bencana (Choropleth Map) berdasarkan provinsi di Indonesia.",
        "Visualisasi tren waktu (Line Chart) untuk melihat perubahan jumlah bencana dari tahun 2018–2024.",
        "Visualisasi jumlah kejadian berdasarkan jenis bencana (Bar Chart).",
        "Analisis 10 provinsi dengan jumlah korban meninggal terbanyak.",
        "Visualisasi jumlah korban berdasarkan jenis bencana (meninggal, luka-luka, dan hilang).",
        "Filter interaktif berdasarkan tahun dan jenis bencana.",
        "Tooltip informatif yang menampilkan detail data saat pengguna mengarahkan kursor ke visualisasi.",
      ],
      challenges:
        "Membersihkan dan menstandarkan data bencana yang masih berupa data mentah agar dapat divisualisasikan secara akurat.",
      solutions:
        "Melakukan proses data preprocessing menggunakan Microsoft Excel, kemudian membangun dashboard interaktif dengan Tableau Public untuk menghasilkan visualisasi yang akurat dan mudah dianalisis.",
    },
  },
];
