/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { commons_SpaceIdSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  spaceIds: commons_SpaceIdSchema.describe('List of ids for the spaces to be deleted'),
} as ZodRawShape

export const bulkDeleteSpace: Tool<typeof params> = {
  name: 'bulkDeleteSpace',
  description: 'Delete spaces: Delete multiple spaces by id',
  params,
  cb: async ({ spaceIds }) => {
    try {
      const searchParams = { spaceIds }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/spaces${searchParamsString ? `?${searchParamsString}` : ''}`

      const response = await fetch(url, {
        method: 'DELETE',
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
