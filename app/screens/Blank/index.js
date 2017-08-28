import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {back} from '../../state/actions/navigation';
import { connect } from 'react-redux';
import { ScrollView, Text, Button } from 'react-native';
import styles from './styles';

const BlankScreen = ({name, navigation}) => {
    const text = navigation.state.params.name !== undefined
    ? navigation.state.params.name
    : 'Create Something Awesome . . .';

  return (
    <ScrollView style={styles.container}>
      <Text>
        {text}
      </Text>
    </ScrollView>
  );
}

BlankScreen.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.navigation.state.params.name,
});

export default connect(mapStateToProps)(BlankScreen);
