window.onload = function () {
  var interval = setInterval(handleRefresh, 3000);
  handleRefresh();
};
function handleRefresh() {
  console.log("here");
  var url =
    "http://openapi.seoul.go.kr:8088/486e485945646179313036596c477073/json/GwanakClassLectureList/1/100/";
  $.getJSON(url, updatelecture);
}

function updatelecture(lectures) {
  var lecturesDiv = document.getElementById("lectures");
  lectures = lectures.GwanakClassLectureList.row;
  for (var i = 0; i < lectures.length; i++) {
    var lecture = lectures[i];
    var div = document.createElement("div");
    div.setAttribute("class", "lecture");
    div.innerHTML =
      "강좌명:" +
      lecture.TITLE +
      "은 " +
      " 교육기간:" +
      lecture.EDU_PERIOD +
      " 교육장소:" +
      lecture.EDU_PLACE +
      " 교육대상:" +
      lecture.EDU_TARGET +
      " 접수방법:" +
      lecture.APPLY_WAY +
      " 수걍료:" +
      lecture.EDU_PAY +
      "원입니다.";

    lecturesDiv.appendChild(div);
  }
}
