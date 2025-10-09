import type { IPhone } from '../interface/Iphone';

export function Check_Object_Keys(arr: string[], obj: IPhone): boolean {
  return arr.every((key: string) => {
    const value: any = obj[key];
    return value !== undefined && value !== null && value !== '';
  });
}
