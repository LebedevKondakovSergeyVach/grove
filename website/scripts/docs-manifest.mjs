// The single declaration of what the site is built from. Titles and
// descriptions live here rather than in the sources, because the sources are
// GitHub documents and are out of scope for this work.

/**
 * @typedef {object} PageEntry
 * @property {string}  source         Path relative to the repository root.
 * @property {string}  slug           Site slug, without locale prefix or slashes.
 * @property {'en'|'ru'} locale
 * @property {string}  dest           Path relative to `src/content/docs/`.
 * @property {string}  description    Used for `og:description` and search results.
 * @property {boolean} stripPreamble  Remove everything above the first H1.
 * @property {boolean} stripBadges    Remove status-badge-only lines.
 * @property {boolean} stripHeroImage Remove the repository banner image.
 * @property {string[]} [components]   Starlight components the page uses. The
 *   generator emits the import for exactly these and fails if the expanded body
 *   uses one that is not listed, or lists one the body never uses.
 */

/** @type {PageEntry[]} */
export const PAGES = [
	{
		source: 'README.md',
		slug: 'overview',
		locale: 'en',
		dest: 'overview.md',
		description: 'What Grove does and why it exists.',
		stripPreamble: true,
		stripBadges: false,
		stripHeroImage: false,
	},
	{
		source: 'README.ru.md',
		slug: 'overview',
		locale: 'ru',
		dest: 'ru/overview.md',
		description: 'Что такое Grove и зачем он нужен.',
		stripPreamble: true,
		stripBadges: false,
		stripHeroImage: false,
	},
	{
		source: 'docs/INSTALLATION.md',
		slug: 'installation',
		locale: 'en',
		dest: 'installation.mdx',
		description: 'The grove command is not published yet.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Aside', 'TabItem', 'Tabs'],
	},
	{
		source: 'docs/INSTALLATION.ru.md',
		slug: 'installation',
		locale: 'ru',
		dest: 'ru/installation.mdx',
		description: 'Команда grove ещё не опубликована.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Aside', 'TabItem', 'Tabs'],
	},
	{
		source: 'docs/CONFIGURATION.md',
		slug: 'configuration',
		locale: 'en',
		dest: 'configuration.mdx',
		description: 'Workspace file, user settings, and which path wins.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Steps'],
	},
	{
		source: 'docs/CONFIGURATION.ru.md',
		slug: 'configuration',
		locale: 'ru',
		dest: 'ru/configuration.mdx',
		description: 'Файл workspace, пользовательские настройки и приоритет путей.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Steps'],
	},
	{
		source: 'docs/USAGE.md',
		slug: 'usage',
		locale: 'en',
		dest: 'usage.mdx',
		description: 'Planned commands and the all-or-nothing switch rule.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Aside', 'Card', 'CardGrid'],
	},
	{
		source: 'docs/USAGE.ru.md',
		slug: 'usage',
		locale: 'ru',
		dest: 'ru/usage.mdx',
		description: 'Планируемые команды и правило переключения всего набора.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Aside', 'Card', 'CardGrid'],
	},
	{
		source: 'docs/SHELL_INTEGRATION.md',
		slug: 'shell-integration',
		locale: 'en',
		dest: 'shell-integration.mdx',
		description: 'Planned zsh and bash setup for grove init.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Aside', 'Badge', 'Steps'],
	},
	{
		source: 'docs/SHELL_INTEGRATION.ru.md',
		slug: 'shell-integration',
		locale: 'ru',
		dest: 'ru/shell-integration.mdx',
		description: 'Планируемая настройка zsh и bash через grove init.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['Aside', 'Badge', 'Steps'],
	},
	{
		source: 'CONTRIBUTING.md',
		slug: 'contributing',
		locale: 'en',
		dest: 'contributing.mdx',
		description: 'Development setup, verification commands and the branching model.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
		components: ['FileTree', 'Steps'],
	},
	{
		source: 'CHANGELOG.md',
		slug: 'changelog',
		locale: 'en',
		dest: 'changelog.md',
		description: 'Release history, following Keep a Changelog.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
	},
	{
		source: 'CHANGELOG.ru.md',
		slug: 'changelog',
		locale: 'ru',
		dest: 'ru/changelog.md',
		description: 'История релизов в формате Keep a Changelog.',
		stripPreamble: false,
		stripBadges: false,
		stripHeroImage: false,
	},
];
