//Project: User Profile System
type User = {
  id: number;
  name: string;
  age: number;
};

type UserPreview = Pick<User, "id" | "name">;
type UserUpdate = Partial<Omit<User, "id">>;
type UsersById = Record<number, User>;

function updateUser(id: number, changes: UserUpdate): void {
  console.log(`Updating user ${id} with:`, changes);
}

const userPreview: UserPreview = {
  id: 1,
  name: "Subham X",
};

const users: UsersById = {
  1: {
    id: 1,
    name: "Ritika",
    age: 20,
  },
  2: {
    id: 2,
    name: "Subham",
    age: 20,
  },
};

updateUser(1, {
  name: "Ritika Hodges",
});

updateUser(2, {
  age: 21,
});

console.log(userPreview);
console.log(users);
