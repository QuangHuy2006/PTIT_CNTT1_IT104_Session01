const user = { name: "", age: 0, role: "" };
const createUser = (name, age, role) => {
  if (age == undefined) {
    user.age = 18;
  }
  if(role === undefined){
    user.role = "user";
  }
  user.name = name;
};

let name = prompt("nhap vao ten cho nguoi dung: ");
let age = Number(prompt("nhap vao tuoi cho nguoi dung: "));
let role = prompt("nhap vao vai tro cho nguoi dung: ");
createUser(name, age, role);
