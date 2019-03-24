import React, { Component } from 'react';
import Category from './Category';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.onClickCategory = this.onClickCategory.bind(this);
  }

  onClickCategory(clickedCategory) {
    if (this.props.category !== clickedCategory) {
      this.props.updateSuperState({ category: clickedCategory });
    }
  }

  render() {
    const {
      onClickCategory,
      props: { children, category }
    } = this;

    console.log('render category bar');

    return (
      <nav className="category-nav">
        <ul className="category-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Category
                category={category}
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
