export const PIPELINES = [
	{
		title: "ViralWasm-Consensus",
		description: "A serverless WebAssembly-based pipeline for consensus genome generation.",
		link: "https://niema-lab.github.io/ViralWasm-Consensus",
		imageUrl: './images/viralwasm-consensus.png',
		width: undefined,
	},
	{
		title: "ViralWasm-Epi",
		description: "A serverless WebAssembly-based pipeline for multi-sequence alignment and molecular clustering.",
		link: "https://niema-lab.github.io/ViralWasm-Epi",
		imageUrl: './images/viralwasm-epi.png',
		width: undefined,
	}
]

export const STANDALONE_TOOLS = [
	{
		title: "ViralMSA",
		description: "Reference-guided multiple sequence alignment.",
		link: "https://niema.net/ViralMSA",
		imageUrl: '/images/viralwasm-consensus.png',
		width: "28vw"
	},
	{
		title: "ViralConsensus",
		description: "Fast viral consensus genome reconstruction.",
		link: "https://niema.net/ViralConsensus",
		imageUrl: '/images/viralwasm-epi.png',
		width: "28vw"
	},
	{
		title: "TN93",
		description: "Pairwise distance computation between aligned nucleotide sequences.",
		link: "https://daniel-ji.github.io/tn93-webapp/",
		imageUrl: '/images/tn93.png',
		width: "28vw"
	}
].sort((a, b) => a.title.localeCompare(b.title))