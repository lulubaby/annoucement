import "./SideBar.css"
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse'
import logo from "./ESS_Icon.png"
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    width: '100%'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
      this.setState({menu: data.menulist});
    });
  };

  handleClick(key) {
    console.log(key)
    // this.setState({})
  }

  render() {
    const {classes, product, menu,handleClick,subTitleClick} = this.props;
    return (
      <div>
        <div className="sidemenu-container">
          <div className="sidemenu-product-info">
            <img className="sidemenu-product-logo" src={logo}/>
            <div className="sidemenu-product-name">{product.name}</div>
          </div>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Release Notes</ListSubheader>}
            className={classes.root}
          >
            {menu.map((item, menukey) => {
                if (item.subtitle) {
                  return (
                    <div key={menukey}>
                      <ListItem button onClick={() => {
                        handleClick(menukey)
                      }}>
                        <ListItemText primary={item.title}/>
                        {item.open ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={item.open}>
                        <List component="div" disablePadding>
                          {item.subtitle.map((item, subkey) => {
                            return (
                              <ListItem button key={'subtitile' + subkey} className={classes.nested} onClick={()=>{
                                subTitleClick(`${menukey}${subkey}`)
                              }}>
                                <ListItemText primary={item}/>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <ListItem button key={key}>
                        <ListItemText primary={item.title}/>
                      </ListItem>
                    </div>
                  );
                }

              }
            )}
          </List>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SideBar);