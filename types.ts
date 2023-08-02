export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
