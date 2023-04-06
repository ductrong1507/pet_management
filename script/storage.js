"use strict";

// Hàm save dữ liệu vào local storage
const saveToStorage = (key, value) => {
  localStorage.setItem(key, value);
};

// Hàm lấy dữ liệu từ local storage
const getFromStorage = (key) => {
  return localStorage.getItem(key);
};

// Mảng Pets tổng ban đầu
const petArrInitial = [
  {
    idPet: "P001",
    namePet: "Tom",
    agePet: 3,
    typePet: "Cat",
    weightPet: 5,
    lengthPet: 50,
    breedPet: "Tabby",
    colorPet: "#000000",
    vaccinatedPet: true,
    dewormedPet: true,
    sterilizedPet: true,
    BMI: "?",
    date: "14/9/2022",
  },
  {
    idPet: "P002",
    namePet: "Tyke",
    agePet: 5,
    typePet: "Dog",
    weightPet: 4,
    lengthPet: 40,
    breedPet: "Mixed Breed",
    colorPet: "#651310",
    vaccinatedPet: true,
    dewormedPet: false,
    sterilizedPet: true,
    BMI: "?",
    date: "15/9/2022",
  },
  {
    idPet: "P003",
    namePet: "Kukka",
    agePet: 10,
    typePet: "Cat",
    weightPet: 12,
    lengthPet: 80,
    breedPet: "Domestic Medium Hair",
    colorPet: "#FF007B",
    vaccinatedPet: true,
    dewormedPet: true,
    sterilizedPet: false,
    BMI: "?",
    date: "10/9/2022",
  },
  {
    idPet: "P004",
    namePet: "Tide",
    agePet: 7,
    typePet: "Dog",
    weightPet: 15,
    lengthPet: 92,
    breedPet: "Terrier",
    colorPet: "Green",
    vaccinatedPet: true,
    dewormedPet: true,
    sterilizedPet: true,
    BMI: "?",
    date: "10/9/2021",
  },
  {
    idPet: "P005",
    namePet: "Sabo",
    agePet: 12,
    typePet: "Dog",
    weightPet: 10,
    lengthPet: 70,
    breedPet: "Rottweiler",
    colorPet: "Green",
    vaccinatedPet: true,
    dewormedPet: true,
    sterilizedPet: true,
    BMI: "?",
    date: "20/9/2021",
  },
  {
    idPet: "H001",
    namePet: "Tom1",
    agePet: 15,
    typePet: "Dog",
    weightPet: 12,
    lengthPet: 90,
    breedPet: "Terrier",
    colorPet: "#FF007B",
    vaccinatedPet: false,
    dewormedPet: true,
    sterilizedPet: false,
    BMI: "?",
    date: "20/9/2021",
  },
  {
    idPet: "H002",
    namePet: "Tom2",
    agePet: 6,
    typePet: "Cat",
    weightPet: 12,
    lengthPet: 60,
    breedPet: "Domestic Medium Hair",
    colorPet: "#FF007B",
    vaccinatedPet: false,
    dewormedPet: false,
    sterilizedPet: false,
    BMI: "?",
    date: "10/9/2022",
  },
  {
    idPet: "H003",
    namePet: "Tom3",
    agePet: 3,
    typePet: "Cat",
    weightPet: 9,
    lengthPet: 30,
    breedPet: "Persian",
    colorPet: "#FF007B",
    vaccinatedPet: false,
    dewormedPet: false,
    sterilizedPet: false,
    BMI: "?",
    date: "10/9/2022",
  },
];

// Mảng Breeds tổng ban đầu
const breedArrInitial = [
  {
    id: "B01",
    name: "Tabby",
    type: "Cat",
  },
  {
    id: "B02",
    name: "Domestic Medium Hair",
    type: "Cat",
  },
  {
    id: "B03",
    name: "Mixed Breed",
    type: "Dog",
  },
  {
    id: "B04",
    name: "Domestic Short Hair",
    type: "Cat",
  },
  {
    id: "B05",
    name: "Terrier",
    type: "Dog",
  },
  {
    id: "B06",
    name: "Greyhound",
    type: "Dog",
  },
  {
    id: "B07",
    name: "Persian",
    type: "Cat",
  },
  {
    id: "B08",
    name: "Rottweiler",
    type: "Dog",
  },
];

/*  Kiểm tra xem local storage có dữ liệu chưa 
  nếu chưa có thì nạp dữ liệu breedArrInitial
*/
if (!getFromStorage("local_breed")) {
  saveToStorage("local_breed", JSON.stringify(breedArrInitial));
}

/* Kiểm tra xem local storage có dữ liệu chưa 
nếu chưa có thì nạp dữ liệu petArrInitial
*/
if (!getFromStorage("local_pet")) {
  saveToStorage("local_pet", JSON.stringify(petArrInitial));
}
