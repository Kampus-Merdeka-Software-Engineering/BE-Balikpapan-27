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
    -- email VARCHAR(225) NOT NULL,
    telp VARCHAR(225) NOT NULL,
    tanggal DATE,
    dokter VARCHAR(225) NOT NULL,
    pesan TEXT
);

CREATE TABLE IF NOT EXISTS blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto VARCHAR(225),
    judul VARCHAR(225) NOT NULL,
    penulis VARCHAR(225) NOT NULL,
    tanggal_terbit DATE,
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
    ('Shabrina Tiarani Hidayat', 'Project Leader', 'https://www.linkedin.com/in/stiarani/', 'https://instagram.com/shabrinaath?igshid=OGQ5ZDc2ODk2ZA==', 'https://wa.me/6282006596097', '', ''),
    ('Nuansa Cinta Puteri Dwipa', 'Quality Assurance', 'https://www.linkedin.com/in/ncintaptrd', 'https://instagram.com/ncintaptrd', 'https://wa.me/6281289417693', '', ''),
    ('Novita Anggraini', 'Front-End Developer', 'https://www.linkedin.com/in/novitanggraini/', 'https://www.instagram.com/fixvita/?hl=id', 'https://wa.link/heh7hc', '', ''),
    ('Alexs Sandro', 'Front-End Developer', 'https://www.linkedin.com/in/alexs-sandro-5251b3260', 'https://www.instagram.com/alexsspasaribu29/', 'https://wa.me/6289629052002', '', ''),
    ('I Made Putra Utama', 'Back-End Developer', '', 'https://www.instagram.com/_ade_putra/', 'https://wa.me/62895370011969', '', ''),
    ('Datu Sinang Saya', 'Back-End Developer', 'https://www.linkedin.com/in/datu-sinangsaya-160105294?trk=contact-info', 'https://instagram.com/_datu192?igshid=OGQ5ZDc2ODk2ZA==', 'https://wa.me/6287858488204', '', '')
);

INSERT INTO doctor (nama, spesialis, jenis_kelamin, foto) VALUES
(
    ('Dr. Emily Anderson', 'Spesialis Kandungan', 'P', ''),
    ('Dr. Matthew Davis', 'Ahli Obstetri dan Ginekologi', 'L', ''),
    ('Dr. Benjamin Carter', 'Spesialis Kandungan', 'L', ''),
    ('Dr. Olivia Jane', 'Spesialis Kandungan dan Obstetri', 'P', ''),
    ('Dr. Sophia Rose', 'Spesialis Kandungan', 'P', ''),
    ('Dr. John Doe', 'Spesialis Kandungan', 'L', '')
);

