/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { apps_ConstraintUpdateSchema, commons_AppIdSchema, commons_ConstraintIdSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  appId: commons_AppIdSchema.describe('ID of the app'),
  constraintId: commons_ConstraintIdSchema.describe('ID of the constraint'),
  body: apps_ConstraintUpdateSchema,
} as ZodRawShape

export const updateConstraintApp: Tool<typeof params> = {
  name: 'updateConstraintApp',
  description: 'Update constraint: Updates a specific constraint',
  params,
  cb: async ({ appId, constraintId, body }) => {
    try {
      const searchParams = {}

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/apps/${appId}/constraints/${constraintId}${searchParamsString ? `?${searchParamsString}` : ''}`

      const response = await fetch(url, {
        method: 'PATCH',
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
