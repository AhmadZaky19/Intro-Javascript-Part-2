const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (key, limit, cb) => {
  const searchArr = names.filter((name) => {
    return name.toLowerCase().includes(key);
  });

  const limitData = searchArr.slice(0, limit);
  cb(limitData);
};

const showName = (name) => {
  console.log(name);
};

searchName("li", 3, showName);
