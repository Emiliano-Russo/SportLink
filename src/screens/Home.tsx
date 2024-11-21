import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import {events_mock} from '../mocks/events_mock';
import {formatDateTime} from '../utils/formatter';

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const openModal = (event: any) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eventos Deportivos</Text>
      <FlatList
        data={events_mock}
        keyExtractor={item => item.ownerId}
        renderItem={({item}) => {
          const {formattedDate, formattedTime, dayOfWeek} = formatDateTime(
            item.date,
          );
          return (
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{item.ownerName} Organiza</Text>
              <Text style={styles.eventDetail}>
                {dayOfWeek} {formattedDate}
              </Text>
              <Text style={styles.eventDetail}>En {item.location}</Text>
              <Text style={styles.eventDetail}>Hora: {formattedTime}</Text>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => openModal(item)}>
                  <Text style={styles.buttonText}>Ver Invitados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dangerButton}>
                  <Text style={styles.dangerButtonText}>Darme de Baja</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal para mostrar los invitados */}
      {selectedEvent && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Invitados para {selectedEvent.owenrName}
              </Text>
              <FlatList
                data={selectedEvent.users}
                keyExtractor={(item, index) => item.user.id + index}
                renderItem={({item}) => (
                  <Text style={styles.modalText}>
                    {item.user.name} -{' '}
                    {item.inviteStatus === 1 ? 'Aceptado' : 'Otro Estado'}
                  </Text>
                )}
              />
              <Button title="Cerrar" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 16,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  eventDetail: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dangerButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
  },
  dangerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
});
