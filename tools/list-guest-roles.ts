/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { commons_GuestIdSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  guestId: commons_GuestIdSchema.describe('The guest id'),
} as ZodRawShape

export const listGuestRoles: Tool<typeof params> = {
  name: 'listGuestRoles',
  description: 'List Guest Roles: Lists roles assigned to a guest.',
  params,
  cb: async ({ guestId }) => {
    try {
      const searchParams = {}

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/guests/${guestId}/roles${searchParamsString ? `?${searchParamsString}` : ''}`

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
