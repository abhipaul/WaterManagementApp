import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm'
import Router from './navigation/Router'

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
        apiKey: 'AIzaSyCDpjQZRv393KqRzQyTakjG_tTLQOh953E',
        authDomain: 'manager-e81e0.firebaseapp.com',
        databaseURL: 'https://manager-e81e0.firebaseio.com',
        projectId: 'manager-e81e0',
        storageBucket: 'manager-e81e0.appspot.com',
        messagingSenderId: '867807691150'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
               <Router />
            </Provider>
        );
    }
}

export default App;
