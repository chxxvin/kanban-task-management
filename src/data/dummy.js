const boards = [
  {
    id: 'board-101',
    name: 'Website Launch',
    columns: [
      {
        id: 'col-101',
        name: 'Todo',
        tasks: [
          {
            id: 'task-101',
            title: 'Create marketing brief',
            description:
              'Outline the core messaging, objectives, and audience for the website launch campaign.',
            subtasks: [
              { id: 'st-101', title: 'Define goals', done: false },
              { id: 'st-102', title: 'List target audience', done: false },
            ],
          },
          {
            id: 'task-102',
            title: 'Draft homepage copy',
            description:
              'Write compelling and concise copy for the main sections of the homepage.',
            subtasks: [
              { id: 'st-103', title: 'Hero section', done: false },
              { id: 'st-104', title: 'CTA wording', done: false },
            ],
          },
          {
            id: 'task-103',
            title: 'Prepare SEO strategy',
            description:
              'Develop an on-page and technical SEO plan to improve organic visibility at launch.',
            subtasks: [
              { id: 'st-105', title: 'Keyword research', done: false },
              { id: 'st-106', title: 'Meta tags', done: false },
            ],
          },
          {
            id: 'task-104',
            title: 'Design launch banner',
            description:
              'Create an eye-catching promotional banner for the website launch announcement.',
            subtasks: [
              { id: 'st-107', title: 'Layout mockup', done: false },
              { id: 'st-108', title: 'Choose colors', done: false },
            ],
          },
          {
            id: 'task-105',
            title: 'Set launch date and timeline',
            description:
              'Coordinate with stakeholders to finalize the go-live date and key milestones.',
            subtasks: [
              { id: 'st-109', title: 'Discuss with PM', done: false },
              { id: 'st-110', title: 'Update roadmap', done: false },
            ],
          },
          {
            id: 'task-106',
            title: 'Review legal disclaimers',
            description:
              'Ensure all legal pages comply with regulations and company policies.',
            subtasks: [
              { id: 'st-111', title: 'Check privacy policy', done: false },
              { id: 'st-112', title: 'Review cookies page', done: false },
            ],
          },
        ],
      },
      {
        id: 'col-102',
        name: 'Doing',
        tasks: [
          {
            id: 'task-108',
            title: 'Develop hero section layout',
            description:
              'Implement the responsive hero section with proper spacing and visual hierarchy.',
            subtasks: [
              { id: 'st-115', title: 'Set up grid', done: true },
              { id: 'st-116', title: 'Add CTA button', done: false },
            ],
          },
          {
            id: 'task-109',
            title: 'Test mobile responsiveness',
            description:
              'Verify layout and functionality across various mobile and tablet screen sizes.',
            subtasks: [
              { id: 'st-117', title: 'iPhone and Android', done: false },
              { id: 'st-118', title: 'Tablet view', done: false },
            ],
          },
          {
            id: 'task-110',
            title: 'Integrate analytics tracking',
            description:
              'Add and configure analytics scripts to monitor user behavior and conversions.',
            subtasks: [
              { id: 'st-119', title: 'Install script', done: false },
              { id: 'st-120', title: 'Test event triggers', done: false },
            ],
          },
          {
            id: 'task-111',
            title: 'Connect contact form',
            description:
              'Link the frontend contact form to a backend service for message handling.',
            subtasks: [
              { id: 'st-121', title: 'Set up backend endpoint', done: false },
              { id: 'st-122', title: 'Handle validation', done: false },
            ],
          },
          {
            id: 'task-112',
            title: 'Optimize hero image',
            description:
              'Reduce file size and ensure image quality across devices without slowing load time.',
            subtasks: [
              { id: 'st-123', title: 'Compress images', done: true },
              { id: 'st-124', title: 'Adjust resolution', done: false },
            ],
          },
          {
            id: 'task-113',
            title: 'Fix layout alignment issues',
            description:
              'Correct misaligned elements in header and footer for consistent visual design.',
            subtasks: [
              { id: 'st-125', title: 'Header alignment', done: false },
              { id: 'st-126', title: 'Footer padding', done: false },
            ],
          },
          {
            id: 'task-114',
            title: 'Implement sticky navigation bar',
            description:
              'Make the navigation bar stay fixed at the top during scroll for better UX.',
            subtasks: [
              { id: 'st-127', title: 'Scroll behavior', done: false },
              { id: 'st-128', title: 'CSS transitions', done: false },
            ],
          },
        ],
      },
      {
        id: 'col-103',
        name: 'Done',
        tasks: [
          {
            id: 'task-115',
            title: 'Set up domain hosting',
            description:
              'Configure DNS records and install SSL to prepare the live domain environment.',
            subtasks: [
              { id: 'st-129', title: 'DNS setup', done: true },
              { id: 'st-130', title: 'SSL certificate', done: true },
            ],
          },
          {
            id: 'task-116',
            title: 'Create brand guidelines document',
            description:
              'Document official typography, color usage, and design principles for consistency.',
            subtasks: [
              { id: 'st-131', title: 'Typography rules', done: true },
              { id: 'st-132', title: 'Color system', done: true },
            ],
          },
          {
            id: 'task-117',
            title: 'Finalize sitemap',
            description:
              'Confirm and approve the complete website structure with all stakeholders.',
            subtasks: [
              { id: 'st-133', title: 'Confirm navigation flow', done: true },
              { id: 'st-134', title: 'Client approval', done: true },
            ],
          },
          {
            id: 'task-118',
            title: 'Deploy staging environment',
            description:
              'Set up a preview environment for QA and client review before production launch.',
            subtasks: [
              { id: 'st-135', title: 'Setup Vercel', done: true },
              { id: 'st-136', title: 'Verify build', done: true },
            ],
          },
          {
            id: 'task-119',
            title: 'Run usability test session',
            description:
              'Conduct user testing to gather feedback on navigation and overall experience.',
            subtasks: [
              { id: 'st-137', title: 'Invite participants', done: true },
              { id: 'st-138', title: 'Record feedback', done: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'board-102',
    name: 'Mobile App Development',
    columns: [
      {
        id: 'col-201',
        name: 'Todo',
        tasks: [
          {
            id: 'task-201',
            title: 'Create wireframes for onboarding',
            description:
              'Sketch low-fidelity flows for the user onboarding experience to align with UX goals.',
            subtasks: [
              { id: 'st-201', title: 'Sketch user flow', done: false },
              { id: 'st-202', title: 'Design screens', done: false },
            ],
          },
          {
            id: 'task-202',
            title: 'Setup Firebase authentication',
            description:
              'Initialize Firebase project and configure email/password authentication method.',
            subtasks: [
              { id: 'st-203', title: 'Create project', done: false },
              { id: 'st-204', title: 'Add email login', done: false },
            ],
          },
          {
            id: 'task-203',
            title: 'Define app color palette',
            description:
              'Establish primary, secondary, and accent colors that align with brand identity.',
            subtasks: [
              { id: 'st-205', title: 'Primary & accent colors', done: false },
              { id: 'st-206', title: 'Dark mode adjustments', done: false },
            ],
          },
          {
            id: 'task-204',
            title: 'Plan notification system',
            description:
              'Map out when and how users will receive push notifications and manage preferences.',
            subtasks: [
              { id: 'st-207', title: 'Push notification flow', done: false },
              { id: 'st-208', title: 'User settings', done: false },
            ],
          },
          {
            id: 'task-205',
            title: 'Design splash screen',
            description:
              'Create an engaging splash screen that reflects the app’s branding and loads smoothly.',
            subtasks: [
              { id: 'st-209', title: 'Illustration concept', done: false },
              { id: 'st-210', title: 'Animation timing', done: false },
            ],
          },
        ],
      },
      {
        id: 'col-202',
        name: 'Doing',
        tasks: [
          {
            id: 'task-208',
            title: 'Implement login screen',
            description:
              'Build a secure and user-friendly login interface with proper error handling.',
            subtasks: [
              { id: 'st-215', title: 'Form validation', done: true },
              { id: 'st-216', title: 'Error messages', done: false },
            ],
          },
          {
            id: 'task-209',
            title: 'Develop user profile component',
            description:
              'Create a dynamic profile screen where users can view and edit personal information.',
            subtasks: [
              { id: 'st-217', title: 'Avatar upload', done: false },
              { id: 'st-218', title: 'Edit fields', done: false },
            ],
          },
          {
            id: 'task-210',
            title: 'Integrate push notifications',
            description:
              'Enable real-time push notifications using Firebase Cloud Messaging (FCM).',
            subtasks: [
              { id: 'st-219', title: 'Request permissions', done: false },
              { id: 'st-220', title: 'Handle background', done: false },
            ],
          },
          {
            id: 'task-211',
            title: 'Build settings screen',
            description:
              'Design and implement a settings menu for user preferences and app configuration.',
            subtasks: [
              { id: 'st-221', title: 'Toggle options', done: false },
              { id: 'st-222', title: 'Save preferences', done: false },
            ],
          },
          {
            id: 'task-212',
            title: 'Implement dark mode toggle',
            description:
              'Add a functional dark/light mode switch that persists user preference.',
            subtasks: [
              { id: 'st-223', title: 'Add theme switcher', done: true },
              { id: 'st-224', title: 'Adjust colors', done: false },
            ],
          },
          {
            id: 'task-213',
            title: 'Handle network error state',
            description:
              'Display user-friendly messages and retry options when connectivity issues occur.',
            subtasks: [
              { id: 'st-225', title: 'Add retry button', done: false },
              { id: 'st-226', title: 'Offline message', done: false },
            ],
          },
          {
            id: 'task-214',
            title: 'Implement password reset',
            description:
              'Allow users to securely reset their password via email verification link.',
            subtasks: [
              { id: 'st-227', title: 'Reset email form', done: false },
              { id: 'st-228', title: 'API connection', done: false },
            ],
          },
        ],
      },
      {
        id: 'col-203',
        name: 'Done',
        tasks: [
          {
            id: 'task-215',
            title: 'Setup React Native project',
            description:
              'Initialize the mobile app project with necessary dependencies and folder structure.',
            subtasks: [
              { id: 'st-229', title: 'Initialize repo', done: true },
              { id: 'st-230', title: 'Install libraries', done: true },
            ],
          },
          {
            id: 'task-216',
            title: 'Create reusable button component',
            description:
              'Build a flexible and accessible button component for consistent UI usage.',
            subtasks: [
              { id: 'st-231', title: 'Base styling', done: true },
              { id: 'st-232', title: 'Add press animation', done: true },
            ],
          },
          {
            id: 'task-217',
            title: 'Define app typography system',
            description:
              'Standardize font families, sizes, and weights across the entire application.',
            subtasks: [
              { id: 'st-233', title: 'Choose font', done: true },
              { id: 'st-234', title: 'Set font scale', done: true },
            ],
          },
          {
            id: 'task-218',
            title: 'Implement loading spinner',
            description:
              'Add a smooth loading indicator to improve perceived performance during async operations.',
            subtasks: [
              { id: 'st-235', title: 'Design animation', done: true },
              { id: 'st-236', title: 'Add to components', done: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'board-103',
    name: 'Content Strategy Planning',
    columns: [
      {
        id: 'col-301',
        name: 'Todo',
        tasks: [
          {
            id: 'task-301',
            title: 'Define blog content pillars',
            description:
              'Identify 3–5 core themes that will guide all future blog content creation.',
            subtasks: [
              { id: 'st-301', title: 'Brainstorm ideas', done: false },
              { id: 'st-302', title: 'Categorize topics', done: false },
            ],
          },
          {
            id: 'task-302',
            title: 'Research SEO keywords',
            description:
              'Use SEO tools to find high-opportunity keywords aligned with content pillars.',
            subtasks: [
              { id: 'st-303', title: 'Use Ahrefs', done: false },
              { id: 'st-304', title: 'Select top keywords', done: false },
            ],
          },
          {
            id: 'task-303',
            title: 'Plan social media calendar',
            description:
              'Map out weekly content themes and visual assets for consistent social posting.',
            subtasks: [
              { id: 'st-305', title: 'Set weekly themes', done: false },
              { id: 'st-306', title: 'Pick visuals', done: false },
            ],
          },
        ],
      },
      {
        id: 'col-302',
        name: 'Doing',
        tasks: [
          {
            id: 'task-308',
            title: 'Draft article on brand storytelling',
            description:
              'Write a long-form piece explaining how storytelling strengthens brand identity.',
            subtasks: [
              { id: 'st-315', title: 'Outline', done: true },
              { id: 'st-316', title: 'First draft', done: false },
            ],
          },
          {
            id: 'task-309',
            title: 'Design social media templates',
            description:
              'Create reusable Canva or Figma templates for consistent social media branding.',
            subtasks: [
              { id: 'st-317', title: 'Create 5 layouts', done: false },
              { id: 'st-318', title: 'Review branding', done: false },
            ],
          },
          {
            id: 'task-310',
            title: 'Write newsletter copy',
            description:
              'Craft engaging email content for the monthly subscriber newsletter.',
            subtasks: [
              { id: 'st-319', title: 'Headline variations', done: false },
              { id: 'st-320', title: 'CTA test', done: false },
            ],
          },
          {
            id: 'task-311',
            title: 'Develop content upload workflow',
            description:
              'Streamline the process from draft to publish using automation and checklists.',
            subtasks: [
              { id: 'st-321', title: 'Automate scheduling', done: false },
              { id: 'st-322', title: 'Review drafts', done: false },
            ],
          },
          {
            id: 'task-312',
            title: 'Test social engagement automation',
            description:
              'Use Zapier to auto-like or comment on relevant industry posts for visibility.',
            subtasks: [
              { id: 'st-323', title: 'Set Zapier rules', done: false },
              { id: 'st-324', title: 'Check logs', done: false },
            ],
          },
        ],
      },
      {
        id: 'col-303',
        name: 'Done',
        tasks: [
          {
            id: 'task-315',
            title: 'Complete Q1 content analysis',
            description:
              'Analyze performance metrics from Q1 content to inform Q2 strategy.',
            subtasks: [
              { id: 'st-329', title: 'Collect stats', done: true },
              { id: 'st-330', title: 'Write report', done: true },
            ],
          },
          {
            id: 'task-316',
            title: 'Publish March newsletter',
            description:
              'Send out the finalized newsletter to the subscriber list with tracking enabled.',
            subtasks: [
              { id: 'st-331', title: 'Schedule post', done: true },
              { id: 'st-332', title: 'Verify links', done: true },
            ],
          },
          {
            id: 'task-317',
            title: 'Finalize content calendar Q2',
            description:
              'Lock in all topics, authors, and publishing dates for the next quarter.',
            subtasks: [
              { id: 'st-333', title: 'Approve topics', done: true },
              { id: 'st-334', title: 'Lock dates', done: true },
            ],
          },
          {
            id: 'task-318',
            title: 'Archive outdated assets',
            description:
              'Remove or relocate old content and media files to maintain an organized repository.',
            subtasks: [
              { id: 'st-335', title: 'Clean drive', done: true },
              { id: 'st-336', title: 'Update asset list', done: true },
            ],
          },
          {
            id: 'task-319',
            title: 'Launch new blog section',
            description:
              'Deploy a dedicated area on the website for thought leadership content.',
            subtasks: [
              { id: 'st-337', title: 'Add layout', done: true },
              { id: 'st-338', title: 'QA review', done: true },
            ],
          },
          {
            id: 'task-320',
            title: 'Publish video case study',
            description:
              'Release a customer success story video on YouTube and embed it on the website.',
            subtasks: [
              { id: 'st-339', title: 'Render final cut', done: true },
              { id: 'st-340', title: 'Post on YouTube', done: true },
            ],
          },
        ],
      },
    ],
  },
];

export default boards;
