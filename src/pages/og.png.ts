import type { APIRoute } from 'astro';
import { ogImage } from '../lib/og';
export const GET: APIRoute = () => ogImage('Adeloye Adetayo', 'Spectra010s · Mechatronics & Software');
