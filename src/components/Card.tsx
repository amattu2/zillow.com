import React, { FC } from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
};

const Card : FC<Props> = ({
  icon, title, description,
  buttonText, buttonLink
}) => {
  return (
    <div>
      <div>
        {icon}
      </div>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
