import React from 'react';
import { View, Text } from 'react-native';

import { SelectedPlayer } from '../../store/selectedPlayer/types';
import styles from './styles';

function getPLayerPosition(positionId: number): string {
  if (positionId === 10)
    return 'Gardien';
  if (positionId === 20)
    return 'Def. Cen.';
  if (positionId === 21)
    return 'Def. Lat.';
  if (positionId === 31)
    return 'Mil. Def.';
  if (positionId === 32)
    return 'Mil. Off.';
  if (positionId === 40)
    return 'Attaquant';
  return '?';
}

const keeperMainStats = {
  'Note moyenne': 'avgRate',
  'Clean Sheet': 'sumCleanSheet',
  '% Sauvés': 'percentageSaveShot',
  'Cote': 'quotation',
};

const fieldMainStats = {
  'Note moyenne': 'avgRate',
  'Buts': 'sumGoals',
  'Passes dé.': 'sumGoalAssist',
  'Cote': 'quotation',
};

const keeperSubStats = {
  'Buts encaissés par match': 'goalsConcededByMatch',
  'Arrêts réalisés': 'sumSaves',
  'Parades': 'sumDeflect',
  'Pénaltys sauvés': 'sumPenaltySave',
};

const fieldSubStats = {
  'Dribbles réussis par match': 'succeedCrossByMatch',
  'Duels remportés par match': 'wonDuelByMatch',
  'Pertes de balle par match': 'lostBallByMatch',
  'Fautes commises par match': 'foulsByMatch',
  'Fautes subies par match': 'foulsEnduredByMatch',
  'Tir cadrés par match': 'shotOnTargetByMatch'
};

function getStat(stat: any): string {
  if (typeof stat === 'undefined')
    return '-';
  if (typeof stat !== 'string')
    return stat.toString();
  return stat
}

interface SelectedPlayerProps {
  player: SelectedPlayer;
}

const SelectedPlayerView: React.FC<SelectedPlayerProps> = ({ player }) => {
  const stats: {[index: string]: string} = player.ultraPosition === 10 ? keeperMainStats : fieldMainStats;
  const subStats: {[index: string]: string} = player.ultraPosition === 10 ? keeperSubStats : fieldSubStats;
  return (
    <View style={styles.container}>

      <View style={styles.basicInfoContainer}>
        <View>
          <Text style={styles.name}>{(player.firstname ? player.firstname + ' ' : '') + player.lastname.toUpperCase()}</Text>
          <Text style={styles.position}>{getPLayerPosition(player.ultraPosition)}</Text>
          <Text style={styles.club}>{player.club}</Text>
        </View>
      </View>

      <View style={styles.mainStatsContainer}>
        {Object.keys(stats).map((field, i) => (
          <View style={styles.mainStatContainer} key={i}>
            <Text style={styles.mainStatField}>{field}</Text>
            <Text>{getStat((player[stats[field]] || player.stats[stats[field]]))}</Text>
          </View>
        ))}
      </View>

      <View style={styles.subStatsContainer}>
        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Efficace ?</Text>
        {Object.keys(subStats).map((field, i) => (
          <View style={styles.subStatContainer} key={i}>
            <Text>{field}</Text>
            <Text>{getStat(player[subStats[field]] || player.stats[subStats[field]])}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default SelectedPlayerView;
