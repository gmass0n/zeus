import { IUser } from '~/interfaces/IUser';

export interface SignInResponseDTO {
  user: IUser;
  token: string;
}
