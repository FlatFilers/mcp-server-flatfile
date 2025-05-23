/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import {
  commons_FilterFieldSchema,
  commons_FilterSchema,
  commons_RecordIdSchema,
  commons_SearchFieldSchema,
  commons_SearchValueSchema,
  commons_SheetIdSchema,
  records_CellValueUnionSchema,
} from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  sheetId: commons_SheetIdSchema.describe('ID of sheet'),
  filter: commons_FilterSchema.optional(),
  filterField: commons_FilterFieldSchema.optional().describe('Name of field by which to filter records'),
  searchValue: commons_SearchValueSchema.optional(),
  searchField: commons_SearchFieldSchema.optional(),
  ids: commons_RecordIdSchema
    .optional()
    .describe(
      "The Record Ids param (ids) is a list of record ids that can be passed to several record endpoints allowing the user to identify specific records to INCLUDE in the query, or specific records to EXCLUDE, depending on whether or not filters are being applied. When passing a query param that filters the record dataset, such as 'searchValue', or a 'filter' of 'valid' | 'error' | 'all', the 'ids' param will EXCLUDE those records from the filtered results. For basic queries that do not filter the dataset, passing record ids in the 'ids' param will limit the dataset to INCLUDE just those specific records ",
    ),
  q: z.string().optional().describe('An FFQL query used to filter the result set'),
  find: records_CellValueUnionSchema
    .optional()
    .describe(
      'A value to find for a given field in a sheet. For exact matches, wrap the value in double quotes ("Bob")',
    ),
  replace: records_CellValueUnionSchema.optional().describe('The value to replace found values with'),
  fieldKey: z.string().describe('A unique key used to identify a field in a sheet'),
} as ZodRawShape

export const findAndReplaceRecords: Tool<typeof params> = {
  name: 'findAndReplaceRecords',
  description:
    "Finds and replaces field values matching search criteria : Searches for all values that match the 'find' value (globally or for a specific field via 'fieldKey') and replaces them with the 'replace' value. Wrap 'find' value in double quotes for exact match (\"\"). Returns a commitId for the updated records",
  params,
  cb: async ({ sheetId, filter, filterField, searchValue, searchField, ids, q, find, replace, fieldKey }) => {
    try {
      const searchParams = { filter, filterField, searchValue, searchField, ids, q }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/sheets/${sheetId}/find-replace${searchParamsString ? `?${searchParamsString}` : ''}`

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'X-Disable-Hooks': 'true',
          Authorization: `Bearer ${process.env.FLATFILE_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          find: find,
          replace: replace,
          fieldKey: fieldKey,
        }),
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
