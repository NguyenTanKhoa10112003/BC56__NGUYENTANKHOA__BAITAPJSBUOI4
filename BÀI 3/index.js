function tongSoChanSoLe() {
  var soThuNhat = document.getElementById("so-thu-nhat").value * 1;
  var soThuHai = document.getElementById("so-thu-hai").value * 1;
  var soThuBa = document.getElementById("so-thu-ba").value * 1;
  var soLe = 0;
  var soChan = 0;
  if (soThuNhat % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (soThuHai % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (soThuBa % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }
  document.getElementById(
    "result"
  ).innerHTML = `<p>Tổng số chẵn:${soChan} Tổng số lẽ:${soLe}</p>`;
}
