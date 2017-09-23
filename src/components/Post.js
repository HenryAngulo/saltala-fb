import React, { Component } from 'react';
import { Text, Image, Linking } from 'react-native';
import CardSection  from './CardSection';
import Card  from './Card';
import Button  from './Button';


class Post extends Component {
    formatearFecha(createdTime){
        const fecha = createdTime.split('T')[0]
        const hora = createdTime.split('T')[1].split('+')[0];

        return `${fecha} a las ${hora}`;
    }

    render(){
        const { image, message, id, created_time } = this.props.post;
        return (
            <Card>
                <CardSection>
                    {image && <Image source={{uri: image}}
                    style={{height: 400, width: null, flex: 1}} />}
                </CardSection>

                <CardSection>
                    <Text>{message}</Text>
                    <Text>Publicado: {this.formatearFecha(created_time)}</Text>
                </CardSection>
                
                <CardSection>
                    <Button onPress={() => Linking.openURL(`https://fb.com/${id}`).catch(err => console.error('An error occurred', err))}>
                    Ir al post
                    </Button>
                </CardSection>
            </Card>
            )
    }
    
}

export default Post;