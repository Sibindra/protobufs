import { User, UserList, UserRole } from "./types/user";

async function main() {
  const payload = {
    name: "John Doe",
    email: "jhon@gmail.com",
    role: UserRole.ADMIN
  };

  const payload2 = {
    name: "Jane Doe",
    email: "jane@gmail.com",
    role: UserRole.USER
  };
  
  const user = User.create(payload);
  const userList = UserList.create({ users: [user, User.create(payload2)] });
  const buf = User.toBinary(user);
  const buf2 = UserList.toBinary(userList);


  console.log("userlen:", JSON.stringify(payload).length, "\nbuf:", buf.length);
  console.log("userlistlen:", JSON.stringify(userList).length, "\nbuf2:", buf2.length);

  const decodedUser = User.fromBinary(buf);
  const decodedUserList = UserList.fromBinary(buf2);

  console.log(decodedUser);
  console.log(decodedUserList);
}

main();
