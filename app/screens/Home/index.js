import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { ScrollView } from 'react-native';
import { Grid, Row, Icon, List, ListItem } from 'react-native-elements';


import { setIndex } from '../../actions/list';
import styles from './styles';

class Home extends Component {

  render() {
    const {logout, gotoScreen} = this.props;
    return (
      <ScrollView style={styles.container}>
        <List style={styles.mt}>
          {
            this.props.list.map((item, i) => (
              <ListItem key={i} title={item} onPress={() => gotoScreen('Blank', {name: { item }})} />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  logout: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};

const mapDispatchToProps = dispatch => {
  return {
    gotoScreen: (screen, params) => {
      return dispatch(
        NavigationActions.navigate({routeName: screen, params})
      );
    },
    logout: () => {
      return dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })]
        })
      );
    }
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
