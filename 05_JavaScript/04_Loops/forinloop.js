let user = {
  name: "Ali",
  age: 22,
  country: "Pakistan"
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}
