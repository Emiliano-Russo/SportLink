import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PlanningStackParamList} from 'src/App';

const mockEvent = {
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
      inviteStatus: 1,
    },
    {
      user: {
        id: '111-222-444',
        name: 'Juancito',
        phone: '+888777333',
      },
      inviteStatus: 1,
    },
  ],
  substitutes: undefined,
};

const formatDate = (date: Date) => {
  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return {dayOfWeek, formattedTime};
};

type EventCreatorNavigationProp = StackNavigationProp<
  PlanningStackParamList,
  'EventCreator'
>;

export const EventCreator = () => {
  const {dayOfWeek, formattedTime} = formatDate(mockEvent.date);
  const navigation = useNavigation<EventCreatorNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('BasicDataEvent');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eventos Predefinidos</Text>
      <View style={styles.eventCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.eventTitle}>
            {mockEvent.location} {dayOfWeek}
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="edit" size={16} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Icon name="times" size={16} color="#ff3b3b" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.eventDetail}>
          Invitados: {mockEvent.totalPlayers}
        </Text>
        <Text style={styles.eventDetail}>Lugar: {mockEvent.location}</Text>
        <Text style={styles.eventDetail}>Hora: {formattedTime}</Text>
        <Text style={styles.eventDetail}>Día de la semana: {dayOfWeek}</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Iniciar Evento</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleNavigate} style={styles.addButton}>
          <Text style={styles.addButtonText}>Añadir Evento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    marginRight: 8,
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#f0f8ff',
  },
  deleteButton: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#f5f5f5',
  },
  eventDetail: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  startButton: {
    marginTop: 12,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
