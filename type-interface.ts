// type alias
type TTask = "admin" | "user";

const userATask: TTask = "admin";
const userBTask: TTask = "user";

type TUser = {
  name: string;
  age: number;
};

const myUser: TUser = {
  name: "Tokuno Yushi",
  age: 21,
};

// interface
interface IUser {
  name: string;
  age: number;
}

const myAnotherUser: IUser = {
  name: "Maeda Riku",
  age: 22,
};

const myUsers: IUser[] = [
  { name: "Hoshina Soshiro", age: 27 },
  { name: "Narumi Gen", age: 28 },
];

// interface for blueprint
interface IUserRepo {
  findAll: () => string[];
  findOne: () => string;
  create: () => string;
}

class UserRepo implements IUserRepo {
  findAll() {
    return ["yushi", "riku"];
  }

  findOne: () => "Yushi";

  create: () => "Riku";
}

// compound type alias-interface
type TPosition = "vocalist" | "rapper";

interface IMember {
  name: string;
  color: string;
  position: TPosition;
}

const wishMember: IMember = {
  name: "Tokuno Yushi",
  color: "blue",
  position: "vocalist",
};

// use interface when you need Object data type & class blueprint
// use type alias when you need to create alias for certain type (ex: union)

// common practice
// {} use interface
