/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import { commons_SpaceIdSchema } from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  spaceId: commons_SpaceIdSchema.optional().describe('The associated Space ID of the Workbook.'),
  name: z.string().optional().describe('Filter by name. Precede with - to negate the filter'),
  namespace: z.string().optional().describe('Filter by namespace. Precede with - to negate the filter'),
  label: z.string().optional().describe('Filter by label. Precede with - to negate the filter'),
  treatment: z.string().optional().describe('Filter by treatment.'),
  includeSheets: z.boolean().optional().describe('Include sheets for the workbook (default true)'),
  includeCounts: z
    .boolean()
    .optional()
    .describe('Include counts for the workbook. **DEPRECATED** Counts will return 0s. Use GET /sheets/:sheetId/counts'),
} as ZodRawShape

export const listWorkbooks: Tool<typeof params> = {
  name: 'listWorkbooks',
  description: 'List workbooks: Returns all workbooks matching a filter for an account or space',
  params,
  cb: async ({ spaceId, name, namespace, label, treatment, includeSheets, includeCounts }) => {
    try {
      const searchParams = { spaceId, name, namespace, label, treatment, includeSheets, includeCounts }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/workbooks${searchParamsString ? `?${searchParamsString}` : ''}`

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
