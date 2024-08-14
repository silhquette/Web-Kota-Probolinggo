-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2024 at 03:57 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `format` varchar(255) NOT NULL,
  `announced` varchar(255) NOT NULL,
  `period` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id`, `name`, `summary`, `format`, `announced`, `period`, `link`, `category`) VALUES
(1, 'Sejarah', 'Berisi sejarah dan latar belakang berdirinya Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(2, 'Lambang Daerah', 'Berisi tentang arti dari bentuk, warna dan gambar yang terdapat pada lambang Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(3, 'Visi-Misi', 'Berisi tentang visi misi Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(4, 'Daftar nama Pejabat Pemerintah Kota', 'Berisi tentang ringkasan informasi tentang nama pejabat', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(5, 'Profil Pimpinan Daerah', 'Berisi tentang profil Wali Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(6, 'Struktur Organisasi', 'Berisi tentang struktur organisasi Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(7, 'LHKPN', 'Berisi informasi hasil pemeriksaan LHKPN Wali Kota, Sekda Kota Probolinggo dan Pejabat Eselon II dan III Mandiri', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Profil Pemerintah Kota Probolinggo'),
(8, 'Profil PPID', 'Berisi tentang informasi Profil PPID Utama Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Informasi Tentang PPID Kota Probolinggo'),
(9, 'Profil PPID Pelaksana ', 'Berisi tentang profil PPID Pelaksana', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Informasi Tentang PPID Kota Probolinggo'),
(10, 'Tupoksi PPID', 'Berisi tentang tupoksi PPID', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Informasi Tentang PPID Kota Probolinggo'),
(11, 'Struktur Organisasi PLID', 'Berisi tentang struktur organisasi PLID', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Informasi Tentang PPID Kota Probolinggo'),
(12, 'Informasi tentang program dan kegiatan Kota Probolinggo ', 'Berisi tentang ringkasan informasi dan program kegiatan yang sedang dijalankan di Kota Probolinggo (RKPD)', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Program dan Kegiatan'),
(13, 'Informasi tentang ringkasan laporan akses informasi Publik di Kota Probolinggo', 'Berisi tentang ringkasan laporan permohonan  informasi di Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Akses Informasi'),
(14, 'Informasi tentang Data Statistik Kota Probolinggo', 'Berisi tentang Data Statistik Kota Probolinggo', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi Satu Data'),
(15, 'LKPD 2023', 'Berisi tentang Laporan Keuangan Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(16, 'LRA 2023', 'Berisi tentang Laporan Realisasi Anggaran Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(17, 'Neraca 2023', 'Berisi tentang Laporan Neraca Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(18, 'Laporan Arus Kas 2023', 'Berisi tentang informasi laporan Arus Kas', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(19, 'CALK 2023', 'Berisi tentang Catatan Atas Laporan Keuangan Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(20, 'Daftar Aset 2023', 'Berisi tentang Daftar Aset & Iventaris Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(21, 'KUA (Kebijakan Umum Anggaran) 2024', 'Berisi tentang Informasi Kebijakan Umum Rencana Anggaran Pendapatan dan Belanja Daerah (APBD) Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(22, 'Prioritas Pagu Anggaran Sementara (PPAS) 2024', 'Berisi tentang  Prioritas dan Plafon Anggaran', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(23, 'Prioritas Pagu Anggaran Sementara (PPAS) 2024', 'Sementara dan Anggaran Pendapatan dan Belanja Daerah (APBD) Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(24, 'RKA 2024', 'Berisi tentang informasi Rencana Kerja Anggaran Daerah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(25, 'DPA 2024', 'Berisi tentang Ringkasan Dokumen Pelaksanaan Anggaran Satuan Kerja Perangkat Daerah (DPA SKPD) Pemerintah Kota Probolinggo', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Laporan Keuangan'),
(26, 'Peraturan Perundang-Undangan / keputusan / kebijakan yang disahkan', 'Berisi tentang informasi kebijakan yang mengikat dan berdampak bagi publik', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Peraturan Badan Publik'),
(27, 'SK PPID Utama dan Pelaksana', 'SK PPID Utama dan Pelaksana', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Peraturan Badan Publik'),
(28, 'Informasi tentang Peraturan / Keputusan / dan/atau Kebijakan Badan Publik', 'Berisi tentang informasi tentang kebijakan Badan Publik', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Peraturan Badan Publik'),
(29, 'Tata cara memperoeh informasi', 'Berisi tentang alur permohonan informasi', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Tata Cara Memperoleh Informasi Publik'),
(30, 'Informasi tentang bencana alam ', 'Berisi tentang informasi bencana alam seperti kekeringan, kebakaran hutan karena faktor alam, hama penyakit tanaman, epidemik, wabah, kejadian luar biasa, kejadian antariksa atau benda benda angkasa', 'Softcopy', 'Serta Merta', 'Selama Berlaku', 'https://', 'Peringatan Dini / Keadaan Darurat'),
(31, 'Informasi tentang keadaan bencana non alam', 'Berisi tentang informasi bencana non alam seperti kegagalan industri atau teknologi, dampak industri, ledakan nuklir, pencemaran lingkungan dan kegiatan keantariksaan', 'Softcopy', 'Serta Merta', 'Selama Berlaku', 'https://', 'Peringatan Dini / Keadaan Darurat'),
(32, 'Bencana sosial', 'seperti kerusuhan sosial, konflik sosial atar kelompok atau antar komunitas masyarakat dan teror', 'Softcopy', 'Serta Merta', 'Selama Berlaku', 'https://', 'Peringatan Dini / Keadaan Darurat'),
(33, 'Informasi tentang jenis, persebaran dan daerah yang menjadi sumber penyakit yang berpotensi menular', 'berisi tentang jenis, persebaran dan daerah yang menjadi sumber penyakit yang berpotensi menular', 'Softcopy', 'Serta Merta', 'Selama Berlaku', 'https://', 'Peringatan Dini / Keadaan Darurat'),
(34, 'Informasi tentang racun pada bahan makanan yang dikonsumsi oleh masyarakat', 'Berisi Informasi tentang racun pada bahan makanan yang dikonsumsi oleh masyarakat', 'Softcopy', 'Serta Merta', 'Selama Berlaku', 'https://', 'Peringatan Dini / Keadaan Darurat'),
(35, 'Informasi tentang rencana gangguan terhadap utilitas publik', 'Berisi Informasi tentang rencana gangguan terhadap utilitas publik', 'Softcopy', 'Serta Merta', 'Selama Berlaku', 'https://', 'Peringatan Dini / Keadaan Darurat'),
(36, 'Daftar Informasi Publik Kota Probolinggo', 'Berisi Daftar Informasi Publik Kota Probolinggo', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Daftar Informasi Publik (DIP)'),
(37, 'Daftar Informasi Publik PPID Pelaksana Kota Probolinggo', 'Berisi Daftar Informasi Publik PPID Pelaksana Kota Probolinggo', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Daftar Informasi Publik (DIP)'),
(38, 'Seluruh Informasi Lengkap yang Wajib Disediakan dan Diumumkan Secara Berkala', 'Berisi seluruh Informasi Lengkap yang Wajib Disediakan dan Diumumkan Secara Berkala', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Seluruh Informasi Lengkap yang Wajib Disediakan dan Diumumkan Secara Berkala'),
(39, 'Pedoman Pengelolaan Organisasi', 'Kebijakan tentang Pembentukan dan Susunan Perangkat Daerah', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi tentang Organisasi, Administrasi, Kepegawaian, dan Keuangan'),
(40, 'Pedoman Pengelolaan Organisasi', 'Kebijakan tentang Susunan Organisasi, Tugas dan Fungsi pada Unit Pelaksana Teknis Daerah di lingkungan pemerintah Kota Probolinggo', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi tentang Organisasi, Administrasi, Kepegawaian, dan Keuangan'),
(41, 'Pedoman Pengelolaan Administrasi', 'Kebijakan tentang Tentang Tata Naskah Dinas Di Lingkungan Pemerintah Kota Probolinggo', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi tentang Organisasi, Administrasi, Kepegawaian, dan Keuangan'),
(42, 'Pedoman Pengelolaan Kepegawaian', 'Kebijakan tentang Pengelolaan Kepegawaian ', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi tentang Organisasi, Administrasi, Kepegawaian, dan Keuangan'),
(43, 'Pedoman Pengelolaan Keuangan', 'Kebijakan Tentang Pengelolaan Keuangan Daerah', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi tentang Organisasi, Administrasi, Kepegawaian, dan Keuangan'),
(44, 'Surat-surat Perjanjian dengan pihak ketiga berserta dokumen pendukung', 'Berisi  Surat-surat Perjanjian dengan pihak ketiga berserta dokumen pendukung', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Surat-surat Perjanjian dengan pihak ketiga berserta dokumen pendukung'),
(45, 'Syarat-syarat Perizinan', 'Berisi Syarat-syarat Perizinan', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Syarat-syarat Perizinan, Izin yang Diterbitkan dan/atau dikeluarkan berikut dokumen pendukungnya dan laporan penataan izin yang diberikan'),
(46, 'Izin yang Diterbitkan dan/atau dikeluarkan', 'Berisi  Izin yang Diterbitkan dan/atau dikeluarkan', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Syarat-syarat Perizinan, Izin yang Diterbitkan dan/atau dikeluarkan berikut dokumen pendukungnya dan laporan penataan izin yang diberikan'),
(47, 'laporan penataan izin yang diberikan', 'Berisi laporan penataan izin yang diberikan', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Syarat-syarat Perizinan, Izin yang Diterbitkan dan/atau dikeluarkan berikut dokumen pendukungnya dan laporan penataan izin yang diberikan'),
(48, 'Rencana Strategis dan Rencana Kerja Badan Publik', 'Berisi Rencana Strategis dan Rencana Kerja Badan Publik', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Rencana Strategis dan Rencana Kerja Badan Publik'),
(49, 'SOP', 'Berisi Standar Operasional Prosedur Layanan Publik', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Standar Pelayanan Publik'),
(50, 'SPP', 'Berisi Standar Pelayanan Publik', 'Softcopy', 'Berkala', 'Selama Berlaku', 'https://', 'Standar Pelayanan Publik'),
(51, 'Daftar serta Hasil-Hasil Penelitian yang Dilakukan', 'Berisi  Daftar serta Hasil-Hasil Penelitian yang Dilakukan', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Daftar serta Hasil-Hasil Penelitian yang Dilakukan'),
(52, 'Informasi publik lain yang telah dinyatakan terbuka bagi masyarakat berdasarkan mekanisme', 'Berisi  Informasi publik lain yang telah dinyatakan terbuka bagi masyarakat berdasarkan mekanisme', 'Softcopy', 'Setiap Saat', 'Selama Berlaku', 'https://', 'Informasi publik lain yang telah dinyatakan terbuka bagi masyarakat berdasarkan mekanisme');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
