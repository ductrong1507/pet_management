"use strict";

// Lấy các nút btn
const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");

// lấy input
const dataInput = document.getElementById("input-file");

// Hàm save xuất thành file .txt
const saveStaticDataToFile = () => {
  // lấy pet array từ local
  let petLocal = getFromStorage("local_pet");
  let blob = new Blob([petLocal], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "static.txt");
};

// Hàm import file
const importData = () => {
  let reader = new FileReader();
  reader.readAsText(dataInput.files[0], "UTF-8");
  reader.onload = (e) => {
    saveToStorage("local_pet", e.target.result);
  };
};

exportBtn.addEventListener("click", saveStaticDataToFile);
importBtn.addEventListener("click", importData);
