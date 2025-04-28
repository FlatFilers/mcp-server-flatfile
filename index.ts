#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { registerTools } from './tools/index.js'

if (!process.env.FLATFILE_BEARER_TOKEN) {
  throw new Error('FLATFILE_BEARER_TOKEN must be set')
}

const mcpServer = new McpServer({
  name: 'mcp-server-flatfile',
  version: '0.1.0',
})

const enabledToolsArgIndex = process.argv.indexOf('--enabled-tools')
const enabledTools: string[] = []

if (enabledToolsArgIndex !== -1 && process.argv.length > enabledToolsArgIndex + 1) {
  enabledTools.push(...process.argv[enabledToolsArgIndex + 1].split(','))
}

registerTools(mcpServer, enabledTools)

const transport = new StdioServerTransport()
await mcpServer.connect(transport)
