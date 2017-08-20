import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

const BlankScreen = (props) => (
  <ScrollView style={styles.container}>
    <Text>
    {
      props.navigation.state.params.name !== undefined
      ? props.navigation.state.params.name
      : 'Create Something Awesome . . .'
    }
    </Text>
  </ScrollView>
);

BlankScreen.propTypes = {
  name: PropTypes.string
};

const mapStateToProps = state => ({
  name: state.user.name
});

export default connect(mapStateToProps)(BlankScreen);
