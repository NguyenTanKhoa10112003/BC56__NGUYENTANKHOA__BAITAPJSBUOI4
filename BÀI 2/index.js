function traLoi() {
  var selectElement = document.getElementById("mySelect");
  var vaiTro = selectElement.value;
  var message;

  switch (vaiTro) {
    case "1":
      message = "Chào Bố";
      break;
    case "2":
      message = "Chào Mẹ";
      break;
    case "3":
      message = "Chào Anh Trai";
      break;
    case "4":
      message = "Chào Em Gái";
      break;
    default:
      message = "Vui lòng nhập vai trò của bạn";
  }

  document.getElementById("result").innerHTML = "<p>" + message + "</p>";
}
