var arr = [
  {
    id: "aa1",
    name: "aaaaa",
    type: "a",
  },
  {
    id: "aa2",
    name: "bbbbb",
    type: "b",
  },
  {
    id: "aa3",
    name: "ccccc",
    type: "b",
  },
  {
    id: "aa4",
    name: "dddd",
    type: "a",
  },
];

var result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].name.includes("") && arr[i].type.includes("a")) {
    result.push(arr[i]);
  }
}

console.log(result);
