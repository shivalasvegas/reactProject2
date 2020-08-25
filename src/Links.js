import React from 'react';
import './App.css';



class Link extends React.Component {
	linkUrl(){
	return this.props.url;
}

linkText(){
	return this.props.text;
}

render(){
  return (
    <div>
      <a target="_blank" href="{this.linkUrl()}">{this.linkText()}</a>
    </div>
 	 );
	}
}

export default Link;
