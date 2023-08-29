import React, { Component } from 'react'

export class SiteCard extends Component {
	openLink = () => {
		window.open(this.props.link, '_blank')
	}

	render() {
		return (
			<div className="site-container">
				<h3 className="mx-5 text-center mb-3">{this.props.title}</h3>
				<div className='site-card' onClick={this.openLink}>
					<div className="site-card-overlay">
						<p className="mx-5 text-center">{this.props.description}</p>
						<button className="btn btn-outline-primary mx-5">Visit</button>
					</div>
					<img src={this.props.image} alt={this.props.title} className='site-card-image' />
				</div>
			</div>
		)
	}
}

export default SiteCard