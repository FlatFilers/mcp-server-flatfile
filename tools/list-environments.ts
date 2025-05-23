/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import type { Tool } from './index.js'

const params = {
  pageSize: z.number().int().optional().describe('Number of environments to return in a page (default 10)'),
  pageNumber: z.number().int().optional().describe('Based on pageSize, which page of environments to return'),
} as ZodRawShape

export const listEnvironments: Tool<typeof params> = {
  name: 'listEnvironments',
  description: 'List environments: Get all environments',
  params,
  cb: async ({ pageSize, pageNumber }) => {
    try {
      const searchParams = { pageSize, pageNumber }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/environments${searchParamsString ? `?${searchParamsString}` : ''}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Disable-Hooks': 'true',
          Authorization: `Bearer ${process.env.FLATFILE_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
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
