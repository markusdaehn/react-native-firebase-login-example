import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {navigate} from '../../navigators/actions';
import { ScrollView } from 'react-native';
import { Grid, Row, Icon, List, ListItem } from 'react-native-elements';
import styles from './styles';

class Home extends Component {

  render() {
    const {logout, navigate} = this.props;
    return (
      <ScrollView style={styles.container}>
        <List>
          {
            this.props.list.map((name, i) => (
              <ListItem key={i} title={name} onPress={() => navigate({routeName:'Blank', params:{name}})} />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  logout: PropTypes.func,
  gotoScreen: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigate: ({routeName, params}) => dispatch(navigate({routeName, params})),
    logout: () => dispatch(() => alert('Logged out!')),
  };
}

const mapStateToProps = state => ({
  list: state.scenes.home.list
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
