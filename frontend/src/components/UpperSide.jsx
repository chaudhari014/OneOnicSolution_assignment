import React from 'react';

const UpperSide = ({ category }) => {
  return (
    <div className="upperSideContainer">
      <div className="categoryContainer">
        {category.map((el, index) => (
          <div key={index} className="categoryItem">
            <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnz-1598505.jpg&fm=jpg" alt={el.name} />
            <span>{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperSide;
