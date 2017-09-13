import React, {Component} from 'react';
import { SectionList, Text } from 'react-native';
import {Header, ListItem} from 'react-native-elements';
import {navigate} from '../../../actions';
import {connect} from 'react-redux';

export const Menu = (props) => {
  const {sections, navigate} = props;

  const renderItem = ({item}) => <ListItem key={item.key} title={item.label} onPress={() => navigate({routeName: item.routeName})}/>;
  const renderSectionHeader = ({section}) => <Header title={section.title}/>;

  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  );
}

export default connect(null, {navigate})(Menu);
