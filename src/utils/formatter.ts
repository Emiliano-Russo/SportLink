export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);

  // Array para los días de la semana
  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()]; // Obtiene el día de la semana
  const formattedDate = date.toLocaleDateString(); // Formatea la fecha
  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return {dayOfWeek, formattedDate, formattedTime};
};
