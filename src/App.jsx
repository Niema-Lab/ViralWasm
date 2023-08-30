import React, { Component } from 'react'
import './App.scss'

import { PIPELINES, STANDALONE_TOOLS } from './constants'

import SiteCard from './components/SiteCard'

export class App extends Component {
	render() {
		return (
			<div className="d-flex flex-column justify-content-center align-items-center w-100 mb-5">
				<h1 id="site-header" className="animate__animated animate__fadeIn text-center">ViralWasm <span>&nbsp;🧬</span></h1>
				{/* TODO: change */}
				<h1 id="site-subheader" className="animate__animated animate__fadeIn text-center">A client-side WebAssembly tool suite 🔨 for viral molecular epidemiology 🧪. </h1>

				<h2 className="animate__animated animate__fadeIn mb-4">Core Pipelines<br /><hr /></h2>
				<div id="site-cards" className="animate__animated animate__fadeIn d-flex flex-row flex-wrap justify-content-evenly align-items-center w-100 mb-4">{
					PIPELINES.map((pipeline, i) => {
						return (
							<SiteCard
								key={i}
								title={pipeline.title}
								description={pipeline.description}
								link={pipeline.link}
								imageUrl={pipeline.imageUrl}
								width={pipeline.width}
							/>
						)
					})
				}</div>

				<h2 className="animate__animated animate__fadeIn mt-5 mb-4">Standalone Tools<br /><hr /></h2>
				<div id="site-cards" className="animate__animated animate__fadeIn d-flex flex-row flex-wrap justify-content-evenly align-items-center w-100 mb-4">{
					STANDALONE_TOOLS.map((tool, i) => {
						return (
							<SiteCard
								key={i}
								title={tool.title}
								description={tool.description}
								link={tool.link}
								imageUrl={tool.imageUrl}
								width={tool.width}
							/>
						)
					})
				}</div>
			</div>
		)
	}
}

export default App