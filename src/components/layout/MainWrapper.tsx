//REACT
import React from 'react';

//CSS
import './MainWrapper.css';

interface MainWrapperProps {
  message: string;
  isDetails: boolean;
  children?: JSX.Element;
}

const MainWrapper: React.FC<MainWrapperProps> = (props) => {
  return (
    <div
      className={`main-wrapper container ${
        props.isDetails ? 'main-wrapper' : ''
      }`}
    >
      <div className="main-title pt-2 mt-4 mt-md-0">
        <h1 className="text-center text-md-nowrap mt-5 pt-5">{props.message}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default MainWrapper;
