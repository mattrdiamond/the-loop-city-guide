import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tip = ({ venue, formatDate }) => {
  const users = venue.tips.groups[0].items;
  const [avatars, setAvatars] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const data = await fetchAvatars(users.length);
      if (isMounted) {
        const avatars = data.results.map(({ picture }) => picture.thumbnail);
        setAvatars(avatars);
      }

      return () => (isMounted = false);
    })();
  }, []);

  const fetchAvatars = (num) => {
    const avatars = axios
      .get(`https://randomuser.me/api/1.3?results=${num}&inc=picture`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return avatars;
  };

  return users.map((user, index) => (
    <li key={venue.id + '_tip_' + index} className="tip">
      <div className="avatar-wrapper">
        {avatars && (
          <img
            className="tip-photo"
            src={avatars[index]}
            alt={'a photo of ' + user.user.firstName}
          />
        )}
      </div>
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
