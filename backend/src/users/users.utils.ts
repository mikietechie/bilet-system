import { User } from './entities/user.entity';

export const getActivationLink = (u: User): string => {
  const now = new Date();
  const DAY_SECONDS = 1 * 24 * 60 * 60 * 1000;
  now.setTime(now.getTime() + DAY_SECONDS);
  return `${process.env.ADDRESS}/api/v1/auth/activate/${u.email}/${now.toJSON()}`;
};
