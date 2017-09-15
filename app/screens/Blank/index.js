import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {back} from '../../navigators/actions';
import { connect } from 'react-redux';
import { ScrollView, Text, Button } from 'react-native';
import styles from './styles';

const BlankScreen = ({name, navigation}) => {
    const text = name !== undefined ? name: 'Create Something Awesome . . .';

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
  name: ownProps.navigation.state.params ? ownProps.navigation.state.params.name: undefined,
});

export default connect(mapStateToProps)(BlankScreen);
