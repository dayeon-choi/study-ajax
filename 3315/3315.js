window.onload = init;

function init() {
  getSales();
}

function getSales() {
  var url = "chocolate.json";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status == 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
}

function updateSales(responseText) {
  var salesDiv = document.getElementById("sales");
  var sales = JSON.parse(responseText);
  for (var i = 0; i < sales.length; i++) {
    var sale = sales[i];
    var div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML =
      sale.name +
      "제품 [ 개당 " +
      sale.price +
      "원 ]을 " +
      sale.sales +
      "개 판매하였습니다.";
    salesDiv.appendChild(div);
  }
}
