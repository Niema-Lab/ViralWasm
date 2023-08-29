import React, { Component } from 'react'
import './App.scss'

import SiteCard from './components/SiteCard'

import viralwasm_consensus from './assets/images/viralwasm-consensus.png';
import viralwasm_epi from './assets/images/viralwasm-epi.png';

export class App extends Component {
	render() {
		return (
			<div className="d-flex flex-column justify-content-center align-items-center w-100 mb-5">
				<h1 id="site-header" className="animate__animated animate__fadeIn text-center">ViralWasm <span>&nbsp;🧬</span></h1>
				{/* TODO: change */}
				<h1 id="site-subheader" className="animate__animated animate__fadeIn text-center">A client-side WebAssembly tool suite 🔨 for viral molecular epidemiology 🧪. </h1>

				<div id="site-cards" className="animate__animated animate__fadeIn d-flex flex-row flex-wrap justify-content-evenly align-items-center w-100">
					<SiteCard
						title="ViralWasm-Consensus"
						description="A serverless WebAssembly-based pipeline for consensus genome generation."
						link="https://niema-lab.github.io/ViralWasm-Consensus/"
						image={viralwasm_consensus}
					/>
					<SiteCard
						title="ViralWasm-Epi"
						description="A serverless WebAssembly-based pipeline for multi-sequence alignment and molecular clustering."
						link="https://niema-lab.github.io/ViralWasm-Epi/"
						image={viralwasm_epi}
					/>
				</div>
			</div>
		)
	}
}

export default App