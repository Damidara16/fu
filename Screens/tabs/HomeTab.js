import * as React from 'react';
import { Text, View, StyleSheet,Button, TouchableOpacity, TextInput, ScrollView, Image,StatusBar, Switch, Picker, FlatList } from 'react-native';



//like button needs it own function

const DATA = {}


export default class AppName extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:'bpy'};
    this.pro = {name:'b0r'};
  }

  APIAction = () => {
    fetch('http://127.0.0.1:8000/account/auth/',{method:'post',headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({})}).then(res=>res.json()).then(res=>{console.log(res)})
  }

  componentDidMount(){
    console.log('new');
  }



  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
      <FlatList
        data={DATA}
        onEndReached={}
        onEndReachedThreshold={}
        renderItem={ ({ item , index }) => {
          switch (item.type) {
            case 'post':
              <Poster uuid=item.uuid/>
              break;
            case 'tweet':
              <Tweeter uuid=item.uuid/>
              break;
            case 'image':
              <Imager uuid=item.uuid/>
              break;
          }
        }}
      />

      </View>
    );
  }
}


const styles = StyleSheet.create({

});
