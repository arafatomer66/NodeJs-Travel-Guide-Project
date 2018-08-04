-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2018 at 04:17 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminname` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminname`, `password`) VALUES
('admin1', 'admin1'),
('admin2', 'admin2');

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE `bus` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `catId` int(11) NOT NULL,
  `totalItem` int(100) NOT NULL,
  `sold` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`id`, `name`, `price`, `quantity`, `catId`, `totalItem`, `sold`) VALUES
(1, 'Ena', 450, 50, 1, 200, 0),
(2, 'Green Line', 800, 50, 1, 195, 5),
(3, 'Shymoli', 350, 40, 2, 400, 0),
(4, 'Boishakhi', 50, 45, 2, 200, 0),
(5, 'Green Dhaka', 60, 30, 3, 150, 0);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
(1, 'Fever', 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `help`
--

CREATE TABLE `help` (
  `Aid` int(30) NOT NULL,
  `Aname` varchar(30) NOT NULL,
  `Alocation` varchar(30) NOT NULL,
  `Aphone` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `help`
--

INSERT INTO `help` (`Aid`, `Aname`, `Alocation`, `Aphone`) VALUES
(1, 'Ena', 'Dhaka-Sylhet', '01535425262'),
(2, 'Shymoli', 'Dhaka-Chittagong', '01712526232'),
(3, 'Green Line', 'Dhaka-Chittagong', '01652324252'),
(4, 'Boishakhi', 'Dhaka', '01712526285');

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `Pid` int(30) NOT NULL,
  `Pname` varchar(30) NOT NULL,
  `Plocation` varchar(30) NOT NULL,
  `Pphone` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`Pid`, `Pname`, `Plocation`, `Pphone`) VALUES
(1, 'Hotel Arena', 'Uttara', '01521425232'),
(2, 'Hotel', 'Kolabagan', '01721425232'),
(3, 'Radisson', 'Bongobazar', '01652324252'),
(4, 'Westeen', 'Banani', '01852423212'),
(5, 'Le-Meridian', 'Gulshan', '01652324212');

-- --------------------------------------------------------

--
-- Table structure for table `medorder`
--

CREATE TABLE `medorder` (
  `orusername` int(30) NOT NULL,
  `ormedicine` int(30) NOT NULL,
  `orquantity` int(30) NOT NULL,
  `orprice` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `password`, `address`, `phone`) VALUES
(1, 'kashem', 'kashemjkhj', 'Purbachal', 1524587565),
(6, 'Jobbar', 'hhhhhhhf', 'gulshan', 1854256523),
(7, 'Samad', 'samadfg', 'adabor', 1985654525),
(8, 'xyz', 'fffffffff', 'Khilkhet', 1652425875),
(9, 'shafi', 'shafi1', 'Uttara', 1521422562),
(10, 'abul', 'sdfjhsdfj', 'Kakoli', 1652427895),
(41, 'shafii', 'hsdfkhgj', 'fsdjfhsdfh', 1452124252),
(44, 'shuvo', 'sfhjvn54', 'uttara', 0),
(45, 'maisha', 'bheukksj', 'Mohammadpur', 1575856526),
(46, 'Fatin', 'sdfjuekj', 'Tongi', 1758452152),
(47, 'tamanna', 'tamanna12', 'mirpur', 1521258226),
(48, 'arafat12', 'Arafat12!', 'dhaka', 1622524063),
(49, 'emrankh', '123456d', 'dhakabd', 1622524064);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bus`
--
ALTER TABLE `bus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catId` (`catId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bus`
--
ALTER TABLE `bus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
