function loaiTamGiac() {
  var canhThuNhat = document.getElementById("canh-thu-nhat").value * 1;
  var canhThuHai = document.getElementById("canh-thu-hai").value * 1;
  var canhThuBa = document.getElementById("canh-thu-ba").value * 1;
  if (
    canhThuNhat == canhThuHai ||
    canhThuNhat == canhThuBa ||
    canhThuHai == canhThuBa
  ) {
    var loaiTamGiac = "Tam giác cân";
  } else if ((canhThuNhat = canhThuHai == canhThuBa)) {
    var loaiTamGiac = "Tam giác đều";
  } else if (
    canhThuNhat * canhThuNhat + canhThuHai * canhThuHai ==
      canhThuBa * canhThuBa ||
    canhThuNhat * canhThuNhat + canhThuBa * canhThuBa ==
      canhThuHai * canhThuHai ||
    canhThuHai * canhThuHai + canhThuBa * canhThuBa == canhThuNhat * canhThuNhat
  ) {
    var loaiTamGiac = "Tam giác vuông";
  } else {
    var loaiTamGiac = "Tam giác thường";
  }
  document.getElementById("result").innerHTML = `<p>${loaiTamGiac}</p>`;
}
