/**
 * This file was generated. Do NOT edit this file.
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { ZodRawShape, z } from 'zod'
import { ackEvent } from './ack-event.js'
import { ackJob } from './ack-job.js'
import { ackOutcomeJob } from './ack-outcome-job.js'
import { archiveSpace } from './archive-space.js'
import { assignAgentRole } from './assign-agent-role.js'
import { assignGuestRole } from './assign-guest-role.js'
import { assignUserRole } from './assign-user-role.js'
import { bulkCreateActions } from './bulk-create-actions.js'
import { bulkDeleteSpace } from './bulk-delete-space.js'
import { cancelJob } from './cancel-job.js'
import { completeJob } from './complete-job.js'
import { createAction } from './create-action.js'
import { createAgent } from './create-agent.js'
import { createAndInviteUser } from './create-and-invite-user.js'
import { createApp } from './create-app.js'
import { createAssistant } from './create-assistant.js'
import { createCanvasArea } from './create-canvas-area.js'
import { createConstraintApp } from './create-constraint-app.js'
import { createDataRetentionPolicy } from './create-data-retention-policy.js'
import { createDocument } from './create-document.js'
import { createDraftSpace } from './create-draft-space.js'
import { createEnvironment } from './create-environment.js'
import { createEvent } from './create-event.js'
import { createGuest } from './create-guest.js'
import { createGuidanceSpace } from './create-guidance-space.js'
import { createGuideEnvironment } from './create-guide-environment.js'
import { createIdVersion } from './create-id-version.js'
import { createJob } from './create-job.js'
import { createMappingProgram } from './create-mapping-program.js'
import { createRoutine } from './create-routine.js'
import { createRulesMapping } from './create-rules-mapping.js'
import { createRunbook } from './create-runbook.js'
import { createSnapshot } from './create-snapshot.js'
import { createSpace } from './create-space.js'
import { createView } from './create-view.js'
import { createWorkbook } from './create-workbook.js'
import { deleteAction } from './delete-action.js'
import { deleteAgentExport } from './delete-agent-export.js'
import { deleteAgentRole } from './delete-agent-role.js'
import { deleteAgent } from './delete-agent.js'
import { deleteAllHistoryForUserMapping } from './delete-all-history-for-user-mapping.js'
import { deleteApp } from './delete-app.js'
import { deleteAssistant } from './delete-assistant.js'
import { deleteCanvasArea } from './delete-canvas-area.js'
import { deleteConstraintApp } from './delete-constraint-app.js'
import { deleteDataRetentionPolicy } from './delete-data-retention-policy.js'
import { deleteDocument } from './delete-document.js'
import { deleteEnvironment } from './delete-environment.js'
import { deleteFile } from './delete-file.js'
import { deleteGuestRole } from './delete-guest-role.js'
import { deleteGuest } from './delete-guest.js'
import { deleteGuidanceSpace } from './delete-guidance-space.js'
import { deleteGuideEnvironment } from './delete-guide-environment.js'
import { deleteJob } from './delete-job.js'
import { deleteMappingProgram } from './delete-mapping-program.js'
import { deleteMultipleRulesMapping } from './delete-multiple-rules-mapping.js'
import { deleteRecords } from './delete-records.js'
import { deleteRoutine } from './delete-routine.js'
import { deleteRuleMapping } from './delete-rule-mapping.js'
import { deleteRunbook } from './delete-runbook.js'
import { deleteSecret } from './delete-secret.js'
import { deleteSheet } from './delete-sheet.js'
import { deleteSnapshot } from './delete-snapshot.js'
import { deleteSpace } from './delete-space.js'
import { deleteUserRole } from './delete-user-role.js'
import { deleteUser } from './delete-user.js'
import { deleteView } from './delete-view.js'
import { deleteWorkbook } from './delete-workbook.js'
import { downloadAgentExport } from './download-agent-export.js'
import { downloadFile } from './download-file.js'
import { duplicateSheet } from './duplicate-sheet.js'
import { executeJob } from './execute-job.js'
import { failJob } from './fail-job.js'
import { findAndReplaceRecords } from './find-and-replace-records.js'
import { getAction } from './get-action.js'
import { getAgentExport } from './get-agent-export.js'
import { getAgentLog } from './get-agent-log.js'
import { getAgentLogs } from './get-agent-logs.js'
import { getAgent } from './get-agent.js'
import { getAllActions } from './get-all-actions.js'
import { getApp } from './get-app.js'
import { getAssistant } from './get-assistant.js'
import { getCalculationsSheet } from './get-calculations-sheet.js'
import { getCanvasArea } from './get-canvas-area.js'
import { getCellValuesSheet } from './get-cell-values-sheet.js'
import { getCommit } from './get-commit.js'
import { getConstraintByIdApp } from './get-constraint-by-id-app.js'
import { getConstraintVersionApp } from './get-constraint-version-app.js'
import { getConstraintVersionsApp } from './get-constraint-versions-app.js'
import { getConstraintsApp } from './get-constraints-app.js'
import { getCurrentAccounts } from './get-current-accounts.js'
import { getDataRetentionPolicy } from './get-data-retention-policy.js'
import { getDocument } from './get-document.js'
import { getEnvironmentAgentExecutionsAgents } from './get-environment-agent-executions-agents.js'
import { getEnvironmentAgentLogsAgents } from './get-environment-agent-logs-agents.js'
import { getEnvironmentEventTokenEnvironments } from './get-environment-event-token-environments.js'
import { getEnvironment } from './get-environment.js'
import { getEventTokenEvents } from './get-event-token-events.js'
import { getEvent } from './get-event.js'
import { getExecutionPlanJob } from './get-execution-plan-job.js'
import { getFile } from './get-file.js'
import { getGuestToken } from './get-guest-token.js'
import { getGuest } from './get-guest.js'
import { getGuidanceSpace } from './get-guidance-space.js'
import { getGuideEnvironment } from './get-guide-environment.js'
import { getGuideVersionEnvironment } from './get-guide-version-environment.js'
import { getJob } from './get-job.js'
import { getMappingProgram } from './get-mapping-program.js'
import { getRecordCountsSheet } from './get-record-counts-sheet.js'
import { getRecordsAsCsvSheet } from './get-records-as-csv-sheet.js'
import { getRecords } from './get-records.js'
import { getRoutine } from './get-routine.js'
import { getRuleMapping } from './get-rule-mapping.js'
import { getRunbook } from './get-runbook.js'
import { getSftpCredentialsAuth } from './get-sftp-credentials-auth.js'
import { getSheetCommits } from './get-sheet-commits.js'
import { getSheet } from './get-sheet.js'
import { getSnapshotRecords } from './get-snapshot-records.js'
import { getSnapshot } from './get-snapshot.js'
import { getSpace } from './get-space.js'
import { getUser } from './get-user.js'
import { getView } from './get-view.js'
import { getWorkbookCommits } from './get-workbook-commits.js'
import { getWorkbook } from './get-workbook.js'
import { indicesRecords } from './indices-records.js'
import { insertRecords } from './insert-records.js'
import { inviteGuest } from './invite-guest.js'
import { listAgentExports } from './list-agent-exports.js'
import { listAgentRoles } from './list-agent-roles.js'
import { listAgents } from './list-agents.js'
import { listApps } from './list-apps.js'
import { listAssistant } from './list-assistant.js'
import { listCanvasAreas } from './list-canvas-areas.js'
import { listDataRetentionPolicies } from './list-data-retention-policies.js'
import { listDocuments } from './list-documents.js'
import { listEntitlements } from './list-entitlements.js'
import { listEnvironments } from './list-environments.js'
import { listEvents } from './list-events.js'
import { listFiles } from './list-files.js'
import { listGuestRoles } from './list-guest-roles.js'
import { listGuests } from './list-guests.js'
import { listGuidanceSpace } from './list-guidance-space.js'
import { listGuidesEnvironment } from './list-guides-environment.js'
import { listJobs } from './list-jobs.js'
import { listMappingPrograms } from './list-mapping-programs.js'
import { listRoles } from './list-roles.js'
import { listRoutines } from './list-routines.js'
import { listRulesMapping } from './list-rules-mapping.js'
import { listRunbooks } from './list-runbooks.js'
import { listSecrets } from './list-secrets.js'
import { listSheets } from './list-sheets.js'
import { listSnapshots } from './list-snapshots.js'
import { listSpaceDrafts } from './list-space-drafts.js'
import { listSpaces } from './list-spaces.js'
import { listUserRoles } from './list-user-roles.js'
import { listUsers } from './list-users.js'
import { listVersionsAgent } from './list-versions-agent.js'
import { listViews } from './list-views.js'
import { listWorkbooks } from './list-workbooks.js'
import { lockSheet } from './lock-sheet.js'
import { previewMutationJob } from './preview-mutation-job.js'
import { resendInviteUser } from './resend-invite-user.js'
import { restoreSnapshot } from './restore-snapshot.js'
import { retryJob } from './retry-job.js'
import { revertAgent } from './revert-agent.js'
import { splitJob } from './split-job.js'
import { unarchiveSpace } from './unarchive-space.js'
import { unlockSheet } from './unlock-sheet.js'
import { updateAction } from './update-action.js'
import { updateApp } from './update-app.js'
import { updateAssistant } from './update-assistant.js'
import { updateCanvasArea } from './update-canvas-area.js'
import { updateConstraintApp } from './update-constraint-app.js'
import { updateCurrentAccount } from './update-current-account.js'
import { updateDataRetentionPolicy } from './update-data-retention-policy.js'
import { updateDocument } from './update-document.js'
import { updateEnvironment } from './update-environment.js'
import { updateExecutionPlanFieldsJob } from './update-execution-plan-fields-job.js'
import { updateExecutionPlanJob } from './update-execution-plan-job.js'
import { updateFile } from './update-file.js'
import { updateGuest } from './update-guest.js'
import { updateGuidanceSpace } from './update-guidance-space.js'
import { updateGuideEnvironment } from './update-guide-environment.js'
import { updateJob } from './update-job.js'
import { updateMappingProgram } from './update-mapping-program.js'
import { updateRecords } from './update-records.js'
import { updateRoutine } from './update-routine.js'
import { updateRuleMapping } from './update-rule-mapping.js'
import { updateRulesMapping } from './update-rules-mapping.js'
import { updateRunbook } from './update-runbook.js'
import { updateSheet } from './update-sheet.js'
import { updateSpace } from './update-space.js'
import { updateUser } from './update-user.js'
import { updateView } from './update-view.js'
import { updateWorkbook } from './update-workbook.js'
import { uploadFile } from './upload-file.js'
import { upsertSecret } from './upsert-secret.js'
import { validateSheet } from './validate-sheet.js'

export interface Tool<T extends ZodRawShape = ZodRawShape> {
  name: string
  description: string
  params: T
  cb: (data: z.infer<z.ZodObject<T>>) => Promise<{
    content: {
      type: 'text'
      text: string
    }[]
    status: 'success' | 'failed'
  }>
}

export const tools: Record<string, Tool> = {
  listWorkbooks,
  createWorkbook,
  getWorkbook,
  deleteWorkbook,
  updateWorkbook,
  getWorkbookCommits,
  listRunbooks,
  getRunbook,
  createRunbook,
  updateRunbook,
  deleteRunbook,
  listSecrets,
  upsertSecret,
  deleteSecret,
  listEnvironments,
  createEnvironment,
  getEnvironmentEventTokenEnvironments,
  getEnvironment,
  updateEnvironment,
  deleteEnvironment,
  listGuidesEnvironment,
  getGuideEnvironment,
  updateGuideEnvironment,
  createGuideEnvironment,
  deleteGuideEnvironment,
  getGuideVersionEnvironment,
  listDocuments,
  createDocument,
  getDocument,
  updateDocument,
  deleteDocument,
  listAgentExports,
  getAgentExport,
  downloadAgentExport,
  deleteAgentExport,
  listUsers,
  createAndInviteUser,
  resendInviteUser,
  updateUser,
  getUser,
  deleteUser,
  listUserRoles,
  assignUserRole,
  deleteUserRole,
  getCurrentAccounts,
  updateCurrentAccount,
  getCommit,
  listGuests,
  createGuest,
  getGuest,
  deleteGuest,
  updateGuest,
  getGuestToken,
  listGuestRoles,
  assignGuestRole,
  deleteGuestRole,
  inviteGuest,
  listCanvasAreas,
  createCanvasArea,
  getCanvasArea,
  updateCanvasArea,
  deleteCanvasArea,
  createMappingProgram,
  deleteAllHistoryForUserMapping,
  listMappingPrograms,
  getMappingProgram,
  updateMappingProgram,
  deleteMappingProgram,
  createRulesMapping,
  deleteMultipleRulesMapping,
  listRulesMapping,
  getRuleMapping,
  updateRuleMapping,
  updateRulesMapping,
  deleteRuleMapping,
  listDataRetentionPolicies,
  createDataRetentionPolicy,
  getDataRetentionPolicy,
  updateDataRetentionPolicy,
  deleteDataRetentionPolicy,
  listJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  executeJob,
  getExecutionPlanJob,
  updateExecutionPlanJob,
  updateExecutionPlanFieldsJob,
  ackJob,
  ackOutcomeJob,
  completeJob,
  failJob,
  cancelJob,
  retryJob,
  previewMutationJob,
  splitJob,
  listViews,
  createView,
  getView,
  updateView,
  deleteView,
  listFiles,
  uploadFile,
  getFile,
  deleteFile,
  updateFile,
  downloadFile,
  createSnapshot,
  listSnapshots,
  getSnapshot,
  deleteSnapshot,
  restoreSnapshot,
  getSnapshotRecords,
  listEvents,
  createEvent,
  getEvent,
  ackEvent,
  getEventTokenEvents,
  listAssistant,
  getAssistant,
  updateAssistant,
  createAssistant,
  deleteAssistant,
  listAgents,
  createAgent,
  getAgent,
  listVersionsAgent,
  revertAgent,
  listAgentRoles,
  assignAgentRole,
  deleteAgentRole,
  getAgentLogs,
  getAgentLog,
  getEnvironmentAgentLogsAgents,
  getEnvironmentAgentExecutionsAgents,
  deleteAgent,
  listSheets,
  getSheet,
  deleteSheet,
  duplicateSheet,
  validateSheet,
  getRecordsAsCsvSheet,
  getRecordCountsSheet,
  getCalculationsSheet,
  getSheetCommits,
  lockSheet,
  unlockSheet,
  getCellValuesSheet,
  updateSheet,
  createIdVersion,
  listSpaces,
  createSpace,
  getSpace,
  deleteSpace,
  bulkDeleteSpace,
  updateSpace,
  archiveSpace,
  unarchiveSpace,
  createGuidanceSpace,
  listGuidanceSpace,
  getGuidanceSpace,
  updateGuidanceSpace,
  deleteGuidanceSpace,
  createDraftSpace,
  listSpaceDrafts,
  listEntitlements,
  getSftpCredentialsAuth,
  listApps,
  getApp,
  updateApp,
  createApp,
  deleteApp,
  getConstraintsApp,
  createConstraintApp,
  getConstraintByIdApp,
  getConstraintVersionsApp,
  getConstraintVersionApp,
  updateConstraintApp,
  deleteConstraintApp,
  listRoles,
  createAction,
  bulkCreateActions,
  getAllActions,
  getAction,
  updateAction,
  deleteAction,
  listRoutines,
  getRoutine,
  createRoutine,
  updateRoutine,
  deleteRoutine,
  getRecords,
  indicesRecords,
  updateRecords,
  insertRecords,
  deleteRecords,
  findAndReplaceRecords,
}

export function registerTools(server: McpServer, enabledTools: string[]) {
  for (const tool of Object.values(tools)) {
    if (
      enabledTools.length > 0 &&
      enabledTools.some((enabledTool) => new RegExp(`^${enabledTool.replace(/\*/g, '.*')}$`).test(tool.name))
    ) {
      server.tool(tool.name, tool.description, tool.params, tool.cb)
    } else if (enabledTools.length === 0) {
      server.tool(tool.name, tool.description, tool.params, tool.cb)
    }
  }
}
