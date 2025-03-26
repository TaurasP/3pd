import { faker } from '@faker-js/faker';

export interface User {
  name: string;
  email: string;
  address: string;
  city: string;
}

export const generateFakeUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
  }));
};
