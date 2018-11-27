import React, { Component } from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: ''
    };
  }

  onClickTabItem = (tab) => {
    // close tab if already open else open tab.
    if (tab === this.state.activeTab) {
      this.setState({ activeTab: '' });
    } else {
      this.setState({ activeTab: tab });
    }
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    let className = 'tab-content';

    if (activeTab) {
      className = ' tab-content-active';
    }

    return (
      <div className="venue-tabs">
        <ul className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClickTabItem={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className={className}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
