import type { IPhone } from './Iphone';
import type { Dispatch, SetStateAction } from 'react';

export interface IProductDescriptionProps {
  product?: IPhone;
  setProduct?: Dispatch<SetStateAction<IPhone>>;
  handleSave: () => void;
  handleChange: (field: keyof IPhone, value: string | number) => void;
  closeMsg: () => void;
  candelete?: boolean;
  handleDelete?: () => void;
}

export interface Msg {
  text: string;
  type: 'success' | 'error' | 'info' | '';
}

export interface MessageProps {
  msg: Msg;
  closeMsg: () => void;
}
