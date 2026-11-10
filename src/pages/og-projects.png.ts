import type { APIRoute } from 'astro';
import { ogImage } from '../lib/og';
export const GET: APIRoute = () => ogImage('Projects & Developer Tools', 'Software, tools, and experiments by Adeloye Adetayo');
