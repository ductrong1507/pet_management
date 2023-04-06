"use strict";

// danh sách các nút
const findBtn = document.getElementById("find-btn");

// danh sách các input trong form
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

// table
const bodyTable = document.getElementById("tbody");

// Render các option breed
const renderBreed = (breedArray, breedType) => {
  breedInput.innerHTML = "";
  let breedOptionHtml = "";
  const newBreedArr = breedArray.filter((breed) => {
    return breed.type === breedType;
  });
  if (breedType) {
    newBreedArr.forEach((breed) => {
      breedOptionHtml += `
        <option>${breed.name}</option>
      `;
    });
  } else {
    breedArray.forEach((breed) => {
      breedOptionHtml += `
        <option>${breed.name}</option>
      `;
    });
  }

  breedInput.innerHTML = "<option>Select Breed</option>" + breedOptionHtml;
};

renderBreed(JSON.parse(getFromStorage("local_breed")));

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
          <td>${arr[i].date}</td>
        </tr>
    `;
  }

  bodyTable.innerHTML = htmlTable;
};

// Hàm tìm pet
const findPet = () => {
  const petArr = JSON.parse(getFromStorage("local_pet"));
  const result = [];
  petArr.forEach((pet) => {
    if (
      pet.idPet.includes(idInput.value.toUpperCase()) &&
      pet.namePet.toLowerCase().includes(nameInput.value.toLowerCase()) &&
      pet.typePet.includes(
        typeInput.value === "Select Type" ? "" : typeInput.value
      ) &&
      pet.breedPet.includes(
        breedInput.value === "Select Breed" ? "" : breedInput.value
      ) &&
      pet.vaccinatedPet
        .toString()
        .includes(
          vaccinatedInput.checked ? vaccinatedInput.checked.toString() : ""
        ) &&
      pet.dewormedPet
        .toString()
        .includes(
          dewormedInput.checked ? dewormedInput.checked.toString() : ""
        ) &&
      pet.sterilizedPet
        .toString()
        .includes(
          sterilizedInput.checked ? sterilizedInput.checked.toString() : ""
        )

      //   pet.vaccinatedPet == vaccinatedInput.checked) ||
      // pet.dewormedPet == dewormedInput.checked ||
      // pet.sterilizedPet == sterilizedInput.checked
    ) {
      result.push(pet);
    }
  });

  renderTableData(result);
};

findBtn.addEventListener("click", findPet);

// Bắt sự kiện ở ô chọn Dog hay Cat
typeInput.addEventListener("change", (e) => {
  renderBreed(JSON.parse(getFromStorage("local_breed")), e.target.value);
});
