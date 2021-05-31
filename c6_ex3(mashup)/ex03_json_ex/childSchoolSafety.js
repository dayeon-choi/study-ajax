let selectKind = "ALL";
let selectYN = "Y";

window.onload = function () {
  var interval = setInterval(handleRefresh, 3000);
  handleRefresh();
};
function handleRefresh() {
  console.log("here");
  var url =
    "http://openapi.seoul.go.kr:8088/486e485945646179313036596c477073/xml/childSchoolSafetyEdu_jn/1/200/";
  $.getJSON(url, updateChildSchoolSafety);
}

onChangeKind = (e) => {
  selectKind = e.target.name;
  console.log(selectKink);
};
onChangeYN = (e) => {
  selectYN = e.target.name;
  console.log(selectYN);
};

function updateChildSchoolSafety(lectures) {
  var lecturesDiv = document.getElementById("childSchoolSafety");
  lectures = lectures.GwanakClassLectureList.row;
  for (var i = 0; i < lectures.length; i++) {
    var lecture = lectures[i];
    var div = document.createElement("div");
    div.setAttribute("class", "childSchoolSafety");
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
