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
                "nama" => "Embung Kledung",
                "alamat" => "Area Sawah, Kledung, Kec. Kledung, Kab. Temanggung, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1760432138485!2d110.02969221444596!3d-7.3341169947072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9e11f0fe6bfb%3A0xacef31f48434fcf2!2sEmbung%20Kledung!5e0!3m2!1sid!2sid!4v1678880858577!5m2!1sid!2sid",
                "deskripsi" => "<p>Sebuah kolam raksasa yang ada di lereng Gunung Sindoro. Embung ini dulunya dibangun agar bisa mengatasi kekurangan air saat musim kemarau. Berbentuk persegi panjang dengan setiap sisi sekitar 83 meter dan kedalaman 3 meter. Ada pemandangan alam yang sejuk, indah dan menjadi daya tarik tersendiri.</p> <p>Lokasinya berada di Km 11, Jalan Raya Parakan Wonosobo. Tarif yang dikenakan masuk ke tempat wisata ini adalah Rp. 6.000 per orang. Jam operasional yang diberlakukan adalah dari jam 05.30 hingga 18.00.</p>",
                "kategori" => "Danau",
                "rating" => 4.5,
                "harga" => 6000
            ],
            [
                "nama" => "Padang Savana Dieng",
                "alamat" => "Karangsari, Dieng Kulon, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3211287541926!2d109.90918031444514!3d-7.204155994798996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700d515a5d0bd1%3A0x338a86c0cdb8fc0e!2sPadang%20savana%20dieng!5e0!3m2!1sid!2sid!4v1678880898574!5m2!1sid!2sid",
                "deskrpsi" => "<p>Tempat ini menjadi favorit bagi setiap wisatawan yang berkunjung di Wonosobo. Padang savananya menawarkan sebuah keindahan padang ilalang yang sangat eksotis dan menawan. Untuk dapat tiba di lokasi ini, Anda perlu melakukan sebuah pendakian singkat. Yang mana sepanjang jalur pendakian akan dimanjakan dengan pemandangan alam.</p>",
                "kategori" => "Gunung",
                "rating" => 4.5,
                "harga" => 10000
            ],
            [
                "nama" => "Batu Ratapan Angin",
                "alamat" => "Theater, Jl. Dieng, Dieng, Kec. Kejajar, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.203007814935!2d109.91414566444512!3d-7.217669744789413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700d4b46d34f01%3A0x4ca1d1eea2e18765!2sBukit%20Ratapan%20Angin!5e0!3m2!1sid!2sid!4v1678880932613!5m2!1sid!2sid",
                "deskripsi" => "<p> Batu Ratapan Angin. Tempat wisata ini kerap kali disebut dengan nama lain yakni sebagai Batu Pandang Dieng. Kawasan wisata ini akan menyuguhkan Anda berupa pemandangan yang sangat indah nan menakjubkan. Terlebih lagi dengan nuansa dan suasananya yang sangat sejuk dan asri dikarenakan banyak pepohonan </p> <p>Dari atas ketinggian atau puncaknya, Anda akan menyaksikan sebuah perpaduan pemandangan alam yang sangat menawan. Nantinya dari atas sini Anda dapat melihat keindahan dari Telaga Warna. Terlebih lagi akan terlihat sebuah deretan pegunungan hijau dari kejauhan, yang mana menambahkan kesan damai dan menyejukkan mata. Selain itu, di tempat ini juga menyediakan berbagai wahana permainan. </p>",
                "kategori" => "Gunung",
                "rating" => 4.7,
                "harga" => 10000
            ],
            [
                "nama" => "Lubang Sewu",
                "alamat" => "Jurutengah, Erorejo, Kec. Wadaslintang, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9861539698477!2d109.79038281444754!3d-7.576485194536329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aba2785e909d7%3A0xd1727bfb2a4602ac!2sWisata%20Alam%20Lubang%20Sewu!5e0!3m2!1sid!2sid!4v1678880962252!5m2!1sid!2sid",
                "deskripsi" => "<p> Lubang Sewu ini menjadi temapt wisata populer dan banyak orang yang datang dan melihat bagaimana keindahan yang dimilikinya. Alamat dari tempat wisata ini cukup dekat dengan Waduk Wadaslintang. Ada pemandangan yang terbilang mirip dengan Green Canyon Amerika. </p> <p>Lubang Sewu terletak di Kecamatan Wadaslintang Wonosobo. Ada bebatuan yang tersusun rapi dan Anda bisa memotret pemandangan indah di Lubang Sewu ini</p>",
                "kategori" => "Danau",
                "rating" => 4.3,
                "harga" => 5000
            ],
            [
                "nama" => "Air Terjun Tritis Surga Bidadari",
                "alamat" => "Desa gumelar, Kec. Wadaslintang, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.58999238429!2d109.8536137644471!3d-7.510431394582831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7abc9f51360057%3A0x9b0f6f282cd6a745!2sTritis%20Surga%20Bidadari!5e0!3m2!1sid!2sid!4v1678881002053!5m2!1sid!2sid",
                "deskripsi" => "<p>Curug Tritis Surga Bidadari adalah destinasi wisata alam yang indah berupa air terjun yang terletak di Desa Gumelar, Kecamatan Kaliwiro, Kabupaten Wonosobo, Jawa Tengah. Namun, medan yang harus dilalui untuk menuju ke lokasi membutuhkan usaha lebih karena harus menuruni anak tangga dan menerobos hutan yang medannya naik turun.</p><p>Walaupun ketersediaan sarana dan prasarana masih sangat minim, wisatawan akan dimanjakan dengan keindahan air terjun yang menjulang tinggi serta ornamen asli dari alam seperti lumut-lumut hijau yang makin membuat takjub. Wisatawan juga dapat bermain air dengan segarnya di bawah air terjun yang terasa dingin, sejuk dan sangat bening khas mata air pegunungan.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.2,
                "harga" => 5000
            ],
            [
                "nama" => "Curug Sigludug",
                "alamat" => "Kalidesel, Kec. Watumalang, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8665116865955!2d109.84862801444538!3d-7.256029694762333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70092f88514843%3A0x4d2ad231d0b0299!2sAir%20Terjun%20Sigludug!5e0!3m2!1sid!2sid!4v1678881036580!5m2!1sid!2sid",
                "deskripsi" => "<p>Di Wonosobo, kini ada wisata baru yang unik bernama Curug Sigludug Dusun Lamuk. Yang membedakan curug ini dengan yang lain adalah keberadaan air terjun hangat dan air terjun dingin yang berada pada satu lokasi namun beda aliran. Keberadaan batu karang yang dihiasi lumut dengan aliran air hangat juga menjadi ciri khas dan daya tarik lain dari curug ini. Kelompok Sadar Wisata (Pokdarwis) Curug Sigludug Desa Kalidesel yang melihat potensi di tempat ini dan bekerja sama dengan masyarakat setempat, berhasil membuka wisata ini pada awal Maret 2019. Terdapat 4 spot yang ditampilkan, yaitu air terjun hangat, air terjun dingin, Batu Karang, dan Gua Karang.</p> <p>Akan tetapi, untuk mencapai lokasi curug ini, pengunjung perlu menempuh jalur yang masih berupa jalan setapak dan cukup curam. Dari areal parkir yang juga berfungsi sebagai loket masuk, perjuangan ekstra diperlukan untuk menuju lokasi curug ini. Meski demikian, pemandangan yang luar biasa di sana akan mengobati lelah pengunjung. Untuk memasuki wisata ini, pengunjung hanya dikenakan tarif harga tiket sebesar Rp. 5.000,- dan biaya parkir sebesar Rp. 2.000,-. Namun, perlu diingat bahwa pengunjung hanya boleh berswafoto dan main air, tidak diperbolehkan untuk mandi di sana.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.4,
                "harga" => 5000
            ],
            [
                "nama" => "Curug Sikopel",
                "alamat" => "Babadan, Kec. Pagentan, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.636246386251!2d109.82732351444548!3d-7.282163694743841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70090ca5ad1679%3A0x7a6b0d6e43cbf1da!2sAir%20terjun%20Sikopel!5e0!3m2!1sid!2sid!4v1678881064349!5m2!1sid!2sid",
                "deskripsi" => "<p>Curug Sikopel adalah sebuah air terjun dengan ketinggian sekitar 70 meter yang terletak di Desa Babadan, Kecamatan Pagentan, Kabupaten Banjarnegara, Jawa Tengah. Keindahan eksotis dan suasana sejuk serta tenang menjadikan Curug Sikopel sebagai tempat yang pas untuk berlibur bersama keluarga atau teman terdekat. Untuk mencapai Curug Sikopel, wisatawan dapat menggunakan kendaraan pribadi dan menikmati pemandangan perkebunan warga dan suasana pedesaan selama perjalanan. Jarak tempuh dari Kantor Kecamatan Pagentan menuju Curug Sikopel sekitar 7 kilometer.</p><p>Curug Sikopel masih jarang dikunjungi dan belum banyak diketahui oleh orang. Di sekitar air terjun, wisatawan dapat menemukan kera liar yang hidup di hutan sekitar. Lokasinya yang dikelilingi oleh tumbuhan hijau yang alami membuat wisatawan merasa terpesona dengan keindahan Curug Sikopel. Menurut cerita dari masyarakat sekitar, Bupati Kharismatis Banjarnegara pernah bersemedi di gua di belakang air terjun dan mendapatkan tali pengatur kendali kuda yang membuat air terjun ini diberi nama Sikopel. Ada juga kepercayaan dari masyarakat sekitar bahwa air dari Curug Sikopel dapat membuat orang yang mandi di sana menjadi awet muda. Selain itu, wisatawan dapat menemukan tikus putih yang jarang ditemukan di tempat lain di Goa di balik Curug Sikopel. Curug Sikopel sering dikunjungi oleh wisatawan pada hari libur, termasuk wisatawan dari luar daerah, dan mereka hanya perlu membayar Rp.2000,- untuk menikmati keindahan Curug Sikopel.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.4,
                "harga" => 2000
            ],
            [
                "nama" => "Gunung Lanang",
                "alamat" => "Wanajari, Mergolangu, Kec. Kalibawang, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.537435305312!2d109.87235632180261!3d-7.5055553633800205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7abc9713b2c5c9%3A0x815351c3dee098ef!2sGn.%20Lanang!5e0!3m2!1sid!2sid!4v1678881089062!5m2!1sid!2sid",
                "deskripsi" => "<p>Meski tergolong baru, justru pemandangan alamnya masih begitu alami dan memiliki kesejukan dari air terjun di sana. Nantinya di sore hari, Anda bisa menyaksikan keindahan matahari terbenam yang mana aksesnya juga sudah dipermudah.</p> <p>Letak tempat wisata ini ada di Mergolangu, Kalibawang. Adanya akses yang mudah tidak hanya membuat pengunjung juga lebih mudah datang ke Gunung Lanang tetapi akses ini juga meningkatkan lapangan pekerjaan yang ada di sekitar Gunung Lanang.</p>",
                "kategori" => "Gunung",
                "rating" => 4.4,
                "harga" => 5000
            ],
            [
                "nama" => "Telaga Warna",
                "alamat" => "Dieng, Kec. Kejajar, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015.807201008761!2d109.91132926553144!3d-7.2142857018558075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700cefeafe2475%3A0xec2dd3197faf5f2a!2sTelaga%20Warna!5e0!3m2!1sid!2sid!4v1678881224257!5m2!1sid!2sid",
                "deskripsi" => "<p>Telaga warna merupakan tempat wisata andalan yang dikunjungi para wisatawan lokal ataupun wisatawan luar. Telaga Warna ini juga merupakan danau kecil yang sinar mataharinya bisa menembus ke dasar air danau. Tidak hanya itu, Anda juga bisa melihat pemandangan yang menakjubkan ketika berada di ketinggian 2000 mdpl.</p> <p>Lokasi Telaga Warna ini berada di Dieng Wetan, Wonosobo. Menemukan tempat wisata ini juga tak akan sulit. Anda bisa bertanya pada warga sekitar atau mengikuti petunjuk melalui google maps.</p>",
                "kategori" => "Danau",
                "rating" => 4.6,
                "harga" => 15000
            ],
            [
                "nama" => "Waduk Wadaslintang",
                "alamat" => "Kec. Wadaslintang, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63279.686270086684!2d109.74457956008902!3d-7.577112751128777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ab992cc7c6061%3A0xcf5eb38e7fcd7d7a!2sWaduk%20Wadaslintang!5e0!3m2!1sid!2sid!4v1678881256322!5m2!1sid!2sid",
                "deskripsi" => "<p>Waduk Wadaslintang terletak di perbatasan Kabupaten Kebumen dan Wonosobo dengan panorama alam pegunungan yang alami. Tempat ini cocok untuk rekreasi bagi kawula muda maupun keluarga, terutama bagi penggemar memancing dan berkemah di alam bebas. Waduk ini dibangun selama 7 tahun dan mengalami pengungsian sekitar 7.000 penduduk. Waduk Wadaslintang juga merupakan sumber suplai air irigasi bagi areal persawahan di daerah Kebumen dan Purworejo seluas 30.345 hektar dengan tambahan hasil sekitar 210.000 ton beras setahun.</p><p>Konstruksi Waduk Wadaslintang dilaksanakan oleh kontraktor Hydro Resource Coorporation Filipina, bekerja sama dengan PT Brantas Abipraya. Berisi air maksimal 443 juta M3, Waduk Wadaslintang merupakan waduk yang cukup dalam dengan tinggi bendungan mencapai 116 m dan panjang 650 m. Waduk ini diresmikan oleh Presiden Soeharto awal tahun 1988 dan mampu berusia sampai sekitar 200 tahun. Selain sebagai tempat wisata dan olahraga air, Waduk Wadaslintang juga mempunyai manfaat penting di bidang irigasi.Konstruksi Waduk Wadaslintang dilaksanakan oleh kontraktor Hydro Resource Coorporation Filipina, bekerja sama dengan PT Brantas Abipraya. Berisi air maksimal 443 juta M3, Waduk Wadaslintang merupakan waduk yang cukup dalam dengan tinggi bendungan mencapai 116 m dan panjang 650 m. Waduk ini diresmikan oleh Presiden Soeharto awal tahun 1988 dan mampu berusia sampai sekitar 200 tahun. Selain sebagai tempat wisata dan olahraga air, Waduk Wadaslintang juga mempunyai manfaat penting di bidang irigasi.</p>",
                "kategori" => "Danau",
                "rating" => 4.4,
                "harga" => 10000
            ],
            [
                "nama" => "Curug Winong Kaliwiro",
                "alamat" => "Winongsari, Kec. Kaliwiro, Kab. Wonosobo, Jawa Tengah",
                "gmaps" =>  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0484604072994!2d109.8951039144468!3d-7.459891294618503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa31cbdbac645%3A0xcf79a6c9399171fd!2sAir%20Terjun%20Curug%20Winong!5e0!3m2!1sid!2sid!4v1678881345267!5m2!1sid!2sid",
                "deskripsi" => "<p>Tempat ini memiliki akses jalan yang terbilang cukup sulit karena harus melalui pemukiman penduduk setempat. Tetapi Anda juga tak perlu takut tersesat karena di sepanjang perjalanan ini ada petunjuk jalan agar bisa sampai di lokasi wisata. </p> <p>Curug Winong Kaliwiro ini berada di Desa Winongsari Kecamatan Kaliwiro Wonosobo. Ketika nanti sudah sampai di tempat parkiran, Anda bisa melanjutkan perjalanan dengan jarak sekitar 300 meter untuk sampai ke lokasi wisata.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.1,
                "harga" => 1000
            ],
            [
                "nama" => "Gunung Prau",
                "alamat" => "Bakulan, Dieng, Kec. Wonosobo, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31666.815250193355!2d109.91571124739538!3d-7.200630717288494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700d2137d6aa11%3A0x899b0e25bc74ab01!2sGunung%20Prau!5e0!3m2!1sid!2sid!4v1678881372798!5m2!1sid!2sid",
                "deskripsi" => "<p>Gunung Prau, yang mana merupakan sebuah puncak tertinggi dari dataran tinggi Dieng. Kawasan wisata alam satu ini telah terkenal dengan panorama keindahan alamnya yang sangat memukau. Terlebih lagi daerah ini menjadi spot terbaik bagi Anda yang ingin melihat sunset dan sunrise. </p> <p>Gunung dengan ketinggian sekitar 2.565 meter di atas permukaan laut ini, menawarkan dan menyuguhkan sebuah keindahan lanskap dataran Dieng. Untuk dapat menikmati keindahan tersebut Anda perlu mendaki hingga di puncaknya, yang mana ditempuh selama dua sampai tiga jam. Dengan waktu pendakian yang relatif terjangkau, tak heran apabila tempat ini menjadi jalur pendakian favorit.</p>",
                "kategori" => "Gunung",
                "rating" => 4.8,
                "harga" => 15000
            ],
            [
                "nama" => "Curug Siaren",
                "alamat" => "Bomerto, Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0532004593365!2d109.93201181444597!3d-7.347923194697439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa134ea50ac85%3A0xbc8375a44b233012!2sCurug%20Siaren!5e0!3m2!1sid!2sid!4v1678881396442!5m2!1sid!2sid",
                "deskrpsi" => "<p>Curug Siaran merupakan salah satu objek wisata alam yang terletak di Desa Siaran, Kecamatan Garung, Kabupaten Wonosobo, Jawa Tengah. Air terjun ini memiliki ketinggian sekitar 70 meter dan dikelilingi oleh tebing-tebing batu yang curam. Di sekitar curug juga terdapat pemandangan alam yang menarik seperti hutan pinus dan sawah-sawah yang hijau. Karena letaknya yang cukup jauh dari pemukiman penduduk, suasana di Curug Siaran masih sangat asri dan tenang, cocok untuk melepas penat dari kepenatan perkotaan.</p><p>Untuk mencapai Curug Siaran, pengunjung harus melakukan perjalanan trekking selama kurang lebih 1 jam dari Desa Siaran. Meskipun perjalanan cukup melelahkan, pengunjung akan disuguhkan dengan pemandangan alam yang menarik sepanjang perjalanan. Curug Siaran cocok dikunjungi oleh para pecinta alam dan pendaki yang ingin menikmati keindahan alam Wonosobo yang masih alami dan belum terlalu ramai oleh wisatawan.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.9,
                "harga" => 10000
            ],
            [
                "nama" => "Bukit Sikunir",
                "alamat" => "Sawah & Hutan, Dieng, Kec. Kejajar, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.078122999228!2d109.92035172177357!3d-7.2386108663936675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700c9f673eedcf%3A0xb11d96d5bd9e2fe3!2sBukit%20Sikunir%20Dieng!5e0!3m2!1sid!2sid!4v1678881419538!5m2!1sid!2sid",
                "deskripsi" => "<p>Bukit Sikunir Dieng merupakan salah satu tempat wisata yang populer di daerah Dieng, Jawa Tengah. Terletak di ketinggian sekitar 2.300 mdpl, bukit ini menawarkan panorama alam yang indah dengan latar belakang pegunungan dan lautan awan yang menggumpal. Pengunjung bisa menikmati pemandangan matahari terbit yang spektakuler di pagi hari, atau menyaksikan gemerlap bintang-bintang di malam hari. Pendakian ke Bukit Sikunir Dieng memang cukup menantang, namun pemandangan yang disuguhkan di puncak akan membuat perjalanan tersebut sangat berharga.</p><p>Selain menjadi tujuan wisata pendakian, Bukit Sikunir Dieng juga terkenal sebagai tempat yang cocok untuk berfoto-foto. Spot foto yang paling terkenal adalah panorama lautan awan yang berwarna-warni di pagi hari. Selain itu, pengunjung juga bisa menikmati keindahan alam Dieng secara lebih luas dari puncak bukit. Ada beberapa homestay dan penginapan yang tersedia di sekitar Bukit Sikunir Dieng, sehingga pengunjung bisa menginap dan menikmati keindahan alam Dieng dengan lebih lama.</p>",
                "kategori" => "Gunung",
                "rating" => 4.7,
                "harga" => 15000
            ],
            [
                "nama" => "Telaga Menjer",
                "alamat" => "Maron, Kec. Garung, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.513648794955!2d109.92090622289226!3d-7.268490329014135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700b1605a98fe1%3A0xc5f37c5a6d5cecad!2sTelaga%20Menjer!5e0!3m2!1sid!2sid!4v1678881444979!5m2!1sid!2sid",
                "deskripsi" => "<p>Danau ini dulunya difungsikan sebagai pembangkit listrik oleh pihak PLTA Garung. Telaga menjer juga terbentuk dari letusan Gunung Pakuwaja yang dulu aktif. Namun sebelum letusan, lokasi ini hanya berupa mata air kecil yang meluas ketika turun hujan.</p> <p>Lokasinya ada di Maron, Garung Kabupaten Wonosobo. Di sana ada penyewaan perahu yang harganya hanya Rp. 10.000 saja. Bisa juga dijadikan tempat untuk memancing.</p>",
                "kategori" => "Danau",
                "rating" => 4.6,
                "harga" => 5000
            ],
            [
                "nama" => "Puncak Seroja",
                "alamat" => "Sembungan, Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9833512803425!2d109.92064551444523!3d-7.242733094771726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700b5fd78adacd%3A0xe9126fc46d3928f8!2sPuncak%20Seroja!5e0!3m2!1sid!2sid!4v1678881464762!5m2!1sid!2sid",
                "deskripsi" => "<p>Nantinya di tempat wisata ini Anda dapat menyaksikan keindahan Telaga Menjer, yang mana dapat dinikmati dari atas ketinggian. Dengan banyaknya pepohonan, mampu menciptakan kesan yang sangat tenang dan nyaman.</p> <p>Untuk dapat menikmati keindahan yang ditawarkan oleh tempat wisata ini, Anda harus mendaki agar dapat sampai di lokasinya. Meskipun akan terasa lelah, namun semuanya akan terbayar dengan pemandangan alam yang menakjubkan. Nantinya Anda juga dapat menyaksikan perkebunan teh yang terhampar sangat luas. Disana telah disediakan beberapa gazebo dan surau yang dapat Anda gunakan.</p>",
                "kategori" => "Gunung",
                "rating" => 4.5,
                "harga" => 5000
            ],
            [
                "nama" => "Telaga Cebong",
                "alamat" => "Sawah & Hutan, Sembungan, Kec. Kejajar, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.16584985278!2d109.91124522177331!3d-7.236110866421918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700c9961ca3c31%3A0x5f251c6b6795bd39!2sTelaga%20Cebong!5e0!3m2!1sid!2sid!4v1678881489678!5m2!1sid!2sid",
                "deskripsi" => "<p>Telaga Cebong adalah sebuah objek wisata alam di Wonosobo yang terkenal dengan keindahan alamnya yang menyejukkan. Telaga ini berada di ketinggian sekitar 1.700 meter di atas permukaan laut dan dikelilingi oleh hutan pinus yang memberikan suasana yang asri dan menenangkan. Telaga Cebong juga dikenal sebagai tempat yang cocok untuk menikmati keindahan matahari terbit dan terbenam serta trekking di sekitar area sekitar telaga.</p><p>Telaga Cebong memiliki luas sekitar 5 hektar dan kedalaman hingga 10 meter. Wisatawan dapat menikmati keindahan telaga dengan naik perahu kayu tradisional yang disewakan di sekitar area telaga. Selain itu, wisatawan juga dapat melakukan aktivitas memancing dan berkemah di sekitar area telaga yang telah disediakan oleh pihak pengelola. Telaga Cebong merupakan tempat yang cocok bagi pengunjung yang ingin menikmati keindahan alam dan mencari ketenangan dari hiruk pikuk kota.</p>",
                "kategori" => "Danau",
                "rating" => 4.5,
                "harga" => 15000
            ],
            [
                "nama" => "Telaga Merdada",
                "alamat" => "Pauan, Karangtengah, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2793453892914!2d109.889289814445!3d-7.208939144795604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700c519322d6f7%3A0xefe986a8dc895dc4!2sTelaga%20Merdada!5e0!3m2!1sid!2sid!4v1678881518018!5m2!1sid!2sid",
                "deskripsi" => "<p>Telaga Merdada adalah salah satu objek wisata alam yang terletak di Desa Kalisoro, Kecamatan Kepil, Wonosobo. Telaga ini memiliki keunikan berupa bentuk alamiahnya yang berbentuk seperti mangkuk. Di sekitar telaga terdapat tebing-tebing batu dan pepohonan hijau yang menambah keindahan alaminya. Pengunjung dapat menikmati pemandangan yang menenangkan dan udara segar di sekitar telaga, serta berjalan-jalan di sepanjang jalan setapak yang mengelilingi telaga. Selain itu, pengunjung juga dapat melakukan berbagai aktivitas seperti memancing, berkemah, dan piknik bersama keluarga atau teman-teman.</p><p>Telaga Merdada memiliki luas sekitar 3 hektar dengan kedalaman air mencapai 20 meter. Selain keindahannya yang alami, telaga ini juga memiliki cerita legenda yang menjadi daya tarik tersendiri bagi pengunjung. Konon, dulunya ada seorang putri yang bernama Dewi Merdada yang bermandikan air di telaga ini. Telaga Merdada biasanya ramai dikunjungi pada hari libur atau akhir pekan, terutama oleh warga sekitar dan wisatawan yang ingin menikmati keindahan alam dan melepas penat dari rutinitas sehari-hari.</p>",
                "kategori" => "Danau",
                "rating" => 4.3,
                "harga" => 5000
            ],
            [
                "nama" => "Kawah Dieng",
                "alamat" => "Bakal Buntu, Dieng Kulon, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1806726460563!2d109.90176291444513!3d-7.220222194787667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700d1e77ca2083%3A0x3dedabae91b3d34f!2sKawah%20Sikidang-Dieng%20Banjarnegara!5e0!3m2!1sid!2sid!4v1678881539634!5m2!1sid!2sid",
                "deskripsi" => "<p>Anda bisa mengunjungi tempat wisata ini dengan pemandangan alam yang sangat khas. Disebut juga dengan Kawah Sikidang yang termasuk sebagai tempat wisata di Wonosobo paling favorit. Bahkan banyak warga dari luar kota yang datang berkunjung.</p> <p>Wisata gunung api ini juga memiliki aktivitas vulkanik sehingga kalaupu datang harus berhati-hati. Luas Kawah Dieng sekitar 200 meter persegi dan letaknya berada di dataran yang cukup rendah. Letaknya berada di Bakal Buntu, Dieng Kulon.</p>",
                "kategori" => "Gunung",
                "rating" => 4.4,
                "harga" => 10000
            ],
            [
                "nama" => "Bukit Siloreng",
                "alamat" => "Desa Somogede, Kec. Wadaslintang, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5685251181503!2d109.77003281469325!3d-7.512789594581182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ababcc364289b%3A0x14a2fd9b028823e8!2sBukit%20Siloreng%20Indah!5e0!3m2!1sid!2sid!4v1678878067820!5m2!1sid!2sid",
                "deskripsi" => "<p>Bukit Siloreng adalah salah satu destinasi wisata alam yang terletak di Kecamatan Kalibawang, Wonosobo. Bukit ini terkenal dengan pemandangan alam yang mempesona, terutama saat matahari terbit. Saat berada di puncak bukit, pengunjung dapat menyaksikan keindahan panorama pegunungan dan persawahan yang ada di sekitar Bukit Siloreng. Selain itu, pengunjung juga dapat melakukan kegiatan hiking atau trekking untuk mencapai puncak bukit. Terdapat beberapa spot foto menarik yang dapat dijadikan sebagai tempat berfoto oleh pengunjung yang datang ke Bukit Siloreng.</p><p>Bukit Siloreng memiliki aksesibilitas yang mudah, dapat dicapai melalui jalan raya utama menuju Kalibawang dan dilanjutkan dengan perjalanan sekitar 30 menit menggunakan kendaraan roda dua maupun empat. Selain itu, wisatawan yang ingin menginap di sekitar Bukit Siloreng dapat mencari penginapan yang tersedia di daerah Kalibawang atau daerah sekitarnya. Dengan keindahan alam yang dimilikinya, Bukit Siloreng merupakan destinasi wisata yang cocok bagi para pengunjung yang mencari suasana alam yang tenang dan menenangkan.</p>",
                "kategori" => "Gunung",
                "rating" => 3.9,
                "harga" => 0
            ],
            [
                "nama" => "Curug Sirawe",
                "alamat" => "Bitingan, Kepakisan, Kec. Batur, Kab. Banjarnegara, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5253097517757!2d109.88864081444487!3d-7.180736794815571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700d983001c8bb%3A0x7ea7965ea667e6c9!2sAir%20terjun%20tersembunyi(curuk%20sirawe)!5e0!3m2!1sid!2sid!4v1678881572828!5m2!1sid!2sid",
                "deskripsi" => "<p>Curug Sirawe adalah salah satu objek wisata alam yang terletak di Desa Karangtengah, Kecamatan Garung, Wonosobo. Curug ini memiliki ketinggian sekitar 20 meter dengan air terjun yang menyerupai selimut putih yang mengalir diantara tebing batu yang menjulang tinggi. Suasana sekitar curug yang sejuk dan segar membuatnya menjadi tempat yang cocok untuk melepas penat dan bersantai sambil menikmati keindahan alam yang masih alami.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.3,
                "harga" => 0
            ],
            [
                "nama" => "Air Terjun Sikarim",
                "alamat" => "Sawah & Hutan, Sembungan, Kec. Kejajar, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9851283049657!2d109.90257822073104!3d-7.242530678049615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700c81ef0bccbb%3A0xcf5bc3a061c29507!2sAir%20terjun%20Sikarim!5e0!3m2!1sid!2sid!4v1678881852310!5m2!1sid!2sid",
                "deskripsi" => '<p>Curug Sirawe adalah sebuah air terjun yang indah yang terletak di Dusun Bitingan, Desa Kepakisan, Kecamatan Batur, Kabupaten Banjarnegara. Dengan ketinggian sekitar 80 meter, Curug Sirawe sering disebut sebagai "air terjun perawan" karena keindahannya yang masih alami dan tersembunyi di tengah hutan yang rimbun. Meskipun medannya cukup terjal, banyak wisatawan yang mengunjungi tempat ini karena keindahannya yang memukau.</p><p>Meskipun akses jalan menuju Curug Sirawe cukup menantang, fasilitas umum di sana cukup memadai. Terdapat area parkir kendaraan yang cukup luas dan aman, serta kamar mandi dan toilet umum yang dapat digunakan oleh para wisatawan. Di sekitar Curug Sirawe juga tersedia tempat istirahat atau gazebo yang dapat digunakan oleh para pengunjung yang ingin beristirahat sejenak di area air terjun. Curug Sirawe buka 24 jam dan tidak dikenakan biaya tiket masuk sehingga siapapun bisa mengunjungi tempat ini tanpa perlu khawatir mengenai biaya masuk. Meskipun medannya cukup menantang, Curug Sirawe tetap menjadi salah satu destinasi wisata yang patut dikunjungi bagi para pecinta alam dan keindahan alami.</p>',
                "kategori" => "Air Terjun",
                "rating" => 4.6,
                "harga" => 10000
            ],         
            [
                "nama" => "Telaga Pengilon",
                "alamat" => "Dieng, Kec. Kejajar, Kab. Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.895733586687!2d109.90846742177106!3d-7.215277566657433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700ceef9e86dab%3A0x991e811776f05ad!2sTelaga%20Pengilon!5e0!3m2!1sid!2sid!4v1678881599454!5m2!1sid!2sid",
                "deskripsi" => "<p>Wonosobo memiliki beberapa destinasi telaga yang layak untuk dikunjungi, yakni Telaga Pengilon. Untuk lokasinya sendiri berada di dekat Telaga Warna. Namun, uniknya meskipun lokasinya berdekatan kedua telaga ini memiliki kandungan zat kimia yang berbeda. Tempat wisata ini tidak mengandung sulfur yang tinggi. Sehingga telaga ini hanya memiliki satu warna yang sangat bersih dan jernih.</p>",
                "kategori" => "Danau",
                "rating" => 4.4,
                "harga" => 10000
            ],
            [
                "nama" => "Air Terjun Gendruwo",
                "alamat" => "Mutisari, Kec. Watumalang, Kabupaten Wonosobo, Jawa Tengah",
                "gmaps" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63322.42907859026!2d109.78263965820308!3d-7.280399399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700933211e2821%3A0x5b44872999b64a81!2sAir%20Terjun%20Gendurwo!5e0!3m2!1sid!2sid!4v1678881622138!5m2!1sid!2sid",
                "deskripsi" => "<p>Air Terjun Genderuwo Wonosobo terletak di Desa Kertek, Kecamatan Kepil, Wonosobo. Air Terjun ini memiliki ketinggian sekitar 25 meter dan dikelilingi oleh pepohonan hijau yang memberikan suasana yang sejuk dan asri. Selain itu, air terjun ini juga dikelilingi oleh tebing-tebing batu yang memberikan pemandangan yang indah. Air Terjun Genderuwo Wonosobo menjadi salah satu destinasi wisata yang populer di Wonosobo karena keindahan alamnya yang menarik untuk dikunjungi.</p><p>Pengunjung yang datang ke Air Terjun Genderuwo Wonosobo dapat menikmati suasana alam yang tenang dan menenangkan. Selain itu, pengunjung juga dapat melakukan berbagai aktivitas seperti berenang, berfoto, dan trekking di sekitar air terjun. Terdapat juga warung-warung kecil yang menjual makanan dan minuman di sekitar lokasi air terjun. Bagi para pencinta alam dan penggemar fotografi, Air Terjun Genderuwo Wonosobo adalah destinasi wisata yang cocok untuk dikunjungi karena keindahan alamnya yang menakjubkan.</p>",
                "kategori" => "Air Terjun",
                "rating" => 4.2,
                "harga" => 5000
            ]
        ]);
    }
}
