-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-10-15 15:32:25
-- 服务器版本： 10.1.38-MariaDB
-- PHP 版本： 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `wjw`
--

-- --------------------------------------------------------

--
-- 表的结构 `jingdong1`
--

CREATE TABLE `jingdong1` (
  `sid` tinyint(3) UNSIGNED NOT NULL,
  `url` varchar(999) NOT NULL,
  `url2` varchar(999) NOT NULL,
  `title` varchar(200) NOT NULL,
  `title1` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `jingdong1`
--

INSERT INTO `jingdong1` (`sid`, `url`, `url2`, `title`, `title1`) VALUES
(1, 'https://img11.360buyimg.com/babel/s290x370_jfs/t1/150193/9/9677/222021/5f7455bbEd9968f0d/5b492c8995f387b3.jpg!cc_290x370.webp', '', '', ''),
(2, 'https://img11.360buyimg.com/babel/s290x370_jfs/t1/124783/6/13656/227806/5f713fe0E35c2bb44/ac9c1006866f1f96.jpg!cc_290x370.webp', '', '', ''),
(3, 'https://img12.360buyimg.com/img/s100x100_jfs/t1/88221/15/12721/220275/5e4f7249E59e640d4/bd1671f242588819.jpg!cc_100x100.webp', 'https://img12.360buyimg.com/img/s100x100_jfs/t1/4144/40/13914/164337/5bd950edEdf6d0ee2/4b3201824c121244.jpg!cc_100x100.webp', '企业购', '一站式企业采购平台'),
(4, 'https://img11.360buyimg.com/img/s100x100_jfs/t1/68179/19/9281/85630/5d6f2392E264e73e6/5afffc2dcfdbb1a2.jpg!cc_100x100.webp', 'https://img20.360buyimg.com/img/s100x100_jfs/t1/89124/20/450/255073/5dad7da8E48d8897e/598d7ac97f479596.jpg!cc_100x100.webp', 'Joy寻宝', '懂你的Joy'),
(5, 'https://img12.360buyimg.com/img/s100x100_jfs/t1/100496/15/17098/298754/5e846ae6E19f8f58f/5364cd80029cadd4.jpg!cc_100x100.webp', 'https://img14.360buyimg.com/img/s100x100_jfs/t19105/15/106426697/424212/f46938a0/5a5d97c9N1bdd0e89.jpg!cc_100x100.webp', '食品饮料', '吃货嘉年华'),
(6, 'https://img30.360buyimg.com/img/s100x100_jfs/t1/74981/10/832/210806/5cf0fa42E16980096/0587aec1a1246952.jpg!cc_100x100.webp', 'https://img13.360buyimg.com/img/s100x100_jfs/t1/132077/38/5661/133520/5f20ee4eE16ca36f9/b7032e89240e05b9.jpg!cc_100x100.webp', '京东超市', '一站式囤生活好物'),
(7, 'https://img12.360buyimg.com/img/s100x100_jfs/t28387/196/1412254870/125137/45afeaa1/5cde7655N7ac9ae10.jpg!cc_100x100.webp', 'https://img14.360buyimg.com/img/s100x100_jfs/t1/3323/16/14389/527545/5bdbf41dE1da72100/126987f373e5cfee.jpg!cc_100x100.webp', '生鲜馆', '尝遍天下鲜'),
(8, 'https://img10.360buyimg.com/img/s100x100_jfs/t1/119685/35/3776/72554/5eb250a5E3dae922d/5c54045702bbd95c.jpg!cc_100x100.webp', 'https://img12.360buyimg.com/img/s100x100_jfs/t1/120453/4/203/73215/5eb3b45bE0db02ff6/32c7fd9639d61f56.jpg!cc_100x100.webp', '汽车生活', '放心养车 爱车无忧'),
(9, 'https://img14.360buyimg.com/img/s100x100_jfs/t22963/285/1529773333/92484/89b38f3c/5b61e7d3N8861c451.jpg!cc_100x100.webp', 'https://img13.360buyimg.com/img/s100x100_jfs/t1/10172/35/4447/87529/5c0e0d22E71020d8e/db8110765f0246d5.jpg!cc_100x100.webp', '京东国际', '一站尽享进口好物'),
(10, 'https://img20.360buyimg.com/img/s100x100_jfs/t1/27132/28/15169/85977/5cadc597Ed440a880/79df811cc7e46ab7.jpg!cc_100x100.webp', 'https://img11.360buyimg.com/img/s100x100_jfs/t1/117544/3/13394/89373/5f1fc651E9f6c8c3b/ac0b3a837ee2b442.jpg!cc_100x100.webp', '京东京造', '京东自有品牌'),
(11, 'https://img30.360buyimg.com/babel/s100x100_jfs/t1/80069/37/847/13255/5cf0f8e5E98518181/2f1daf302659471b.jpg!cc_100x100.webp', 'https://img11.360buyimg.com/babel/s100x100_jfs/t1/44193/25/5593/12371/5cf0f8a1E5ef273fa/6dc53738a6df44c5.png!cc_100x100.webp', '京东金融', '会理财 懂生活'),
(12, 'https://img30.360buyimg.com/img/s100x100_jfs/t1/110828/18/2318/122971/5e8308e3E5e85091b/23558e32158a4d5a.jpg!cc_100x100.webp', 'https://img10.360buyimg.com/img/s100x100_jfs/t1/72384/18/15450/95485/5dce0dd6Ea6afaa33/ee3ca6ef4f171c37.jpg!cc_100x100.webp', '家装城', '用心装好家一站式购齐'),
(13, 'https://img10.360buyimg.com/img/s100x100_jfs/t1/112615/5/645/199741/5e8ed021E73041561/8de6551efc206251.png!cc_100x100.webp', 'https://img20.360buyimg.com/img/s100x100_jfs/t20926/159/510789910/378832/514321c5/5b0f5593Nc28c23d9.jpg!cc_100x100.webp', '司法拍卖', '法拍房可贷款'),
(14, 'https://img11.360buyimg.com/img/s100x100_jfs/t1/88797/24/15622/131200/5e75fc6cE93584ea8/ccfe07cd66e5eab8.jpg!cc_100x100.webp', 'https://img14.360buyimg.com/img/s100x100_jfs/t1/123368/28/7246/62260/5f0fec86E06a117f2/cab745c60f20654f.jpg!cc_100x100.webp', '玩3C', '潮流电子 炫酷来袭'),
(15, 'https://img14.360buyimg.com/img/s100x100_jfs/t1/122044/21/14489/133130/5f8174aeE5df2eba3/b870daaebcf992a0.jpg!cc_100x100.webp', 'https://img12.360buyimg.com/img/s100x100_jfs/t27220/255/1321983660/141289/c249c031/5bc53478Nbf85789e.jpg!cc_100x100.webp', '大药房', '购正品药 免费换新'),
(16, 'https://img20.360buyimg.com/img/s100x100_jfs/t1/120558/21/14376/58606/5f816516E5accc764/21ada51dbf32172c.jpg!cc_100x100.webp', 'https://img10.360buyimg.com/img/s100x100_jfs/t1/122530/27/13496/55785/5f6db671Ee67f390f/25f66db407a6ca0e.jpg!cc_100x100.webp', '家用电器', '买家电 上京东'),
(17, 'https://img12.360buyimg.com/img/s100x100_jfs/t1/150293/35/10191/122609/5f812149E0a602f7d/f3b223d937126d0d.jpg!cc_100x100.webp', 'https://img30.360buyimg.com/img/s100x100_jfs/t1/124004/33/9478/88917/5f33c309Ecd7c3e44/d5bc63aa3e53bfa0.jpg!cc_100x100.webp', '智能数码', '尽享玩物'),
(18, 'https://img11.360buyimg.com/img/s100x100_jfs/t1/28107/16/7136/194549/5c667a48E9fe0e5bf/fafdbd2602417069.jpg!cc_100x100.webp', 'https://img10.360buyimg.com/img/s100x100_jfs/t1/22097/24/6844/210864/5c638980E646b269f/706aa2d328a5001d.jpg!cc_100x100.webp', '个护清洁馆', '欢洗四季 洁净生活');

--
-- 转储表的索引
--

--
-- 表的索引 `jingdong1`
--
ALTER TABLE `jingdong1`
  ADD PRIMARY KEY (`sid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `jingdong1`
--
ALTER TABLE `jingdong1`
  MODIFY `sid` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
