// assertion

//api
interface IPerson {
  name: string;
  age?: number;
}

const person: IPerson = {
  name: "Yushi",
  age: 10,
};

function doSomething(arg: number) {
  return arg;
}

doSomething(person?.age as number);

// Ketika kita gak tahu apakah user.age ini akan ada atau enggak
// Cara satisfy di dalam typescript adalah dengan melakukan assertion
// Ini adalah cara yang jelek

// Kalau kita punya case yang kita tidak tahu apakah akan ada atau tidak karena bentuknya optional
// Ini bisa menyebabkan error apabila yang opsional tadi undefined
// Contoh:

const person2: IPerson = {
  name: "Riku",
};

function doSomething_(arg: number) {
  return arg * 40;
}

doSomething_(person?.age as number); // assertion => ad datatype

// Ini akan menyebabkan error karena hasil dari doSomething_ ke person?.age bersifat undefined
