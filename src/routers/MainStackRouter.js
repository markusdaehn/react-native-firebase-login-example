import React, { Component } from "react";
import Login from "../components/Login";
import Home from "../components/Home";
import BlankPage from "../components/BlankPage";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  BlankPage: { screen: BlankPage }
}));
