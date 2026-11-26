export type Project = {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  gradient: string;
  githubUrl?: string;
  downloadUrl?: string;
  images: string[];
  beforeAfterImages?: {
    before: { src: string; caption: string };
    after: { src: string; caption: string };
    title: string;
  };
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
    slug: "poster-webdesign",
    title: "Poster Webdesign",
    description:
      "Pembuatan poster SI INTEL dilakukan menggunakan CorelDRAW dengan menerapkan prinsip desain yang menarik, informatif, dan profesional. Poster dirancang untuk memperkenalkan Sistem Inventaris Teknisi Lintasarta melalui penyusunan layout, pemilihan warna, tipografi, ikon, serta elemen visual yang menampilkan fitur, keunggulan, dan teknologi yang digunakan sehingga informasi dapat disampaikan secara jelas dan mudah dipahami.",
    techs: ["CorelDRAW", "Layout Design", "Graphic Design"],
    gradient: "from-pink-500/20 to-purple-500/20",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/posterweb.png",
    ],
    details: {
      objective:
        "Merancang poster promosi SI INTEL yang informatif, menarik, dan profesional sebagai media publikasi sistem.",
      features: [
        "Layout modern dan terstruktur",
        "Kombinasi warna sesuai identitas instansi",
        "Tipografi yang mudah dibaca",
        "Mockup laptop dan smartphone",
        "Penyajian fitur, keunggulan, dan arsitektur sistem secara visual",
      ],
      challenges:
        "Menyusun informasi yang cukup banyak ke dalam satu poster tanpa mengurangi keterbacaan dan estetika.", solutions:
        "Menggunakan layout yang terstruktur, hierarki visual yang jelas, serta pemilihan warna, ikon, dan tipografi yang konsisten agar informasi mudah dipahami."
    },
  },
  {
    slug: "analisis-interaktif-persebaran-dan-dampak-bencana-alam-di-indonesia-berdasarkan-lokasi-jenis-dan-waktu",
    title: "Analisis Interaktif Persebaran dan Dampak Bencana Alam di Indonesia Berdasarkan Lokasi, Jenis, dan Waktu",
    description:
      "Membangun dashboard interaktif menggunakan Tableau Public untuk menganalisis persebaran dan dampak bencana alam di Indonesia berdasarkan lokasi, jenis, dan waktu menggunakan data BNPB periode 2018–2024. Dashboard menyediakan visualisasi spasial, temporal, dan analisis dampak guna mendukung pengambilan keputusan serta mitigasi bencana.",
    techs: ["Tableau", "Microsoft Excel", "Data Visualization"],
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
  {
    slug: "sales-data-analysis-dashboard",
    title: "Business Intelligence Project: Sales Data Analysis & Dashboard",
    description:
      "Analisis data penjualan menggunakan Microsoft Excel untuk mengolah data transaksi, melakukan data cleaning, menganalisis sales dan profit, serta menghasilkan dashboard interaktif untuk membantu memahami performa penjualan berdasarkan kategori, wilayah, dan periode.",
    techs: ["Microsoft Excel", "PivotTable", "PivotChart", "Data Cleaning", "Data Analysis"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    downloadUrl: "https://drive.google.com/file/d/1UxD9az46MTTaM7dObjqcLuKcabJoFgwg/view?usp=sharing",
    images: [
      "/images/projects/before-cleaning.png",
      "/images/projects/after-cleaning.png",
      "/images/projects/analisis.png",
      "/images/projects/sales-trend.png",
      "/images/projects/top10-productbysales.png",
      "/images/projects/top10-productbyprofit.png",
      "/images/projects/dashboard1.jpg",
      "/images/projects/dashboard2.jpg",
    ],
    beforeAfterImages: {
      title: "Data Cleaning: Before & After",
      before: {
        src: "/images/projects/before-cleaning.png",
        caption: "Before — Data mentah sebelum proses cleaning, masih terdapat data kosong, duplikasi, dan format yang tidak konsisten.",
      },
      after: {
        src: "/images/projects/after-cleaning.png",
        caption: "After — Data yang sudah dibersihkan, distandarisasi formatnya, dan siap untuk dianalisis.",
      },
    },
    details: {
      objective:
        "Membersihkan dan mempersiapkan data transaksi sebelum proses analisis. Menganalisis sales dan profit berdasarkan kategori, wilayah, produk, dan periode. Mengidentifikasi tren penjualan dan produk dengan performa terbaik. Membuat dashboard untuk menyajikan hasil analisis secara visual.",
      features: [
        "Data Cleaning & Preparation",
        "Sales Analysis",
        "Profit Analysis",
        "Sales Trend Analysis",
        "Category Analysis",
        "Regional Analysis",
        "Top 10 Product Analysis",
        "Sales Dashboard",
      ],
      challenges:
        "Data membutuhkan proses cleaning dan penyesuaian format sebelum dapat dianalisis. Mengolah dataset agar dapat digunakan untuk berbagai kebutuhan analisis. Menyajikan berbagai hasil analisis dalam dashboard yang tetap mudah dipahami",
      solutions:
        "Melakukan data cleaning dan standardisasi format data. Menggunakan PivotTable dan PivotChart untuk mengolah serta menganalisis data. Menggunakan KPI dan visualisasi untuk menyederhanakan hasil analisis. Menyusun dashboard dengan informasi utama agar mudah dibaca dan dipahami",
    },
  },
];

