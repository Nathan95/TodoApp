import React from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';

class App extends React.Component {
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text:""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
        return (
          <TouchableOpacity key={t}>
          <Text
          style={styles.todo}
          onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
          </TouchableOpacity>
        )
    })
  }
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Add a task</Text>
          <TextInput
              style={styles.inputStyle}
              onChangeText={(text)=>this.setState({text})}
              value={this.state.text}
          />
          <Button
            title="Add todo"
            color="green"
            onPress={this.addTodo}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  backgroundStyle: {
    backgroundColor: "#ffd740",
    flex: 1

  },
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
   inputStyle: {
     height: 40,
     padding: 10,
     borderRadius: 5,
     margin: 10,
     width: 300,
     backgroundColor: "white",
     borderColor: "white",
     borderWidth: 1,
     margin: 20
   },
   header: {
     fontSize:20,
     color: 'white',
     fontWeight: 'bold'
   },
   todo: {
     fontSize: 18,
     color: 'white'
   }
}

export default App;
