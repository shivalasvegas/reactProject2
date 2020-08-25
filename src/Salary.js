import React from 'react';


class SalaryExample extends React.Component{
	
	render(){
		return(
			<div>
				<table border='1'>
					<tr>
						<td> Name </td>
						<td> {this.props.name} </td>
					</tr>
					<tr>
						<td> Salary </td>
						<td> {this.props.salary} </td>
					</tr>
					<tr>
						<td> Tax </td>
						<td> {this.props.salary * this.props.tax/100} </td>
					</tr>
					<tr>
						<td> Net salary  </td>
						<td> {this.props.salary-(this.props.salary * this.props.tax/100)} </td>
					</tr>
					
				</table>
			</div>
		
		);
	}
}

export default SalaryExample;