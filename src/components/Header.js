import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ title }) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#0871BD',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: '#fff',
    }
};

export { Header };
