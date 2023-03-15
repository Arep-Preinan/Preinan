const data = [
    [
        {
            "id": 15,
            "uuid": "a1120650-bdc7-11ed-b824-d8bbc11edb5e",
            "nama": "Telaga Menjer",
            "kategori": "Danau",
            "harga": 5000,
        },
        {
            "id": 3,
            "nama": "Batu Ratapan Angin",
            "kategori": "Gunung",
            "harga": 10000,
        }
    ],
    [
        {
            "id": 2,
            "nama": "Padang Savana Dieng",
            "kategori": "Gunung",
            "harga": 10000,              
        },
        {
            "id": 8,
            "nama": "Gunung Lanang",
            "kategori": "Gunung",
            "harga": 5000,
        }
    ],
    [
        {
            "id": 13,
            "nama": "Curug Siaren",
            "kategori": "Air Terjun",
            "harga": 5000,
        },
        {
            "id": 12,
            "nama": "Gunung Prau",
            "kategori": "Gunung",
            "harga": 15000,
        }
    ]
]

const mergedData = [].concat.apply([], data);
mergedData.sort((a, b) => b.harga - a.harga);

const chunkedData = [];

for (let i = 0; i < mergedData.length; i += 2) {
chunkedData.push(mergedData.slice(i, i + 2));
}

console.log(chunkedData);