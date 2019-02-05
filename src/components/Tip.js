import React from 'react';

const Tip = ({ venue, formatDate }) => {
  const users = venue.tips.groups[0].items;

  return users.map((user, index) => (
    <li key={venue.id + '_tip_' + index} className="tip">
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
        <span className="user-name user-date">{formatDate(user.createdAt)}</span>
      </div>
    </li>
  ));
};

export default Tip;
