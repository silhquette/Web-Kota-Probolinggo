-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2024 at 05:54 PM
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
-- Table structure for table `officers`
--

CREATE TABLE `officers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `division` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `head` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `officers`
--

INSERT INTO `officers` (`id`, `division`, `address`, `phone`, `head`) VALUES
(1, 'Bagian Umum', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 421228 / 425743', 'EDY TRISULA, S.Sos., M.A.P.'),
(2, 'Bagian Pemerintahan', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 421921', 'PUDI ADJI TJAHJO WAHONO, S.Sos, M.Si'),
(3, 'BagianPerekonomian dan Pembangunan', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 4438856 / 4494699', 'Dra. INA LUSILINAWATI, M.Si.'),
(4, 'Bagian Hukum', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 421830', 'DENNY BAGUS ERWANTO, S.H., M.H.'),
(5, 'Bagian Kesejahteraan Rakyat', 'Jl. Ahmad Yani No. 103 Kota Probolinggo', '(0335) 4438981', 'ANDRI PURWANTO, S.Sos., M.M.'),
(6, 'Bagian Organisasi', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 428993', 'PRIJO DJATMIKO, S.Sos, M.M.'),
(7, 'Bagian Keuangan dan Sarana Prasarana', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 436103 / 421540', 'SENA SETYOAJI, S.Sos., M.M.'),
(8, 'Bagian Pengadaan Barang dan Jasa', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 422439', 'ANDUNG TJAHJONO, S.T., M.M.'),
(9, 'Badan Pendapatan, Pengelolaan Keuangan dan Aset Daerah', 'Jl. Panglima Sudirman 19 Kota Probolinggo', '(0335) 428288', 'RATRI DIAN SULISTYAWATI, S.P., M.M'),
(10, 'Badan Perencanaan Pembangunan Daerah, Penelitian dan Pengembangan', 'Jl. Soekarno-Hatta No. 52 Probolinggo', '(0335) 427232', 'DIAH SAJEKTI WIDOWATI SIGIT, S.E.,M.M.'),
(11, 'Badan Penanggulangan Bencana Daerah', 'Jl. Mastrip (Selatan Kantor Kecamatan Kedopok) Kota Probolinggo', '(0335) 429664 / 429661', 'Dr. SUGITO PRASETYO, S.STP, MM'),
(12, 'Badan Kepegawaian dan Pengembangan SDM', 'Jl. Mastrip No 120 Kota Probolinggo', '(0335) 425077 / 437004', 'FATCHUR ROZI, S.H., M.M'),
(13, 'Badan Kesatuan Bangsa dan Politik', 'Jl. Mawar No. 39 Kota Probolinggo', '(0335) 426436', 'MUHAMMAD SONHADJI, S.Sos., M.Si'),
(14, 'Dinas Kependudukan dan Pencatatan Sipil', 'Jl. Basuki Rahmat no 23 Kota Probolinggo', '(0335) 4438894', 'PUJO AGUNG SATRIO, S.STP., M.Si. (Plt.)'),
(15, 'Dinas Ketahanan Pangan, Pertanian, dan Perikanan', 'Jl. Soekarno Hatta No. 265 Probolinggo', '(0335) 433191 / 421760', 'Ir. ARIES SANTOSO, MM'),
(16, 'Dinas Kesehatan, Pengendalian Penduduk, dan Keluarga Berencana', 'Jl. Suroyo No 58 Kota Probolinggo', '(0335) 426877', 'dr. NURUL HASANAH HIDAYATI'),
(17, 'Dinas Koperasi, Usaha Kecil dan Menengahdan Perdagangan', 'Jl. Mastrip No 155 Kota Probolinggo', '(0335) 423053', 'Ir. FITRIAWATI, MM'),
(18, 'Dinas Perindustrian dan Tenaga Kerja', 'Jl. Slamet Riyadi Kota Probolinggo', '', 'BUDIONO WIRAWAN, S.Sos., M.Si.'),
(19, 'Dinas Perhubungan', 'Jl. Suroyo No 17 Kota Probolinggo', '(0335) 433175', 'Dr. AGUS EFENDI, S.Sos, M.Si'),
(20, 'Dinas Lingkungan Hidup', 'Jl. Anggrek No. 15 Kota Probolinggo', '0335-421646', 'RETNO WANDANSARI, S.Pt., M.P'),
(21, 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu', 'Jl. Basuki Rahmat No. 44 Kota Probolinggo', '(0335) 426147 / 430758', 'MUHAMMAD ABAS, S.Sos, M.Si'),
(22, 'Dinas Kepemudaan, Olahraga dan Pariwisata', 'Jl. Soekarno Hatta No. 273 Kota Probolinggo', '(0335) 426653 / 429996', 'Drs. RACHMA DETA ANTARIKSA, M.Si.'),
(23, 'Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak', 'Jl. Raya Dringu No. 13 Kota Probolinggo', '(0335) 421431', 'Dr. REY SUWIGTYO, S.Sos, M.Si'),
(24, 'Dinas Komunikasi dan Informatika', 'Jl. Dr. Moch. Saleh No. 5 Kota Probolinggo', '(0335) 422135 / 420155', 'Dr. AMAN SURYAMAN, A.P., M.M.'),
(25, 'Dinas Perpustakaan dan Kearsipan', 'Jl. Letjen Sutoyo No. 3 Kota Probolinggo', '(0335) 424224', 'WAHONO ARIFIN, S.H., M.M.'),
(26, 'Dinas Pendidikan dan Kebudayaan', 'Jl. Basuki Rahmad No. 20A Kota Probolinggo', '(0335) 421160 / 425057', 'SITI ROMLAH, S.Si.,M.Pd.'),
(27, 'Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman', 'Jl. Hayam Wuruk no. 69 Kota Probolinggo', '(0335) 421481', 'SETIORINI SAYEKTI, S.K.M., M.Si.'),
(28, 'Kecamatan Mayangan', 'Jl. Ikan Paus No. 34 Kota Probolinggo', '(0335) 421475', 'AGUS DWIWANTORO, S.STP, M.Si'),
(29, 'Kecamatan Wonoasih', 'Jl. Jeruk No 1 Wonoasih Kota Probolinggo', '(0335) 424902 / 437700', 'DEUS NAWANDI, S.STP, M.Si'),
(30, 'Kecamatan Kademangan', 'Jl. Brantas No. 247 Kota Probolinggo', '(0335) 423450', 'GOFUR EFFENDY, S.T., M.Si.'),
(31, 'Kecamatan Kedopok', 'Jl. Mastrip No. 20 Kota Probolinggo', '(0335) 426601', 'IMAM CAHYADI, S.Sos, M.Si'),
(32, 'Kecamatan Kanigaran', 'Jl. Slamet Riyadi Kota Probolinggo', '(0335) 427550 / 425771', 'NOOR ALY, S.H., M.M'),
(33, 'Sekretariat Dewan', 'Jl. Suroyo No. 27 Kota Probolinggo', '(0335) 433326', 'Drs. TEGUH BAGUS SUJAWANTO, M.Pd'),
(34, 'RSUD Dokter Mohamad Saleh', 'Jl.Mayjen Panjaitan No.65 Kota Probolinggo', '(0335) 421118 / 433119', 'dr. INTAN SUDARMADI, Sp.S., M.H.'),
(35, 'RSUD Ar Rozy', 'Jl. Prof. Dr. Hamka KM 3.5 Kota Probolinggo', '(0335) 4490009', 'dr.ABRAAR HS KUDDAH, M.Si, Med, Sp.B'),
(36, 'Inspektorat', 'Jl. Hayam Wuruk no. 69 Kota Probolinggo', '(0335) 429106', 'PUJI PRASTOWO, S.E.'),
(37, 'Satuan Polisi Pamong Praja', 'Jl. Panglima Sudirman 23 Kota Probolinggo', '(0335) 420266', 'PUJO AGUNG SATRIO, S.STP., M.Si.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `officers`
--
ALTER TABLE `officers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `officers`
--
ALTER TABLE `officers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
