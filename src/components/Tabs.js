import React, { Component } from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: ''
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  // onClickTabItem = (tab) => {
  //   // close tab if already open else open tab.
  //   if (tab === this.state.activeTab) {
  //     this.setState({ activeTab: '' });
  //   } else {
  //     this.setState({ activeTab: tab });
  //   }
  // };
  onClickTabItem(tab) {
    // close tab if already open else open tab.
    if (tab === this.state.activeTab) {
      this.setState({ activeTab: '' });
    } else {
      this.setState({ activeTab: tab });
    }
  }

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
        {/*--- map through list of 3 tabs ---*/}
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

        {/*--- this div fills with active tab content ---*/}
        <div id="tab-content" className={className}>
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
