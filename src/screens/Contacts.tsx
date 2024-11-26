import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const contacts = [
  {id: '1', name: 'Seba', action: 'profile'},
  {id: '2', name: 'Juancho', action: 'whatsapp'},
  {id: '3', name: 'Perez', action: 'profile'},
  {id: '4', name: 'Seba', action: 'profile'},
  {id: '5', name: 'Juancho', action: 'whatsapp'},
  {id: '6', name: 'Perez', action: 'profile'},
];

export const Contacts = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'existing' | 'new' | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  // Simulación de validación del número
  const handlePhoneNumberValidation = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Simula que números que terminan en 2 tienen perfil en la app
      if (phoneNumber.endsWith('2')) {
        setModalType('existing');
      } else {
        setModalType('new');
      }
    }, 2000);
  };

  const renderContact = ({item}) => (
    <View style={styles.contactRow}>
      <Text style={styles.contactName}>{item.name}</Text>
      {item.action === 'profile' ? (
        <Icon name="user" size={20} color="#333" />
      ) : (
        <Icon name="whatsapp" size={20} color="#25D366" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contactos</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderContact}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Icon name="plus" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Añadir Nuevo</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(false);
          setModalType(null);
          setPhoneNumber('');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Modal inicial */}
            {!modalType && (
              <>
                <Text style={styles.modalTitle}>Nuevo Invitado</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese número de teléfono"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
                <TouchableOpacity
                  style={styles.validateButton}
                  onPress={handlePhoneNumberValidation}
                  disabled={loading || !phoneNumber}>
                  {loading ? (
                    <Text style={styles.validateButtonText}>Validando...</Text>
                  ) : (
                    <Text style={styles.validateButtonText}>Validar</Text>
                  )}
                </TouchableOpacity>
              </>
            )}

            {/* Modal de usuario existente */}
            {modalType === 'existing' && (
              <>
                <Text style={styles.modalTitle}>Nuevo Invitado</Text>
                <Text style={styles.userName}>Carlitos</Text>
                <TouchableOpacity
                  style={styles.addContactButton}
                  onPress={() => {
                    // Acción para añadir usuario existente
                    setModalVisible(false);
                    setModalType(null);
                    setPhoneNumber('');
                  }}>
                  <Text style={styles.addContactButtonText}>Añadir</Text>
                </TouchableOpacity>
              </>
            )}

            {/* Modal de usuario nuevo */}
            {modalType === 'new' && (
              <>
                <Text style={styles.modalTitle}>Nuevo Invitado</Text>
                <TextInput style={styles.input} placeholder="Nombre o Apodo" />
                <Text style={styles.infoText}>
                  Este usuario no tiene la app, recuerda que las invitaciones
                  por WhatsApp consumen puntos.
                </Text>
                <TouchableOpacity
                  style={styles.addContactButton}
                  onPress={() => {
                    // Acción para añadir nuevo usuario
                    setModalVisible(false);
                    setModalType(null);
                    setPhoneNumber('');
                  }}>
                  <Text style={styles.addContactButtonText}>Añadir</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactName: {
    fontSize: 18,
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  validateButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  validateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userName: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  addContactButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  addContactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
});
