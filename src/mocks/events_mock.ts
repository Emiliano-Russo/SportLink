import {InviteStatus, SportEvent} from '../interfaces/event';

export const events_mock: SportEvent[] = [
  {
    id: '12345689',
    ownerId: '1231-asd32-asd2ed1-asd2',
    ownerName: 'Bruno',
    location: 'Campomar',
    date: new Date(),
    totalPlayers: 10,
    mainPlayers: [
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
    substitutes: undefined,
  },
];
