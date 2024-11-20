import {SportEvent} from '../interfaces/event';
import {InviteStatus} from '../interfaces/user';

export const events_mock: SportEvent[] = [
  {
    ownerId: '1231-asd32-asd2ed1-asd2',
    owenrName: 'Carlitos',
    location: 'campomar',
    date: new Date().toString(),
    users: [
      {
        user: {
          id: '1231-asd32-asd2ed1-asd2',
          name: 'Carlitos',
          phone: '+778123909',
        },
        inviteStatus: InviteStatus.Accepted,
      },
      {
        user: {
          id: '111-222-444',
          name: 'Juancito',
          phone: '+888777333',
        },
        inviteStatus: InviteStatus.Accepted,
      },
    ],
  },
];
