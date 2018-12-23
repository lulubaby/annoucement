import React, {Component} from 'react';
import GlobalNav from '../Components/GlobalNav/GlobalNav';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import './Whatsnew.css';

class Whatsnew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      menu: [],
      TitleKey: 0,
      releaseNote: [],
    };
    const bindArr = [
      'handleClick',
      'subTitleClick',
    ];
    bindArr.map(v=>{
      console.log(v,this);
      this[v] = this[v].bind(this);
    });
  }

  componentDidMount() {
    fetch('/mock/product').then(response => {
      return response.json();
    }).then(data => {
      console.log(data.name);
      this.setState({product: data});
    });

    fetch('/mock/menu').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        menu: data.menulist,
        releaseNote: data.releaseNote,
      });
    });
  };

  handleClick(key) {
    const { menu } = this.state;
    let newMenu = menu;
    if (!newMenu[key].open) {
      this.subTitleClick(`${key}0`);
    }
    newMenu[key].open = !menu[key].open;
    this.setState({
      menu: newMenu,
      TitleKey: key,
    });
  }

  subTitleClick(key) {
    const href = window.location.href.split('#')[0];
    window.location.href = `${href}#${key}`;
  }

  render() {
    const { product, menu, releaseNote } = this.state;
    return (
      <div>
        <GlobalNav/>
        <SideBar handleClick={this.handleClick} subTitleClick={this.subTitleClick} product={product} menu={menu} />
        <Content releaseNote={releaseNote} />
      </div>
    );
  }
}

export default Whatsnew;