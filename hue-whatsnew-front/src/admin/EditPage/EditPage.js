import 'braft-editor/dist/index.css'
import './EditPage.less';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import BraftEditor from 'braft-editor'



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState:BraftEditor.createEditorState(''),
      outputHTML: '',
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentDidMount() {
  }

  handleEditorChange(editorState) {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  render() {
    const { gotoListCallback, classes } =this.props;
    const { editorState, outputHTML } = this.state

    return (
      <div className="editor-page">
        <Button variant="contained" className={classes.button} onClick={gotoListCallback}>
          What's New Settings
        </Button>
        <Paper>
          <Typography variant="h6">Basic Info</Typography>
          <TextField
            label="Product"
            id="simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            />
          <TextField
            select
            label="Product"
            className={classNames(classes.margin, classes.textField)}
            value=''
            >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Title"
            id="simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            />
        </Paper>
        <Paper>
          <Typography variant="h6">Content</Typography>
          <div className="editor-wrapper">
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              />
          </div>
          <h5>输出内容</h5>
          <div className="output-content" dangerouslySetInnerHTML = {{ __html: outputHTML}}></div>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(EditPage);