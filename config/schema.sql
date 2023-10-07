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
    foto VARCHAR(225) NOT NULL,
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
    ('I Made Putra Utama', 'Back-End Developer', '', 'https://www.instagram.com/_ade_putra/', 'https://wa.me/62895370011969', 'https://drive.google.com/uc?export=view&id=1Li2eeuOAqB52Kme6l9_w9Y8ZmJV9uNpi
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
    ('', '', '', '', '')
)

