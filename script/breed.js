"use strict";

// lấy các nút trang Breed
const breedNameInput = document.getElementById("input-breed");
const typeInput = document.getElementById("input-type");
const submitBtn = document.getElementById("submit-btn");

// table
const bodyTable = document.getElementById("tbody");

// Mảng breed tổng lấy từ local storage
const breedArr = JSON.parse(getFromStorage("local_breed"));

// Các hàm check validation
const checkEmptyBreed = (input, idError, mess) => {
  if (input.value.trim() === "") {
    document.getElementById(idError).innerHTML = mess;
    return false;
  } else {
    document.getElementById(idError).innerHTML = "";
    return true;
  }
};

const checkSelectBreed = (input, idError) => {
  if (input.selectedIndex === 0) {
    document.getElementById(idError).innerHTML = `Please select ${input.name}`;
    return false;
  }
  document.getElementById(idError).innerHTML = "";
  return true;
};

// Clear input
const clearInput = () => {
  breedNameInput.value = "";
  typeInput.value = "";
};

// Hàm render bảng giống
const renderTableBreed = (arr) => {
  bodyTable.innerHTML = "";
  let htmlContent = "";
  arr.forEach((item, index) => {
    htmlContent += `
    <tr>
        <th scope="row">${item.id}</th>
          <td>${item.name}</td>
          <td>${item.type}</td>
          <td>
            <button onclick="deleteBreed('${item.id}')" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
    `;
  });

  bodyTable.innerHTML = htmlContent;
};

// Hàm validation tổng
const validation = () => {
  let isValid = false;
  isValid =
    // check Name
    checkEmptyBreed(
      breedNameInput,
      "error-breed-name",
      `${breedNameInput.name} không đc để trống`
    ) &&
    // check Type
    checkSelectBreed(typeInput, "error-type");

  return isValid;
};

renderTableBreed(breedArr);

// thêm giống thú cưng
const addBreed = () => {
  if (validation()) {
    const breedInput = {
      id: "B" + String(breedArr.length + 1).padStart(2, "0"),
      name: breedNameInput.value,
      type: typeInput.value,
    };
    clearInput();
    breedArr.push(breedInput);
  }
  saveToStorage("local_breed", JSON.stringify(breedArr));
  renderTableBreed(breedArr);
};

// Xóa Giống
const deleteBreed = (id) => {
  for (let i = 0; i < breedArr.length; i++) {
    if (breedArr[i].id === id) {
      breedArr.splice(i, 1);
    }
  }
  saveToStorage("local_breed", JSON.stringify(breedArr));
  renderTableBreed(breedArr);
};

submitBtn.addEventListener("click", addBreed);
