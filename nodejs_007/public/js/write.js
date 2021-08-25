const fontNames = [
  "맑은 고딕",
  "궁서",
  "굴림",
  "바탕체",
  "돋움체",
  "Arial",
  "Arial Black",
  "Comic Sans MS",
  "Courier New",
];
const fontSizes = [
  "8",
  "9",
  "10",
  "11",
  "14",
  "16",
  "18",
  "20",
  "22",
  "26",
  "30",
  "34",
  "38",
  "40",
  "50",
  "60",
  "72",
  "127",
];

const toolbar = [
  "fontname",
  "fontsize",
  "style",
  "color",
  "table",
  "height",
  ["para", ["ul", "ol"]],
  ["view", ["fullscreen", "help"]],
  ["insert", ["link"]],
];

$("#b_text").summernote({
  lang: "ko-KR",
  toolbar,
  fontNames: fontNames,
  fontSizes: fontSizes,
  placeholder: "본문을 입력하세요",
  width: "100%",
  height: "300px",
});
