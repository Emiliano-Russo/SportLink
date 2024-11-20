export interface User {
  id: string;
  name: string;
  phone: string;
}

export interface InvitedUser {
  user: User;
  inviteStatus: InviteStatus;
}

export enum InviteStatus {
  Rejected = 0,
  Accepted = 1,
  Pending = 3,
  ConfirmLater = 4,
}
