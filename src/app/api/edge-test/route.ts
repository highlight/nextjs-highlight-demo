import type { NextFetchEvent, NextRequest } from 'next/server'

import { NextResponse } from 'next/server'
import { z } from 'zod'

export const GET = async function GET(
	request: NextRequest,
	context: NextFetchEvent,
) {
	const { searchParams } = new URL(request.url)
	const success = z.enum(['true', 'false']).parse(searchParams.get('success'))

	console.info('Here: /api/edge-test/route.ts', { success })

	if (success === 'true') {
		return new Response('Success: /api/edge-test')
	} else {
		const error = new Error('Error: /api/edge-test')

		throw error
	}
}

export const POST = async function POST(
	request: NextRequest,
	context: NextFetchEvent,
) {
	const headers = Object.fromEntries(request.headers.entries())

	return NextResponse.json({
		body: { headers },
	})
}

export const runtime = 'edge'
