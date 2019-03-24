import React, { Component } from 'react';
import Icon from './Icon';
import ArrowButton from './ArrowButton';

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { label, onClickTabItem } = this.props;
    onClickTabItem(label);
  }

  render() {
    const {
      handleOnClick,
      props: { activeTab, label }
    } = this;

    console.log('render tab', label);

    let tabClass = 'tab-list-item';
    let arrowClass = 'arrow-button';

    if (activeTab && activeTab === label) {
      tabClass += ' tab-list-active';
      arrowClass += ' active';
    } else if (activeTab && activeTab !== label) {
      tabClass += ' tab-list-inactive';
    }

    return (
      <li className={tabClass} onClick={handleOnClick}>
        <Icon icon={label} />
        {label}
        <ArrowButton arrowClass={arrowClass} />
      </li>
    );
  }
}
