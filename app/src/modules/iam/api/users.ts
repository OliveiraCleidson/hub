export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: 'active' | 'inactive';
  dtCreatedAt: Date;
  dtUpdatedAt: Date;
};

type UsersApi = {
  list: (options: {
    page: number;
    pageSize: number;
    query?: {
      [key in keyof IUser]: {
        $eq?: IUser[key];
      };
    };
  }) => Promise<IUser[]>;
  updateUserStatus: (
    userId: string,
    newStatus: IUser['status'],
  ) => Promise<void>;
};

const pause = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const users: IUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@test.com',
    status: 'active',
    dtCreatedAt: new Date(),
    dtUpdatedAt: new Date(),
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@test.com',
    status: 'active',
    dtCreatedAt: new Date(),
    dtUpdatedAt: new Date(),
  },
];

export const usersApi: UsersApi = {
  list: async ({ page, pageSize, query }) => {
    await pause(1000 * (Math.random() + 0.5));
    return users.slice((page - 1) * pageSize, page * pageSize);
  },
  updateUserStatus: async (userId, newStatus) => {
    await pause(1000 * (Math.random() + 0.5));
    const user = users.find((user) => user.id === userId);
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    user.status = newStatus;
  },
};
