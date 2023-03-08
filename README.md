<p align="center"><a href="https://laravel.com" target="_blank"><img src="http://preinan.xxuz.com/images/preinannotblack.svg" width="400" alt="Logo Preinan"></a></p>


# Preinan

Preinan adalah sebuah website yang menawarkan platform pencarian destinasi liburan khususnya di kawasan indah Wonosobo. Website ini didesain untuk mempromosikan pariwisata lokal dan mendukung UMKM di Wonosobo. Preinan memiliki fitur yang sangat memudahkan pengguna untuk membeli tiket masuk ke tempat wisata yang ingin dikunjungi.

Satu lagi fitur hebat yang dimiliki oleh Preinan adalah e-tiket yang dilengkapi dengan barcode. Barcode ini digunakan untuk scanning saat akan memasuki area wisata, dan jika sudah ter-scan, e-tiket tersebut secara otomatis tidak valid dan tidak bisa digunakan lagi. Hal ini membantu memastikan keamanan dan kenyamanan para pengunjung.

Preinan juga menyediakan tiga kategori wisata yang menarik, yaitu danau, gunung, dan air terjun yang semuanya dapat ditemukan di Wonosobo. Dengan Preinan, pengunjung dapat menemukan informasi lengkap mengenai tempat wisata, mulai dari lokasi, harga tiket masuk, hingga informasi terkait akomodasi di sekitar area wisata.

Dengan fitur-fiturnya yang lengkap dan mudah digunakan, Preinan adalah solusi terbaik bagi mereka yang ingin merencanakan liburan yang tak terlupakan di Wonosobo. Ayo kunjungi website Preinan dan temukan destinasi liburan impianmu!

## "Cari Destinasi Liburan? Preinan Aja yang Bisa Bikin Hati Senang! Tiket Wisata Online Anti Galau ke Wonosobo!"


# Techstack 
- Laravel
- Vite Js
- React Js
- Tailwind
- Mysql

# Cara Setup Project 

## 1. Requirement
Project ini setidak nya membutuhkan software sebagai berikut :
- Node js version 18.5
- Php version 8.2
- Composer version 2.5.4
- XAMMP (termasuk dengan php 8.2)
- git

## 2. Download Project
Setelah menyiapkan requirement maka selanjutnya adalah mendownload project ini dengan menggunakan bantuan tool git
```
git clone https://github.com/Arep-Preinan/Preinan.git
```
Atau bisa langsung mendownload nya

## 3. Instalasi
Setelah mendownload maka tahap selanjutnya adalah instalasi 
```
composer install
npm install
```

## 4. Copy env
Setelah install berikut nya adalah mengcopy file .env.example menjadi file  .env

## 5. Setup database
jika sudah maka ubah konfigurasi berikut pada file .env sesuai keinginan atau sesuai akun dari databasenya
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=preinan
DB_USERNAME=root
DB_PASSWORD=
```
setelah merubah lalu tambahkan database dengan nama preinan

## 6. Migrate database dan data
Pada projek ini sudah di lengkapi dengan data buatan maka cara nya cukup simpel hanya dengan menjalankan perintah ini
```
php artisan migrate:fresh --seed
```

## 7. Jalankan server
Dikarenakan pada mode developer projek ini membutuhkan dua server yaitu server untuk laravel dan untuk react 
Maka caranya buka 2 terminal lalu ketikan perintah ini
Pada terminal 1
```
php artisan serve
```
Pada terminal 2
```
npm run deb
```
###### Ingat Jangan Tutup Terminal Tersebut (Ctrl+C)

# Help Desk
Jika butuh bantuan silahkan jangan ragu-ragu menghubungi developer

# Penasaran dengan website nya tanpa setup?
[Klik link ini untuk melihat website nya](http://preinan.xxuz.com)