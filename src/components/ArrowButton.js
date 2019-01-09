import React, { Component } from 'react';

// class ArrowButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false
//     };
//   }

//   render() {

//     return (
//       <div className={this.props.arrowClass}>
//         <span />
//         <span />
//       </div>
//     );
//   }
// }

// export default ArrowButton;

const ArrowButton = ({ arrowClass }) => (
  <div className={arrowClass}>
    <span />
    <span />
  </div>
);

export default ArrowButton;
