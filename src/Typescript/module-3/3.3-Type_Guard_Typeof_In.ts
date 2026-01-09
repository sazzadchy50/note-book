{
  //Type guards

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  // console.log(result1);

  // Type In

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: 'admin';
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`${user.name} is ${user.role}`);
    } else {
      console.log(`${user.name} is normal user`);
    }
  };

  const normalUser: NormalUser = {
    name: 'mr x',
  };
  const adminUser: AdminUser = {
    name: 'admin user',
    role: 'admin',
  };

  getUser(adminUser);
}
