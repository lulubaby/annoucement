import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    const bindArr = [
      'handleClick',
      'handleClose',
    ];
    bindArr.map(v=>{
      console.log(v,this);
      this[v] = this[v].bind(this);
    });
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose(state,id) {
    const { changeState } =this.props;
    if (state) {
      changeState(id, state)
    }
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { options, id } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
              marginTop: 40
            },
          }}
          >
          {options.map((option,key) => (
            <MenuItem key={key} selected={option === 'Pyxis'} onClick={()=>{this.handleClose(option.state, id)}}>
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default LongMenu;