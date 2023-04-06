"use strict";

// danh sách các nút
const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const showAllBtn = document.getElementById("all-btn");
const calcBmiBtn = document.getElementById("bmi-btn");

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

// table
const bodyTable = document.getElementById("tbody");

// Mảng breed tổng lấy từ local storage
const breedArr = JSON.parse(getFromStorage("local_breed"));

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
    checkID(idInput, "error-id", petArr) &&
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
const renderTableData = (arr) => {
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
          <td>${arr[i].BMI}</td>
          <td>${arr[i].date}</td>
          <td>
            <button onclick="deletePet('${
              arr[i].idPet
            }')" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
    `;
  }

  bodyTable.innerHTML = htmlTable;
};

renderTableData(petArr);

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

// Thêm thú cưng
const addPet = () => {
  if (validation()) {
    // dữ liệu thêm pet
    const petData = {
      values: {
        idPet: "",
        namePet: "",
        agePet: "",
        typePet: "",
        weightPet: "",
        lengthPet: "",
        colorPet: "",
        breedPet: "",
        vaccinatedPet: "",
        dewormedPet: "",
        sterilizedPet: "",
        BMI: "?",
        date: "",
      },
    };
    const date = new Date();

    const getDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    petData.values.idPet = idInput.value;
    petData.values.namePet = nameInput.value;
    petData.values.agePet = +ageInput.value;
    petData.values.typePet = typeInput.value;
    petData.values.weightPet = +weightInput.value;
    petData.values.lengthPet = +lengthInput.value;
    petData.values.colorPet = colorInput.value;
    petData.values.breedPet = breedInput.value;
    petData.values.vaccinatedPet = vaccinatedInput.checked;
    petData.values.dewormedPet = dewormedInput.checked;
    petData.values.sterilizedPet = sterilizedInput.checked;
    petData.values.date = getDate;
    clearInput();
    petArr.push(petData.values);
  }
  saveToStorage("local_pet", JSON.stringify(petArr));
  renderTableData(petArr);
};

// Xóa thú cưng
const deletePet = (id) => {
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].idPet === id && confirm("Are you sure?")) {
      petArr.splice(i, 1);
    }
  }
  saveToStorage("local_pet", JSON.stringify(petArr));
  renderTableData(petArr);
};

// Show All pet
const showAllPet = () => {
  const petArr = JSON.parse(getFromStorage("local_pet"));
  renderTableData(petArr);
  healthyBtn.classList.toggle("hidden");
  showAllBtn.classList.toggle("hidden");
};

// Show healthy pet
const showHealthyPet = () => {
  const healthyPetArr = [];
  const petArr = JSON.parse(getFromStorage("local_pet"));
  for (let i = 0; i < petArr.length; i++) {
    if (
      petArr[i].vaccinatedPet &&
      petArr[i].dewormedPet &&
      petArr[i].sterilizedPet
    ) {
      const healthyPet = petArr[i];
      healthyPetArr.push(healthyPet);
    }
  }

  renderTableData(healthyPetArr);
  healthyBtn.classList.toggle("hidden");
  showAllBtn.classList.toggle("hidden");
};

// Calculate BMI
const calculateBMI = () => {
  for (let i = 0; i < petArr.length; i++) {
    let calcBMI;
    if (petArr[i].typePet === "Dog") {
      calcBMI = (petArr[i].weightPet * 703) / petArr[i].lengthPet ** 2;
      petArr[i].BMI = calcBMI.toFixed(2);
    } else {
      calcBMI = (petArr[i].weightPet * 886) / petArr[i].lengthPet ** 2;
      petArr[i].BMI = calcBMI.toFixed(2);
    }
  }

  renderTableData(petArr);
};

// Bắt sự kiện ở nút submit
submitBtn.addEventListener("click", addPet);

// Bắt sự kiện ở nút Show Healthy
healthyBtn.addEventListener("click", showHealthyPet);

// Bắt sự kiện ở nút Show All Pet
showAllBtn.addEventListener("click", showAllPet);

// Bắt sự kiện ở nút Calculate BMI
calcBmiBtn.addEventListener("click", calculateBMI);

// Bắt sự kiện ở ô chọn Dog hay Cat
typeInput.addEventListener("change", (e) => {
  renderBreed(JSON.parse(getFromStorage("local_breed")), e.target.value);
});
