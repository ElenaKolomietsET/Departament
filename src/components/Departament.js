import  React from 'react';


 function Departament (props) {
  return (
    <div className="Div">    
    <h5 className="Title">{props.title} </h5>
    <p>{props.description}</p>
       <a href="#" className="link-jump">Перейти к отделу</a>
    </div>
  );
}
export default Departament