import * as bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(plainPassword, salt);
  return hash;
};

export const cmpPassword = async (
  plainPassword: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hash);
};
