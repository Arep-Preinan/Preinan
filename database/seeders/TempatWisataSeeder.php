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
                "gmaps" => "https://goo.gl/maps/uJAU7vDpuHetf7zn8",
                "deskripsi" => "<p> Batu Ratapan Angin. Tempat wisata ini kerap kali disebut dengan nama lain yakni sebagai Batu Pandang Dieng. Kawasan wisata ini akan menyuguhkan Anda berupa pemandangan yang sangat indah nan menakjubkan. Terlebih lagi dengan nuansa dan suasananya yang sangat sejuk dan asri dikarenakan banyak pepohonan </p> <p>Dari atas ketinggian atau puncaknya, Anda akan menyaksikan sebuah perpaduan pemandangan alam yang sangat menawan. Nantinya dari atas sini Anda dapat melihat keindahan dari Telaga Warna. Terlebih lagi akan terlihat sebuah deretan pegunungan hijau dari kejauhan, yang mana menambahkan kesan damai dan menyejukkan mata. Selain itu, di tempat ini juga menyediakan berbagai wahana permainan. </p>",
                "gambar" => "Batu-Ratapan-Angin.jpg",
                "kategori" => "Bukit",
                "rating" => 4.7,
                "harga" => 10000
            ],
            [
                "nama" => "Lubang Sewu",
                "alamat" => "Jurutengah, Erorejo, Kec. Wadaslintang, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/B1L8mcSt4aCr1kxz8",
                "deskripsi" => "<p> Lubang Sewu ini menjadi temapt wisata populer dan banyak orang yang datang dan melihat bagaimana keindahan yang dimilikinya. Alamat dari tempat wisata ini cukup dekat dengan Waduk Wadaslintang. Ada pemandangan yang terbilang mirip dengan Green Canyon Amerika. </p> <p>Lubang Sewu terletak di Kecamatan Wadaslintang Wonosobo. Ada bebatuan yang tersusun rapi dan Anda bisa memotret pemandangan indah di Lubang Sewu ini</p>",
                "gambar" => "Lubang-Sewu.jpg",
                "kategori" => "Waduk",
                "rating" => 4.3,
                "harga" => 5000
            ],
            [
                "nama" => "Curug Winong Kaliwiro",
                "alamat" => "Winongsari, Kec. Kaliwiro, Kab. Wonosobo, Jawa Tengah",
                "gmaps" =>  "https://goo.gl/maps/EakUytyTj5YtjJwB8",
                "deskripsi" => "<p>Tempat ini memiliki akses jalan yang terbilang cukup sulit karena harus melalui pemukiman penduduk setempat. Tetapi Anda juga tak perlu takut tersesat karena di sepanjang perjalanan ini ada petunjuk jalan agar bisa sampai di lokasi wisata. </p> <p>Curug Winong Kaliwiro ini berada di Desa Winongsari Kecamatan Kaliwiro Wonosobo. Ketika nanti sudah sampai di tempat parkiran, Anda bisa melanjutkan perjalanan dengan jarak sekitar 300 meter untuk sampai ke lokasi wisata.</p>",
                "gambar" => "Curug-Winong-Kaliwiro.jpg",
                "kategori" => "Curug",
                "rating" => 4.1,
                "harga" => 1000
            ],
            [
                "nama" => "Gunung Prau",
                "alamat" => "Bakulan, Dieng, Kec. Wonosobo, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/9YmjJoEjGcfNgZtE6",
                "deskripsi" => "<p>Gunung Prau, yang mana merupakan sebuah puncak tertinggi dari dataran tinggi Dieng. Kawasan wisata alam satu ini telah terkenal dengan panorama keindahan alamnya yang sangat memukau. Terlebih lagi daerah ini menjadi spot terbaik bagi Anda yang ingin melihat sunset dan sunrise. </p> <p>Gunung dengan ketinggian sekitar 2.565 meter di atas permukaan laut ini, menawarkan dan menyuguhkan sebuah keindahan lanskap dataran Dieng. Untuk dapat menikmati keindahan tersebut Anda perlu mendaki hingga di puncaknya, yang mana ditempuh selama dua sampai tiga jam. Dengan waktu pendakian yang relatif terjangkau, tak heran apabila tempat ini menjadi jalur pendakian favorit.</p>",
                "gambar" => "Gunung-Prau.jpg",
                "kategori" => "Gunung",
                "rating" => 4.8,
                "harga" => 15000
            ],
            [
                "nama" => "Padang Savana Dieng",
                "alamat" => "Karangsari, Dieng Kulon, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/xkKfdkZEjZ4NiBwq8",
                "deskrpsi" => "<p>Tempat ini menjadi favorit bagi setiap wisatawan yang berkunjung di Wonosobo. Padang savananya menawarkan sebuah keindahan padang ilalang yang sangat eksotis dan menawan. Untuk dapat tiba di lokasi ini, Anda perlu melakukan sebuah pendakian singkat. Yang mana sepanjang jalur pendakian akan dimanjakan dengan pemandangan alam.</p>",
                "gambar" => "Padang-Savana-Dieng.jpg",
                "kategori" => "Bukit",
                "rating" => 4.5,
                "harga" => 10000
            ],
            [
                "nama" => "Pemandian Air Hangat Kalianget",
                "alamat" => "Kalianget, Somogede, Kec. Wadaslintang, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/BUMYLVwe1gDKqHJP7",
                "deskripsi" => "<p>Tempat ini tak jauh dari Alun-Alun Wonosobo yang jaraknya adalah 4 km saja. Jika datang berkunjung, jangan lupa untuk berendam di air hangat dan melihat pemandangan taman yang asri.</p> <p>Alamat pemandian ini berada di Jalan Raya Wonosobo, Dieng. Tepatnya 3 km Wonosobo dimana akses menuju lokasi juga cukup mudah.</p>",
                "gambar" => "Pemandian-Air-Hangat-Kalianget.jpg",
                "kategori" => "Pemandian",
                "rating" => 4.2,
                "harga" => 2000
            ],
            [
                "nama" => "Kawah Dieng",
                "alamat" => "Bakal Buntu, Dieng Kulon, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/Bmz726TamHrR6gwY9",
                "deskripsi" => "<p>Anda bisa mengunjungi tempat wisata ini dengan pemandangan alam yang sangat khas. Disebut juga dengan Kawah Sikidang yang termasuk sebagai tempat wisata di Wonosobo paling favorit. Bahkan banyak warga dari luar kota yang datang berkunjung.</p> <p>Wisata gunung api ini juga memiliki aktivitas vulkanik sehingga kalaupu datang harus berhati-hati. Luas Kawah Dieng sekitar 200 meter persegi dan letaknya berada di dataran yang cukup rendah. Letaknya berada di Bakal Buntu, Dieng Kulon.</p>",
                "gambar" => "Kawah-Dieng.jpg",
                "kategori" => "Gunung",
                "rating" => 4.4,
                "harga" => 10000
            ],
            [
                "nama" => "Puncak Seroja",
                "alamat" => "Sembungan, Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/Bu9xDDubqDwHDeyq7",
                "deskripsi" => "<p>Nantinya di tempat wisata ini Anda dapat menyaksikan keindahan Telaga Menjer, yang mana dapat dinikmati dari atas ketinggian. Dengan banyaknya pepohonan, mampu menciptakan kesan yang sangat tenang dan nyaman.</p> <p>Untuk dapat menikmati keindahan yang ditawarkan oleh tempat wisata ini, Anda harus mendaki agar dapat sampai di lokasinya. Meskipun akan terasa lelah, namun semuanya akan terbayar dengan pemandangan alam yang menakjubkan. Nantinya Anda juga dapat menyaksikan perkebunan teh yang terhampar sangat luas. Disana telah disediakan beberapa gazebo dan surau yang dapat Anda gunakan.</p>",
                "gambar" => "Puncak-Seroja.jpg",
                "kategori" => "Bukit",
                "rating" => 4.5,
                "harga" => 5000
            ],
            [
                "nama" => "Telaga Warna",
                "alamat" => "Dieng, Kec. Kejajar, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/GtKSRpNcuYkUK8W19",
                "deskripsi" => "<p>Telaga warna merupakan tempat wisata andalan yang dikunjungi para wisatawan lokal ataupun wisatawan luar. Telaga Warna ini juga merupakan danau kecil yang sinar mataharinya bisa menembus ke dasar air danau. Tidak hanya itu, Anda juga bisa melihat pemandangan yang menakjubkan ketika berada di ketinggian 2000 mdpl.</p> <p>Lokasi Telaga Warna ini berada di Dieng Wetan, Wonosobo. Menemukan tempat wisata ini juga tak akan sulit. Anda bisa bertanya pada warga sekitar atau mengikuti petunjuk melalui google maps.</p>",
                "gambar" => "Telaga-Warna.jpg",
                "kategori" => "Danau",
                "rating" => 4.6,
                "harga" => 15000
            ],
            [
                "nama" => "Kolam Renang Tirta Ria Tembelang",
                "alamat" => "Tembelang, Rojoimo, Kec. Wonosobo, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/AWgPaLkiMJr3YoxJ6",
                "deskripsi" => "<p?>Tempat wisata favorit anak-anak ketika libur adalah pemandian atau kolam renang. Di Wonosobo Anda juga bisa menemukan tempat wisata yang penuh dengan wahana serta fasilitas menarik. Kolam Renang Tirta Ria Tembelang ini menyediakan berbagai wahana menarik untuk anak. Tetapi jangan lupa untuk melakukan pengawasan terhadap aktivitas mereka selama di kolam renang.</p> <p>Lokasi wisata ini ada di Desa Tembelang Kecamatan Mojotengah Wonosobo. Anda bisa mengunjunginya bersama teman-teman tercinta dan berenang disana. Jangan lupa untuk membayar tiket masuknya dulu, ya!</p>",
                "gambar" => "Kolam-Renang-Tirta-Ria-Tembelang.jpg",
                "kategori" => "Pemandian",
                "rating" => 4.2,
                "harga" => 15000
            ],
            [
                "nama" => "Kebun Teh Tambi",
                "alamat" => "Sawah, Tlogomulyo, Kec. Kertek, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://goo.gl/maps/xoAsMY6QznTog7Qm6",
                "deskripsi" => "<p>Tempat lain untuk menghabiskan liburan di Wonosobo yang tak kalah keren adalah Kebun Teh Tambi. Tempat wisata ini bahkan terbilang memiliki akses jalan yang mudah ditempuh oleh kendaraan sehingga tentu nyaman untuk mengunjunginya. Jika sudah sampai di Kebun Teh, Anda bisa melihat pemandangan kebun teh yang hijau dan begitu luas.</p> <p>Kebun Teh Tambi berada di Tambi, Kejajar. Lokasinya berada di ketinggian sekitar 1400 mdpl sehingga sering diselimuti kabut tebal.</p>",
                "gambar" => "Kebun-Teh-Tambi.jpg",
                "kategori" => "Kebun Teh",
                "rating" => 4.5,
                "harga" => 10000
            ],
            // [
            //     "nama" => ""
            // ]
        ]);
    }
}
