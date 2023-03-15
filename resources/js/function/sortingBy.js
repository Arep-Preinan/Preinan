const sortName = (data, jumlah) => {
    const mergedData = [].concat.apply([], data);
    mergedData.sort((a, b) => a.nama.localeCompare(b.nama));

    const chunkedData = [];

    for (let i = 0; i < mergedData.length; i += jumlah) {
    chunkedData.push(mergedData.slice(i, i + jumlah));
    }
    return chunkedData;
}

const sortHighPrice = (data, jumlah) => {
    const mergedData = [].concat.apply([], data);
    mergedData.sort((a, b) => b.harga - a.harga);

    const chunkedData = [];

    for (let i = 0; i < mergedData.length; i += jumlah) {
        chunkedData.push(mergedData.slice(i, i + jumlah));
    }
    return chunkedData;

}

const sortLowPrice = (data, jumlah) => {
    const mergedData = [].concat.apply([], data);
    mergedData.sort((a, b) => a.harga - b.harga);

    const chunkedData = [];

    for (let i = 0; i < mergedData.length; i += jumlah) {
        chunkedData.push(mergedData.slice(i, i + jumlah));
    }
    return chunkedData;
}

export { sortName, sortHighPrice, sortLowPrice };