import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ActivityIndicator, Image, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { AppState, AppThunkDispatch, setError } from '../../store';
import { listFilterName, listFilterPos } from '../../store/list/actions';
import { resetPlayer } from '../../store/selectedPlayer/actions';
import { listFetchRequest, playerFetchRequest } from '../../thunks';
import ListView from '../../components/List/';
import SelectedPlayerView from '../../components/SelectedPlayer/';
import styles from './styles';

interface ErrorViewProps {
  retry: () => void;
}

const ErrorView: React.FC<ErrorViewProps> = ({ retry }) => (
  <View style={{marginTop: 10}}>
    <Text>Une erreur est survenue</Text>
    <Button title='recharger' onPress={retry} />
  </View>
);

class AppContainer extends React.Component<AppContainerProps> {

  componentDidMount() {
    this.props.initList();
  }

  getFilteredList() {
    let output = this.props.list.players || [];

    if (this.props.list.filterName !== '') {
      output = output.filter(item => item.lastname.startsWith(this.props.list.filterName));
    }
    if (this.props.list.filterPos !== 0) {
      output = output.filter(item => item.ultraPosition === this.props.list.filterPos);
    }
    return output;
  }

  render() {
    const { list, selectedPlayer, setFilterName, setFilterPos, selectPlayer, goBack, error, retry } = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            {selectedPlayer.player !== null && <AntDesign onPress={() => goBack()} name='arrowleft' size={35} color='#fff' style={{marginRight: 10}} />}
            <Image source={require('../../../assets/mpg.png')} style={styles.logo}/>
          </View>
          { list.players === null && selectedPlayer.player === null && error === false && <ActivityIndicator style={{marginTop: 20}}/> }
          {error !== false && <ErrorView retry={retry} /> }
          { list.players !== null &&
            <ListView
              setFilterName={setFilterName}
              setFilterPos={setFilterPos}
              filterPos={list.filterPos}
              players={this.getFilteredList()}
              selectPlayer={selectPlayer}
              filterName={list.filterName}
            />
          }
          { selectedPlayer.player && <SelectedPlayerView player={selectedPlayer.player} /> }
        </View>
      </SafeAreaView>
    );
  }
}

const mapState = (state: AppState) => {
  return {
    list: state.list,
    selectedPlayer: state.selectedPlayer,
    error: state.error,
  };
}

const mapDispatch = (dispatch: AppThunkDispatch) => {
  return {
    initList: () => {
      dispatch(listFetchRequest());
    },
    setFilterName: (text: string) => {
      dispatch(listFilterName(text));
    },
    setFilterPos: (pos: number) => {
      dispatch(listFilterPos(pos));
    },
    selectPlayer: (id: string) => {
      dispatch(playerFetchRequest(id));
    },
    goBack: () => {
      dispatch(resetPlayer());
      dispatch(listFetchRequest());
    },
    retry: () => {
      dispatch(setError(false));
      dispatch(listFetchRequest());
    }
  };
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type AppContainerProps = PropsFromRedux;

export default connector(AppContainer);
