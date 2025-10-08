import type { IPhone } from '../interface/Iphone';

function Check_Object_Keys(arr: string[], obj: IPhone): Boolean {
  return arr.every((key: string) => !!obj[key]);
}
