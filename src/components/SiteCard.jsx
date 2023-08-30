import React, { Component } from 'react'

export class SiteCard extends Component {
	openLink = () => {
		window.open(this.props.link, '_blank')
	}

	render() {
		return (
			<div className="site-container">
				<h3 className="mx-5 text-center mb-3">{this.props.title}</h3>
				<div className='site-card' onClick={this.openLink} style={{ width: this.props.width ?? '40vw' }}>
					<div className="site-card-overlay">
						<p className="mx-5 text-center">{this.props.description}</p>
						<button className="btn btn-outline-primary mx-5">Visit</button>
					</div>
					<img src={new URL(`${import.meta.env.BASE_URL || ''}${this.props.imageUrl}`, import.meta.url).href} alt={this.props.title} className='site-card-image' />
				</div>
				<p className='w-100 text-center'><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link.replace(/(^\w+:|^)\/\//, '')}</a></p>
			</div>
		)
	}
}

export default SiteCard