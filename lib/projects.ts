export type Project = {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  gradient: string;
  icon: string;
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
    slug: "sistem-informasi-inventaris-teknisi",
    title: "Sistem Informasi Inventaris Teknisi",
    description:
      "Aplikasi web yang dikembangkan untuk mendukung pengelolaan inventaris teknisi di PT. Aplikanusa Lintasarta Duri. Sistem menyediakan fitur manajemen data barang, kategori, peminjaman, pengembalian, laporan PDF, pencarian dan filter data, serta notifikasi email otomatis menggunakan Laravel dan MySQL.",
    techs: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    gradient: "from-red-500/20 to-orange-500/20",
    icon: "🎓",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/placeholder-1.jpg",
      "/images/projects/placeholder-2.jpg",
    ],
    details: {
      objective:
        "Membangun sistem terpusat yang memudahkan mahasiswa, dosen, dan staf administrasi dalam mengelola aktivitas akademik secara efisien dan transparan.",
      features: [
        "Sistem Autentikasi Role-based (Admin, Dosen, Mahasiswa)",
        "Pengisian dan Validasi Kartu Rencana Studi (KRS)",
        "Melihat Kartu Hasil Studi (KHS) dan Transkrip Nilai",
        "Manajemen Jadwal Kuliah dan Absensi",
        "Export laporan akademik ke PDF/Excel",
      ],
      challenges:
        "Struktur data akademik (relasi antara mahasiswa, mata kuliah, jadwal, dan nilai) cukup kompleks. Menjaga agar query database tetap cepat saat data bertambah besar menjadi tantangan utama.",
      solutions:
        "Menerapkan teknik optimasi database seperti indexing pada tabel-tabel utama, menggunakan Eager Loading di Laravel (Eloquent) untuk menghindari N+1 query problem, dan menormalkan skema database.",
    },
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan tema Sakura Blossom menggunakan Next.js dan React. Menampilkan animasi interaktif dan desain modern glassmorphism.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-pink-500/20 to-purple-500/20",
    icon: "🌸",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/imageproject1.png",
    ],
    details: {
      objective:
        "Menampilkan identitas profesional, keterampilan, dan pengalaman kerja saya dalam antarmuka yang menarik, modern, dan sangat responsif.",
      features: [
        "Desain UI/UX Kustom dengan tema 'Sakura Blossom'",
        "Animasi kompleks (CSS keyframes) tanpa mengorbankan performa",
        "Desain Fully Responsive untuk mobile, tablet, dan desktop",
        "Komponen UI Reusable (Button, Cards, Timeline)",
        "SEO Optimized dengan metadata Next.js",
      ],
      challenges:
        "Membuat animasi partikel (kelopak sakura jatuh) yang berjalan halus di semua perangkat tanpa membebani thread utama JavaScript.",
      solutions:
        "Menggunakan animasi CSS Keyframes murni untuk pergerakan partikel, menghindari animasi berbasis Javascript (seperti requestAnimationFrame atau library berat) sehingga rendering ditangani langsung oleh GPU browser.",
    },
  },
  {
    slug: "dashboard-data-analytics",
    title: "Dashboard Data Analytics",
    description:
      "Dashboard interaktif untuk visualisasi data menggunakan chart dan tabel dinamis. Mendukung filter dan export data ke berbagai format.",
    techs: ["React", "JavaScript", "Chart.js", "REST API"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "📊",
    githubUrl: "https://github.com/CiciSisilia",
    images: [
      "/images/projects/placeholder-1.jpg",
      "/images/projects/placeholder-2.jpg",
    ],
    details: {
      objective:
        "Menyediakan alat bagi stakeholder untuk memantau performa bisnis (KPIs) secara real-time dengan antarmuka visual yang intuitif.",
      features: [
        "Integrasi Data Real-time via REST API",
        "Visualisasi interaktif (Bar, Line, Pie charts)",
        "Sistem Filtering data berdasarkan rentang waktu dan kategori",
        "Data Grid interaktif dengan pagination dan sorting",
        "Fitur Export ke CSV",
      ],
      challenges:
        "Menangani rendering ribuan baris data di sisi klien (browser) sering kali menyebabkan UI lag (jiggle) saat melakukan filtering atau sorting.",
      solutions:
        "Menerapkan konsep virtualized list (windowing) untuk tabel data dan me-memoize fungsi-fungsi berat menggunakan useMemo dan useCallback di React, sehingga re-render hanya terjadi jika data benar-benar berubah.",
    },
  },
];
