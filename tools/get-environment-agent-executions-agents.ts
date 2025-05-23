/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import {
  commons_AgentIdSchema,
  commons_EnvironmentIdSchema,
  commons_PageNumberSchema,
  commons_PageSizeSchema,
  commons_SpaceIdSchema,
  commons_SuccessQueryParameterSchema,
} from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  environmentId: commons_EnvironmentIdSchema,
  agentId: commons_AgentIdSchema.optional(),
  spaceId: commons_SpaceIdSchema.optional(),
  success: commons_SuccessQueryParameterSchema.optional(),
  pageSize: commons_PageSizeSchema.optional(),
  pageNumber: commons_PageNumberSchema.optional(),
} as ZodRawShape

export const getEnvironmentAgentExecutionsAgents: Tool<typeof params> = {
  name: 'getEnvironmentAgentExecutionsAgents',
  description: 'Get all executions in your environment: Get all executions in your environment',
  params,
  cb: async ({ environmentId, agentId, spaceId, success, pageSize, pageNumber }) => {
    try {
      const searchParams = { environmentId, agentId, spaceId, success, pageSize, pageNumber }

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/agents/executions${searchParamsString ? `?${searchParamsString}` : ''}`

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
