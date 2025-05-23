/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { commons_RoutineIdSchema, routines_UpdateRoutineRequestSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  routineId: commons_RoutineIdSchema,
  body: routines_UpdateRoutineRequestSchema,
} as ZodRawShape

export const updateRoutine: Tool<typeof params> = {
  name: 'updateRoutine',
  description: 'Update a routine: Updates a routine',
  params,
  cb: async ({ routineId, body }) => {
    try {
      const searchParams = {}

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/routines/${routineId}${searchParamsString ? `?${searchParamsString}` : ''}`

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
