import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {back} from '../../actions/navigation';
import { connect } from 'react-redux';
import { ScrollView, Text, Button } from 'react-native';
import styles from './styles';

const BlankScreen = ({back, name, navigation}) => {
    const text = navigation.state.params.name !== undefined
    ? navigation.state.params.name
    : 'Create Something Awesome . . .';

  return (
    <ScrollView style={styles.container}>
    <Button onPress={back} title='Go Back'/>

      <Text>
        {JSON.stringify(text)}
      </Text>
    </ScrollView>
  );
}

BlankScreen.propTypes = {
  name: PropTypes.string,
  back: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.navigation.state.params.name,
});

const mapDispatchToProps = dispatch => ({
  back: () => {
    const action = back(null);
    return dispatch(action)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlankScreen);
