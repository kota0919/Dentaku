import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {

  constructor(props) {
super(props);
this.state = {count: 0};
this.countUp = this.countUp.bind(this);
}

  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>電卓風ボタン</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
      
        
        <div>表示結果={this.state.count}</div>
        <Button onClick={() => this.countUp(1)}>1</Button>
        <Button onClick={() => this.countUp(2)}>2</Button>
        <Button onClick={() => this.countUp(3)}>3</Button>
        <Button onClick={() => this.countUp(4)}>4</Button>
        <Button onClick={() => this.countUp(5)}>5</Button>
        <Button onClick={() => this.countUp(6)}>6</Button>
        <Button onClick={() => this.countUp(7)}>7</Button>
        <Button onClick={() => this.countUp(8)}>8</Button>
        <Button onClick={() => this.countUp(9)}>9</Button>
        <Button onClick={() => this.countUP(-1)}>クリア</Button>
       
      </Page>
    );
  }
    countUp(v) {
        if (v == -1) {
            this.setState({ count: 0 })
            return
        }
        var val = this.state.count * 10 + v
        console.log(val)
        if (9 < String(val).length) {
            alert("９桁以上は入力できません")
            return
        }
        this.setState({ count: val })

    }

 }
 

