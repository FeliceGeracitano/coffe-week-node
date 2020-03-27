const faker = require("faker");

const dublinPeople = new Array(20).fill(undefined).map(_ => {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  return {
    name: { first, last },
    location: "dublin",
    department: "engineering",
    motto: faker.lorem.sentence(6),
    email: `${first.toLowerCase()}.${last.toLowerCase()}@utmost.co`,
    phone: faker.phone.phoneNumberFormat(0),
    uid: faker.random.uuid()
  };
});

const sanFraPeople = new Array(10).fill(undefined).map(_ => {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  return {
    name: { first, last },
    location: "san francisco",
    department: "engineering",
    motto: faker.lorem.sentence(6),
    email: `${first.toLowerCase()}.${last.toLowerCase()}@utmost.co`,
    phone: faker.phone.phoneNumberFormat(0),
    uid: faker.random.uuid()
  };
});

const nonEgPeople = new Array(5).fill(undefined).map(_ => {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  return {
    name: { first, last },
    location: faker.address.city(),
    department: faker.commerce.department().toLowerCase(),
    motto: faker.lorem.sentence(6),
    email: `${first.toLowerCase()}.${last.toLowerCase()}@utmost.co`,
    phone: faker.phone.phoneNumberFormat(0),
    uid: faker.random.uuid()
  };
});

module.exports = []
  .concat(dublinPeople)
  .concat(sanFraPeople)
  .concat(nonEgPeople);
