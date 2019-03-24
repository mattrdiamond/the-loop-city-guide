import React, { Component } from 'react';
import Tab from './Tab';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  shouldComponentUpdate(nextState, nextProps) {
    const { activeTab } = this.state;

    // Only render when activating (nextProps) or deactivating (activeTab) tabs
    if (nextProps.activeTab !== activeTab && (nextProps.activeTab || activeTab)) {
      return true;
    } else {
      return false;
    }
  }

  // Close tab if already open or open tab
  onClickTabItem(tab) {
    if (tab === this.state.activeTab) {
      this.setState({ activeTab: '' });
    } else {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const {
      onClickTabItem,
      props: { children, venue },
      state: { activeTab }
    } = this;
    console.log('rendered tabs_' + this.props.venue.name);

    return (
      <div className="venue-tabs">
        {/*--- Map through list of 3 tabs ---*/}
        <ul className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={`${venue.id}_${label}`}
                label={label}
                onClickTabItem={onClickTabItem}
              />
            );
          })}
        </ul>
        {/*--- Fill div with active tab content ---*/}
        <div
          id="tab-content"
          className={activeTab ? 'tab-content-active' : 'tab-content'}
        >
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
