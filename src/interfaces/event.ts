import {User} from './user';

export interface SportEvent {
  id: string; // ID único del evento
  ownerId: string; // ID del propietario del evento
  ownerName: string; // Nombre del propietario
  totalPlayers: number; // Número total de jugadores esperados
  location: string; // Ubicación del evento
  date: Date;
  mainPlayers: Player[]; // Jugadores principales
  substitutes?: Player[]; // Suplentes opcionales
}

export interface Player {
  user: User; // Información del usuario
  inviteStatus: InviteStatus; // Estado de la invitación
}

export enum InviteStatus {
  Rejected = 0, // Invitación rechazada
  Accepted = 1, // Invitación aceptada
  Pending = 3, // Invitación pendiente
  ConfirmLater = 4, // Confirmar más tarde
}
