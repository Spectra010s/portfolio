import type { APIRoute } from 'astro';
import { getEmDashEntry, decodeSlug } from 'emdash';
import { ogImage } from '../../../lib/og';
export const GET: APIRoute = async ({params}) => {
 const slug = decodeSlug(params.slug);
 if (!slug) return new Response('Not found', {status:404});
 const {entry} = await getEmDashEntry('posts', slug);
 if (!entry) return new Response('Not found', {status:404});
 return ogImage(entry.data.title);
};
