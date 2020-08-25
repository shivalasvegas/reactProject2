import React from 'react';


class ResultsExample extends React.Component{
	
	render(){
		let total = parseInt(this.props.physMark)+parseInt(this.props.chemMark)+parseInt(this.props.mathMark);
		let average = total/3;
		let percentage = average;
		let passFail = "";
		if (percentage>=80){
			passFail= <p>You have passed with <font color='green'>Distinction!</font></p>;
		}
		else if(percentage>=70 && percentage<80){
			passFail= <p>You have passed with <font color='orange'>Merit!</font></p>;
		}
		else if(percentage>=50 && percentage<70){
			passFail= <p>You have passed.</p>;
		}
		else{
			passFail =<p>You have <font color='red'>failed.</font></p>;
		}

		return(
			<div>
				<table border='1'>
					<tr>
						<td> Name </td>
						<td> {this.props.name} </td>
					</tr>
					<tr>
						<td> Physics Marks </td>
						<td> {this.props.physMark} </td>
					</tr>
					<tr>
						<td> Chemistry Marks </td>
						<td> {this.props.chemMark} </td>
					</tr>
					<tr>
						<td> Maths Marks  </td>
						<td> {this.props.mathMark}</td>
					</tr>
					<tr>
						<td> Percentage  </td>
						<td> {percentage} </td>
					</tr>
					<tr>
						<td> Results  </td>
						<td> {passFail} </td>
					</tr>
					
				</table>
			</div>
		
		);
	}
}

export default ResultsExample;