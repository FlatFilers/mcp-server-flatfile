/**
 * This file was generated. Do NOT edit this file.
 */

import fetch from 'node-fetch'
import { type ZodRawShape, z } from 'zod'
import {
  canvasAreas_CanvasAreaLayoutSchema,
  canvasAreas_CanvasAreaPositionSchema,
  canvasAreas_CanvasAreaTypeSchema,
  canvasAreas_CanvasAreaVisibilitySchema,
  commons_CanvasAreaIdSchema,
  commons_CanvasIdSchema,
} from '../schemas.js'
import type { Tool } from './index.js'

const params = {
  canvasAreaId: commons_CanvasAreaIdSchema,
  type: canvasAreas_CanvasAreaTypeSchema.optional(),
  position: canvasAreas_CanvasAreaPositionSchema.optional(),
  visibility: canvasAreas_CanvasAreaVisibilitySchema.optional(),
  layout: canvasAreas_CanvasAreaLayoutSchema.optional(),
  overlay: z.unknown().optional(),
  config: z.unknown().optional(),
  metadata: z.unknown().optional(),
  parentId: commons_CanvasAreaIdSchema.optional(),
  canvasId: commons_CanvasIdSchema.optional(),
} as ZodRawShape

export const updateCanvasArea: Tool<typeof params> = {
  name: 'updateCanvasArea',
  description: 'Update a canvas area: Updates an existing canvas area',
  params,
  cb: async ({ canvasAreaId, type, position, visibility, layout, overlay, config, metadata, parentId, canvasId }) => {
    try {
      const searchParams = {}

      const searchParamsString = new URLSearchParams(JSON.parse(JSON.stringify(searchParams))).toString()
      const baseUrl = process.env.FLATFILE_API_URL || 'https://platform.flatfile.com/api/v1'
      const url = `${baseUrl}/canvas-areas/${canvasAreaId}${searchParamsString ? `?${searchParamsString}` : ''}`

      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'X-Disable-Hooks': 'true',
          Authorization: `Bearer ${process.env.FLATFILE_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
          position: position,
          visibility: visibility,
          layout: layout,
          overlay: overlay,
          config: config,
          metadata: metadata,
          parentId: parentId,
          canvasId: canvasId,
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
