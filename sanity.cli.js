import { defineCliConfig } from 'sanity/cli'

const projectId = uw78hfyk
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
