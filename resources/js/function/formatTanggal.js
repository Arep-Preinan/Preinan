const formatTanggal = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('id', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

export default formatTanggal;