import React, { Component } from 'react'
import './App.scss'

import SiteCard from './components/SiteCard'

import viralwasm_consensus from './assets/images/viralwasm-consensus.png';
import viralwasm_epi from './assets/images/viralwasm-epi.png';
import viralmsa from './assets/images/viralmsa.png';
import viralconsensus from './assets/images/viralconsensus.png';
import tn93 from './assets/images/tn93.png';

export class App extends Component {
	render() {
		return (
			<div className="d-flex flex-column justify-content-center align-items-center w-100 mb-5">
				<h1 id="site-header" className="animate__animated animate__fadeIn text-center">ViralWasm <span>&nbsp;🧬</span></h1>
				{/* TODO: change */}
				<h1 id="site-subheader" className="animate__animated animate__fadeIn text-center">A client-side WebAssembly tool suite 🔨 for viral molecular epidemiology 🧪. </h1>

				<h2 className="animate__animated animate__fadeIn mb-4">Core Tools<br /><hr /></h2>
				<div id="site-cards" className="animate__animated animate__fadeIn d-flex flex-row flex-wrap justify-content-evenly align-items-center w-100 mb-4">
					<SiteCard
						title="ViralWasm-Consensus"
						description="A serverless WebAssembly-based pipeline for consensus genome generation."
						link="https://niema-lab.github.io/ViralWasm-Consensus"
						image={viralwasm_consensus}
					/>
					<SiteCard
						title="ViralWasm-Epi"
						description="A serverless WebAssembly-based pipeline for multi-sequence alignment and molecular clustering."
						link="https://niema-lab.github.io/ViralWasm-Epi"
						image={viralwasm_epi}
					/>
				</div>

				<h2 className="animate__animated animate__fadeIn mt-5 mb-4">Additional Tools<br /><hr /></h2>
				<div id="site-cards" className="animate__animated animate__fadeIn d-flex flex-row flex-wrap justify-content-evenly align-items-center w-100 mb-4">
					<SiteCard
						title="ViralMSA"
						description="Reference-guided multiple sequence alignment."
						link="https://niema.net/ViralMSA"
						image={viralmsa}
						width="28vw"
					/>
					<SiteCard
						title="ViralConsensus"
						description="Fast viral consensus genome reconstruction."
						link="https://niema.net/ViralConsensus"
						image={viralconsensus}
						width="28vw"
					/>
					<SiteCard
						title="TN93"
						description="Pairwise distance computation between aligned nucleotide sequences."
						link="https://daniel-ji.github.io/tn93-webapp/"
						image={tn93}
						width="28vw"
					/>
				</div>
			</div>
		)
	}
}

export default App