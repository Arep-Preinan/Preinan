const pisahkanStripSetiapKata = (string) => {
    let pisahkan = string.split(" ");
    let gabung = pisahkan.join("-");
    return gabung;
};

export default pisahkanStripSetiapKata;