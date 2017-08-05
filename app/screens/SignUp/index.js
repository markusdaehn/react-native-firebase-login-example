import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SignUpForm from './SignUpForm';
import firebase from 'firebase';
import styles from './styles';
const config = {
   apiKey: "AIzaSyBTQ9ZxGK8Ia6bjbRwcRboYN2CpbiBRMh8",
   authDomain: "yuzsa-prod.firebaseapp.com",
   databaseURL: "https://yuzsa-prod.firebaseio.com",
   projectId: "yuzsa-prod",
   storageBucket: "yuzsa-prod.appspot.com",
   messagingSenderId: "512006653654"
 };

firebase.initializeApp(config);

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const auth = firebase.auth();
    const goToLogin = () => this.props.navigation.navigate('Login');
    const createUser = auth.createUserWithEmailAndPassword.bind(auth);

    return (
      <Container style={styles.container}>
        <Content>
          <SignUpForm createUser={createUser} goToLogin={goToLogin}/>
        </Content>
      </Container>
    );
  }
}
