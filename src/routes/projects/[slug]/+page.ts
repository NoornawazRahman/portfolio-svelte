// import ProjectsData from '$lib/data/projects';

// export function load({ params }: { params: Record<string, string> }) {
// 	if (params.slug) {
// 		const item = ProjectsData.items.find((item) => {
// 			return item.slug === params.slug;
// 		});

// 		return { item };
// 	}
// }


// +page.ts
import type { PageLoad } from './$types';
import type { Project } from '$lib/data/types';
import ProjectsData from '$lib/data/projects';

export const load: PageLoad = async ({ params, fetch }) => {
    const item: Project | undefined = ProjectsData.items.find(p => p.slug === params.slug);

    let markdownText = item?.description ?? '';

    if (item?.githubReadme) {
        try {
            const res = await fetch(item.githubReadme);
            if (res.ok) markdownText = await res.text();
        } catch (err) {
            console.error(err);
        }
    }

    return { item, markdownText };
};