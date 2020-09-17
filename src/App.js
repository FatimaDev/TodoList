import React,{ Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
 class App extends Component{
   state = {
   items : [
     {id:1, name:"abdo", age:25},
     {id:2, name:"yasser", age:35},
     {id:3, name:"nono", age:45},

   ]}
  
   // first method (delete)
    /*deleteItem = (id) => {
      let items = this.state.items;
      let i = items.findIndex(item => item.id === id)
      items.splice(i,1)
      this.setState({items})
    }*/

    // second method (delete)
    deleteItem = (id) => {
      let items = this.state.items.filter(item => {
        return item.id !== id
      })
      this.setState({items})

    }
    addItem = (item) => {
      item.id = Math.random();
      let items = this.state.items;
      items.push(item);
      this.setState({items})
    }

   render(){
     return(
       <div className="App container">
         <h1 className="titleOne">Todo List</h1>
         <TodoItems items = {this.state.items} deleteItem={this.deleteItem}/>
         <AddItem addItem={this.addItem}/>
       </div>
     )
   }
 }

export default App;
