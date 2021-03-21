import React from 'react';

import classModifier from '../../../utils/classModifier';

const TeamItem = props => {
  const {
    isActive,
    id,
    setActiveProduct,
    image,
    name,
    position,
    text,
  } = props;


  return (
    <div
      className={classModifier('team__item', [isActive && 'show'])}
      onMouseEnter={() => !isActive && setActiveProduct(id)}
    >
      <img src={`/media/images/sections/team/${image}.jpg`} alt="zz"
           className="team__image"/>

      <span className="team__name">
        {name}
      </span>

      <p className="team__text">
        {text}
      </p>
    </div>
  )
}

export default TeamItem;