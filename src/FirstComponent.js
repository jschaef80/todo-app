import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
          items: this.props.items,
          isClicked: false
        };
    }

    deleteItem = (index) => {
        let todoItem = document.getElementById(index.index).innerText;
        // console.log(todoItem);
        console.log(this.state.items);
        let remainingArray = this.state.items.filter(item => item !== todoItem)
        console.log(remainingArray);
        this.isClicked ? this.setState({isClicked: true}) : this.setState({isClicked: false});
        this.setState({items : remainingArray});
        
    }

    render (){
        // console.log(this.props.items);
    return (
        <div>
            <ul>
                {this.props.items.map((item, index)=>{
                    return <li key={index}><div id={index}>{this.props.items[index]}</div><button onClick={() => this.deleteItem({index})}>delete</button></li>
                })}
            </ul>
        </div>
    )
}}

export default Item;