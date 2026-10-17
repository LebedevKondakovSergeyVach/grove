import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Starlight collects every `pagefind.*` key from this collection and hands
	// it to `new PagefindUI({ translations })`. Without it, Pagefind's UI stays
	// English on the Russian pages — which the search component used to paper
	// over by regex-rewriting the rendered message.
	//
	// `grove.*` keys are the site's own UI strings, read with `Astro.locals.t`
	// like Starlight's, so a component never branches on the locale itself.
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({ extend: z.object({
			'grove.home': z.string(),
			'grove.diagram.open': z.string(),
			'grove.diagram.title': z.string(),
			'grove.diagram.close': z.string(),
			'grove.diagram.controls': z.string(),
			'grove.diagram.zoomIn': z.string(),
			'grove.diagram.zoomOut': z.string(),
			'grove.diagram.fit': z.string(),
			'grove.diagram.actual': z.string(),
			'grove.diagram.scale': z.string(),
			'grove.diagram.pan': z.string(),
			'grove.diagram.hint': z.string(),
		}).partial() }),
	}),
};
