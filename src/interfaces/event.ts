import {InvitedUser, User} from './user';

export interface SportEvent {
  ownerId: string;
  owenrName: string;
  location: string;
  date: string;
  users: InvitedUser[];
}
