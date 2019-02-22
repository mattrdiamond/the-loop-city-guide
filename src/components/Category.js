import React, { Component } from 'react';
import Icon from './Icon';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { label, onClickCategory } = this.props;
    onClickCategory(label);
  }

  render() {
    const {
      handleOnClick,
      props: { category, label }
    } = this;

    return (
      <li
        className={'category' + (label === category ? ' active' : ' inactive')}
        onClick={handleOnClick}
      >
        <Icon icon={label} />
        {label}
      </li>
    );
  }
}
