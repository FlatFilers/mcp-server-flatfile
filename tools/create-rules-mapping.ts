/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { commons_ProgramIdSchema, mapping_CreateMappingRulesRequestSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  programId: commons_ProgramIdSchema.describe('ID of the program'),
  body: mapping_CreateMappingRulesRequestSchema,
} as ZodRawShape

export const createRulesMapping: Tool<typeof params> = {
  name: 'createRulesMapping',
  description: 'Add mapping rules to a program: Add mapping rules to a program',
  params,
  cb: async ({ programId, body }) => {
    try {
      const searchParams = {}

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/mapping/${programId}/rules${searchParamsString ? `?${searchParamsString}` : ''}`

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
