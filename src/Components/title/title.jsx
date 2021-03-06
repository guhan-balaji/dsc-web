import React from "react"
import "./title.css"
import Typist from 'react-typist';
function SubTitle(props){
  return(<div className="subTitle"><Typist ><Typist.Delay ms={200} />{props.title}</Typist></div>)
}
export default SubTitle;
