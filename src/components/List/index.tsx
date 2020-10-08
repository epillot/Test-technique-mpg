import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import SelectInput from 'react-native-select-input-ios';

import { ListItem } from '../../store/list/types';
import styles from './styles';

function getPLayerPosition(positionId: number): string {
  if (positionId === 10)
    return 'G';
  if (positionId === 20)
    return 'DC';
  if (positionId === 21)
    return 'DL';
  if (positionId === 31)
    return 'MD';
  if (positionId === 32)
    return 'MO';
  if (positionId === 40)
    return 'A';
  return '?';
}

interface ListItemViewProps {
  player: ListItem;
  selectPlayer: (id: string) => void;
}

const ListItemView: React.FC<ListItemViewProps> = ({ player, selectPlayer }) => (
  <TouchableOpacity onPress={() => selectPlayer(player.id.substr(7))} style={styles.listItemContainer} >
    <View style={styles.lastnameContainer}>
      <Text
        ellipsizeMode='tail'
        numberOfLines={1}
        style={styles.lastname}
      >
        {player.lastname}
      </Text>
    </View>
    <View style={styles.positionContainer}><Text>{getPLayerPosition(player.ultraPosition)}</Text></View>
    <View style={styles.clubContainer}><Text>{player.club}</Text></View>
    <View style={styles.quotationContainer}><Text style={styles.quotation}>{player.quotation}</Text></View>
  </TouchableOpacity>
);

interface ListViewProps {
  players: Array<ListItem>;
  filterPos: number;
  filterName: string;
  setFilterName: (filter: string) => void;
  setFilterPos: (filter: number) => void;
  selectPlayer: (id: string) => void;
}

const ListView: React.FC<ListViewProps> = ({ players, setFilterName, setFilterPos, filterName, filterPos, selectPlayer }) => (
  <View style={styles.container}>

    <View style={styles.filterContainer}>
      <TextInput
        style={styles.input}
        placeholder='Nom joueur'
        placeholderTextColor='#000'
        value={filterName}
        onChangeText={setFilterName}
      />
      <SelectInput
        style={styles.input}
        value={filterPos}
        labelStyle={{textAlign: 'left'}}
        options={[
          {value: 0, label: 'Postes'},
          {value: 10, label: 'Gardien'},
          {value: 20, label: 'Def.Cen.'},
          {value: 21, label: 'Def.Lat.'},
          {value: 31, label: 'Mil.Def.'},
          {value: 32, label: 'Mil.off.'},
          {value: 40, label: 'Attaquant'},
        ]}
        onValueChange={setFilterPos}
      />
    </View>

    <FlatList
      data={players.sort((p1, p2) => p2.quotation - p1.quotation )}
      keyExtractor={item => item.id}
      stickyHeaderIndices={[0]}

      ListHeaderComponent={() => (
        <View style={styles.header}>
          <View style={styles.lastnameContainer}><Text>Joueur</Text></View>
          <View style={styles.positionContainer}><Text>Poste</Text></View>
          <View style={styles.clubContainer}><Text>Club</Text></View>
          <View style={styles.quotationContainer}><Text style={styles.quotation}>Prix</Text></View>
        </View>
      )}

      renderItem={({ item }) => (
        <ListItemView player={item} selectPlayer={selectPlayer} />
      )}
    />
  </View>
);

export default ListView;
