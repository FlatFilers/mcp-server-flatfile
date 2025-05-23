/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { files_ModeSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  spaceId: z.string().optional(),
  pageSize: z.number().int().optional().describe('Number of files to return in a page (default 20)'),
  pageNumber: z.number().int().optional().describe('Based on pageSize, which page of files to return'),
  mode: files_ModeSchema.optional().describe('The storage mode of file to fetch, defaults to "import"'),
} as ZodRawShape

export const listFiles: Tool<typeof params> = {
  name: 'listFiles',
  description: 'List files: List files',
  params,
  cb: async ({ spaceId, pageSize, pageNumber, mode }) => {
    try {
      const searchParams = { spaceId, pageSize, pageNumber, mode }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/files${searchParamsString ? `?${searchParamsString}` : ''}`

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
