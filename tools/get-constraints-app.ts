/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { commons_AppIdSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  appId: commons_AppIdSchema.describe('ID of the app'),
  includeBuiltins: z.boolean().optional().describe('Whether to include built-in constraints'),
} as ZodRawShape

export const getConstraintsApp: Tool<typeof params> = {
  name: 'getConstraintsApp',
  description: 'Get constraints: Returns constraints for an app',
  params,
  cb: async ({ appId, includeBuiltins }) => {
    try {
      const searchParams = { includeBuiltins }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/apps/${appId}/constraints${searchParamsString ? `?${searchParamsString}` : ''}`

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
