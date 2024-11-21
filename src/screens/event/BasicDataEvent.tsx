import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const BasicDataEvent = () => {
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [totalPlayers, setTotalPlayers] = useState('');
  const [isDayPickerVisible, setDayPickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const handleDaySelect = (day: string) => {
    setDayOfWeek(day);
    setDayPickerVisible(false);
  };

  const handleTimeChange = (event: any, selectedDate: Date | undefined) => {
    if (selectedDate) {
      const hours = selectedDate.getHours().toString().padStart(2, '0');
      const minutes = selectedDate.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    }
    setTimePickerVisible(false);
  };

  const handleNext = () => {
    // Lógica para navegar a la siguiente pantalla
    console.log({dayOfWeek, time, location, totalPlayers});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear Evento</Text>

      {/* Seleccionador de Días */}
      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => setDayPickerVisible(true)}>
        <Text style={styles.inputText}>{dayOfWeek || 'Día de la Semana'}</Text>
      </TouchableOpacity>
      <Modal
        visible={isDayPickerVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona un Día</Text>
            <FlatList
              data={daysOfWeek}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleDaySelect(item)}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setDayPickerVisible(false)}>
              <Text style={styles.closeModalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Seleccionador de Horas */}
      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => setTimePickerVisible(true)}>
        <Text style={styles.inputText}>{time || 'Seleccionar Hora'}</Text>
      </TouchableOpacity>
      {isTimePickerVisible && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}

      {/* Campo de Lugar */}
      <TextInput
        style={styles.inputField}
        placeholder="Lugar..."
        value={location}
        onChangeText={setLocation}
      />

      {/* Campo para Total de Personas */}
      <TextInput
        style={styles.inputField}
        placeholder="Total de Personas"
        value={totalPlayers}
        onChangeText={setTotalPlayers}
        keyboardType="numeric" // Permite solo números
      />

      {/* Botón Siguiente */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  inputButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: '#555',
  },
  inputField: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
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
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalItemText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  closeModalButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  closeModalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
