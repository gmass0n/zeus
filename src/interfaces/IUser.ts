import { UserTypeEnum } from '~/enums/UserTypeEnum';
import { UserStatusEnum } from '~/enums/UserStatusEnum';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  status: UserStatusEnum;
  type: UserTypeEnum;
}
