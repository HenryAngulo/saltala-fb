import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/Header';
import PostList from './components/PostList';

class App extends Component {
    
    render() {

        return (
            <View style={{ flex: 1 }} >
                <Header title="Saltala Facebook" />
                <PostList />
            </View>
        );
    }

    }

export default App;