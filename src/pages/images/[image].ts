import type { APIRoute } from 'astro';
import projects from '../../../data/projects.json';
import { slugify } from '../../../lib/utils';
export const GET: APIRoute = async ({params}) => {
 const slug = params.image?.replace(/\.png$/i, '');
 const project = projects.find(p => slugify(p.name) === slug);
 if (!project?.demo) return new Response('Not found', {status:404});
 const response = await fetch(`https://v1.screenshot.11ty.dev/${encodeURIComponent(project.demo)}/opengraph/_wait:3/_timeout:15`);
 if (!response.ok) return new Response('Preview unavailable', {status:502});
 return new Response(response.body, {headers:{'Content-Type':response.headers.get('content-type') || 'image/png','Cache-Control':'public, max-age=86400'}});
};
