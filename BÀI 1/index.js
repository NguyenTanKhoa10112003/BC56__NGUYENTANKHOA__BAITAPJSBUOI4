function sapXep() {
  var soThuNhat = document.getElementById("so-nguyen-1").value * 1;
  var soThuHai = document.getElementById("so-nguyen-2").value * 1;
  var soThuBa = document.getElementById("so-nguyen-3").value * 1;
  var soNhoNhat, soTrungBinh, soLonNhat;
  if (soThuNhat <= soThuHai && soThuNhat <= soThuBa) {
    soNhoNhat = soThuNhat;
    if (soThuHai <= soThuBa) {
      soTrungBinh = soThuHai;
      soLonNhat = soThuBa;
    } else {
      soTrungBinh = soThuBa;
      soLonNhat = soThuHai;
    }
  } else if (soThuHai <= soThuNhat && soThuHai <= soThuBa) {
    soNhoNhat = soThuHai;
    if (soThuNhat <= soThuBa) {
      soTrungBinh = soThuNhat;
      soLonNhat = soThuBa;
    } else {
      soTrungBinh = soThuBa;
      soLonNhat = soThuHai;
    }
  } else {
    soNhoNhat = soThuBa;
    if (soThuNhat <= soThuHai) {
      soTrungBinh = soThuHai;
      soLonNhat = soThuNhat;
    }
  }
  document.getElementById("result").innerHTML = `<p>
  Thứ tự theo từ nhỏ đến lớn là:${soNhoNhat} ${soTrungBinh} ${soLonNhat}
  
  </p>`;
}
