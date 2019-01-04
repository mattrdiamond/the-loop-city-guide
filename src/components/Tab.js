import React, { Component } from 'react';
import Icon from './Icon';

class Tab extends Component {
  handleOnClick = () => {
    const { label, onClickTabItem } = this.props;
    // if ((this.props.activeTab = tab)) {
    //   console.log('close me');
    // }
    onClickTabItem(label);
  };

  render() {
    const {
      handleOnClick,
      props: { activeTab, label }
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li className={className} onClick={handleOnClick}>
        <Icon icon={label} />
        {label}
      </li>
    );
  }
}

export default Tab;
