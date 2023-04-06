"use strict";
// import {
//   validation,
//   checkEmpty,
//   checkID,
//   checkMinMax,
//   checkSelect,
// } from "../script.js";

// danh sách các nút
const submitBtn = document.getElementById("submit-btn");

// danh sách các input trong form
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

// table, form edit
const formEdit = document.getElementById("container-form");
const bodyTable = document.getElementById("tbody");

// Mảng pet tổng lấy từ local storage
const petArr = JSON.parse(getFromStorage("local_pet"));

// Các hàm check validation
const checkEmpty = (input, idError, mess) => {
  if (input.value.trim() === "") {
    document.getElementById(idError).innerHTML = mess;
    return false;
  } else {
    document.getElementById(idError).innerHTML = "";
    return true;
  }
};

const checkID = (input, idError, arr) => {
  let status = true;
  for (let i = 0; i < arr.length; i++) {
    if (input.value === arr[i].idPet) {
      status = false;
      break;
    }
  }
  if (status) {
    document.getElementById(idError).innerHTML = "";
    return true;
  }

  document.getElementById(idError).innerHTML = "ID must unique!";
  return false;
};

const checkMinMax = (input, idError, min, max) => {
  if (+input.value < min || +input.value > max) {
    document.getElementById(
      idError
    ).innerHTML = `${input.name} must be between ${min} and ${max}`;
    return false;
  }
  document.getElementById(idError).innerHTML = "";
  return true;
};

const checkSelect = (input, idError) => {
  if (input.selectedIndex === 0) {
    document.getElementById(idError).innerHTML = `Please select ${input.name}`;
    return false;
  }
  document.getElementById(idError).innerHTML = "";
  return true;
};

// Hàm validation tổng
const validation = () => {
  let isValid = false;
  isValid =
    // check ID
    checkEmpty(idInput, "error-id", `${idInput.name} không đc để trống`) &&
    // checkID(idInput, "error-id", petArr) &&
    // check Name
    checkEmpty(
      nameInput,
      "error-name",
      `${nameInput.name} không đc để trống`
    ) &&
    // check Age
    checkEmpty(ageInput, "error-age", `${ageInput.name} không đc để trống`) &&
    checkMinMax(ageInput, "error-age", 1, 15) &&
    // check Type
    checkSelect(typeInput, "error-type") &&
    // check Weight
    checkEmpty(
      weightInput,
      "error-weight",
      `${weightInput.name} không đc để trống`
    ) &&
    checkMinMax(weightInput, "error-weight", 1, 15) &&
    // check Length
    checkEmpty(
      lengthInput,
      "error-length",
      `${lengthInput.name} không đc để trống`
    ) &&
    checkMinMax(lengthInput, "error-length", 1, 100) &&
    // check Breed
    checkSelect(breedInput, "error-breed");

  return isValid;
};

// Clear input
const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.selectedIndex = 0;
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.selectedIndex = 0;
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
};

// Render bảng danh sách thú cưng
const renderTableEdit = (arr) => {
  bodyTable.innerHTML = "";
  let htmlTable = "";
  for (let i = 0; i < arr.length; i++) {
    htmlTable += `
        <tr>
          <th scope="row">${arr[i].idPet}</th>
            <td>${arr[i].namePet}</td>
            <td>${arr[i].agePet}</td>
            <td>${arr[i].typePet}</td>
            <td>${arr[i].weightPet} kg</td>
            <td>${arr[i].lengthPet} cm</td>
            <td>${arr[i].breedPet}</td>
            <td>
            <i class="bi bi-square-fill" style="color: ${arr[i].colorPet}"></i>
            </td>
            
            <td>
            <i class="bi bi-${
              arr[i].vaccinatedPet ? "check" : "x"
            }-circle-fill"></i>
            </td>
        
            <td>
            <i class="bi bi-${
              arr[i].dewormedPet ? "check" : "x"
            }-circle-fill"></i>
            </td>
  
            <td>
            <i class="bi bi-${
              arr[i].sterilizedPet ? "check" : "x"
            }-circle-fill"></i>
            </td>
            <td>${arr[i].date}</td>
            <td>
              <button onclick="editPet('${
                arr[i].idPet
              }')" type="button" class="btn btn-warning">Edit</button>
            </td>
          </tr>
      `;
  }

  bodyTable.innerHTML = htmlTable;
};

renderTableEdit(petArr);

// Render các option breed
const renderBreed = (breedArray, breedType) => {
  breedInput.innerHTML = "";
  let breedOptionHtml = "";
  const newBreedArr = breedArray.filter((breed) => {
    return breed.type === breedType;
  });
  newBreedArr.forEach((breed) => {
    breedOptionHtml += `
        <option>${breed.name}</option>
      `;
  });

  breedInput.innerHTML = "<option>Select Breed</option>" + breedOptionHtml;
};

// Hàm edit thú cưng
const editPet = (id) => {
  const {
    idPet,
    namePet,
    agePet,
    typePet,
    weightPet,
    lengthPet,
    colorPet,
    breedPet,
    date,
    vaccinatedPet,
    dewormedPet,
    sterilizedPet,
  } = petArr.filter((pet) => pet.idPet === id)[0];

  renderBreed(JSON.parse(getFromStorage("local_breed")), typePet);

  idInput.value = idPet;
  nameInput.value = namePet;
  ageInput.value = agePet;
  typeInput.value = typePet;
  weightInput.value = weightPet;
  lengthInput.value = lengthPet;
  colorInput.value = colorPet;
  breedInput.value = breedPet;
  vaccinatedInput.checked = vaccinatedPet;
  dewormedInput.checked = dewormedPet;
  sterilizedInput.checked = sterilizedPet;
};

// hàm Submit data edited
const submitEdit = () => {
  if (validation()) {
    const petEdited = {
      namePet: nameInput.value,
      agePet: +ageInput.value,
      typePet: typeInput.value,
      weightPet: +weightInput.value,
      lengthPet: +lengthInput.value,
      colorPet: colorInput.value,
      breedPet: breedInput.value,
      vaccinatedPet: vaccinatedInput.checked,
      dewormedPet: dewormedInput.checked,
      sterilizedPet: sterilizedInput.checked,
    };
    const index = petArr.findIndex((pet) => {
      return pet.idPet === idInput.value;
    });
    petArr[index] = { ...petArr[index], ...petEdited };
    clearInput();
  }

  saveToStorage("local_pet", JSON.stringify(petArr));
  renderTableEdit(petArr);
};

// Bắt sự kiện ở ô chọn Dog hay Cat
typeInput.addEventListener("change", (e) => {
  renderBreed(JSON.parse(getFromStorage("local_breed")), e.target.value);
});

// Bắt sự kiện ở nút submit
submitBtn.addEventListener("click", submitEdit);
