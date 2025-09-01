// assertion

//api
interface IPerson {
  name: string;
  age?: number; // optional -> kalau tidak ada maka undefined
}

const person: IPerson = {
  name: "Yushi",
  age: 10,
};

function doSomething(arg: number) {
  return arg;
}

doSomething(person?.age as number); // assertion => as datatype

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

doSomething_(person2?.age as number); // undefined

// bad code
// raising potential bug
// Ini berpotensi menyebabkan error karena hasil dari doSomething_ ke person2?.age bersifat undefined
// code linter, eslint, biome not recommending to do so

// Contoh:
function anottherThing() {
  // conditional check

  if (person.age) {
    doSomething(person.age as number);
  }
}

// Contoh ini menunjukkan bahwa kita boleh melakukan assertion ketika kita sure person.age itu ada dan kita tahu tipe datanya apa
// Ini akan membantu kita menghindari terjadinya potential bug
// Kalau kita tidak punya conditional check, meskipun doSomething sudah satisfy hanya bisa menerima number maka akan error
// Di sini typescript sudah mengerti bahwa person.age harus dicek dulu baru kita bisa passing as real value atau real number

// Ini recommended karena kita melakukan pengecekan
// Kalau sudah melakukan pengecekan, maka sebenarnya tidak perlu melakukan assertion

// Contoh use case di mana kita boleh melakukan type assertion:

interface IData {
  name: string;
  age: number;
  address: string;
}

// not from 3rd party, tapi backend internal
async function getData() {
  const res = await fetch("");
  const data = await res.json();
  return data as IData; // do it here
}

async function doingSomething() {
  const data = await getData();
  data.address;
}

// Pada function doingSomething, data. sudah bisa memberikan access property data yang kita assert
