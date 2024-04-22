/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Your Path to Success Starts Here', // 英雄区文字
  STARTER_HERO_TITLE_2:
    'Transform Your Mindset, Transform Your Life: Empowering Your Journey to Success with Insightful Content and Valuable Strategies at Mindset', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Start your experience now!', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://nas.io/mindset-community-lc9k', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: null, // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://www.youtube.com/embed/92JawhgmzaA?si=PIeMuEsLCIDlZeQk', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Articles',
  STARTER_NAV_BUTTON_1_URL: '/archive',

  STARTER_NAV_BUTTON_2_TEXT: 'Join Now!',
  STARTER_NAV_BUTTON_2_URL: 'https://nas.io/mindset-community-lc9k',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Features', // 特性
  STARTER_FEATURE_TEXT_1: 'The main features', // 特性
  STARTER_FEATURE_TEXT_2: null, // 特性

  STARTER_FEATURE_1_TITLE_1: '免费且开源', // 特性1
  STARTER_FEATURE_1_TEXT_1: '项目源码在Github上完全开放共享，遵循MIT协议', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: '多种主题定制', // 特性2
  STARTER_FEATURE_2_TEXT_1: '数十种主题,适用于不同场景，总有一款适合你', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: 'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: '优秀的性能', // 特性3
  STARTER_FEATURE_3_TEXT_1: '基于NextJS开发，更快的响应速度，更好的SEO', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: '便捷的写作体验', // 特性4
  STARTER_FEATURE_4_TEXT_1: '只需在Notion笔记中编修，自动同步到网站', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'Who are we?',
  STARTER_ABOUT_TEXT:
    'Welcome to Mindset, where we empower individuals to elevate their lives through insightful content. Discover practical strategies for financial success and holistic well-being, curated for personal and professional growth. Explore our finance articles for valuable insights on money management and investment strategies, tailored to guide you towards a secure financial future.',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn More',
  STARTER_ABOUT_BUTTON_URL: 'https://mindset.onthewifi.com/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '2000+',
  STARTER_ABOUT_TIPS_2: 'Members',
  STARTER_ABOUT_TIPS_3: 'Running online',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: 'Price List',
  STARTER_PRICING_TEXT_1: null,
  STARTER_PRICING_TEXT_2: null,

  STARTER_PRICING_1_TITLE: 'Trial',
  STARTER_PRICING_1_PRICE: 'Free',
  STARTER_PRICING_1_PRICE_CURRENCY: null,
  STARTER_PRICING_1_PRICE_PERIOD: null,
  STARTER_PRICING_1_HEADER: null,
  STARTER_PRICING_1_FEATURES: 'Chat Access, Unlocked Content', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'Start Now!',
  STARTER_PRICING_1_BUTTON_URL: 'https://nas.io/mindset-community-lc9k?discountCode=7DAYTRIAL',

  STARTER_PRICING_2_TAG: 'Popular',
  STARTER_PRICING_2_TITLE: 'Basic',
  STARTER_PRICING_2_PRICE: '49.99',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: 'Monthly',
  STARTER_PRICING_2_HEADER: 'Access all features',
  STARTER_PRICING_2_FEATURES: 'Chat Access,Courses,Digital Content,Early Content,Unlocked Content', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Join Now!',
  STARTER_PRICING_2_BUTTON_URL: 'https://nas.io/mindset-community-lc9k',

  STARTER_PRICING_3_TITLE: 'Premium',
  STARTER_PRICING_3_PRICE: '399.99',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: 'Annually',
  STARTER_PRICING_3_HEADER: 'Access all features',
  STARTER_PRICING_3_FEATURES: 'Chat Access,Courses,Digital Content,Early Content,Unlocked Content,Coaching', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Join Now!',
  STARTER_PRICING_3_BUTTON_URL: 'https://nas.io/mindset-community-lc9k',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Testimonials',
  STARTER_TESTIMONIALS_TEXT_1: 'What Our Members Are Saying',
  STARTER_TESTIMONIALS_TEXT_2: null,
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        "I've been a member of Mindset for months now, and I can't imagine my workflow without it. The community is fantastic, and the perks that come with membership keep getting better. It's worth every penny!",
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        "Joining Mindset has been a game-changer for me. The value I get from the exclusive content and resources is unmatched. It's like having a whole team of experts at my fingertips!",
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'Frequently Asked Questions (FAQ)',
  STARTER_FAQ_TEXT_1: 'Do you have any questions? Please see here.',
  STARTER_FAQ_TEXT_2: 'These FAQs aim to address common queries and provide clarity.',

  STARTER_FAQ_1_QUESTION: 'How do I access the chat feature as a member subscriber?',
  STARTER_FAQ_1_ANSWER:
    'As a member subscriber, you can access the chat feature by logging into your account and navigating to the community section where you can engage with other members in real-time discussions.',

  STARTER_FAQ_2_QUESTION: 'Are the courses available for all skill levels?',
  STARTER_FAQ_2_ANSWER:
    'Yes, our courses cater to a wide range of skill levels, from beginners to advanced learners. You can choose courses based on your interests and current proficiency to enhance your knowledge and skills.',

  STARTER_FAQ_3_QUESTION: 'Can I download the digital books and resources for offline access?',
  STARTER_FAQ_3_ANSWER:
    'Yes, you can download our digital books and resources for offline access. Simply click on the download option next to the resource you wish to save and enjoy access anytime, anywhere.',

  STARTER_FAQ_4_QUESTION: 'How often do you release early access content?',
  STARTER_FAQ_4_ANSWER:
    'We regularly release early access content to our member subscribers to provide them with exclusive updates and insights. You can expect new content to be available for early access on a regular basis, keeping you informed and engaged.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team Members',
  STARTER_TEAM_TEXT_1: 'Our Development Team',
  STARTER_TEAM_TEXT_2: null,

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Articles',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Latest Articles',
  STARTER_BLOG_TEXT_2: null,

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact Us',
  STARTER_CONTACT_TEXT: "Tell us about the issues you're experiencing.",
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'China, Fujian',
  STARTER_CONTACT_EMAIL_TITLE: 'How can we assist you?',
  STARTER_CONTACT_EMAIL_TEXT: 'mindset.community.email@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/noteforms-as9gc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  // STARTER_CONTACT_MSG_TITLE: 'Leave us a message.',
  // STARTER_CONTACT_MSG_NAME: 'Name',
  // STARTER_CONTACT_MSG_EMAIL: 'Email Address',
  // STARTER_CONTACT_MSG_PHONE: 'Contact Phone Number',
  // STARTER_CONTACT_MSG_TEXT: 'Message Content',
  // STARTER_CONTACT_MSG_SEND: 'Send Message',
  // STARTER_CONTACT_MSG_THANKS: 'Thank you for your message.',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '"We create digital experiences for brands and companies through technology."',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About Us',
      LINK_GROUP: [
        { TITLE: 'Homepage', URL: '/#home' },
        { TITLE: 'Store', URL: 'https://payhip.com/mindsetstore' }
      ]
    },
    {
      TITLE: 'Social Media',
      LINK_GROUP: [
        { TITLE: 'Facebook', URL: 'https://www.facebook.com/people/Mindset-Community/61556389438584/' },
        { TITLE: 'ВКонтакте', URL: 'https://vk.com/mindset.community' },
        { TITLE: 'Discord', URL: 'https://discord.com/servers/mindset-community-783713892131536927' },
        { TITLE: 'Telegram', URL: 'https://t.me/mindset_community' },
        { TITLE: 'Instagram', URL: 'https://www.instagram.com/mindset.network.888/' },
        { TITLE: 'Tiktok', URL: 'https://www.tiktok.com/@mindset.onthewifi' }
      ]
    },
    {
      TITLE: 'Youtube',
      LINK_GROUP: [
        { TITLE: 'Health & Wellness', URL: 'https://www.youtube.com/@mindset.wellness.888' },
        { TITLE: 'Commerce', URL: 'https://www.youtube.com/@mindset.commerce.888' },
        { TITLE: 'Finance', URL: 'https://www.youtube.com/@mindset.finance.888' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Articles',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Disclaimer',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: "We seem to be unable to find the page you're looking for.",
  STARTER_404_TEXT: "Sorry! The page you are looking for doesn't exist. It may have been moved or deleted.",
  STARTER_404_BACK: 'Back to Homepage',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://mindset.onthewifi.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || true // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
