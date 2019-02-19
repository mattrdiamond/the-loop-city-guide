import React, { Component } from 'react';
import Category from './Category';

export default class CategoryBar extends Component {
  constructor() {
    super();
    this.state = { activeCategory: 'food' };
    this.onClickCategory = this.onClickCategory.bind(this);
  }

  onClickCategory(category) {
    if (this.state.activeCategory !== category) {
      this.setState({ activeCategory: category });
    }
  }

  render() {
    const {
      onClickCategory,
      props: { children },
      state: { activeCategory }
    } = this;

    console.log('render category bar');

    return (
      <nav className="category-nav">
        {/*--- Map through list of 4 categories ---*/}
        <ul className="category-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Category
                activeCategory={activeCategory}
                key={label}
                label={label}
                onClickCategory={onClickCategory}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}
