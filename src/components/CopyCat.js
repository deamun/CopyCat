// Original code to compare to finished project
// import React from 'react';
// import ReactDOM from 'react-dom';

// const images = {
//   copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
//   quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
// };


// class CopyCat extends React.Component {
//     constructor(props) {
//     super(props);

//     this.state = { 
//       copying: true
//     };

//     this.toggleTape = this.toggleTape.bind(this);
//   }

//   toggleTape() {
//     this.setState({copying: !this.state.copying})
//   }
  
//   render() {
//     const copying = this.state.copying;
//     const toggleTape = this.toggleTape
    
//     return (
//       <div>
//         <h1>Copy Cat</h1>
//         <img 
//           alt='cat'
//           src={copying ? images.copycat : images.quietcat}
//           onClick={toggleTape}
//         />
//       </div>
//     );
//   };
// }


// ReactDOM.render(<CopyCat />, document.getElementById('app'));

import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: '80px'}}>Copy Cat {this.props.name ? this.props.name : 'Tom'}</h1>
        <input
            type='text'
            value={this.props.input}
            onChange={this.props.onChange} 
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>
            {copying ? this.props.input : ''}
        </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
    copying: PropTypes.bool.isRequired,
    toggleTape: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string
};

export default CopyCat;