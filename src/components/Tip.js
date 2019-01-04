// import React, { Component } from 'react';
import React from 'react';

const Tip = ({ venue, index }) => {
  // const formatDate = (secs) => {
  //   let date = new Date(null);
  //   date.setTime(secs * 1000);
  //   const dateString = date.toLocaleString();
  //   date = dateString.substr(0, dateString.lastIndexOf(','));
  //   return date;
  // };

  let users = venue.tips.groups[0].items;

  return users.map((user, index) => (
    <li key={index} className="tip">
      <img
        className="tip-photo"
        src={user.user.photo.prefix + '50x50' + user.user.photo.suffix}
        alt={'a photo of ' + user.user.firstName}
      />
      <div className="tip-text">
        <p className="tip-quote">&ldquo;{user.text}&rdquo;</p>
        <span className="user-name">{user.user.firstName}</span>
        {user.user.lastName && (
          <span className="user-name">{' ' + user.user.lastName}</span>
        )}
        {/*<span>{formatDate(user.createdAt)}</span>*/}
      </div>
    </li>
  ));
};

export default Tip;
