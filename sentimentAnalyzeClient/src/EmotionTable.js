import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
	render() {
		return (
			<div>
				<table className="table table-bordered">
					<tbody>
						{
							//Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
							Object.keys(this.props.emotions).map((key) => (
								<tr>
									<td>{key}</td>
									<td>{this.props.emotions[key]}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		);
	}
}
export default EmotionTable;
