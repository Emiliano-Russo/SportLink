import {User} from './user';

export interface SportEvent {
  id: string; // ID único del evento
  ownerId: string; // ID del propietario del evento
  ownerName: string; // Nombre del propietario
  totalPlayers: number; // Número total de jugadores esperados
  location: string; // Ubicación del evento
  date: Date;
  players: Player[]; // Jugadores principales
}

export interface Player {
  user: User; // Información del usuario
  inviteStatus: InviteStatus; // Estado de la invitación
  confirmationTime: ConfirmationTime;
  order: number;
}

export enum InviteStatus {
  Rejected = 0, // Invitación rechazada
  Accepted = 1, // Invitación aceptada
  Pending = 3, // Invitación pendiente
  ConfirmLater = 4, // Confirmar más tarde
}

export enum ConfirmationTime {
  SameDayMorning = 'Confirmation Same Day (Morning)',
  SameDayAfternoon = 'Confirmation Same Day (Afternoon)',
  LastNight = 'Confirmation Last Night',
  TwoDaysBefore = 'Confirmation 2 Days Before',
  Flexible = 'Flexible Confirmation',
}
