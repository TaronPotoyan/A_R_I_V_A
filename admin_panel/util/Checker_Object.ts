import type { IPhone } from '../interface/Iphone';

export function Check_Object_Keys(arr: string[], obj: IPhone): boolean {
  let res = arr.every((key: string) => {
    if (key === 'id') return;

    const value: any = obj[key];
    console.log(value);
    if (value !== undefined && value !== null && value !== '') {
      return true;
    }
    console.log(key, value);
  });
  console.log(res);
  return res;
}
