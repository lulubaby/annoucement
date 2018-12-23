import React, { Component } from 'react';
import GlobalNav from '../Components/GlobalNav/GlobalNav.js';
import ReleaseList from './ReleaseList/ReleaseList.js'
import EditPage from './EditPage/EditPage.js'
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releaseList: [],
      pageState: 0, //0: 列表页 1: 创建页 2:修改页 3:preView
    };
    const bindArr = [
      'gotoCreateCallback',
      'gotoListCallback',
      'changeState',
    ];
    bindArr.map(v=>{
      console.log(v,this);
      this[v] = this[v].bind(this);
    });
  }

  componentDidMount() {
    fetch('/mock/releaseList').then((response)=> {
      return response.json();
    }).then((data) => {
      this.setState({releaseList: data.releaseList});
    })
  }

  gotoCreateCallback() {
    this.setState({
      pageState: 1,
    });
  }

  gotoListCallback() {
    this.setState({
      pageState: 0,
    });
  }

  changeState(id, state) {
    const {releaseList} = this.state;
    fetch(`/mock/releaseList/set?state=${state}`).then(response => {
      return response.json();
    }).then(data => {
      console.log(data.state);
      if(data.state) {
        releaseList.map(item=>{
          let resItem = item;
          if (resItem.id ===id) {

            resItem.state = state;
          }
          return resItem;
        });
        this.setState({releaseList});
      }
    });

  }

  getBody(state) {
    const {releaseList} = this.state;
    let reDom = null;
    switch (state) {
      case 0:
        reDom = <ReleaseList releaseList={releaseList} gotoCreateCallback={this.gotoCreateCallback} changeState={this.changeState}></ReleaseList>;
        break;
      case 1:
        reDom = <EditPage gotoListCallback={this.gotoListCallback}></EditPage>;
        break;
      default:
        break;
    }
    return reDom;
  }

  render() {
    const {pageState} = this.state;
    return (
      <div>
        <GlobalNav></GlobalNav>
        {this.getBody(pageState)}
      </div>


    );
  }
}
