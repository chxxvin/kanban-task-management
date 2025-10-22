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
            subtasks: [
              { id: 'st-101', title: 'Define goals', done: false },
              { id: 'st-102', title: 'List target audience', done: false },
            ],
          },
          {
            id: 'task-102',
            title: 'Draft homepage copy',
            subtasks: [
              { id: 'st-103', title: 'Hero section', done: false },
              { id: 'st-104', title: 'CTA wording', done: false },
            ],
          },
          {
            id: 'task-103',
            title: 'Prepare SEO strategy',
            subtasks: [
              { id: 'st-105', title: 'Keyword research', done: false },
              { id: 'st-106', title: 'Meta tags', done: false },
            ],
          },
          {
            id: 'task-104',
            title: 'Design launch banner',
            subtasks: [
              { id: 'st-107', title: 'Layout mockup', done: false },
              { id: 'st-108', title: 'Choose colors', done: false },
            ],
          },
          {
            id: 'task-105',
            title: 'Set launch date and timeline',
            subtasks: [
              { id: 'st-109', title: 'Discuss with PM', done: false },
              { id: 'st-110', title: 'Update roadmap', done: false },
            ],
          },
          {
            id: 'task-106',
            title: 'Review legal disclaimers',
            subtasks: [
              { id: 'st-111', title: 'Check privacy policy', done: false },
              { id: 'st-112', title: 'Review cookies page', done: false },
            ],
          },
          {
            id: 'task-107',
            title: 'Organize pre-launch email campaign',
            subtasks: [
              { id: 'st-113', title: 'Segment users', done: false },
              { id: 'st-114', title: 'Write email copy', done: false },
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
            subtasks: [
              { id: 'st-115', title: 'Set up grid', done: true },
              { id: 'st-116', title: 'Add CTA button', done: false },
            ],
          },
          {
            id: 'task-109',
            title: 'Test mobile responsiveness',
            subtasks: [
              { id: 'st-117', title: 'iPhone and Android', done: false },
              { id: 'st-118', title: 'Tablet view', done: false },
            ],
          },
          {
            id: 'task-110',
            title: 'Integrate analytics tracking',
            subtasks: [
              { id: 'st-119', title: 'Install script', done: false },
              { id: 'st-120', title: 'Test event triggers', done: false },
            ],
          },
          {
            id: 'task-111',
            title: 'Connect contact form',
            subtasks: [
              { id: 'st-121', title: 'Set up backend endpoint', done: false },
              { id: 'st-122', title: 'Handle validation', done: false },
            ],
          },
          {
            id: 'task-112',
            title: 'Optimize hero image',
            subtasks: [
              { id: 'st-123', title: 'Compress images', done: true },
              { id: 'st-124', title: 'Adjust resolution', done: false },
            ],
          },
          {
            id: 'task-113',
            title: 'Fix layout alignment issues',
            subtasks: [
              { id: 'st-125', title: 'Header alignment', done: false },
              { id: 'st-126', title: 'Footer padding', done: false },
            ],
          },
          {
            id: 'task-114',
            title: 'Implement sticky navigation bar',
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
            subtasks: [
              { id: 'st-129', title: 'DNS setup', done: true },
              { id: 'st-130', title: 'SSL certificate', done: true },
            ],
          },
          {
            id: 'task-116',
            title: 'Create brand guidelines document',
            subtasks: [
              { id: 'st-131', title: 'Typography rules', done: true },
              { id: 'st-132', title: 'Color system', done: true },
            ],
          },
          {
            id: 'task-117',
            title: 'Finalize sitemap',
            subtasks: [
              { id: 'st-133', title: 'Confirm navigation flow', done: true },
              { id: 'st-134', title: 'Client approval', done: true },
            ],
          },
          {
            id: 'task-118',
            title: 'Deploy staging environment',
            subtasks: [
              { id: 'st-135', title: 'Setup Vercel', done: true },
              { id: 'st-136', title: 'Verify build', done: true },
            ],
          },
          {
            id: 'task-119',
            title: 'Run usability test session',
            subtasks: [
              { id: 'st-137', title: 'Invite participants', done: true },
              { id: 'st-138', title: 'Record feedback', done: true },
            ],
          },
          {
            id: 'task-120',
            title: 'Design logo variations',
            subtasks: [
              { id: 'st-139', title: 'Flat version', done: true },
              { id: 'st-140', title: 'Monochrome version', done: true },
            ],
          },
          {
            id: 'task-121',
            title: 'Write post-launch checklist',
            subtasks: [
              { id: 'st-141', title: 'SEO recheck', done: true },
              { id: 'st-142', title: 'Performance audit', done: true },
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
            subtasks: [
              { id: 'st-201', title: 'Sketch user flow', done: false },
              { id: 'st-202', title: 'Design screens', done: false },
            ],
          },
          {
            id: 'task-202',
            title: 'Setup Firebase authentication',
            subtasks: [
              { id: 'st-203', title: 'Create project', done: false },
              { id: 'st-204', title: 'Add email login', done: false },
            ],
          },
          {
            id: 'task-203',
            title: 'Define app color palette',
            subtasks: [
              { id: 'st-205', title: 'Primary & accent colors', done: false },
              { id: 'st-206', title: 'Dark mode adjustments', done: false },
            ],
          },
          {
            id: 'task-204',
            title: 'Plan notification system',
            subtasks: [
              { id: 'st-207', title: 'Push notification flow', done: false },
              { id: 'st-208', title: 'User settings', done: false },
            ],
          },
          {
            id: 'task-205',
            title: 'Design splash screen',
            subtasks: [
              { id: 'st-209', title: 'Illustration concept', done: false },
              { id: 'st-210', title: 'Animation timing', done: false },
            ],
          },
          {
            id: 'task-206',
            title: 'Define navigation routes',
            subtasks: [
              { id: 'st-211', title: 'Bottom tabs', done: false },
              { id: 'st-212', title: 'Stack navigation', done: false },
            ],
          },
          {
            id: 'task-207',
            title: 'Set up API endpoints for user data',
            subtasks: [
              { id: 'st-213', title: 'GET/POST routes', done: false },
              { id: 'st-214', title: 'Error handling', done: false },
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
            subtasks: [
              { id: 'st-215', title: 'Form validation', done: true },
              { id: 'st-216', title: 'Error messages', done: false },
            ],
          },
          {
            id: 'task-209',
            title: 'Develop user profile component',
            subtasks: [
              { id: 'st-217', title: 'Avatar upload', done: false },
              { id: 'st-218', title: 'Edit fields', done: false },
            ],
          },
          {
            id: 'task-210',
            title: 'Integrate push notifications',
            subtasks: [
              { id: 'st-219', title: 'Request permissions', done: false },
              { id: 'st-220', title: 'Handle background', done: false },
            ],
          },
          {
            id: 'task-211',
            title: 'Build settings screen',
            subtasks: [
              { id: 'st-221', title: 'Toggle options', done: false },
              { id: 'st-222', title: 'Save preferences', done: false },
            ],
          },
          {
            id: 'task-212',
            title: 'Implement dark mode toggle',
            subtasks: [
              { id: 'st-223', title: 'Add theme switcher', done: true },
              { id: 'st-224', title: 'Adjust colors', done: false },
            ],
          },
          {
            id: 'task-213',
            title: 'Handle network error state',
            subtasks: [
              { id: 'st-225', title: 'Add retry button', done: false },
              { id: 'st-226', title: 'Offline message', done: false },
            ],
          },
          {
            id: 'task-214',
            title: 'Implement password reset',
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
            subtasks: [
              { id: 'st-229', title: 'Initialize repo', done: true },
              { id: 'st-230', title: 'Install libraries', done: true },
            ],
          },
          {
            id: 'task-216',
            title: 'Create reusable button component',
            subtasks: [
              { id: 'st-231', title: 'Base styling', done: true },
              { id: 'st-232', title: 'Add press animation', done: true },
            ],
          },
          {
            id: 'task-217',
            title: 'Define app typography system',
            subtasks: [
              { id: 'st-233', title: 'Choose font', done: true },
              { id: 'st-234', title: 'Set font scale', done: true },
            ],
          },
          {
            id: 'task-218',
            title: 'Implement loading spinner',
            subtasks: [
              { id: 'st-235', title: 'Design animation', done: true },
              { id: 'st-236', title: 'Add to components', done: true },
            ],
          },
          {
            id: 'task-219',
            title: 'Test Android build',
            subtasks: [
              { id: 'st-237', title: 'Run emulator', done: true },
              { id: 'st-238', title: 'Fix warnings', done: true },
            ],
          },
          {
            id: 'task-220',
            title: 'Test iOS build',
            subtasks: [
              { id: 'st-239', title: 'Run Xcode build', done: true },
              { id: 'st-240', title: 'Check icons', done: true },
            ],
          },
          {
            id: 'task-221',
            title: 'Setup GitHub Actions for CI',
            subtasks: [
              { id: 'st-241', title: 'YAML config', done: true },
              { id: 'st-242', title: 'Test auto build', done: true },
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
            subtasks: [
              { id: 'st-301', title: 'Brainstorm ideas', done: false },
              { id: 'st-302', title: 'Categorize topics', done: false },
            ],
          },
          {
            id: 'task-302',
            title: 'Research SEO keywords',
            subtasks: [
              { id: 'st-303', title: 'Use Ahrefs', done: false },
              { id: 'st-304', title: 'Select top keywords', done: false },
            ],
          },
          {
            id: 'task-303',
            title: 'Plan social media calendar',
            subtasks: [
              { id: 'st-305', title: 'Set weekly themes', done: false },
              { id: 'st-306', title: 'Pick visuals', done: false },
            ],
          },
          {
            id: 'task-304',
            title: 'Outline video content ideas',
            subtasks: [
              { id: 'st-307', title: 'Script brainstorming', done: false },
              { id: 'st-308', title: 'Visual concepting', done: false },
            ],
          },
          {
            id: 'task-305',
            title: 'Create content distribution plan',
            subtasks: [
              { id: 'st-309', title: 'List platforms', done: false },
              { id: 'st-310', title: 'Set frequency', done: false },
            ],
          },
          {
            id: 'task-306',
            title: 'Define KPIs and metrics',
            subtasks: [
              { id: 'st-311', title: 'Engagement metrics', done: false },
              { id: 'st-312', title: 'Conversion goals', done: false },
            ],
          },
          {
            id: 'task-307',
            title: 'Plan influencer outreach',
            subtasks: [
              { id: 'st-313', title: 'Identify partners', done: false },
              { id: 'st-314', title: 'Contact proposals', done: false },
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
            subtasks: [
              { id: 'st-315', title: 'Outline', done: true },
              { id: 'st-316', title: 'First draft', done: false },
            ],
          },
          {
            id: 'task-309',
            title: 'Design social media templates',
            subtasks: [
              { id: 'st-317', title: 'Create 5 layouts', done: false },
              { id: 'st-318', title: 'Review branding', done: false },
            ],
          },
          {
            id: 'task-310',
            title: 'Write newsletter copy',
            subtasks: [
              { id: 'st-319', title: 'Headline variations', done: false },
              { id: 'st-320', title: 'CTA test', done: false },
            ],
          },
          {
            id: 'task-311',
            title: 'Develop content upload workflow',
            subtasks: [
              { id: 'st-321', title: 'Automate scheduling', done: false },
              { id: 'st-322', title: 'Review drafts', done: false },
            ],
          },
          {
            id: 'task-312',
            title: 'Test social engagement automation',
            subtasks: [
              { id: 'st-323', title: 'Set Zapier rules', done: false },
              { id: 'st-324', title: 'Check logs', done: false },
            ],
          },
          {
            id: 'task-313',
            title: 'Collaborate with SEO team',
            subtasks: [
              { id: 'st-325', title: 'Align content calendar', done: false },
              { id: 'st-326', title: 'Update keywords', done: false },
            ],
          },
          {
            id: 'task-314',
            title: 'Review video script for ad campaign',
            subtasks: [
              { id: 'st-327', title: 'Add brand tone', done: false },
              { id: 'st-328', title: 'Final approval', done: false },
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
            subtasks: [
              { id: 'st-329', title: 'Collect stats', done: true },
              { id: 'st-330', title: 'Write report', done: true },
            ],
          },
          {
            id: 'task-316',
            title: 'Publish March newsletter',
            subtasks: [
              { id: 'st-331', title: 'Schedule post', done: true },
              { id: 'st-332', title: 'Verify links', done: true },
            ],
          },
          {
            id: 'task-317',
            title: 'Finalize content calendar Q2',
            subtasks: [
              { id: 'st-333', title: 'Approve topics', done: true },
              { id: 'st-334', title: 'Lock dates', done: true },
            ],
          },
          {
            id: 'task-318',
            title: 'Archive outdated assets',
            subtasks: [
              { id: 'st-335', title: 'Clean drive', done: true },
              { id: 'st-336', title: 'Update asset list', done: true },
            ],
          },
          {
            id: 'task-319',
            title: 'Launch new blog section',
            subtasks: [
              { id: 'st-337', title: 'Add layout', done: true },
              { id: 'st-338', title: 'QA review', done: true },
            ],
          },
          {
            id: 'task-320',
            title: 'Publish video case study',
            subtasks: [
              { id: 'st-339', title: 'Render final cut', done: true },
              { id: 'st-340', title: 'Post on YouTube', done: true },
            ],
          },
          {
            id: 'task-321',
            title: 'Finalize influencer contracts',
            subtasks: [
              { id: 'st-341', title: 'Legal review', done: true },
              { id: 'st-342', title: 'Sign agreements', done: true },
            ],
          },
        ],
      },
    ],
  },
];

export default boards;
