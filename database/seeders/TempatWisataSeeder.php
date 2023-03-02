<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TempatWisataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("tempat_wisatas")->insert([
            [
                "nama" => "Batu Ratapan Angin",
                "alamat" => "Theater, Jl. Dieng, Dieng, Kec. Kejajar, Kab. Wonosobo, Jawa Tengah",
                "deskripsi" => "<p> Batu Ratapan Angin. Tempat wisata ini kerap kali disebut dengan nama lain yakni sebagai Batu Pandang Dieng. Kawasan wisata ini akan menyuguhkan Anda berupa pemandangan yang sangat indah nan menakjubkan. Terlebih lagi dengan nuansa dan suasananya yang sangat sejuk dan asri dikarenakan banyak pepohonan </p> <p>Dari atas ketinggian atau puncaknya, Anda akan menyaksikan sebuah perpaduan pemandangan alam yang sangat menawan. Nantinya dari atas sini Anda dapat melihat keindahan dari Telaga Warna. Terlebih lagi akan terlihat sebuah deretan pegunungan hijau dari kejauhan, yang mana menambahkan kesan damai dan menyejukkan mata. Selain itu, di tempat ini juga menyediakan berbagai wahana permainan. </p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Batu-Ratapan-Angin.jpg",
                "kategori" => "Bukit",
                "rating" => 4.7,
                "harga" => 10000
            ],
            [
                "nama" => "Lubang Sewu",
                "alamat" => "Jurutengah, Erorejo, Kec. Wadaslintang, Kab. Wonosobo, Jawa Tengah",
                "deskripsi" => "<p> Lubang Sewu ini menjadi temapt wisata populer dan banyak orang yang datang dan melihat bagaimana keindahan yang dimilikinya. Alamat dari tempat wisata ini cukup dekat dengan Waduk Wadaslintang. Ada pemandangan yang terbilang mirip dengan Green Canyon Amerika. </p> <p>Lubang Sewu terletak di Kecamatan Wadaslintang Wonosobo. Ada bebatuan yang tersusun rapi dan Anda bisa memotret pemandangan indah di Lubang Sewu ini</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Lubang-Sewu-Wonosobo.jpg",
                "kategori" => "Waduk",
                "rating" => 4.3,
                "harga" => 5000
            ],
            [
                "nama" => "Curug Winong Kaliwiro",
                "alamat" => "Winongsari, Kec. Kaliwiro, Kab. Wonosobo, Jawa Tengah",
                "deskripsi" => "<p>Tempat ini memiliki akses jalan yang terbilang cukup sulit karena harus melalui pemukiman penduduk setempat. Tetapi Anda juga tak perlu takut tersesat karena di sepanjang perjalanan ini ada petunjuk jalan agar bisa sampai di lokasi wisata. </p> <p>Curug Winong Kaliwiro ini berada di Desa Winongsari Kecamatan Kaliwiro Wonosobo. Ketika nanti sudah sampai di tempat parkiran, Anda bisa melanjutkan perjalanan dengan jarak sekitar 300 meter untuk sampai ke lokasi wisata.</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/curug-winong-kaliwiro.jpg",
                "kategori" => "Curug",
                "rating" => 4.1,
                "harga" => 1000
            ],
            [
                "nama" => "Gunung Prau",
                "alamat" => "Bakulan, Dieng, Kec. Wonosobo, Kab. Wonosobo, Jawa Tengah",
                "deskripsi" => "<p>Gunung Prau, yang mana merupakan sebuah puncak tertinggi dari dataran tinggi Dieng. Kawasan wisata alam satu ini telah terkenal dengan panorama keindahan alamnya yang sangat memukau. Terlebih lagi daerah ini menjadi spot terbaik bagi Anda yang ingin melihat sunset dan sunrise. </p> <p>Gunung dengan ketinggian sekitar 2.565 meter di atas permukaan laut ini, menawarkan dan menyuguhkan sebuah keindahan lanskap dataran Dieng. Untuk dapat menikmati keindahan tersebut Anda perlu mendaki hingga di puncaknya, yang mana ditempuh selama dua sampai tiga jam. Dengan waktu pendakian yang relatif terjangkau, tak heran apabila tempat ini menjadi jalur pendakian favorit.</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Gunung-Prau.jpg",
                "kategori" => "Gunung",
                "rating" => 4.8,
                "harga" => 15000
            ],
            [
                "nama" => "Padang Savana Dieng",
                "alamat" => "Karangsari, Dieng Kulon, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "deskrpsi" => "<p>Tempat ini menjadi favorit bagi setiap wisatawan yang berkunjung di Wonosobo. Padang savananya menawarkan sebuah keindahan padang ilalang yang sangat eksotis dan menawan. Untuk dapat tiba di lokasi ini, Anda perlu melakukan sebuah pendakian singkat. Yang mana sepanjang jalur pendakian akan dimanjakan dengan pemandangan alam.</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Padang-Savana-Dieng.jpg",
                "kategori" => "Bukit",
                "rating" => 4.5,
                "harga" => 10000
            ],
            [
                "nama" => "Pemandian Air Hangat Kalianget",
                "alamat" => "Kalianget, Somogede, Kec. Wadaslintang, Kab. Wonosobo, Jawa Tengah",
                "deskripsi" => "<p>Tempat ini tak jauh dari Alun-Alun Wonosobo yang jaraknya adalah 4 km saja. Jika datang berkunjung, jangan lupa untuk berendam di air hangat dan melihat pemandangan taman yang asri.</p> <p>Alamat pemandian ini berada di Jalan Raya Wonosobo, Dieng. Tepatnya 3 km Wonosobo dimana akses menuju lokasi juga cukup mudah.</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Pemandian-Air-Hangat-Kalianget.jpg",
                "kategori" => "Pemandian",
                "rating" => 4.2,
                "harga" => 2000
            ],
            [
                "nama" => "Kawah Dieng",
                "alamat" => "Bakal Buntu, Dieng Kulon, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "deskripsi" => "<p>Anda bisa mengunjungi tempat wisata ini dengan pemandangan alam yang sangat khas. Disebut juga dengan Kawah Sikidang yang termasuk sebagai tempat wisata di Wonosobo paling favorit. Bahkan banyak warga dari luar kota yang datang berkunjung.</p> <p>Wisata gunung api ini juga memiliki aktivitas vulkanik sehingga kalaupu datang harus berhati-hati. Luas Kawah Dieng sekitar 200 meter persegi dan letaknya berada di dataran yang cukup rendah. Letaknya berada di Bakal Buntu, Dieng Kulon.</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Kawah-Dieng-Wonosobo.jpg",
                "kategori" => "Gunung",
                "rating" => 4.4,
                "harga" => 10000
            ],
            [
                "nama" => "Bukit Seroja",
                "alamat" => "Desa Wisata, Maron, Kec. Garung, Kab. Wonosobo, Jawa Tengah",
                "deskripsi" => "<p>Nantinya di tempat wisata ini Anda dapat menyaksikan keindahan Telaga Menjer, yang mana dapat dinikmati dari atas ketinggian. Dengan banyaknya pepohonan, mampu menciptakan kesan yang sangat tenang dan nyaman.</p> <p>Untuk dapat menikmati keindahan yang ditawarkan oleh tempat wisata ini, Anda harus mendaki agar dapat sampai di lokasinya. Meskipun akan terasa lelah, namun semuanya akan terbayar dengan pemandangan alam yang menakjubkan. Nantinya Anda juga dapat menyaksikan perkebunan teh yang terhampar sangat luas. Disana telah disediakan beberapa gazebo dan surau yang dapat Anda gunakan.</p>",
                "gambar" => "https://www.javatravel.net/wp-content/uploads/2019/10/Bukit-Seroja.jpg",
                "kategori" => "Bukit",
                "rating" => 4.6,
                "harga" => 5000
            ]
        ]);
    }
}
