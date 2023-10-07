// src/app/utils/app-router-highlight.config.ts:
import { AppRouterHighlight, HighlightEnv } from '@highlight-run/next/server'

import CONSTANTS from '@/app/constants'

const env: HighlightEnv = {
	projectID: CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID || '2',
	otlpEndpoint: CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_OTLP_ENDPOINT,
	serviceName: 'vercel-app-router',
}

export const withAppRouterHighlight = AppRouterHighlight(env)
