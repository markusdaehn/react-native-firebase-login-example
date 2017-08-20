import React, {Component} from 'react';
import { ScrollView, ListView } from 'react-native';
import {List, ListItem} from 'react-native-elements';

const screens = ['Home', 'BlankPage2'];
const drawerCoverImage = require('../../../images/drawer-cover.png');
const logoImage = require('../../../images/logo.png');


export default const SiteNavList = (props) => {
  const {navigate} = props.navigation;
  const closeDrawer = () => navigate('DrawerClose');
  const gotoScreen =(screen) => navigate(screen);
  const renderRow = (screen, sectionId) => (
    <ListItem key={sectionId}  title={screen} onPress={() => gotoScreen(screen)}/>
  );


  return (
    <ScrollView>
      <List>
        <ListView renderRow={renderRow} dataSource={screens} />
      </List>
    </ScrollView>
  );
}
