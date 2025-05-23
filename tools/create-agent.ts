/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { agents_AgentConfigSchema, commons_EnvironmentIdSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  environmentId: commons_EnvironmentIdSchema,
  body: agents_AgentConfigSchema,
} as ZodRawShape

export const createAgent: Tool<typeof params> = {
  name: 'createAgent',
  description: 'Create an agent: Create an agent',
  params,
  cb: async ({ environmentId, body }) => {
    try {
      const searchParams = { environmentId }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/agents${searchParamsString ? `?${searchParamsString}` : ''}`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'X-Disable-Hooks': 'true',
          Authorization: `Bearer ${process.env.FLATFILE_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
      }

      const data = (await response.json()) as { data: unknown }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(data.data, null, 2),
          },
        ],
        status: 'success',
      }
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error: ${error}` }],
        status: 'failed',
      }
    }
  },
}
