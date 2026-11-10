import type { APIRoute } from 'astro';
import { ogHome } from '../lib/og';
export const GET: APIRoute = () => ogHome();
