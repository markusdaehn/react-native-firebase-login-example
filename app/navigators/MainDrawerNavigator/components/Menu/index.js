import React, {Component} from 'react';
import { SectionList, Text } from 'react-native';
import {ListItem} from 'react-native-elements';
import {navigate} from '../../../actions';
import {connect} from 'react-redux';
import  styles from './styles';

export const Menu = (props) => {
  const {sections, navigate} = props;

  const renderItem = ({item}) => <ListItem
                                    style={styles.menuItem}
                                    key={item.key} title={item.label}
                                    onPress={() => navigate({routeName: item.routeName})}
                                    hideChevron
                                />;
  const renderSectionHeader = ({section}) => section.title ? <Text style={styles.sectionHeader}>{section.title}</Text> : null;

  return (
    <SectionList
      style={styles.container}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  );
}

export default connect(null, {navigate})(Menu);
