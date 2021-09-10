const valueSelection = (first, last, dataArray) => {
  if (first > last) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (dataArray.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    // Memfilter array 
    let nilai = dataArray
      .filter((data) => {
        return data >= first && data <= last;
      })
      .sort((a, b) => a - b);
    // Mengecek apakah dalam array yang telah difilter ada nilainya atau tidak 
    if (nilai.length === 0) {
      return "data tidak ada";
    } else {
      return nilai;
    }
  }
};
console.log(valueSelection(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(valueSelection(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(valueSelection(4, 17, [2, 25, 4]));
console.log(valueSelection(5, 10, [5, 25, 4, 6, 7]));
