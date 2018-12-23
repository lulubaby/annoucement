import './Content.css'
import React, {Component} from 'react';
class Content extends Component {

  render() {
    const {classes, releaseNote} = this.props;
    console.log(1111,releaseNote)

    return (
      <div className='content'>
        {
          releaseNote && releaseNote.length > 0 && releaseNote.map((nodeitem, key) => {
            return <div key={key} dangerouslySetInnerHTML = {{ __html: nodeitem }}></div>
          })
        }
      </div>
    );
  }

}

export default Content;