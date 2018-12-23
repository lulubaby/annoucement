import React, { Component } from 'react';
import './ReleaseList.less';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import OprateMenu from '../../Components/OprateMenu/OprateMenu.js'
const options = [
  {
    name: 'Publish',
    state: '1'
  },
  {
    name: 'Preview'
  },
  {
    name: 'Delete',
    state: '0'
  }
];

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 'auto',
  },
  table: {
    minWidth: 700,
  },
  fab: {
    position:'fixed',
    right:20,
    bottom:20,
    margin: theme.spacing.unit,
  },
  state0: {
    backgroundColor: '#ff9900',
  },
  state1: {
    backgroundColor: '#89c441',
  }
});

class ReleaseList extends Component {

  getState(state) {
    let text = '';
    switch (state) {
      case '0':
        text = 'Saved';
        break;
      case '1':
        text = 'Published';
        break;
    }
    return <div>{text}</div>;
  }

  render() {
    const { classes, releaseList, gotoCreateCallback, changeState } = this.props;
    return (
      <div className='releaseList'>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Version</TableCell>
                <TableCell align="right">Last Modified</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {releaseList.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.product}</TableCell>
                    <TableCell align="right">{row.version}</TableCell>
                    <TableCell align="right">{row.lastModified}</TableCell>
                    <TableCell align="right"><div className={`${classes[`state${row.state}`]} state`}>{this.getState(row.state)}</div></TableCell>
                    <TableCell align="right">
                      <OprateMenu options={options} id={row.id} changeState={changeState}></OprateMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={gotoCreateCallback}>
        <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(ReleaseList);