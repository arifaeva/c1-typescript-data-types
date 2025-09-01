// utility
// adalah fasilitas yang diberikan oleh typescript untuk melakukan pembuatan type yang lebih advanced

// extends -> kita melakukan extending dari current type data
interface IUser {
  id: number;
  name: string;
  address: string;
}

interface IEmployee extends IUser {
  jobDesc: string;
}

const user: IEmployee = {
  id: 1,
  name: "Killua Zoldyck",
  address: "Kukuroo Mountain",
  jobDesc: "assassin",
};

// Pada user, kita perlu menambahkan apa saja yang ada di IUser sekaligus IEmployee
// Ini adalah contoh ketika kita ingin melakukan compound dari tipe data basic ke tipe data yang lebih advanced
// Dengan menggunakan metode ini, kita akan lebih mudah untuk manage sebuah type

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Pick -> cherry pick from certain property
// Omit -> exclude certain proerty

type TCreateUser = Omit<IUser, "id" | "user">; // exclude
type TIdUser = Pick<IUser, "id">; // include

function createUser(userData: TCreateUser) {
  /// function ini ketika dipanggil hanya perlu memasukkan name
}

function getUser(userData: TIdUser) {
  /// function ini ketika dipanggil hanya perlu memasukkan id
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Partial > Type -> Optional
// Digunakan untuk merubah type menjadi optional

function updateUser(userData: Partial<IUser>) {
  ///
}
// Pada function ini kita tidak bisa expect user akan melakukan perubahan pada apa saja
// Jadi input user bisa apa saja
// pada function updateUser, semua field pada IUser berubah menjadi optional

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Promise
// Digunakan untuk melakukan return type data dalam bentuk promise
// Sebuah generic untuk memaksa kita untuk membuat data kita menjadi asynchronous

async function fetchUser(): Promise<IUser> {
  return { id: 2, name: "Maeda Riku", address: "Fukuoka" };
}
