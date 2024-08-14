-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2024 at 03:55 PM
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
-- Table structure for table `awards`
--

CREATE TABLE `awards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` mediumtext NOT NULL,
  `year` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `awards`
--

INSERT INTO `awards` (`id`, `title`, `year`) VALUES
(1, 'Penghargaan sebagai Tokoh Penggerak Koperasi Madya atas Jasa Kepedulian Terhadap Pengembangan Koperasi untuk Pj. Wali Kota Probolinggo dari Dewan Koperasi Indonesia', '2024'),
(2, 'Penghargaan Lencana Darma Bakti diterima oleh Kamabicab Gerakan Pramuka Kota Probolinggo dari Kwartir Nasional (Kwarnas) Gerakan Pramuka', '2024'),
(3, 'Opini Wajar Tanpa Pengecualian (WTP) 7 kali berturut-turut atas Laporan Hasil Pemeriksaan (LHP) Laporan Keuangan Pemerintah Daerah (LKPD) tahun 2023 dari Badan Pemeriksa Keuangan (BPK) Perwakilan Jawa Timur', '2024'),
(4, 'Penghargaan Top BUMD Award 2024 dengan Kategori Bintang 4 yang diraih oleh RSUD Dokter Mohamad Saleh', '2024'),
(5, 'Penghargaan Piala Adipura Kategori Kota Sedang Tahun 2023 dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK) Republik Indonesia', '2024'),
(6, 'Penghargaan Anugerah Parahita Ekapraya (APE) Kategori Madya tahun 2023 dari Kementerian Pemberdayaan Perempuan dan Perlindungan Anak Republik Indonesia', '2023'),
(7, 'Rekor MURI untuk Wali Kota Probolinggo, sebagai Wali Kota Perintis Program “Refleksi” dari Museum Rekor Dunia Indonesia', '2023'),
(8, 'Innovative Government Award (IGA) 2023 sebagai Kota Sangat Inovatif dari Kementerian Dalam Negeri', '2023'),
(9, 'Penghargaan Kabupaten/Kota Sehat (Swasti Saba) Kategori Padapa dari Kementerian Kesehatan Tahun 2023', '2023'),
(10, 'Penghargaan Satya Lencana Wira Karya dalam bidang UMKM dari Presiden RI untuk Walikota Probolinggo pada Hari UMKM Nasional 2023', '2023'),
(11, 'Penghargaan Universal Health Coverage (UHC) untuk Walikota Probolinggo dari Kementerian Dalam Negeri RI', '2023'),
(12, 'Penghargaan Atas Kebijakan Bidang Kesehatan untuk Walikota Probolinggo pada Ajang Indonesia Award 2023', '2023'),
(13, 'Penghargaan dalam Ajang Merdeka Awards 2023 untuk Kategori Program Inovatif Pendampingan UMKM dari media Merdeka.com', '2023'),
(14, 'Penghargaan untuk Apresiasi Daerah Keterbukaan Informasi Publik dari Kompas TV', '2023'),
(15, 'Penghargaan Kota Layak Anak Kategori Utama Tahun 2022 dari Kementerian Pemberdayaan Perempuan dan Perlindungan Anak', '2023'),
(16, 'Opini Wajar Tanpa Pengecualian (WTP) 6 kali berturut-turut atas Laporan Hasil Pemeriksaan (LHP) Laporan Keuangan Pemerintah Daerah (LKPD) tahun 2022 dari Badan Pemeriksa Keuangan (BPK) Perwakilan Jawa Timur', '2023'),
(17, 'Penghargaan BKN Award 2023 untuk Special Mention : Komitmen Peningkatan Pelayanan Kepegawaian', '2023'),
(18, 'Penghargaan BKN Award 2023 untuk Kategori Elemen Implementasi Manajemen ASN : Penerapan Pemanfaatan Data – Sistem Informasi dan CAT Pemerintah Kota Tipe Sedang', '2023'),
(19, 'Penghargaan sebagai Tokoh Penggerak Koperasi Madya untuk Walikota Probolinggo dari Dewan Koperasi Indonesia', '2023'),
(20, 'Penghargaan sebagai Pembina Koperasi Andalan untuk Walikota Probolinggo dari Dewan Koperasi Indonesia', '2023'),
(21, 'Kota Probolinggo meraih penghargaan Sertifikat Adipura tahun 2022 dari Kementerian Lingkungan Hidup dan Kehutanan (LHK) atas pengelolaan sampah dan ruang terbuka hijau perkotaan yang bersih, teduh, dan berkelanjutan', '2023'),
(22, 'Rekor MURI untuk Pelatihan Pembuatan Meja Lipat Rangka Baja Ringan secara Hybrid kepada 1.026 Siswa SMK di Kota Probolinggo', '2023'),
(23, 'Rekor MURI untuk Sajian Soto Ayam Koya Terbanyak dengan 8.000 Porsi', '2023'),
(24, 'Kota Terbaik ke-2 dalam Pemanfaatan Mail Multi Domain Tahun 2023 dari Kementerian Komunikasi dan Informatika RI', '2023'),
(25, 'Kota Terbaik ke-2 dalam Pemanfaatan SRIKANDI Tahun 2023 dari Kementerian Komunikasi dan Informatika RI', '2023'),
(26, 'Kota Terbaik ke-3 dalam Pemanfaatan Pusat Data Nasional Tahun 2023 dari Kementerian Komunikasi dan Informatika RI', '2023'),
(27, 'Penghargaan Kabupaten/Kota Layak Anak (KLA) Kategori Utama Tahun 2022 dari Kementerian Pemberdayaan Perempuan dan Perlindungan Anak', '2022'),
(28, 'Nirwasita Tantra Tahun 2021 untuk Wali Kota Probolinggo sebagai kepala daerah kategori Kota Sedang terbaik III dalam pengelolaan lingkungan hidup dan kehutanan daerah tahun 2021 dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK)', '2022'),
(29, 'Nirwasita Tantra Tahun 2021 untuk Kota Probolinggo sebagai terbaik III kriteria pemerintahan daerah kategori kota sedang dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK)', '2022'),
(30, 'BAZNAS Award 2022 untuk Wali Kota pendukung Gerakan zakat Indonesia dari Badan Amil Zakat Nasional', '2022'),
(31, 'Adiwiyata tingkat nasional tahun 2022 diraih oleh SDN Sukabumi 10, SDN Wiroborang 1, SMPK Mater Dei dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK)', '2022'),
(32, 'Penghargaan dari Komisi Aparatur Sipil Negara kepada Pemerintah Kota Probolinggo Atas Keberhasilannya Menerapkan Sistem Merit dalam Pengisian Jabatan Pimpinan Tinggi tahun 2021 dengan Kualitas Baik', '2022'),
(33, 'Pemkot Probolinggo Mendapat Penghargaan Kategori Khusus dalam Radar Bromo Awards 2022 atas Capaian Program Kesehatan UHC (Universal Health Coverage) yang sudah dimiliki oleh 99,77 persen masyarakat Kota Probolinggo yang mencapai 242.419 jiwa', '2022'),
(34, 'Opini WTP tahun 2021 5 kali berturut-turut dari BPK RI Provinsi Jatim', '2022'),
(35, 'Opini Wajar Tanpa Pengecualian (WTP) ke 4 Atas Laporan Hasil Pemeriksaan (LHP) Laporan Keuangan Pemerintah Daerah (LKPD) Kota Probolinggo Tahun Anggaran 2020', '2021'),
(36, 'Penghargaan Kabupaten/Kota Layak Anak (KLA) Kategori Nindya Tahun 2021', '2021'),
(37, 'Anugerah Parahita Ekapraya (APE) Kategori Utama Tahun 2020 dari Kementerian Pemberdayaan Perempuan dan Perlindungan Anak RI', '2021'),
(38, 'Penghargaan BKN Award 2021, Peringkat 3 Tingkat Nasional Kategori Penilaian Kompetensi, pada tanggal 26 November 2021', '2021'),
(39, 'Penghargaan TOP 99 Inovasi Pelayanan Publik Tahun 2021, diberikan kepada Pemerintah Kota Probolinggo Dinas Lingkungan Hidup atas Inovasi PELITA SI ABAH (Pemanfaatan Lombah Tahu Sebagai Alternatif Bahan Bakar Murah dan Ramah Lingkungan)', '2021'),
(40, 'Anugerah Meritrokasi Penerapan Sistem Merit dalam Manajemen ASN Kepada Instansi Pemerintah Daerah kategori Baik dengan Nilai 271,5', '2021'),
(41, 'Penghargaan Atas Implementasi Program Smart City “Siskia Pro Cantik” (Sistem Informasi Kesehatan Ibu Dan Anak Probolinggo, Cermat, Andal, Teliti, Informatif Dan Kualitas) Kategori Smart Living Gerakan Menuju Smart City Dari Kementerian Kominfo RI', '2021'),
(42, 'Sekolah Adiwiyata Mandiri 2021 (MAN 1 Kota Probolinggo)', '2021'),
(43, 'Innovative Government Award 2021, Kategori Kota Terinovatif', '2021'),
(46, 'Penghargaan Riset dan Transportasi Digital Kota Cerdas Indonesia Tahun 2021 dari Institut Teknologi Bandung. Kategori Kota dengan Ekonomi Cerdas, Kategori Kota dengan Lingkungan Cerdas, Kategori Kota dengan Masyarakat/Sosial Cerdas, Kategori Kota dengan Kesehatan Cerdas, Kategori Kota dengan Energi Cerdas, Kategori Kota dengan Perhatian Terhadap Perubahan Iklim', '2021'),
(47, 'Penghargaan Kepada RW 01 Kelurahan Jrebeng Kidul Kecamatan Wonoasih Kota Probolinggo, Sebagai Lokasi Program Kampung Iklim Kategori Utama yang Telah Aktif Melakukan Aksi Adaptasi dan Mitigasi Perubahan Iklim Secara Terintegrasi Sehingga Dapat Memberikan Kontribusi Terhadap Upaya Pengendalian Perubahan Iklim, diberikan oleh Menteri Lingkungan Hidup dan Kehutanan', '2021'),
(48, 'Penghargaan Maturitas SPIP level 3 dari Badan Pengawasan Keuangan dan Pembangunan atas kerja keras Pemerintah Kota Probolinggo dalam mewujudkan Sistem Pengendalian Intern Pemerintah (SPIP)', '2020'),
(49, 'Penghargaan Akuntabilitas Kinerja Tahun 2019 dengan predikat nilai BB dari Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi', '2020'),
(50, 'Penghargaan Indonesia Smart Nation Award (ISNA) 2020 kategori Smart Society dengan Inovasi Penguatan Kampung Tangguh dari Citiasia Center for Smart Nation (CCSN)', '2020'),
(51, 'Penghargaan Opini Wajar Tanpa Pengecualian (WTP) atas Keberhasilan Pemerintah Kota Probolinggo Menyusun dan Menyajikan Laporan Keuangan Tahun 2019 dari Menteri Keuangan Republik Indonesia', '2020'),
(52, 'Penghargaan atas Penyelenggaraan Pemerintah Daerah dengan Status Kinerja Sangat Tinggi Berdasarkan Laporan Penyelenggaraan Pemerintahan Daerah (LPPD) Tahun 2018 dari Menteri Dalam Negeri Republik Indonesia', '2020'),
(53, 'Penghargaan Proklim Utama 2020 kepada RW 1 Kelurahan Pilang atas keberhasilannya dalam pemberdayaan masyarakat terhadap penguatan iklim dan pengelolaan lingkungan dari Kementerian Lingkungan Hidup dan Kehutanan RI serta pemberian Sertifikat Proklim 2020 kepada Kelurahan Jrebeng Wetan dan Kelurahan Wiroborang', '2020'),
(54, 'Penghargaan dari Menteri Sosial RI untuk Wali Kota Probolinggo atas keterlibatan lintas sektor dalam pelaksanaan Pos Pembinaan Terpadu Penyakit Tidak Menular (PTM)', '2020'),
(55, 'Penghargaan dari Komisi Informasi Provinsi Jawa Timur dalam KI Award 2020 sebagai Badan Publik Menuju Informatif Tingkat Kabupaten/Kota se Jawa Timur', '2020'),
(56, 'Penganugerahan Tanda Penghargaan Pos Pembinaan Terpadu Penyakit Tidak Menular Tahun 2020 kategori Koordinasi Lintas Sektor dalam Penyelenggaraan Posbindu PTM 2020 Oleh Kementerian Kesehatan', '2020'),
(57, 'Pemenang Lomba Pengukuran Kebugaran Jasmani Secara Mandiri dengan Aplikasi “SIPGAR” Kategori Kabupaten/Kota 2020 Oleh Kementerian Kesehatan', '2020'),
(58, 'Wali Kota Probolinggo Habib Hadi Zainal Abidin S.Pd, MM, MHP sebagai Positive News Maker 2020 dari Times Indonesia', '2020'),
(59, 'Penghargaan Adipura dari Kementerian Lingkungan Hidup untuk Kota Probolinggo, karena Kota Probolinggo terus meningkatkan efektivitas pengelolaan persampahan, lalu meningkatkan kualitas Ruang Terbuka Hijau Kawasan Perkotaan (RTHKP)', '2019'),
(60, 'Penghargaan Akuntabilitas Kinerja Tahun 2018 dari Kementerian PAN RB dengan predikat nilai BB', '2019'),
(61, 'Penghargaan di Bidang Penyelenggaraan Kearsipan dengan Kategori Baik', '2019'),
(62, 'Penghargaan Opini Wajar Tanpa Pengecualian (WTP) Atas LKPD Kota Probolinggo Ta. 2018 dari Badan Pemeriksa Keuangan Republik Indonesia (BPK-RI)', '2019'),
(63, 'Penghargaan Kota Layak Anak (KLA) Madya Tahun 2019', '2019'),
(64, 'Karya Terpilih Indonesia Enterpreneur TIK 2019 kepada Siskia Pro Cantik milik Dinas Kesehatan Kota Probolinggo kategori Public Sector dari Kementerian Komunikasi dan Informatika Republik Indonesia', '2019'),
(65, 'Siskia Pro Cantik mewakili Indonesia dalam ajang ASEAN ICT AWARD 2019 yang berlangsung di Vientiene, LAO PDR', '2019'),
(66, 'Penghargaan Riset and Rating Kota Cerdas Indonesia 2019 dari Institut Tekhnologi Bandung (ITB) kategori Rating Lingkungan Cerdas (Smart Environment)', '2019'),
(67, 'Penghargaan Sebagai Pemerintah Daerah yang Berkomitmen Tinggi terhadap Pengelolaan Inovasi Administrasi Negara Tahun 2019', '2019'),
(68, 'Penghargaan WTN (Wahana Tata Nugraha) Tahun 2019 dari Menteri Perhubungan yang dinilai telah melakukan tata kelola transportasi yang baik', '2019'),
(69, 'Penghargaan Zona Integritas Menuju Wilayah Bebas Korupsi. Kecamatan Kademangan sebagai Unit Kerja penerima zona integritas menuju WBK (Wilayah Bebas Korupsi) / WBBM (Wilayah Bebas Bersih Melayani). Penghargaan ini diterima oleh Camat Kademangan, dari Kementerian Pemdayagunaan Aparatur Negara dan Reformasi Birokrasi', '2019'),
(70, 'Penghargaan Kota Peduli Hak Asasi Manusia (HAM) dari Menteri Hukum dan Hak Asasi Manusia', '2019'),
(71, 'Penghargaan Pastika Prama dari Kementerian Kesehatan RI atas peran serta Kota Probolinggo dalam menyukseskan pembangunan di bidang kesehatan dan mengimplementasikan Perda Kawasan Tanpa Rokok (KTR)', '2018'),
(72, 'Penghargaan Kota Layak Anak dari Menteri Pemberdayaan Perempuan dan Perlindungan Anak (PPPA) Republik Indonesia', '2018'),
(73, 'Penghargaan Top 99 Inovasi Pelayanan Publik dari Kementerian Pemberdayaan Aparatur Negara dan Reformasi Birokrasi melalui inovasi Pelita Si Abah (Pemanfaatan Limbah Tahu Alternatif Alternatif Bakar dan Ramah Lingkungan)', '2018'),
(74, 'Penghargaan Opini Wajar Tanpa Pengecualian (WTP) atas laporan keuangan Tahun 2017 dari Kementerian Keuangan, yang dikeluarkan oleh Gubernur Jawa Timur', '2018'),
(75, 'Penghargaan Dok Penyelenggara Informasi Kinerja Pelatihan Lingkungan Hidup Daerah (DIKPLHD) dari Pemerintah Provinsi Jawa Timur', '2018'),
(76, 'Penghargaan Practice Award dari Jawa Pos Institute of Pro Otonomi (JPIP) dan Pemerintah Provinsi Jawa Timur atas Komitmen Pemerintah Kota Probolinggo membudayakan pendidikan inklusif', '2018'),
(77, 'Penghargaan Dwi Praja Nugraha dari Persatuan Guru Republik Indonesia (PGRI) atas kepedulian dan perhatian Wali Kota Probolinggo kepada pendidikan', '2018'),
(78, 'Penghargaan Anugerah Kepatuhan 2018 dari Ombudsman Republik Indonesia, atas kepatuhan instansi Pemerintah Kota Probolinggo penyelenggara pelayanan publik sesuai Undang-Undang nomor 25 tahun 2009 tentang pelayanan publik', '2018'),
(79, 'Penghargaan IRSA (Indonesia Road Safety Award) sebagai pemenang pilar kendaraan yang berkeselamatan kategori kota sedang dari Menteri Perhubungan RI', '2018'),
(80, 'Penghargaan Anugerah Parahita Ekapraya (APE) dari Menteri Pemberdayaan Perempuan dan Perlindungan Anak (PPPA) karena Kota Probolinggo telah melaksanaan dimensi operasional pembangunan PP-PA yakni pemberdayaan perempuan dan perlindungan anak melalui strategi pengarusutamaan gender (PUG)', '2018'),
(81, 'Penghargaan Top 99 Inovasi Pelayanan Publik Nasional tahun 2017 dari Menteri Pemberdayaan Aparatur Negara dan Reformasi Birokrasi', '2017'),
(82, 'Penghargaan Inovasi Pastika Parahita dari Menteri Kesehatan', '2017'),
(83, 'Penghargaan Kota Layak Anak Pratama 2017', '2017'),
(84, 'Penghargaan TPID Inovatif', '2017'),
(85, 'Penghargaan Adipura', '2017'),
(86, 'Penghargaan Adiwiyata Mandiri', '2017'),
(87, 'Parasamya Purnakarya Nugraha', '2016'),
(88, 'Anugerah Adipura Kirana', '2016'),
(89, 'Kawastara Pawitra dari Menteri Pendidikan dan Kebudayaan Republik Indonesia', '2016'),
(90, 'Penghargaan Pencatatan Kelahiran', '2016'),
(91, 'Penghargaan Insan Olahraga Berprestasi 2016', '2016'),
(92, 'Tiga Penghargaan Inovasi Manajemen Perkotaan (IMP) 2014 yaitu bidang pengelolaan tata ruang sub bidang pemanfaatan ruang, bidang pengelolaan sanitasi sub bidang pengelolaan air limbah dan sub bidang pengelolaan drainase dari Menteri Dalam Negeri RI', '2015'),
(93, 'Peringkat 3 Kota Berprestasi Kinerja Terbaik Nasional', '2015'),
(94, 'Tokoh Penggerak Koperasi', '2015'),
(95, 'Penghargaan Gerakan Masyarakat Makan Ikan (GEMARIKAN)', '2015'),
(96, 'Anugerah Adipura', '2015'),
(97, 'Plakat Adipura TPA(Tempat Pemrosesan Akhir) terbaik tingkat nasional', '2015'),
(98, 'Swasti Saba Wistara tingkat nasional', '2015'),
(99, 'Wahana Tata Nugraha Kencana', '2015'),
(100, 'Kepala Daerah Berprestasi Kinerja Terbaik peringkat-4 berdasarkan EKPPD (Evaluasi Kinerja Penyelenggaraan Pemerintah Daerah) terhadap LPPD (Laporan Penyelenggaran Pemerintah Daerah) tahun 2012', '2014'),
(101, 'Opini Wajar Tanpa Pengecualian (WTP) atas Laporan Keuangan Pemerintah Daerah Kota Probolinggo Tahun Anggaran 2013 berdasarkan Laporan Hasil Pemeriksaan (LHP) Badan Pemeriksa Keuangan (BPK) RI Perwakilan Jawa Timur', '2014'),
(102, 'Anugerah Adipura Kencana untuk kategori kota sedang', '2014'),
(103, 'Piala Wahana Tata Nugraha Kencana', '2014'),
(104, 'Indonesia Road Safety Award 2014', '2014'),
(105, 'Otonomi Award Pengelolaan Lingkungan Hidup Kategori Pengelolaan Lingkungan Hidup lewat Gerakan Masyarakat Sadar Lingkungan (Gemas Darling)', '2014'),
(106, 'Penghargaan Penilaian Kinerja Pemerintah Daerah bidang Pekerjaan Umum (PKPD-PU)', '2014'),
(107, 'Penghargaan Penggerak Koperasi dengan Peringkat Paramadhana Madya Adi Nugraha Koperasi', '2014'),
(108, 'Indonesia Green Awards', '2014'),
(109, 'Penghargaan Inovasi Managemen Perkotaan (IMP) Bidang Pengolahan Sampah dari Mendagri Gunawan Fauzi di Hotel Peninsula Jakarta', '2013'),
(110, 'Penghargaan Wahana Tata Nugraha (WTN) tahun 2013 dari Menteri Perhubungan', '2013'),
(111, 'Penghargaan Adipura ke 7 Kategori Kota Sedang', '2013'),
(112, 'Penghargaan Tanda Kehormatan Satyalencana Pembangunan dan Sayalencana Wira Karya dari Kementrian Koperasi dan UKM RI yang diserahkan oleh Presiden RI Susilo Bambang Yudhoyono', '2013'),
(113, 'Penghargaan WTN ke 6 tahun 2013 untuk kategori kota Sedang dari Presiden RI diserahkan oleh Menteri Perhubungan EE. Manggindan', '2013'),
(114, 'Penghargaan Swasti Saba Wistara Tahun 2013, piala dan piagam tertinggi untuk kota Sehat, dari Kementrian Kesehatan RI', '2013'),
(115, 'Penghargaan Plakat Pelayanan Publik Berprestasi Abdi Bhakti Tahun 2013 dari Kementrian Pertanian RI', '2013'),
(116, 'Penghargaan PKPD PU Bidang Cipta Karya dari Kementrian PU Tahun 2013', '2013'),
(117, 'Juara 1 Kategori Kota Sedang-Kecil \"Indonesia Road Safety Award (IRSA) 2013\"', '2013'),
(118, 'Penghargaan 10 Nominasi terbaik tingkat nasional dalam penyelenggaraan pelayanan terpadu bidang penanaman modal dan pelayanan perijinan Kabupaten/Kota tahun 2013', '2013'),
(119, 'Penghargaan Adipura ke 7 Kategori Kota Sedang', '2013'),
(120, 'Penghargaan Tanda Kehormatan Satyalencana Pembangunan dan Satyalencana Wira Karya', '2013'),
(121, 'Penghargaan Otonomi Awards 2012 Parameter Performa Politik Bidang Partisipasi Publik (Kongres Abang Becak)', '2012'),
(122, 'Nominasi Parameter Pelayanan Publik Bidang Kesehatan (Program Hospital On The Way)', '2012'),
(123, 'Nominasi Parameter Sanitasi (ECO Pesantren)', '2012'),
(124, 'Penghargaan Adipura ke 6 Tahun 2012', '2012'),
(125, 'Penghargaan Wahana Tata Nugraha Tahun 2012', '2012'),
(126, 'Otonomi Awards (OA) 2012', '2012'),
(127, 'Parameter Performa Politik Bidang Partisipasi Publik', '2012'),
(128, 'Penghargaan Opini Wajar Tanpa Pengecualian (WTP) pada Laporan Hasil Pemeriksaan (LHP) Atas Laporan Keuangan Pemkot Probolinggo Tahun Anggaran 2012', '2012'),
(129, 'Penghargaan Cipta Karya bidang Pemukiman rangking 3 kategori Kota Sedang dari Menteri PU', '2011'),
(130, 'Penghargaan Penyelenggaraan Pemerintah Daerah dalam Pelayanan Publik dan Inovasi Daerah Tingkat Kota se Indonesia (Ranking 7 dari 10 Besar) Tahun 2011 dari Pemerintah Pusat', '2011'),
(131, 'Penghargaan Adipura ke-V/5 Tahun 2011', '2011'),
(132, 'Penghargaan KPPOD Award Peringkat 1 dari 245 Kabupaten/Kota se Indonesia dalam bidang Interaksi Pemda dengan Pelaku Usaha dari Menteri Koordinator Bidang Perekonomian Hatta Rajasa', '2011'),
(133, 'Penghargaan Adipura ke 5 Tahun 2011', '2011'),
(134, 'Penghargaan Adiwiyata Mandiri (Untuk SMKN 1), Adiwiyata (Untuk SDN Mangunharjo 6, SDN Sukabumi 6, SMPN 4, SMAN 4 dan SMKN 2)', '2011'),
(135, 'Daerah dengan Terobosan Inovatif bidang Pengelolaan Lingkungan Hidup Otonomi Awards dari JPIP Tahun 2011', '2011'),
(136, 'Penghargaan Wahana Tata Nugraha (WTN) Tahun 2011 dari Menteri Perhubungan RI', '2011'),
(137, 'Penghargaan Adipura Ke Empat Tahun 2010', '2010'),
(138, 'Penghargaan Adiwiyata Mandiri SMAN 2, Adiwiyata ke 2 SMKN 1, Adiwiyata ke 1 SDN Mangunharjo VI Tahun 2010', '2010'),
(139, 'Penerimaan Kalpataru Tingkat Nasional (Guru SMAN 1) Tahun 2010', '2010'),
(140, 'Penghargaan Kepada Walikota HM. Buchori, SH, M.Si sebagai Tokoh Penggerak Koperasi Tahun 2010 dari Menteri Koperasi Dan UKM RI', '2010'),
(141, 'Penghargaan Sebagai Kota Penggerak Koperasi Tahun 2010 dari Menteri Koperasi Dan UKM RI', '2010'),
(142, 'Penghargaan Otonomi Awards dari JPIP: Kategori Utama Daerah dengan Profil paling menonjol bidang kinerja politik; Kategori Khusus Parameter Utama Daerah dengan Terobosan Inovatif bidang Pelayanan Administrasi; Kategori Khusus Parameter Utama Daerah dengan Profil Menonjol Bidang Partisipasi Publik', '2010'),
(143, 'Green Awards 2010 Kategori Green City Tingkatkan Gold dari Majalah Bisnis dan CSR', '2010'),
(144, 'Penghargaan dari Menteri Kehutanan RI Dalam Lomba Penghijauan & Konservasi Alam Tahun 2010 Kategori Hutan Kota sebagai Terbaik I Nasional', '2010'),
(145, 'Manggala Karya Bhakti Husada 2010 Tingkat Kartika dari Kementerian Kesehatan Republik Indonesia', '2010'),
(146, 'Piagam Penghargaan Citra Pelayanan Prima Tingkat pratama tahun 2010, Kategori Bidang Pelayanan Jasa Kesehatan Puskesmas (UPTD Puskesmas Wonoasih)', '2010'),
(147, 'Penghargaan Piala WTN (Wahana Tata Nugraha) Tahun 2009/2010 dari Menteri Perhubungan RI', '2010'),
(148, 'Penghargaan Adibhakti Mina Bahari Tahun 2010 Juara I atas Peran aktif dalam Pembangunan Kelautan dan Perikanan tingkat nasional', '2010'),
(149, 'Penghargaan Adibhakti Mina Bahari Tahun 2010 Juara I kategori UKM pengolahan terbaik Tingkat nasional Kepada UKM Le-Ollena', '2010'),
(150, 'Penghargaan Wahana Tata Nugraha Tahun 2009', '2009'),
(151, 'Penghargaan ADIPURA Tahun 2009', '2009'),
(152, 'Penghargaan Piala ADIWIYATA Tahun 2009 untuk SMAN 2 Kota Probolinggo (tahun ke 2)', '2009'),
(153, 'Penghargaan Piala ADIWIYATA Tahun 2009 untuk SMKN 1 Kota Probolinggo (tahun ke 1)', '2009'),
(154, 'Sertifikat Adiwiyata Tahun 2009 SMPN 4 Kota Probolinggo', '2009'),
(155, 'Sertifikat Adiwiyata Tahun 2009 SDN Mangunhardjo 6 Kota Probolinggo', '2009'),
(156, 'Kelompok Petani Jagung Berprestasi Tingkat Nasional 2009 (Kelompok Tani Makmur)', '2009'),
(157, 'Penghargaan Inovasi Management Perkotaan (IMP) Award 2009: Juara I Kategori Pengelolaan Ruang Terbuka Hijau dan Juara II Kategori Pengelolaan Sampah Perkotaan', '2009'),
(158, 'Penghargaan Satyalancana Wirakarya dari Presiden RI tahun 2009 di Bidang Keluarga Berencana kepada HM. Buchori, SH, M.Si (Walikota Probolinggo)', '2009'),
(159, 'Penghargaan Swasti Saba Padapa Kota Sehat Tahun 2009', '2009');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `awards`
--
ALTER TABLE `awards`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `awards`
--
ALTER TABLE `awards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
