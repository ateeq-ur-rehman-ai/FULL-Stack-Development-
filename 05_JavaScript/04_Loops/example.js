let passwords = ["123", "hello", "admin123", "test"];

for (let pass of passwords) {
  if (pass.length >6) {
    console.log("First valid password: " + pass);
    break;
  }
}