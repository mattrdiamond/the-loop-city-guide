import React, { Component } from 'react';
import Icon from './Icon';
import ArrowButton from './ArrowButton';

class Tab extends Component {
  handleOnClick = () => {
    const { label, onClickTabItem } = this.props;
    onClickTabItem(label);
  };

  render() {
    const {
      handleOnClick,
      props: { activeTab, label }
    } = this;

    let tabClass = 'tab-list-item';
    let arrowClass = 'arrow-button';

    if (activeTab) {
      if (activeTab === label) {
        tabClass += ' tab-list-active';
        arrowClass += ' active';
      } else {
        tabClass += ' tab-list-inactive';
      }
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

export default Tab;
