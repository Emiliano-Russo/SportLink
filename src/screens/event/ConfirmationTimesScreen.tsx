import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Player, SportEvent} from '../../interfaces/event';
import {useRoute} from '@react-navigation/native';

export const ConfirmationTimesScreen = () => {
  const route = useRoute();
  const {sportEvent} = route.params as {sportEvent: SportEvent};

  const renderPlayer = (
    player: Player,
    index: number,
    type: 'main' | 'substitute',
  ) => (
    <View style={styles.row} key={`${type}-${player.user.id}-${index}`}>
      <Text style={styles.order}>{index + 1}.</Text>
      <Text style={styles.name}>{player.user.name}</Text>
      <Text style={styles.confirmation}>{player.confirmationTime}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jugadores</Text>

      <View style={styles.section}>
        <FlatList
          data={sportEvent.mainPlayers}
          keyExtractor={item => item.user.id}
          renderItem={({item, index}) => renderPlayer(item, index, 'main')}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Sumar Jugador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  order: {
    fontSize: 16,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  confirmation: {
    fontSize: 14,
    color: '#555',
  },
  addButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
