/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import type { Tool } from './index.js'

const params = {
  resourceId: z.string().describe('The associated Resource ID for the entitlements.'),
} as ZodRawShape

export const listEntitlements: Tool<typeof params> = {
  name: 'listEntitlements',
  description: 'List entitlements: Returns all entitlements matching a filter for resourceId',
  params,
  cb: async ({ resourceId }) => {
    try {
      const searchParams = { resourceId }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/entitlements${searchParamsString ? `?${searchParamsString}` : ''}`

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
