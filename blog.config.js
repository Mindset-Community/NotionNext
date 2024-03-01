// Note: process.env.XX is an environment variable in Vercel, see configuration method at：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
        process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // Pseudo-static path refers to a configuration where, once enabled, all article URLs end with ".html".
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // The update content cache interval is measured in seconds. It means that each page has a 5-second pure static period during which no Notion data is fetched regardless of how many times it's accessed. Increasing this value helps save Vercel resources and improves access speed, but it may also cause delays in article updates.
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', // The current theme can be found in the "themes" folder, where you can locate all supported themes. The theme name corresponds to the folder name, such as example, fukasawa, gitbook, heo, hexo, landing, matery, medium, next, nobelium, plog, and simple.
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // Whether to display the theme switch button
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_SINCE || 2021, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light: Daytime mode, dark: Night mode, auto: Automatically switch to night mode based on time and theme
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // Night mode start-end time. When set to false, automatic switching to night mode based on time is disabled.

  // 3.14.1 After the version, welcome messages can be configured here, separated by English commas, to support the typing effect of multiple welcome messages.
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Latest Community Updates, Latest News Posts, Welcome to Mindset Mastery',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // Support for Menu type: Starting from version 3.12.0, various themes will gradually support flexible secondary menu configurations, replacing the original Page type. This configuration is an experimental feature and is disabled by default.

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Mindset', // Your nickname, for example, tangly1024.
  BIO: process.env.NEXT_PUBLIC_BIO || '', // Author's biography
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://mindset.onthewifi.com', // Website address
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'mindset, news, blog, trading, e-commerce, health', // Website keywords, separated by English commas

  // Social media links, leave blank if not needed, for example, CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // Email address, for example, mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // Your Weibo personal homepage
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // Your Twitter profile page
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // Your GitHub personal homepage, for example, https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // Your Telegram address, for example, https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // Your LinkedIn homepage
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // Your Instagram address
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // Bilibili address
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube address

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion domain, you can choose to use your own domain for reverse proxy. If you don't understand what reverse proxy is, please do not modify this item.

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // Blog favicon configuration, default usage /public/favicon.ico, supports online images, such as https://img.imesong.com/favicon.png

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // The default value for image compression width, applied to blog covers and article content. The smaller it is, the faster the image loading.
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // The image quality width after enlarging when clicked on, does not represent the actual display width on the webpage.
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // Random image API: If the following keywords are not configured, the homepage cover, profile picture, and article cover image will all be replaced with random images.
  RANDOM_IMAGE_REPLACE_TEXT: process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com', // Triggering keywords for image replacement (multiple keywords can be separated by commas). Only images with URLs containing these keywords will be replaced with the above random image
  // For example: images.unsplash.com (all images from the Notion image bed will be replaced). If you have already added a random image URL in Notion, and that service happens to shut down or become unavailable, you can configure that URL here to switch all images with just one click.
  // By default, the homepage cover and profile picture you upload to Notion will also be replaced. It is recommended to host the homepage cover and profile picture on other image beds and configure the link in Notion.

  // START ************Website font*****************
  // ['font-serif','font-sans'] Two options are available: serif and sans-serif: Reference https://www.jianshu.com/p/55e410bd2115
  // Font-light, separated by a space afterward, determines the thickness of the font. Leaving it blank defaults to the regular thickness: Reference https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // Font CSS, for example: https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // Sans-serif font, for example: "LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // Serif font, for example:'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome Font icon address; optional /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************Website font*****************

  // Path and component mapping, what components of the theme are displayed on different paths
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',
    '/': 'LayoutIndex',
    '/archive': 'LayoutArchive',
    '/page/[page]': 'LayoutPostList',
    '/category/[category]': 'LayoutPostList',
    '/category/[category]/page/[page]': 'LayoutPostList',
    '/tag/[tag]': 'LayoutPostList',
    '/tag/[tag]/page/[page]': 'LayoutPostList',
    '/search': 'LayoutSearch',
    '/search/[keyword]': 'LayoutSearch',
    '/search/[keyword]/page/[page]': 'LayoutSearch',
    '/404': 'Layout404',
    '/tag': 'LayoutTagIndex',
    '/category': 'LayoutCategoryIndex',
    '/[prefix]': 'LayoutSlug',
    '/[prefix]/[slug]': 'LayoutSlug',
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
    '/signin': 'LayoutSignIn',
    '/signup': 'LayoutSignUp'
  },

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // Whether to allow copying page content, default is allowed. If set to false, copying content is prohibited across the stack.
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // Customize right-click menu, overriding system menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH || true, // Whether the right-click menu allows theme switching

  // Custom external scripts and external styles
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // Sidebar layout: Whether to reverse (left to right, right to left). Supported by themes: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // A small plugin to display your Facebook fan page. @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // For the Facebook Page widget's title bar in the sidebar, fill in '' for no title bar, for example 'FACEBOOK Fan Page'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page The link to it e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // To enable the Messenger chat function, you need to provide your Facebook Page ID.
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // To enable the Messenger chat functionality, you need to obtain the Facebook App ID. You can get it from: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // Record number: Fujian ICP XXXXXXX

  // START********Code-related********
  // PrismJs Code-related
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // Code theme @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // Default code block theme
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // Whether to enable light/dark mode code theme switching; once enabled, the following two themes will be displayed
  PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // Light mode theme
  PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // Dark mode theme

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // Display macOS red, yellow, green icons in the top left corner of the code.
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // Whether to display line numbers
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // Whether to support collapsible code blocks
  CODE_COLLAPSE_EXPAND_DEFAULT: process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // Collapsible code blocks default to expanded state

  // END********Code-related********

  // Mermaid Chart CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // Article sharing functionality, which will display a sharing bar at the bottom.
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,LinkedIn,vkshare', // The sharing services, displayed in order, separated by commas.
  // All supported sharing services：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
 // Default prefix for the path of POST type articles, for example, the default path for POST type is /article/[slug]
 // If this configuration item is set to an empty string '', then the articles will have no prefix path. Use case: when you want the article prefix path to be /post, it supports multiple levels.
 // Supports functionality similar to WP customizable article link formats: https://wordpress.org/documentation/article/customize-permalinks/, currently only %year%/%month%/%day% is implemented.
 // Example: If you want to change the link to prefix article + timestamp, you can change it to: 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] Article list style: Page pagination, single-page scroll loading
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  Whether to load article previews in the list
  POST_PREVIEW_LINES: 12, // Number of lines for blog preview
  POST_RECOMMEND_COUNT: 6, // Number of recommended articles
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // Sorting method: 'date' by time, 'notion' controlled by Notion

  POST_WAITING_TIME_FOR_404: process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // Article loading timeout, in seconds; after timeout, redirect to the 404 page

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '22E6QMFBTV', // "View here:  https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // KEY for the admin dashboard, do not expose it in the code, view it here. https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || '5b57797d303d79d85cb95bcb80b8344d', // KEY for client-side search
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // Create an index in Algolia to be used as a database.
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // When true, rebuild index data; by default, it will be built during the build process.

  PREVIEW_CATEGORY_COUNT: 16, // The maximum number of categories displayed on the homepage, 0 for no limit.
  PREVIEW_TAG_COUNT: 16, // The maximum number of tags displayed on the homepage, 0 for no limit.

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // Disable click on the album view to facilitate inserting links into the album on the friend link page.

  //   ********Dynamic Effects Related********
  // Mouse Click Firework Effect
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // Toggle
  // Firework Colors, thanks to https://github.com/Vixcity for the submitted colors.
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // Cherry Blossom Falling Effect
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // Toggle
  // Floating Line Segment Effect
  NEST: process.env.NEXT_PUBLIC_NEST || false, // Toggle
  // Dynamic Ribbon Effect
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // Toggle
  // Static Ribbon Effect
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // Toggle
  // Starry Sky Rain Effect, only effective in dark mode
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // Toggle

  //   ********Widget Component Related********
  // AI Article Summary Generation @see https://docs_s.tianli0.top
  TianliGPT_CSS: process.env.NEXT_PUBLIC_TIANLI_GPT_CSS || 'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS: process.env.NEXT_PUBLIC_TIANLI_GPT_JS || 'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Chatbase: Whether to display Chatbase bot https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI Bot @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // Whether to display
  WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // You can set up your own server.
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // Get ID from the backend.
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',
  // Floating Widget
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // Whether to display pet widget
  WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // Widget model URL @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // Click the pet widget to switch blog themes.

  // Music Player Plugin
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // Whether to use the music player plugin
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // Whether to display play and switch in the bottom left corner. If the player is used, opening auto play and then hiding will play in a manner similar to background music, which cannot be cancelled or paused.
  MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // Whether to autoplay, although autoplay often doesn't work (autoplay is not supported on mobile devices).
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // Type of lyrics display, optional values: 3 | 1 | 0 (0: Disable LRC lyrics, 1: String in LRC format, 3: LRC file URL) (Provided there is a configured lyrics path, invalid for Meting)
  MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // Default playback modes, sequential list, random random
  MUSIC_PLAYER_AUDIO_LIST: [
    // Example music list. In addition to the following configurations, lyrics can also be configured. For specific configuration items, refer to this document: https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
            'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // Should MetingJS be enabled to fetch playlists from the platform? It will override the custom MUSIC_PLAYER_AUDIO_LIST. For more configuration information: https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // Music platforms: [netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // Corresponding playlist ID
  MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // Optional values: 3 | 1 | 0 (0: Disable LRC lyrics, 1: String in LRC format, 3: LRC file URL)

  //   ********Widget Component Related********
  // ----> Comment Interaction: Multiple support can be enabled simultaneously for WALINE, VALINE, GISCUS, CUSDIS, UTTERRANCES, GITALK

  COMMENT_HIDE_SINGLE_TAB: process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, // Whether hide the tab when there's no tabs. Should the tab for switching components be hidden when there is only one comment component?

  // Artalk Comment Plugin
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServer backend address: https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO backend address: Fill in the Tencent Cloud environment with envId; Fill in the domain for the Vercel environment, tutorial: https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || true, // Should the blog list display the number of comments?
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.17/twikoo.min.js', //  twikoo client CDN

  // utterance
  COMMENT_UTTERRANCES_REPO:
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // Your repository name, for example, I am 'tangly1024/NotionNext'; For more documentation, refer to https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // Your GitHub repository name e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // Your GitHub Repo ID e.g (You can see it after setting up Giscus)
  COMMENT_GISCUS_CATEGORY_ID:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // Your Category ID in your GitHub Discussions (You can see it after setting up Giscus)
  COMMENT_GISCUS_MAPPING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // Which method does your GitHub Discussions use to label articles, default is 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // Whether your Giscus has enabled article emoji symbols: '1' for enabled, '0' for disabled, default is enabled
  COMMENT_GISCUS_EMIT_METADATA:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // Whether your Giscus extracts Metadata: '1' for enabled, '0' for disabled, default is disabled
  COMMENT_GISCUS_INPUT_POSITION:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // Where your Giscus publishes comments: 'bottom' for bottom, 'top' for top, default is 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // Your Giscus language e.g 'en', 'zh-TW', 'zh-CN', default is 'en'
  COMMENT_GISCUS_LOADING:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // Whether your Giscus loading is progressively loaded, default is 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // Whether your Giscus can be cross-domain, default is 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || 'c937379b-1ba8-4e73-84b8-7033140cc290', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // Your GitHub repository name, for example, 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // Your username e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // Administrator username, usually yourself e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g. 20-digit ID, obtainable in the Gitalk backend.
  COMMENT_GITALK_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g. 40-character ID, obtained in the Gitalk backstage.
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // a distraction-free mode similar to Facebook
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || 'yR8xMXjiJoql0Qk4GU3FmfNX-MdYXbMMI', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || 'usT7qcFGUSfA9QLP6MGed3wl',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // This configuration is suitable for users with custom domains in China. The overseas version will be automatically detected (no need to manually fill in) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || 'Write your comment', 

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

 // This commenting system is based on WebMention, details can be found at https://webmention.io
 // It is an open commenting system based on the IndieWeb concept. The attributes contained in COMMENT_WEBMENTION below need to be configured:
 // ENABLE: Whether to enable
 // AUTH: IndieLogin used by Webmention, can be linked to Twitter or Github personal pages
 // HOSTNAME: The domain bound by Webmention, usually the website URL
 // TWITTER_USERNAME: Information required for the comment display area
 // TOKEN: Webmention's API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

 // <---- Comment Plugin

 // ----> Site Statistics
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // Vercel's built-in analytics https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // Display website page views and visitor count see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g You only need to fill in the Baidu Analytics ID.，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // You only need to fill in the webmaster statistics ID., [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || 'G-09RMV566WX', // Google Analytics ID, e.g., G-XXXXXXXXXX

  // 51la website statistics https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || 'pxEJg6wmQSj2lZomf8vnR4RTs3qQKQWg5pXtB_IvXKw', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // Microsoft Clarity website analysis
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || 'l8ndxr1tsl', // You only need to copy the ID part of the Clarity script, which consists of a ten-digit alphanumeric combination.

  // <---- Site statistics

  // START---->Revenue-related

  // Google Ads
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || 'pub-8437419081527400', // Google AdSense ID, e.g. ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Google Ads ID test mode, which retrieves fake test ads for development purposes https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdSense > Ads > By ad unit > Create new in-article ad. Paste the data-ad-slot value from the HTML code.
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdSense > Ads > By ad unit > Create new feed ad.
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdSense > Ads > By ad unit > Create new native ad.
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdSense > Ads > By ad unit > Create new display ad (auto ad).

  // Wanwei Ads
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // Create your Wanwei Ads unit ID at https://wwads.cn/
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // Whether to enable WWADS ad blocker detection. When enabled, it will display a text prompt on the ad space @see https://github.com/bytegravity/whitelist-wwads
  // END<----Revenue-related

  // Customize the names of Notion database fields.
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // Article type.
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // When the 'type' matches this value, it's considered a blog post.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'Mindset', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
        process.env.NEXT_PUBLIC_DESCRIPTION || '这是一个由NotionNext生成的站点', // 站点描述，被notion中的页面描述覆盖

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion图片压缩宽度

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build' || process.env.npm_lifecycle_event === 'export', // 在打包过程中默认开启缓存，开发或运行时开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // 是否展示编译依赖内容与大小
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = BLOG
