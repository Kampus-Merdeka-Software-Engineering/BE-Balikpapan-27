CREATE DATABASE IF NOT EXISTS `moms_health`;

USE 'moms_health';

CREATE TABLE IF NOT EXISTS doctor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(225) NOT NULL,
    spesialis VARCHAR(225) NOT NULL,
    jenis_kelamin VARCHAR(1) NOT NULL,
    foto VARCHAR(225) NOT NULL 
);

CREATE TABLE IF NOT EXISTS appointment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(225) NOT NULL,
    telp VARCHAR(225) NOT NULL,
    tanggal DATE,
    dokter VARCHAR(225) NOT NULL,
    pesan TEXT
);

CREATE TABLE IF NOT EXISTS blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto VARCHAR(225) NOT NULL,
    judul VARCHAR(225) NOT NULL,
    penulis VARCHAR(225) NOT NULL,
    tanggal_terbit VARCHAR(225) NOT NULL,
    isi_blog TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(225) NOT NULL,
    divisi VARCHAR(225) NOT NULL,
    linkedin VARCHAR(225),
    instagram VARCHAR(225),
    whatsapp VARCHAR(225),
    foto VARCHAR(225) NOT NULL,
    logo_universitas VARCHAR(225) NOT NULL,
);

INSERT INTO team (nama, divisi, linkedin, instagram, whatsapp, foto, logo_universitas) VALUES
(
    ('Shabrina Tiarani Hidayat', 'Project Leader', 'https://www.linkedin.com/in/stiarani/', 'https://instagram.com/shabrinaath?igshid=OGQ5ZDc2ODk2ZA==', 'https://wa.me/6282006596097', 'https://drive.google.com/uc?export=view&id=1WAKZpXgRN6q8Ww0nRrsMsmayQN7ydyOF
', 'https://drive.google.com/uc?export=view&id=1ScZC2pGN3u3xY_PD7pBc6mWzLN5Iax6S
'),
    ('Nuansa Cinta Puteri Dwipa', 'Quality Assurance', 'https://www.linkedin.com/in/ncintaptrd', 'https://instagram.com/ncintaptrd', 'https://wa.me/6281289417693', 'https://drive.google.com/uc?export=view&id=14A4e8qnM783nP_kZWkRyRX5SvXeNhukf
', 'https://drive.google.com/uc?export=view&id=1ktELQTn2GhawqSIecUJh8lPSj5g2qRi9
'),
    ('Novita Anggraini', 'Front-End Developer', 'https://www.linkedin.com/in/novitanggraini/', 'https://www.instagram.com/fixvita/?hl=id', 'https://wa.link/heh7hc', 'https://drive.google.com/uc?export=view&id=1kd2IgnAS_lo9ZVAJi_P0WToWSClq1Xi-
', 'https://drive.google.com/uc?export=view&id=1nmaR1NBdi6xgJL2O4hHchnJDKJ_7vHd4
'),
    ('Alexs Sandro', 'Front-End Developer', 'https://www.linkedin.com/in/alexs-sandro-5251b3260', 'https://www.instagram.com/alexsspasaribu29/', 'https://wa.me/6289629052002', 'https://drive.google.com/uc?export=view&id=1r-Dt7RQu80jP_PS-Qua-QtO_uFkn4Qgy
', 'https://drive.google.com/uc?export=view&id=1J3Pc4HnhfJm7wdjS1VyhKjmQIPVUCFBi
'),
    ('I Made Putra Utama', 'Back-End Developer', 'https://www.linkedin.com', 'https://www.instagram.com/_ade_putra/', 'https://wa.me/62895370011969', 'https://drive.google.com/uc?export=view&id=1Li2eeuOAqB52Kme6l9_w9Y8ZmJV9uNpi
', 'https://drive.google.com/uc?export=view&id=1tX8tEtWdEW9_3S0mjeA4j219FGV5osrW
'),
    ('Datu Sinang Saya', 'Back-End Developer', 'https://www.linkedin.com/in/datu-sinangsaya-160105294?trk=contact-info', 'https://instagram.com/_datu192?igshid=OGQ5ZDc2ODk2ZA==', 'https://wa.me/6287858488204', 'https://drive.google.com/uc?export=view&id=1cNlFFztkPU0BwEX3QEYSbvGUN42DWGrw
', 'https://drive.google.com/uc?export=view&id=1ScZC2pGN3u3xY_PD7pBc6mWzLN5Iax6S
')
);

INSERT INTO doctor (nama, spesialis, jenis_kelamin, foto) VALUES
(
    ('Dr. Emily Anderson', 'Spesialis Kandungan', 'P', 'https://drive.google.com/uc?export=view&id=1TFGPBUbQ6hRb_UNQKNLRxZKDyo2vmftv
'),
    ('Dr. Matthew Davis', 'Ahli Obstetri dan Ginekologi', 'L', 'https://drive.google.com/uc?export=view&id=1WtuimViWIYIackaHvw9xlrcdLpHvaSbk
'),
    ('Dr. Benjamin Carter', 'Spesialis Kandungan', 'L', 'https://drive.google.com/uc?export=view&id=1Tzq8D9P-TY52nA1qqprzaAacQ4lMylXl
'),
    ('Dr. Olivia Jane', 'Spesialis Kandungan dan Obstetri', 'P', 'https://drive.google.com/uc?export=view&id=1SWOAaHIXxW4Rtw0h2vCv5C1Rqc5X4VfL
'),
    ('Dr. Sophia Rose', 'Spesialis Kandungan', 'P', 'https://drive.google.com/uc?export=view&id=1_mtCYVfGi-kV7wHNDT3P4sluWGbgoJOg
'),
    ('Dr. John Doe', 'Spesialis Kandungan', 'L', 'https://drive.google.com/uc?export=view&id=1SfSIhUTdeuM7Ci3AqYYAPjGqMOxLrUWR
')
);

INSERT INTO blog (judul, penulis, tanggal_terbit, isi_blog, foto) VALUES
(
    ('Menjaga Kesehatan Mental selama Kehamilan: Panduan Praktis untuk Ibu-ibu Muda', 'Dr. Amanda Surya, Psikolog Klinis', '15 Oktober 2023', 'Seiring dengan peningkatan kesadaran akan pentingnya kesehatan mental, terutama selama masa kehamilan, Dr. Amanda Surya, seorang psikolog klinis yang terkemuka, merilis panduan praktis untuk membantu ibu-ibu muda menjaga kesehatan mental mereka selama kehamilan. Dalam bukunya yang berjudul Menjaga Kesehatan Mental selama Kehamilan: Panduan Praktis untuk Ibu-ibu Muda, Dr. Surya menggabungkan pengetahuan ilmiah dan pengalaman klinisnya untuk memberikan wawasan yang berharga. Ia menjelaskan betapa pentingnya perawatan kesehatan mental selama kehamilan, dan memberikan saran konkret tentang cara mengelola stres, kekhawatiran, dan perubahan emosional yang mungkin timbul. Panduan ini tidak hanya memberikan informasi tentang dampak positif bagi kesehatan mental ibu, tetapi juga membahas bagaimana kondisi psikologis ibu dapat memengaruhi perkembangan janin. Dr. Surya menyoroti teknik relaksasi, dukungan sosial, dan pentingnya berkomunikasi dengan pasangan atau orang terdekat. Berita ini memberikan pandangan mendalam tentang kesehatan mental selama kehamilan dan menggarisbawahi urgensi pengetahuan dan dukungan yang tepat untuk ibu-ibu muda. Dengan melibatkan pembaca dalam bahasa yang mudah dipahami, buku ini diharapkan akan menjadi sumber daya berharga bagi calon ibu yang sedang mengalami perjalanan kehamilan mereka.', 'https://d1bpj0tv6vfxyp.cloudfront.net/articles/119957_26-2-2021_13-18-2.webp'),
    ('Gaya Hidup Sehat untuk Ibu Hamil: Tips Makanan dan Latihan Ringan', 'Prof. Dr. Anita Fitriani, Ahli Gizi dan Pakar Kesehatan Perempuan', '6 September 2023', 'Dalam upaya untuk meningkatkan pemahaman masyarakat tentang kehamilan yang sehat, Prof. Dr. Anita Fitriani, seorang ahli gizi dan pakar kesehatan perempuan, merilis panduan lengkap berjudul Gaya Hidup Sehat untuk Ibu Hamil: Tips Makanan dan Latihan Ringan. Buku ini bukan hanya sekadar himpunan informasi, tetapi juga merupakan panduan praktis yang memberikan saran konkret bagi ibu hamil untuk menjalani gaya hidup yang sehat. Prof. Fitriani membahas berbagai tips makanan yang diperlukan untuk memenuhi kebutuhan gizi ibu dan janinnya, sambil tetap mempertimbangkan aspek-aspek penting seperti alergi makanan dan intoleransi. Selain itu, buku ini menyoroti pentingnya latihan ringan selama kehamilan dan memberikan serangkaian rutinitas latihan yang aman dan bermanfaat. Prof. Fitriani menggarisbawahi manfaat fisik dan mental dari kegiatan olahraga yang sesuai dengan kondisi ibu hamil. Berita ini menyoroti bahwa panduan ini tidak hanya relevan untuk mendukung kesehatan ibu hamil, tetapi juga untuk memastikan perkembangan optimal dari janin. Prof. Fitriani berbicara dalam bahasa yang mudah dipahami, sehingga informasi yang disajikan dapat diakses dengan mudah oleh semua calon ibu. Dengan fokus pada keamanan dan kesehatan ibu dan bayi, panduan ini diharapkan dapat menjadi sumber inspirasi bagi ibu hamil dalam merencanakan gaya hidup sehat mereka selama periode kehamilan.', 'https://2.bp.blogspot.com/-1cf8XbBVTkc/WJFM80U_D4I/AAAAAAAAADY/89ta1UY8iAsRijYjuef3rwuEmYRnzzejQCLcB/s1600/gambar-1.jpg'),
    ('Inovasi Teknologi Medis: Pemindaian 4D yang Mengagumkan untuk Melihat Janin', 'Dr. Muhammad Aziz, Ahli Radiologi dan Teknologi Medis', '2 Oktober 2023', 'Sebuah terobosan menarik dalam dunia teknologi medis telah muncul dengan pengenalan pemindaian 4D yang mengagumkan untuk melihat janin. Dr. Muhammad Aziz, seorang ahli radiologi dan teknologi medis terkemuka, memaparkan kemajuan luar biasa ini dalam bukunya yang berjudul Inovasi Teknologi Medis: Pemindaian 4D yang Mengagumkan untuk Melihat Janin. Dalam bukunya, Dr. Aziz menjelaskan bagaimana teknologi pemindaian 4D menghadirkan dimensi baru dalam pengalaman melihat janin, memungkinkan calon orangtua untuk melihat gerakan dan ekspresi janin dengan tingkat detail yang belum pernah terjadi sebelumnya. Ia membahas perkembangan teknologi ini dari segi teknis dan bagaimana hal ini dapat memberikan wawasan yang lebih mendalam tentang perkembangan janin. Selain itu, Dr. Aziz juga menggambarkan manfaat psikologis dari penggunaan teknologi ini, memberikan calon orangtua pengalaman yang lebih intim dan mendalam terhadap kehidupan yang sedang berkembang di dalam kandungan. Berita ini menyoroti betapa pentingnya inovasi teknologi medis dalam meningkatkan pemahaman kita tentang kehidupan pra-natal. Dr. Aziz secara apik menjelaskan bagaimana pemindaian 4D ini bukan hanya sebagai alat diagnostik, tetapi juga sebagai cara yang mengagumkan untuk menghubungkan calon orangtua dengan janin mereka. Buku ini diharapkan menjadi panduan penting bagi profesional kesehatan, orangtua, dan siapa pun yang tertarik dengan perkembangan terbaru dalam teknologi medis yang berkaitan dengan kehamilan dan reproduksi manusia.', 'https://redmedsupplies.com/cdn/shop/collections/ultrasound.jpg?v=1620237335'),
    ('Inovasi Terkini dalam Pelayanan Kesehatan untuk Ibu Hamil.', 'Prof. Dr. Sarah Dewi, Ahli Kesehatan Reproduksi dan Inovator Kesehatan', '3 Juni 2023', 'Seiring dengan terus berkembangnya teknologi dan pengetahuan medis, Prof. Dr. Sarah Dewi, seorang ahli kesehatan reproduksi dan inovator kesehatan, membahas terobosan terkini dalam pelayanan kesehatan bagi ibu hamil dalam bukunya yang berjudul Inovasi Terkini dalam Pelayanan Kesehatan untuk Ibu Hamil. Dalam bukunya, Prof. Dewi membawa pembaca melalui serangkaian inovasi terbaru yang telah mengubah cara kita merawat dan mendukung ibu hamil. Ini termasuk penerapan teknologi terkini dalam pemantauan kehamilan, penggunaan aplikasi kesehatan khusus untuk ibu hamil, dan pendekatan terbaru dalam manajemen risiko kesehatan selama kehamilan.Ia juga menyoroti peran penting telemedicine dalam menyediakan akses pelayanan kesehatan yang lebih baik bagi ibu hamil, terutama di daerah-daerah yang sulit dijangkau. Pendekatan holistik terhadap kesehatan mental dan fisik ibu hamil juga menjadi fokus dalam bukunya, dengan pembahasan tentang program dukungan psikologis yang terintegrasi. Berita ini mencerminkan pentingnya mengikuti perkembangan terkini dalam bidang pelayanan kesehatan maternal. Prof. Dewi menggabungkan pengetahuan ilmiah dengan pengalamannya dalam merancang solusi inovatif, membawa pemahaman yang lebih baik tentang bagaimana teknologi dan pendekatan baru dapat meningkatkan perawatan ibu hamil. Pembaca diharapkan akan mendapatkan wawasan mendalam tentang masa depan pelayanan kesehatan maternal melalui penjelasan yang jelas dan praktis dari seorang ahli yang terkemuka.', 'https://www.eetimes.eu/wp-content/uploads/2021/01/LMD-V-Sensor-devices.jpg?w=2048'),
    ('Manfaat Pijat Kehamilan: Sentuhan Lembut untuk Kesejahteraan Ibu dan Janin.', 'Dra. Farida Santoso, Terapis Pijat Kehamilan Terkemuka', '9 Maret 2023', 'Dra. Farida Santoso, seorang terapis pijat kehamilan terkemuka, menggali dunia manfaat sentuhan lembut untuk kesejahteraan ibu dan janin dalam bukunya yang baru berjudul Manfaat Pijat Kehamilan: Sentuhan Lembut untuk Kesejahteraan Ibu dan Janin. Dalam bukunya, Dra. Santoso membahas secara rinci bagaimana pijat kehamilan bukan hanya pengalaman relaksasi, tetapi juga dapat memberikan sejumlah manfaat kesehatan bagi ibu hamil dan perkembangan janinnya. Ia menguraikan teknik-teknik pijat khusus yang aman dan nyaman selama kehamilan, serta menyentuh aspek-aspek khusus yang perlu diperhatikan. Berbicara dari pengalaman dan pengetahuannya sebagai terapis pijat kehamilan, Dra. Santoso menggarisbawahi manfaat pijat dalam mengurangi ketidaknyamanan fisik seperti nyeri punggung, memperbaiki sirkulasi darah, dan membantu mengurangi stres yang mungkin dirasakan ibu hamil. Buku ini juga mencakup panduan praktis tentang kapan dan bagaimana melakukan pijat kehamilan, serta memberikan wawasan tentang bagaimana pijat tersebut dapat memperkuat ikatan emosional antara ibu dan janin. Berita ini menyoroti pentingnya pemahaman tentang manfaat pijat kehamilan sebagai bagian integral dari perawatan kesehatan ibu hamil. Dra. Santoso memberikan informasi yang mudah dipahami dan diakses, membuat bukunya menjadi sumber daya berharga bagi calon ibu yang mencari cara untuk meningkatkan kesejahteraan mereka selama kehamilan.Dalam bukunya, Prof. Dewi membawa pembaca melalui serangkaian inovasi terbaru yang telah mengubah cara kita merawat dan mendukung ibu hamil. Ini termasuk penerapan teknologi terkini dalam pemantauan kehamilan, penggunaan aplikasi kesehatan khusus untuk ibu hamil, dan pendekatan terbaru dalam manajemen risiko kesehatan selama kehamilan.Ia juga menyoroti peran penting telemedicine dalam menyediakan akses pelayanan kesehatan yang lebih baik bagi ibu hamil, terutama di daerah-daerah yang sulit dijangkau. Pendekatan holistik terhadap kesehatan mental dan fisik ibu hamil juga menjadi fokus dalam bukunya, dengan pembahasan tentang program dukungan psikologis yang terintegrasi.Berita ini mencerminkan pentingnya mengikuti perkembangan terkini dalam bidang pelayanan kesehatan maternal. Prof. Dewi menggabungkan pengetahuan ilmiah dengan pengalamannya dalam merancang solusi inovatif, membawa pemahaman yang lebih baik tentang bagaimana teknologi dan pendekatan baru dapat meningkatkan perawatan ibu hamil.Pembaca diharapkan akan mendapatkan wawasan mendalam tentang masa depan pelayanan kesehatan maternal melalui penjelasan yang jelas dan praktis dari seorang ahli yang terkemuka.', 'https://akcdn.detik.net.id/visual/2021/08/13/pijat-hamil.jpeg?w=650')
);

