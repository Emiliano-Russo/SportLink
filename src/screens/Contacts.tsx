import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Añadir Nuevo</Text>
      </TouchableOpacity>
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
});
