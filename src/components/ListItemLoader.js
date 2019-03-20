import React from 'react';

const ListItemLoader = () => (
  <div className="animated-background">
    <div className="pic-col">
      <div className="pic-border" />
      <div className="mask pic-bottom" />
    </div>
    <div className="txt-col">
      <div className="mask txt-1" />
      <div className="mask txt-2" />
      <div className="mask txt-3" />
      <div className="mask txt-4" />
      <div className="mask txt-5" />
      <div className="mask txt-6" />
      <div className="mask txt-7" />
    </div>
    <div className="rating-col">
      <div className="mask rating-1" />
      <div className="mask rating-2" />
    </div>
  </div>
);

export default ListItemLoader;
