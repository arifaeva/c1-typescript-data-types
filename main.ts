// writing types

// explicit -> kita tuliskan secara jelas
const firstName: string = "Soshiro";

// implicit -> membuat variabel tapi kita tidak tentukan type-nya, maka dia akan di-infer sebagai literal
// di sini lastName ini di-infer sebagai string
let lastName = "Hoshina";
// Perhatikan bahwa di sini kita menggunakan "let" bukan "const"
// Kalau menggunakan "const", maka dia akan di-infer sebagai literal
// Jadi misal const lastName = "Hoshina", maka lastName tidak akan bisa dimasukkan value apa-apa lagi selain "Hoshina"

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// literal
const captainName: "Narumi" = "Narumi";
// Di sini kita tidak punya pilihan lain selain memberikan value "Narumi"

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// union
// "/" artinya "or" di dalam Typescript
const data: string | number = 24;
const gender: "male" | "female" = "female";
const role: "admin" | "user" = "admin";
// Keuntungan di sini adalah kita diberikan tooling yang memudahkan karena kita langsung diberikan 2 pilihan value yang diizinkan
// Ini mengurangi potensi bug karena mostly bug disebabkan oleh kesalahan tipe data yang diekspektasikan
// Use case: ketika punya database yang ada pilihan misal "male" atau "female" yang disimpan dalam bentuk string

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// enum > label to numeric value
// -> tipe data di mana kita bisa memberikan label data pada numeric value
enum Role {
  ADMIN,
  USER,
}
const myRole: Role = Role.ADMIN;
// enum mirip dengan union
// perbedaannya dengan union adalah enum digunakan untuk case di mana kita simpan value ke dalam database dalam
// bentuk numerik (1, 2, dst) yang kita infer-nya dari dalam database itu dalam bentuk label
// Use case: Ketika kita punya database dalam bentuk SQLite yang punya tipe data yang range-nya lebih kecil.
// Sehingga adakalanya kita menyimpan value ROLE seperti ini itu dalam bentuk numeric value. Di sini kita lebih
// memerlukan menggunakan enum dibandingkan union karena akan menjadi lebih mudah untuk membaca ini value-nya apa.
// Ini jadi lebih mudah dibaca karene bentuknya adalah label pada numeric value

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// tuple
// Array with fixed data type and size
const vector: [number, number, number] = [0, 0, 0];

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// array
// the size doesn't really matter
const fruits: string[] = ["apple", "mango", "strawberry", "lemon"];
const random: (string | number)[] = ["table", "paper", 23, 47];

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// void
// Biasanya ada hubungannya dengan function
function addTwoNumbers(x: number, y: number): void {
  console.log(x + y);
}
// function addTwoNumbers akan menerima argument x dan y nya adalah number yang dia akan me-return void
// Artinya function ini tidak akan me-return apapun
// Ini akan berbeda dengan function berikut:
function productTwoNumbers(x: number, y: number): number {
  console.log(x + y);
  return x * y;
}
// Ada kalanya kita membutuhkan function yang return-nya adalah void
// Contohnya adalah function logger yang digunakan untuk melakukan log pada suatu service / provider di mana
// kita tidak perlu melakukan return apapun

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// any
// the most powerful way to bypass the type
function subtractTwoNumbers(x: any, y: any): any {
  console.log(x - y);
}
// Di sini kita bisa memasukkan argument apa saja untuk function subtractTwoNumber
// Biasanya digunakan apabila kita tidak ingin melakukan inferring pada data type apapun

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// generics
// metode atau utility yang bisa membantu kita melakukan inferring (mendapatkan tipe data tergantung dari apa yang dimasukkan)

// mirip dengan any, tapi kita tahu tipe datanya
// Kita tidak punya ekspektasi apapun terhadap tipe datanya

// Contoh 1:
// function doSomething(arg: any) {
//   return arg;
// }

// const doremi = doSomething(4)

// doremi.
// di sini "doremi." tidak mau memunculkan metode apapun yang berhubungan dengan number karena arg pada function
// doSomething adalah any
// Padahal ada kalanya kita ingin typescript memahami tipe data dan metode apa yang harus dikeluarkan tergantung
// dari arg yang dimasukkan
// Untuk menghindari hal-hal seperti ini terjadi di dalam typescript, kita bisa menggunakan generics

// Contoh 2:
// function doSomething_<T>(arg: T): T {
//   return arg;
// }

// const data_ = doSomething_("Hello!")

// data_.
// Di sini "data_." sudah bisa memberikan ekspektasi metode apa saja yang harus dikeluarkan sesuai dengan arg yang diberikan

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Kita hanya perlu declare tipe data ketika kita mau re-assign dari variabel tersebut untuk memastikan tidak ada pergantian tipe data selain yang kita inginkan
// Contoh:
const something = "something"; // Ini sudah benar tidak perlu ditambah tipe data
const riize: string = "riize"; // Ini tidak perlu, karena jadinya redundant

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// never
// biasanya untuk throwing error yang tidak akan pernah ada tipe datanya
