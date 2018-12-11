import React from "react";
import styled from "styled-components";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ImagePicker } from 'expo';

const CenterXY = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export default class Entry extends React.Component {
  state = {
    img: "",
    err: "",
  }

  handlePicker = async() => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: "Video",
        aspect: [4, 3],
      });
      this.setState({img: result});
    } catch(e) {
      const err = e.toString();
      this.setState({err});
    }
  }

  render = () => <CenterXY>
      <TouchableOpacity onPress={this.handlePicker}>
        <Text>
          Pick
        </Text>
      </TouchableOpacity>
      {
        this.state.img
        ? <Image source={{uri: this.state.img}} />
        : <Text>{this.state.err}</Text>
      }
    </CenterXY>
}
