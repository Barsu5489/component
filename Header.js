import React from 'react'



 const Header = props => {
    return (
      <div> test text
        <h1>{props.title}</h1>
        {props.subtitle && <h2> {props.subtitle}</h2>}
      </div>
    );
  };
  Header.defaultProps = {
    title: "indecision"
  };
  export default Header