import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Post from './Post';

export default class PostList extends Component {
    state = { contenido : [] };

    componentWillMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest() {
    //Already invalidated token
        const token = 'EAACEdEose0cBAB8J1vc1ZAOKt3KoDrLnOBaniiZBPS2DZBoqKxkZBT9mszXFypjIqZAYD6NmnVBA6UOWMvLQoghnSgmVzVoKNMH1pKMNfFWoa62nV94UEZCkJYWvV8wyBIxSkCDdb5AeOQt7fzMzBQnfVUd9YMZAm67YfFZAXr63cKl9c4mJIxQppCBUa3huiSkZD'
        let array = [];
        
        fetch(`https://graph.facebook.com/v2.10/183239165366657/posts?access_token=${token}`)
          .then(res => {
            res.json()
            .then(res => {
                res.data.map(post => {
                    fetch(`https://graph.facebook.com/v2.10/${post.id}?fields=full_picture%2Cpicture&access_token=${token}`)
                        .then(res => res.json().then(res => { 
                            post.image = res.full_picture;
                            array.push(post);
                            this.setState({ contenido: array });
                        }))
                    })
            }
          );
          })
          .catch(error => {
            console.log(error);
          });
          
      }
      
    render() {
        console.log(this.state.contenido)
        return (
            <View>
            {this.state.contenido.length === 25 ? 
                <FlatList
                data={this.state.contenido}
                renderItem={( {item} ) => <Post key={item.id} post={item} />}
                />
                :
                <Text>Cargando</Text>
            }
            </View>
        );
    }
}
