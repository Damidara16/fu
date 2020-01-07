import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ContentHeader from './comp/content_header';
import ContentFooter from './comp/content_footer';



export default class Tweeter extends React.Component {
  componentDidMount = () => {
    let url = '' + this.props.uuid + '/';
    fetch(url,
      {
      method:'get',
      header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
      }).then(res=>res.json()).then(res=>{func(res)})
  });

  constructor(props){
    super(props);
    this.state = {text:'',uuid:null}
    this.header = {proPic:'',uname:'',date:null}
    this.footer = {numLikes:0,numComs:0,liked:false,saved:false}
  }
  render() {
    return (
        <View style={{width:'100%',backgroundColor:'white', borderRadius:5}}>
          <ContentHeader PicLink={this.header.proPic} uname={this.header.uname} date={this.header.date} uuid={this.state.uuid}/>

          <View style={{height:100}}>
            <Text numberOfLines={0} style={{fontSize:14, paddingHorizontal:10, paddingTop:5}}>{this.state.text}</Text>
          </View>

          <ContentFooter numComs={this.footer.numComs} numLikes={this.footer.numLikes} liked={this.footer.liked} saved={this.footer.saved} uuid={this.state.uuid}/>
        </View>

    );
  }
}
