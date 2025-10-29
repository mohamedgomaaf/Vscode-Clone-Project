import type { IFile } from "../interfaces";

export const doesFileObjectExist = (arr: IFile[], id: string): boolean => {
  return arr.some((obj) => obj.id === id);
};
