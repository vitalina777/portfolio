import type { Case } from './types';

const takraf: Case = {
  slug: 'takraf',
  number: '01',
  title: 'TAKRAF Customer Portal',
  subtitle: 'From RFP to a live portal: one secure place for machines that run for decades.',
  eyebrow: ['Industrial B2B', 'Customer portal', '2026'],
  category: 'Industrial B2B · 2026',
  cardTitle: 'TAKRAF: one secure portal for machines that run for decades',
  cardMeta: 'Won against dozens of vendors · Live with 3 customers',
  cover: { src: 'takraf/card.png', alt: 'TAKRAF portal: fleet list of mining machines with status counts, and a machine profile on a phone' },
  hero: { src: 'takraf/hero.png', alt: 'TAKRAF portal on desktop and mobile: the installed base list with five machines and a machine profile', ratio: '1860 / 1228' },
  snapshot: [
    { k: 'Client', v: 'TAKRAF · Leipzig, Germany' },
    { k: 'Industry', v: 'Industrial B2B · Mining aftermarket' },
    { k: 'My role', v: 'Product Designer (sole designer): pre-sale concept, discovery, UX, UI, design system' },
    { k: 'Team', v: '2–10 people across phases' },
    { k: 'Year', v: '2026' },
    { k: 'Platforms', v: 'Web · Tablet · Mobile · English & Spanish' },
  ],
  tldr: {
    challenge: "TAKRAF's aftermarket customers had fleet data, spare parts, manuals and service requests spread across separate systems.",
    did: 'Took the project from a pre-sale concept through two weeks of discovery workshops to 160+ build-ready screens, with a role-based access model, nine user flows and a bilingual design system.',
    outcome: 'The project was won against dozens of vendors and is now live with 3 customers across dozens of mine sites in Latin America. The QR codes I proposed ship on every new TAKRAF machine, and service requests now come in fully online.',
  },
  numbers: [
    { v: '3', l: 'Customers live' },
    { v: '1 scan', l: 'To reach a machine' },
    { v: '0', l: 'Major scope changes' },
    { v: '160+', l: 'Screens, EN & ES' },
    { v: '7', l: 'Roles, one portal' },
  ],
  sections: [
    {
      label: 'Challenge',
      heading: 'TAKRAF needed one place online for its aftermarket customers, built around the machines they own and keeping each company’s data safe.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'Challenge 01', title: 'Scattered tools', text: 'Fleet data, spare parts, manuals and service requests all sat in different systems.' },
        { eyebrow: 'Challenge 02', title: 'Strict security', text: 'Single sign-on, two-factor login and full data separation, without getting in the way of people on site.' },
        { eyebrow: 'Challenge 03', title: 'Many roles', text: 'Buyers, technicians and mine managers use the same portal, but each sees only their part of the fleet.' },
      ] }],
    },
    {
      label: 'Pre-sale concept',
      heading: 'Before the project started, I had only the RFP and the brand book. From these I made a UI concept that set the look of the whole product. It became part of the proposal that won the project against dozens of vendors.',
      lead: 'After discovery, the concept was reshaped around real needs: the menu went from seven items to four, and data fields were aligned with TAKRAF’s master data.',
      blocks: [
        { type: 'image', image: { src: 'takraf/concept-vs-final.png', alt: 'Pre-sale concept next to the screen after discovery: the menu shrank from seven items to four and fields match master data', caption: 'Pre-sale concept (left) and the same screen after discovery (right)' } },
        { type: 'cards', items: [
          { eyebrow: 'What changed', title: '7 → 4 menu items', text: 'We kept only the four things customers actually come to do.' },
          { eyebrow: 'What changed', title: 'Real data fields', text: 'Fields now match the master data: serial number, year commissioned, commodity.' },
          { eyebrow: 'What changed', title: 'Focused on the MVP', text: 'Health scores and reports moved to later phases.' },
        ] },
      ],
    },
    {
      label: 'Discovery & workshops',
      heading: 'In two weeks of workshops we turned a broad RFP into clear flows, data rules and an access model. At the end, we showed the client the happy path.',
      blocks: [
        { type: 'pills', numbered: true, items: ['Business landscape', 'Master data', 'Systems & integration', 'Identity & security', 'Roles & permissions'] },
        { type: 'image', image: { src: 'takraf/workshops.png', alt: 'Screenshots of remote discovery workshops: user flow diagrams and UI concepts reviewed with the TAKRAF team, faces blurred', caption: 'Remote review of the happy path with the TAKRAF team. Client faces are blurred for privacy.' } },
      ],
    },
    {
      label: 'Users & roles',
      heading: 'Seven roles, one portal. What you see depends on the sites and machines you’re assigned to, not on your job title.',
      lead: 'I split access into two axes: features are the same for everyone, and data is scoped by organisation, mine site and equipment. The complexity moved into the data model, so the interface could stay simple.',
      blocks: [
        { type: 'pills', items: ['Buyer', 'Technician', 'Operator', 'Workshop Manager', 'Mine Manager', 'AfterMarket', 'Administrator'] },
        { type: 'cards', columns: 2, items: [
          { eyebrow: 'Axis 1', title: 'Everyone gets the same features', text: 'Every role can browse the fleet, search parts, open documents, create and follow requests and get email updates. Only admins can manage users and access.' },
          { eyebrow: 'Axis 2', title: 'Each user sees only their data', text: 'Scoped by organisation → mine site → equipment. Two technicians at the same company can see different sites. Access follows what you’re responsible for.' },
        ] },
      ],
    },
    {
      label: 'User flows',
      heading: 'I mapped nine user flows before drawing any wireframes, including what happens when things go wrong.',
      lead: 'QR codes on the machines were my idea. On site, nobody wants to search a database: one scan takes a technician straight to the machine’s page, its documents and service requests, with every failure case designed explicitly. TAKRAF now puts the codes on every new machine and is adding them to older ones.',
      blocks: [
        { type: 'pills', numbered: true, items: ['Registration & approval', 'Login & MFA', 'QR scan', 'Browsing My Fleet', 'Equipment profile', 'Parts catalogue', 'Documentation', 'Service requests', 'Administration'] },
        { type: 'flow', badge: 'Featured flow', title: 'QR scan: one scan instead of ~6 steps of searching', steps: ['Scan QR on machine', 'Signed in?', 'Sign in + MFA', 'Resolve MDH ID', 'Entitled?', 'Equipment profile'], notes: [
          { title: 'Unknown ID', text: 'A clear “not found” message, so the user isn’t stuck.' },
          { title: 'No entitlement', text: 'Access is denied. Each company’s machines stay private.' },
          { title: 'Already signed in', text: 'Straight to the machine page. No extra steps on site.' },
        ] },
      ],
    },
    {
      label: 'Validation with domain experts',
      heading: 'I validated the clickable happy path with TAKRAF’s domain experts, mapped the three riskiest assumptions by role, and designed an answer to each into the flows.',
      lead: 'The same risk matrix is now the test plan for the live product, so every assumption has a clear way to be checked with real users.',
      blocks: [{ type: 'table', caption: 'Risk matrix: assumptions, risk by role and how each will be validated',
        head: ['Assumption & design answer', 'Buyer', 'Technician', 'Operator', 'Workshop Mgr', 'Priority', 'How we’ll validate'],
        rows: [
          ['H1 · Customers know a machine by its serial number. Answer: a customer-set alias, searchable everywhere', 'Low', 'High', 'High', 'Medium', 'Test next', 'Task: find TK1 without its serial number. After launch: share of searches by alias.'],
          ['H2 · One fleet list works for every role. Answer: customer and site in every row, plus a map', 'Low', 'Low', 'Medium', 'High', 'Test next', 'Task: a manager with two customers finds one site’s machines. Watch filter and map use.'],
          ['H3 · Requests start from the Service Requests section. Answer: request from the machine page, prefilled', 'High', 'High', 'High', 'Medium', 'Test first', 'Task: report a fault on TK1. Measure time and fields typed by hand.'],
        ],
        note: 'Risk for this role if the assumption is wrong: Low · Medium · High' }],
    },
    {
      label: 'Key design decisions',
      heading: 'Three risky assumptions, three design decisions built into the flows before development started.',
      blocks: [
        { type: 'decision', problemTag: 'Risk 01 · H1', problem: 'Customers may not know TAKRAF’s serial numbers. On site, machines often go by a nickname and a place.', meta: 'High risk for technicians and operators', decisionTitle: 'Customer-owned machine names', decision: 'Each machine gets an alias the customer sets. It shows in the fleet list and on the machine page, and search matches alias, serial number and site.', image: { src: 'takraf/decision-alias.png', alt: 'Zoomed machine profile: (1) customer-set alias, editable in place; (2) serial number and MDM ID kept for TAKRAF’s teams' } },
        { type: 'decision', flip: true, problemTag: 'Risk 02 · H3', problem: 'The person reporting a fault is usually next to the machine. Making them find it again in a blank form adds steps and errors.', meta: 'High risk for every role in the service flow', decisionTitle: 'Request from the machine page', decision: 'Machine, customer and site are filled in, so users only describe the problem. Seven request types, each with its own set of fields.', image: { src: 'takraf/decision-request.png', alt: 'Zoomed request form: (1) machine, serial number and requester filled in; (2) each request type brings its own fields; (3) machine status' } },
        { type: 'cards', columns: 2, items: [{ eyebrow: 'Risk 03 · H2', title: 'A fleet list for people with many sites', text: 'Workshop managers can look after machines for several customers. Each row shows the customer name and number, and a Location tab puts the fleet on a map.' }] },
      ],
    },
    {
      label: 'Deep dive: two decisions',
      heading: 'Two features that grew during delivery, and how I chose between the options.',
      blocks: [
        { type: 'decision', problemTag: 'Problem', problem: 'One generic form could not serve seven request types. Each type needs different data, from machine status to a parts list.', meta: '7 request types · 1 form pattern', decisionTitle: 'Shared fields + a block per type', decision: 'Equipment, subject, description and contact stay the same. Choosing a type swaps only its own block, and shared values are kept. Every type has its own default screen, validation and EN/ES text.', image: { src: 'takraf/deep-dive-form.png', alt: 'Zoomed form: (1) choosing a type swaps only its own block; (2) tick only the fields that are wrong; (3) current value shown, the user types the correct one' } },
        { type: 'decision', flip: true, problemTag: 'Problem', problem: 'Admins added equipment photos one machine at a time, but machines of one model look the same.', meta: 'Compared: copy per unit · bulk select · model-level inheritance', decisionTitle: 'One photo per model, exceptions per machine', decision: 'The photo can go to one machine or to the whole model. Machines inherit it (own photo → model photo → placeholder), so new machines get it automatically and custom photos stay.', image: { src: 'takraf/deep-dive-photo.png', alt: 'Zoomed photo drawer: (1) photo for this machine only; (2) or for the whole model, new machines inherit it' } },
      ],
    },
    {
      label: 'Design ops & handoff',
      heading: 'The Figma file is easy for the whole team to use: clear pages, design tokens, and 478 text variables that switch the whole UI to Spanish in one click and reach developers as a ready JSON file.',
      blocks: [
        { type: 'stats', items: [
          { v: '478', l: 'Text variables, EN and ES' },
          { v: '24', l: 'Colour tokens' },
          { v: '26', l: 'Text styles' },
          { v: '11', l: 'Pages, research to UI' },
        ] },
        { type: 'table', caption: 'Localisation: text variables with English and Spanish values', head: ['Name', 'EN', 'ES'], rows: [
          ['signin-email / title', 'Sign in to your account', 'Inicia sesión en tu cuenta'],
          ['signin-email / button', 'Continue', 'Continuar'],
          ['common / search-site', 'Search by ID, name, or site', 'Buscar por ID, nombre o sede'],
          ['common / what-would-you-like', 'What would you like to do?', '¿Qué te gustaría hacer?'],
          ['registration / label-surname', 'Surname', 'Apellido'],
        ], note: 'Every piece of UI text is a variable. Designers switch the mode instead of copying text, and developers got the same strings as JSON. 37 content groups.' },
      ],
    },
    {
      label: 'States & edge cases',
      heading: 'Together with developers, I designed every state a flow can be in: errors, success, expired sessions and no access.',
      blocks: [{ type: 'images', images: [
        { src: 'takraf/state-validation.png', alt: 'Request form with validation errors under required fields', caption: 'Validation errors' },
        { src: 'takraf/state-success.png', alt: 'Administration list with a success toast after approving a user', caption: 'Success toast' },
      ] }],
    },
    {
      label: 'Visuals',
      heading: 'The final UI for every Phase 1 module. Desktop first, adapted for smaller screens, in English and Spanish.',
      blocks: [
        { type: 'image', image: { src: 'takraf/service-requests.png', alt: 'Service requests: a request list, a request detail with status and history from the CRM', caption: 'Service requests: create a request for a machine, then follow its status and history from the CRM.' } },
        { type: 'image', image: { src: 'takraf/en-es.png', alt: 'The same fleet screen in English and Spanish side by side', caption: 'Every screen in both Phase 1 languages, checked with longer Spanish text.' } },
      ],
    },
    {
      label: 'Results',
      heading: 'Live in production with 3 customers across dozens of mine sites, built on a concept that won the project.',
      blocks: [
        { type: 'outcomes', items: [
          { title: 'Won the project', text: 'My pre-sale concept, made from just the RFP and the brand book, was part of the proposal that won against dozens of vendors.' },
          { title: 'Live with 3 customers', text: 'Three customers in Latin America use the portal across dozens of mine sites.' },
          { title: 'QR codes on every new machine', text: 'My idea became TAKRAF’s standard: new machines ship with codes, and older ones are being retrofitted. One scan replaces ~6 steps of searching.' },
          { title: 'Request intake fully online', text: 'Requests come in with the machine, serial number and site filled in. Processing takes 0–5 minutes: some no longer need support at all, others only a quick check with the customer.' },
          { title: 'No scope changes after discovery', text: 'Flows and features were signed off in one review round. Every state was designed upfront, so developers built without blocking questions.' },
          { title: 'Localisation without retyping', text: '478 strings went to developers as JSON in English and Spanish. By my estimate, that saved ~2 developer-days and removed copy mismatches.' },
        ] },
        { type: 'quotes', label: 'What the client said', items: [
          { quote: 'The design fits our brand perfectly, and it did from the very first version. It already feels like a TAKRAF product.', who: 'Marketing, TAKRAF' },
          { quote: 'The workshops were focused and useful. A few days later we saw our input turned into clear designs.', who: 'Aftermarket business owner, TAKRAF' },
          { quote: 'Every design choice came with a clear reason. That made it easy to get our business and security teams on the same page.', who: 'Digital & IT lead, TAKRAF' },
        ] },
        { type: 'list', label: 'What’s next for design', items: [
          { title: 'Measure in production', text: 'A usability round with live customers on the tasks from the risk matrix: task success, time to find a part and SUS.' },
          { title: 'Better mobile for the field', text: 'Faster QR scans, one-handed use and screens that work on a weak connection.' },
          { title: 'Grow the design system', text: 'Usage guidelines for each component, linked to code with Code Connect.' },
          { title: 'Test accessibility in production', text: 'WCAG 2.2 AA with a keyboard, screen readers, voice control and zoom.' },
        ] },
      ],
    },
  ],
  next: 'allyz',
};

const allyz: Case = {
  slug: 'allyz',
  number: '02',
  title: 'allyz: leading accessibility across web and app',
  subtitle: 'With the European Accessibility Act coming into force, I led accessibility for allyz: one process for every vertical, our own audits, design fixes and a team of designers. When Siteimprove audited the app, our self-audit had already covered most of what it found.',
  eyebrow: ['Insurtech · B2C', 'Allianz Partners', 'Web & app'],
  category: 'Insurtech · B2C · Allianz Partners · 2025',
  cardTitle: 'allyz: leading accessibility across web and app',
  cardMeta: 'EAA 2025 · WCAG 2.2 AA · 65% → 93% of AA criteria',
  cover: { src: 'allyz/card.png', alt: '' },
  coverBg: 'linear-gradient(160deg, #EEEAF8, #E2DBF3)',
  hero: { src: 'allyz/hero.png', alt: 'allyz accessibility overview: WCAG 2.2 AA checklist for web and app', ratio: '16 / 9' },
  snapshot: [
    { k: 'Client', v: 'Allianz Partners · allyz' },
    { k: 'Industry', v: 'Insurtech · Travel, health & digital services' },
    { k: 'My role', v: 'Lead designer for accessibility across all verticals' },
    { k: 'Team', v: '5 verticals: I owned 2, and 3 more designers followed the process I set up' },
    { k: 'Driver & year', v: 'European Accessibility Act · 2025' },
    { k: 'Platforms', v: 'Web · iOS & Android app' },
  ],
  tldr: {
    challenge: 'The European Accessibility Act turned accessibility into a legal requirement, while each allyz vertical designed in its own way and issues were scattered across files and teams.',
    did: 'Set up one process for all verticals: WCAG-based self-audits in Figma, one place for every issue, group-level solutions agreed with PO, BA and developers, and fixes built into the Allyz Next design system.',
    outcome: 'WCAG 2.2 AA coverage grew from 65% to 93% across priority journeys, and the fixes reached all 5 verticals through the design system before the EAA deadline, without waiting 4–5 months for the agency report.',
  },
  numbers: [
    { v: '65→93%', l: 'AA criteria passed' },
    { v: '~80→~95', l: 'Lighthouse accessibility' },
    { v: '5', l: 'Verticals, one process' },
    { v: '21', l: 'Component groups audited' },
    { v: '12 of 18', l: 'Audit findings already covered' },
  ],
  sections: [
    {
      label: 'Context',
      heading: 'allyz is Allianz Partners’ app for travel, health and digital services. When the European Accessibility Act came into force, accessibility stopped being a nice-to-have.',
      lead: 'Policies, trips, claims, the document Vault, hospital finder, medical translator and symptom checker all had to work for people using screen readers, keyboards and larger text, on the web and in the app.',
    },
    {
      label: 'My role',
      heading: 'I was the lead designer for accessibility. I set up the process and ran the audits myself, then led the designers across verticals, so every team solved the same problem the same way.',
      blocks: [{ type: 'cards', columns: 4, items: [
        { eyebrow: '01', title: 'Set the process', text: 'From self-audit to delivery, the same steps for every vertical.' },
        { eyebrow: '02', title: 'Ran the audits', text: 'Colour contrast, text size and keyboard control on web and app.' },
        { eyebrow: '03', title: 'Aligned decisions', text: 'Group-level solutions agreed with PO, BA and developers.' },
        { eyebrow: '04', title: 'Led the team', text: 'Shared rules and reviews for the designers of every vertical, so fixes stayed consistent.' },
      ] }],
    },
    {
      label: 'Process',
      heading: 'One loop for every vertical, so an issue found anywhere was solved once and fixed everywhere.',
      blocks: [{ type: 'steps', items: [
        { title: 'Self-audit', text: 'Designers audit their screens in Figma against WCAG success criteria.' },
        { title: 'Collect', text: 'Every issue goes to one Figma file, grouped by success criterion.' },
        { title: 'Review', text: 'Issues are reviewed together and the root cause is found.' },
        { title: 'Group solution', text: 'One solution, agreed with PO, BA and developers.' },
        { title: 'Deliver', text: 'Design proposal handed to developers and built into the design system.' },
      ], note: 'Audit loop: findings from the independent audit entered the same flow at “Collect”, so they were categorised, solved and delivered the same way as our own.' }],
    },
    {
      label: 'Organised in Figma',
      heading: 'Every finding, decision and fix lived in one Figma file, structured by WCAG success criterion, so any designer could see what was found, what was decided and what was shipped.',
      blocks: [
        { type: 'cards', columns: 4, items: [
          { eyebrow: 'Planning', text: 'Planning · Process · Metrics · Manual testing scope' },
          { eyebrow: 'Self-audit', text: '1.4.3 · 1.4.11 Colour contrast, app & web · Typography & 200% text · 2.1 Keyboard, web & app' },
          { eyebrow: 'Independent audit', text: 'Registration screen · Dashboard · Issues grouped by success criterion' },
          { eyebrow: 'Source of truth', text: 'New design after approval · Old pages frozen · Design workspace for exploration · Archive for outdated flows' },
        ] },
        { type: 'image', image: { src: 'allyz/figma-file.png', alt: 'The allyz accessibility Figma file: pages for planning, self-audit by WCAG criterion and the independent audit', caption: 'One Figma file for every finding, decision and fix.' } },
        { type: 'images', images: [
          { src: 'allyz/keyboard-conclusion.png', alt: 'Keyboard audit conclusion: missing, invisible and duplicated focus states on real allyz pages', caption: 'Overall conclusion of the keyboard audit: missing, invisible and duplicated focus states.' },
          { src: 'allyz/keyboard-pages.png', alt: 'Keyboard audit across every page of the travel website and three health widgets', caption: 'The keyboard audit across the travel website and three health widgets.' },
        ] },
      ],
    },
    {
      label: 'Testing setup',
      heading: 'Automated checks catch the obvious; people catch the rest. We used both, on a steady rhythm.',
      blocks: [
        { type: 'cards', items: [
          { eyebrow: 'Automated', title: 'Tools on every build', text: 'Axe, WAVE and Lighthouse for the quick, repeatable checks.' },
          { eyebrow: 'Manual', title: 'Siteimprove, every two weeks', text: 'A few pages per sprint, tested by hand against WCAG 2.2.' },
          { eyebrow: 'Central', title: 'One place for issues', text: 'Every finding collected in Figma, by success criterion, for all verticals.' },
        ] },
        { type: 'list', label: 'Manual testing priorities in the app', items: [
          { title: '1 · Account creation', text: 'Register a new account' },
          { title: '2 · Dashboard', text: 'Reach every element' },
          { title: '3 · Code verification', text: 'Verify a code to add a policy' },
          { title: '4 · Policy consultation', text: 'Access all policy information' },
          { title: '5 · Trip creation', text: 'Create a new trip' },
          { title: '6 · Add a flight', text: 'Add a flight to a trip' },
        ] },
        { type: 'cards', columns: 4, items: [
          { eyebrow: 'Testing sessions I ran', title: 'Keyboard only', text: 'Every flow without a mouse: focus order, visible focus and no traps.' },
          { eyebrow: 'Testing sessions I ran', title: 'Voice control', text: 'Navigating and filling forms by voice commands.' },
          { eyebrow: 'Testing sessions I ran', title: 'Zoom to 200%', text: 'Text and layouts checked at double size for clipping and overlap.' },
          { eyebrow: 'Testing sessions I ran', title: 'External keyboard on phones', text: 'The mobile app driven by a keyboard connected to iOS and Android.' },
        ] },
      ],
    },
    {
      label: 'Self-audit',
      heading: 'We audited the design system and real screens in Figma against three groups of criteria: colour contrast, text size and keyboard control.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'SC 1.4.3 · 1.4.11', title: 'Colour contrast', text: '21 component groups in the app, plus web components and screens: buttons, inputs, cards, badges, checkboxes, dropdowns, tab bar, navigation, modals, icons and more. Text needs 4.5:1, UI boundaries 3:1.' },
        { eyebrow: 'SC 1.4.4 · 1.4.12', title: 'Text size & spacing', text: 'Every style tested at 200% and on 320 px screens, with line height 1.5× and letter spacing 0.12× the font size.' },
        { eyebrow: 'SC 2.1.1 · 2.4.7', title: 'Keyboard control', text: 'Travel web plus three health widgets (Hospital finder, Medical translator, Symptom checker) and the claim flow in the app. Found: two different focus states on one element, two Tab presses to open one answer, focus lost in pop-ups.' },
      ] }],
    },
    {
      label: 'Fixes in the design system',
      heading: 'Instead of patching screens one by one, we fixed the tokens and components, so every vertical got the fix at once.',
      blocks: [
        { type: 'tokens', items: [
          { from: 'Emerald 500', to: 'Emerald 700', text: 'Green text and success states. Emerald 600 (3.9:1) stays for icons, which need only 3:1.', swatches: [{ name: 'Emerald 700', hex: '#227344', ratio: '5.8:1', pass: true }] },
          { from: 'Slate 500', to: 'Slate 600', text: 'Secondary text and icons. Slate 500 stays for borders, where 3:1 is enough.', swatches: [{ name: 'Slate 500', hex: '#687C98', ratio: '4.3:1', pass: false }, { name: 'Slate 600', hex: '#456D84', ratio: '5.6:1', pass: true }] },
          { from: 'Badge colours', to: 'Ruby 900', text: 'Badge text on tinted backgrounds.', swatches: [{ name: 'Ruby 900 on Ruby 100', hex: '#831841', bg: '#FEE5E9', ratio: '8.1:1', pass: true }] },
        ] },
        { type: 'cards', items: [
          { title: 'One focus style', text: 'A single purple focus ring for every interactive element, instead of two competing styles.' },
          { title: '24×24 targets', text: 'Minimum target size for every control, including icon buttons.' },
          { title: 'Required fields marked', text: 'An asterisk on required fields, with clear error text and suggestions.' },
          { title: 'Links underlined', text: 'Links never rely on colour alone.' },
          { title: 'Clear password icon', text: 'Eye closed for hidden, eye open for visible, with no ambiguous strike line.' },
          { title: 'Stronger borders', text: 'Input and card borders that meet 3:1 non-text contrast.' },
        ] },
      ],
    },
    {
      label: 'Independent audit',
      heading: 'We didn’t wait for the independent audit, and our self-audit had already covered 12 of its 18 findings.',
      lead: 'Siteimprove’s audit of account creation (May 2025) flagged 18 WCAG criteria. Our self-audit had already covered 12 of them, from contrast to keyboard focus, and the contrast fix was in progress. I turned the other design-side findings into design system fixes (required markers, clear eye icons) and handed the code-side ones to developers, so every vertical got them at once.',
      blocks: [
        { type: 'steps', items: [
          { title: 'Audit requested', text: 'An independent agency is asked to audit the app.' },
          { title: 'We don’t wait', text: 'Deadlines are tight, so we run our own audit in parallel.' },
          { title: 'Fixes shipped', text: 'Design system updated and changes built into the product.' },
          { title: 'Report arrives', text: '18 criteria flagged; 12 were already covered by our self-audit.' },
          { title: 'The rest', text: 'Design-side findings became design system fixes; code-side ones went to developers.' },
        ] },
        { type: 'cards', items: [
          { eyebrow: '1.4.3', title: 'Contrast', text: 'Green text moved from Emerald 500 to 700; greys darkened wherever they failed.' },
          { eyebrow: '2.1.1 · 2.4.7', title: 'Keyboard & focus', text: 'A visible focus state designed for every control.' },
          { eyebrow: '1.3.1 · 1.3.2 · 4.1.2 · 4.1.3', title: 'Page structure', text: 'Headings, reading order, names, roles and status messages defined in the design.' },
          { eyebrow: '2.4.6 · 1.3.5 · 3.3.1–3.3.3', title: 'Forms', text: 'Labels, input purpose, required markers, error identification and suggestions.' },
          { eyebrow: '1.1.1 · 1.4.1 · 1.4.11', title: 'Graphics & colour', text: 'Clear eye icons, underlined links and stronger borders.' },
          { eyebrow: '1.4.4 · 1.3.4 · 2.5.8', title: 'Adaptability', text: 'Text resizing, both orientations and 24×24 targets.' },
        ] },
        { type: 'image', image: { src: 'allyz/audit-report.png', alt: 'Excerpt of the Siteimprove pass/fail report for account creation in the allyz app', caption: 'An excerpt of the Siteimprove audit of account creation in the app, May 2025: 18 WCAG criteria flagged, 12 of them already covered by our self-audit.' } },
      ],
    },
    {
      label: 'Measuring accessibility',
      heading: 'I defined how we measure accessibility, so progress was tracked across design, front-end development and delivery, not just felt.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'Criteria met', title: '65% → 93% of AA criteria', text: 'Share of WCAG 2.2 AA criteria passed across priority journeys, checked with Axe, WAVE, Lighthouse and manual tests.' },
        { eyebrow: 'Automated score', title: '~80 → ~95 in Lighthouse', text: 'Accessibility score on key pages of web and app, re-run on every build to catch regressions.' },
        { eyebrow: 'Across the pipeline', title: 'Design · FE development · Delivery', text: 'The same metrics used at every stage, so issues are caught before release.' },
      ] }],
    },
    {
      label: 'Results',
      heading: 'WCAG 2.2 AA coverage grew from 65% to 93%, and the fixes shipped before the European Accessibility Act deadline.',
      blocks: [{ type: 'outcomes', items: [
        { title: '65% → 93% of AA criteria', text: 'Measured across priority journeys on web and app, with automated tools and hands-on testing.' },
        { title: 'Ready before the EAA deadline', text: 'Fixes were in production before June 2025, instead of waiting 4–5 months for the agency report.' },
        { title: 'Ahead of the independent audit', text: 'Our self-audit had already covered 12 of the 18 criteria Siteimprove flagged. The rest went through the same process.' },
        { title: 'Fixed once, in 5 verticals', text: 'Token and component changes in Allyz Next reached web and app for all 5 verticals at once.' },
      ] }],
    },
  ],
  next: 'cleanconnect',
};

const cleanconnect: Case = {
  slug: 'cleanconnect',
  number: '03',
  title: 'CleanConnect.ai: making emissions data clear for energy operators',
  subtitle: 'Expanding a data-heavy B2B platform with new features for emissions monitoring, incident management and tradable energy certificates, inside an established design system.',
  eyebrow: ['Energy · Climate tech', 'AI SaaS'],
  category: 'B2B · Energy · AI SaaS',
  cardTitle: 'CleanConnect.ai: making emissions data clear for energy operators',
  cardMeta: 'Every feature live · 2 pilots from partner demos',
  cover: { src: 'cleanconnect/card.png', alt: 'CleanConnect carbon accounting dashboard with daily CO₂ totals and a bar chart' },
  coverBg: 'linear-gradient(160deg, #E6F0EA, #D7E8DE)',
  hero: { src: 'cleanconnect/hero.png', alt: 'CleanConnect dashboards for emissions monitoring', ratio: '16 / 9' },
  snapshot: [
    { k: 'Client', v: 'CleanConnect.ai' },
    { k: 'Industry', v: 'Energy · Emissions monitoring · AI SaaS' },
    { k: 'My role', v: 'Product Designer: feature decomposition, concepts, interactive prototypes, final UI within the existing design system' },
    { k: 'Products', v: 'Luminary · Symmetry · Sensory · EnerGPT · Minerva' },
    { k: 'Team', v: '~20' },
    { k: 'Year', v: '2025' },
  ],
  tldr: {
    challenge: 'Turn complex technical and environmental data, from methane leaks to energy certificates, into screens operators can understand and act on, without breaking an established design system.',
    did: 'Designed new data-heavy features across several sub-products: feature decomposition, happy-path concepts for client presentations, interactive prototypes, and 62+ pages of final UI with edge cases and states.',
    outcome: 'Every feature I designed is live across 5 products. Concepts took 2–3 days instead of 1–2 weeks, most were approved in 1–2 rounds, and partner demos built on them led to 2 pilot agreements.',
  },
  numbers: [
    { v: '62+', l: 'Pages designed' },
    { v: '5', l: 'Products, all features live' },
    { v: '2–3 days', l: 'Per concept, not 1–2 weeks' },
    { v: '2', l: 'Pilots from partner demos' },
  ],
  sections: [
    {
      label: 'About',
      heading: 'CleanConnect.ai helps energy companies monitor emissions, detect leaks and manage operations using measured data instead of estimates.',
      lead: 'I joined when the design system was already in place. My job was to expand the platform with new, data-heavy functionality and keep every new feature consistent with what already existed.',
    },
    {
      label: 'Goals',
      heading: 'Four goals shaped every feature I worked on.',
      blocks: [{ type: 'cards', columns: 4, items: [
        { eyebrow: 'Goal 01', title: 'Fast, clear interfaces', text: 'Design quickly so the team can move the product forward without delays.' },
        { eyebrow: 'Goal 02', title: 'Concepts for new features', text: 'Simple visual concepts clients can present to their partners.' },
        { eyebrow: 'Goal 03', title: 'Complex data, made clear', text: 'Technical and environmental data operators can understand and act on.' },
        { eyebrow: 'Goal 04', title: 'One consistent product', text: 'Every new design looks and feels like the rest of the platform.' },
      ] }],
    },
    {
      label: 'Sub-projects',
      heading: 'I worked across the ecosystem, turning highly technical workflows into screens that operators and partners could understand.',
      lead: 'The platform turns measured energy and emissions data into insights for industrial operators. I designed new features across its 5 products, keeping each one consistent with the established design system and both brand themes.',
      blocks: [{ type: 'image', image: { src: 'cleanconnect/sub-projects.png', alt: 'CleanConnect ecosystem map: products grouped into feature map, measure and monetize', caption: 'The CleanConnect ecosystem: feature map, measure and monetize.' } }],
    },
    {
      label: 'Feature map',
      heading: 'Before designing, I decomposed each feature into user actions and states, so nothing was left for developers to guess.',
      lead: 'For Method 22 inspections this meant mapping tenants with and without the Sensory app, device activation, video upload for report generation, alerts, editing, exporting and history. Reports are now generated from uploaded video in minutes instead of hours of manual paperwork.',
      blocks: [{ type: 'image', image: { src: 'cleanconnect/feature-map.png', alt: 'Method 22 feature decomposition: tenant paths with and without the Sensory app, device activation, video upload, report review, editing, export, alerts and history log', caption: 'Method 22 feature decomposition: every user action and state before any screen was drawn.' } }],
    },
    {
      label: 'Concept development',
      heading: 'With a ready design system, I built concepts straight from existing components: a quick happy path first, then edge cases and detailed states after approval.',
      blocks: [{ type: 'image', image: { src: 'cleanconnect/concepts.png', alt: 'Happy-path concepts for new CleanConnect features built from existing design system components', caption: 'Happy-path concepts, built from existing components in 2–3 days.' } }],
    },
    {
      label: 'Prototypes & stakeholder alignment',
      heading: 'Interactive prototypes gave clients a working vision of each feature before anyone invested in the details.',
      blocks: [
        { type: 'cards', columns: 2, items: [
          { eyebrow: 'Prototyping goal', text: 'Show a clear, functional vision of the feature with the existing design system, focusing on a clean happy path to confirm the direction early.' },
          { eyebrow: 'Stakeholder alignment', text: 'Presenting prototypes to clients and partners brought early feedback and checked business, technical and user needs. Most concepts were approved in 1–2 review rounds, and partner demos built on them led to 2 pilot agreements.' },
        ] },
        { type: 'image', image: { src: 'cleanconnect/prototypes.png', alt: 'Interactive prototype screens presented to clients and partners', caption: 'Prototypes used in client and partner demos.' } },
      ],
    },
    {
      label: 'Design system',
      heading: 'Several style guides and two brand themes, blue and green, across product lines, and every new feature had to feel native to each.',
      blocks: [
        { type: 'palette', label: 'Core palette', colors: ['#02060A', '#384A65', '#E1E6EF', '#1EC55A', '#F5F6F9', '#FFFFFF'] },
        { type: 'image', image: { src: 'cleanconnect/design-system.png', alt: 'CleanConnect design system components in blue and green brand themes', caption: 'Components shared across two brand themes.' } },
      ],
    },
    {
      label: 'Visual design',
      heading: 'The final UI: dense operational data, certificates and calculators, each made readable at a glance.',
      blocks: [
        { type: 'image', image: { src: 'cleanconnect/ui-carbon.png', alt: 'Carbon accounting dashboard with daily CO₂ totals, intensity and a bar chart', caption: 'Carbon accounting dashboard.' } },
        { type: 'images', images: [
          { src: 'cleanconnect/ui-operations.png', alt: 'Global operations overview across facilities', caption: 'Global operations.' },
          { src: 'cleanconnect/ui-impact.png', alt: 'Environmental impact overview with emissions breakdown', caption: 'Environmental impact.' },
        ] },
        { type: 'images', images: [
          { src: 'cleanconnect/ui-certificates.png', alt: 'Energy certificate overview with balances and status', caption: 'Certificate overview.' },
          { src: 'cleanconnect/ui-cert-management.png', alt: 'Certificate management table with filters', caption: 'Certificate management.' },
        ] },
        { type: 'image', image: { src: 'cleanconnect/ui-blended-eec.png', alt: 'Blended energy certificate assignment calculator', caption: 'Blended EEC assignment.' } },
      ],
    },
    {
      label: 'Outcome',
      heading: 'Every feature I designed is live across 5 products, from first concept to detailed states.',
      blocks: [{ type: 'outcomes', items: [
        { title: 'Concepts in 2–3 days', text: 'Happy-path prototypes from existing components, instead of 1–2 weeks per concept.' },
        { title: 'Approved in 1–2 rounds', text: 'Clients and partners agreed on direction before detailed design began.' },
        { title: '2 pilot agreements', text: 'Partners saw the features in my concept demos before they were built.' },
      ] }],
    },
  ],
  next: 'liki24',
};

const liki24: Case = {
  slug: 'liki24',
  number: '04',
  title: 'Liki24: why users abandon checkout',
  subtitle: 'A research sprint for a Ukrainian pharmacy delivery platform: from 29 in-depth interviews to tested checkout improvements.',
  eyebrow: ['B2C · Pharmacy delivery', 'Projector study project'],
  category: 'B2C · Pharmacy delivery',
  tag: 'Research case',
  cardTitle: 'Liki24: why users abandon checkout',
  cardMeta: '29 interviews · 6 hypotheses · Usability testing',
  cover: { src: 'liki24/card.png', alt: 'Liki24 pharmacy catalogue with a cart drawer open' },
  coverBg: 'linear-gradient(160deg, #E3F1F2, #D2E8EA)',
  hero: { src: 'liki24/hero.png', alt: 'Liki24 checkout research overview', ratio: '16 / 9' },
  snapshot: [
    { k: 'Client', v: 'Liki24 · Ukraine' },
    { k: 'Format', v: 'Projector study project on a real product: real brief, real users' },
    { k: 'Industry', v: 'E-commerce · Healthcare' },
    { k: 'My role', v: 'Product Designer: interviews, synthesis, ideation, prototyping, usability testing' },
    { k: 'Team', v: '6 product designers' },
    { k: 'Year', v: '2022' },
  ],
  tldr: {
    challenge: 'Users added medicines to their cart and left at checkout. Conversion fell to less than half, and wartime curfews that limited night delivery pushed it to around 30%.',
    did: 'Ran 5 of the team’s 29 in-depth interviews, mapped pains with CJM and the Value Proposition Canvas, prioritised ideas by impact and feasibility, and turned them into hypotheses with metrics, prototypes and usability tests.',
    outcome: 'Four teams worked on the same brief, and the stakeholder selected all of our solutions for further development.',
  },
  numbers: [
    { v: '29', l: 'In-depth interviews' },
    { v: '5', l: 'Interviews by me' },
    { v: '6', l: 'Hypotheses with metrics' },
    { v: '20–30%', l: 'Target cut in checkout errors' },
  ],
  sections: [
    {
      label: 'Problem',
      heading: 'People found their medicines, added them to the cart, and then left at checkout.',
      lead: 'Liki24 connects customers with pharmacies for search, ordering and fast home delivery. Checkout conversion had dropped to less than half, and after wartime curfews limited night delivery, it fell to around 30%. The team needed to understand why, and what to change first.',
    },
    {
      label: 'Design process',
      heading: 'Four stages, from the stakeholder briefing to tested prototypes.',
      blocks: [{ type: 'steps', items: [
        { title: 'Discover · Understand', text: 'Stakeholder briefing, business research, recruiting and in-depth user interviews.' },
        { title: 'Define · Make sense', text: 'Customer Journey Map and Value Proposition Canvas, turned into a list of pains and opportunities.' },
        { title: 'Develop · Generate', text: 'Ideation, prioritisation and hypotheses built on the defined problems.' },
        { title: 'Deliver · Prove', text: 'Interactive prototypes, usability tests and final recommendations for the stakeholder.' },
      ] }],
    },
    {
      label: 'Research setup',
      heading: 'Before the interviews, we got the business context from the stakeholder and found the right people to talk to.',
      blocks: [
        { type: 'media', textFirst: true, framed: true, eyebrow: 'Stakeholder briefing', title: 'What the business needed', text: 'We prepared questions about the company, its goals, users and competitors, interviewed the client, then transcribed the answers and highlighted what mattered. That kept the research tied to real business goals. The screenshots are blurred on purpose: they contain confidential company data.', image: { src: 'liki24/briefing.png', alt: 'Blurred stakeholder briefing notes with highlighted key points', ratio: '683 / 177' } },
        { type: 'media', textFirst: true, framed: true, eyebrow: 'Recruiting & sampling', title: 'Who we talked to', text: 'We described the people we needed to hear from and built a screener in Google Forms. Shared through social media, it found Liki24 customers and users of competitor platforms ready to talk about their experience.', image: { src: 'liki24/recruiting.png', alt: 'Recruiting persona notes and a spreadsheet of screener responses', ratio: '683 / 222' } },
      ],
    },
    {
      label: 'Business goals',
      heading: 'Before talking to users, we aligned with the stakeholder on what the business needed and how we would measure it.',
      blocks: [
        { type: 'list', label: 'SMART objectives', items: [
          { title: 'Specific', text: 'Improve the end-to-end medicine ordering flow.' },
          { title: 'Measurable', text: 'Reduce user errors during checkout by 20–30% and increase task completion.' },
          { title: 'Achievable', text: 'Base every solution on research insights and validated usability issues.' },
          { title: 'Relevant', text: 'Improve clarity, delivery options and overall usability of the flow.' },
          { title: 'Time-bound', text: 'Deliver improved flow concepts and a tested prototype within 8 weeks.' },
        ] },
        { type: 'cards', columns: 4, items: [
          { eyebrow: 'Quick wins · high value, low effort', text: 'Fix checkout errors. Improve delivery flow clarity.' },
          { eyebrow: 'Big bets · high value, high effort', text: 'Checkout flow redesign. Simplify the multi-step delivery selection.' },
          { eyebrow: 'Fill-ins · low value, low effort', text: 'Small UI polish.' },
          { eyebrow: 'Not now · low value, high effort', text: 'Internal operational workflows. Deep pharmacy-side logic automation.' },
        ] },
      ],
    },
    {
      label: 'User interviews',
      heading: '29 in-depth interviews, 5 of them mine, to learn why people abandon checkout and how their buying habits changed since the pandemic.',
      lead: 'We spoke with Liki24 customers and users of competitor platforms, then built personas around the patterns that kept coming up: unclear delivery options, items becoming unavailable at the last step, and confusing checkout steps.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'Question 01', title: 'What gets in the way', text: 'Issues and difficulties people run into when buying medicine online.' },
        { eyebrow: 'Question 02', title: 'Why people leave', text: 'The reasons users drop out of checkout before completing an order.' },
        { eyebrow: 'Question 03', title: 'What changed', text: 'How buying habits changed since the pandemic began.' },
      ] }, { type: 'cards', columns: 2, items: [
        { eyebrow: '32 · Kyiv · High digital literacy', title: 'Olena K.', text: 'Orders medicine online for herself and her family. Values speed, clarity and reliability, and compares prices across pharmacies. Goals: find the right medicine at the best price, understand delivery time and cost, finish the order without confusion. Frustrations: unclear delivery options, items becoming unavailable at the last step, confusing steps and hidden fees.' },
        { eyebrow: '45 · Lviv · Moderate digital literacy', title: 'Mykola P.', text: 'Orders medicine for his parents and needs a simple, predictable experience he can trust without double-checking. Goals: order for family fast and without errors, know which pharmacy delivers and when. Frustrations: delivery time changing during checkout, hard-to-understand substitutions, no clear availability before checkout.' },
      ] }],
    },
    {
      label: 'Value Proposition Canvas',
      heading: 'We coded every interview into jobs, pains and gains, and counted how often each one came up.',
      lead: 'Counting frequency kept the team honest: the loudest story in one interview did not outweigh a pain that ten people mentioned quietly.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'Jobs', text: 'Find the right medicine at the best price. Know when and how it will arrive. Order for the whole family in one go.' },
        { eyebrow: 'Pains', text: 'Unclear delivery options and schedules. Items disappearing at the last step. Hidden fees and changing totals.' },
        { eyebrow: 'Gains', text: 'Speed and a predictable flow. Clear, honest delivery information. Trust without double-checking.' },
      ] }],
    },
    {
      label: 'Ideation & prioritisation',
      heading: 'We grouped insights into platform features, generated ideas, and kept only those with the highest impact on users and realistic feasibility.',
      lead: 'Every idea was scored on two factors, impact on users and feasibility of implementation, so the hypotheses focused on what would help people most and could realistically ship.',
      blocks: [{ type: 'image', image: { src: 'liki24/ideation.png', alt: 'Ideation board: insights grouped into platform features with ideas prioritised by impact and feasibility', caption: 'Insights grouped into features, then prioritised by impact and feasibility.' } }],
    },
    {
      label: 'Hypotheses & solutions',
      heading: 'Every solution started as a hypothesis with a metric that would prove it right or wrong.',
      lead: 'Six solutions came out of the research: clear cart feedback, a step-by-step delivery choice, a more useful pharmacy map, visible loading states, choosing amount and packaging in checkout, and relevant offers.',
      blocks: [
        { type: 'media', eyebrow: 'Solution 01', title: 'Clear cart feedback', image: { src: 'liki24/solution-01.png', alt: 'Prototype screens showing clear confirmation when a medicine is added to the cart', ratio: '760 / 381' }, rows: [
          { k: 'Problem', v: 'People added the same medicine several times without noticing: the button switched back from “In cart” to “Buy” on the details page.' },
          { k: 'Hypothesis', v: 'Clear confirmation every time an item is added will stop accidental duplicates.' },
          { k: 'Metric', v: 'Fewer orders with unintended duplicates and more confidence in what’s in the cart.' },
        ] },
        { type: 'media', eyebrow: 'Solution 02', title: 'Step-by-step delivery choice', image: { src: 'liki24/solution-02.png', alt: 'Checkout split into clear steps with a visual comparison of delivery options', ratio: '760 / 462' }, rows: [
          { k: 'Problem', v: 'It was hard to pick a delivery service based on its schedule.' },
          { k: 'Hypothesis', v: 'Splitting checkout into clear steps, with plain names and a visual comparison of delivery options, will reduce errors and lift conversion.' },
          { k: 'Metric', v: 'Fewer errors and ambiguous moments during ordering, and more completed checkouts.' },
        ] },
        { type: 'media', eyebrow: 'Solution 03', title: 'A more useful pharmacy map', image: { src: 'liki24/solution-03.png', alt: 'Pharmacy map screens with richer details for self-pickup', ratio: '760 / 361' }, rows: [
          { k: 'Problem', v: 'The pharmacy map lacked information, so it was hard to tell which pharmacy was selected and whether it suited.' },
          { k: 'Hypothesis', v: 'Richer pharmacy details for self-pickup will help people decide faster and choose pickup more often.' },
          { k: 'Metric', v: 'A higher share of self-pickup orders and faster decisions.' },
        ] },
        { type: 'media', eyebrow: 'Solution 04', title: 'Visible loading states', image: { src: 'liki24/solution-04.png', alt: 'Loading state shown while an action is processing', ratio: '760 / 437' }, rows: [
          { k: 'Problem', v: 'After an action, people couldn’t tell whether it was processing or stuck.' },
          { k: 'Hypothesis', v: 'A clear loading state will reassure people that their action is in progress.' },
          { k: 'Metric', v: 'A smoother flow, more items added to the cart, and higher conversion.' },
        ] },
        { type: 'media', eyebrow: 'Solution 05', title: 'Choose amount and packaging', image: { src: 'liki24/solution-05.png', alt: 'Quantity controls in search results and on a product card for choosing amount and packaging', ratio: '759 / 477' }, rows: [
          { k: 'Problem', v: 'People couldn’t choose how much medicine or which packaging they wanted during checkout.' },
          { k: 'Hypothesis', v: 'Letting people pick the amount or packaging right in checkout will help more of them finish the order.' },
          { k: 'Metric', v: 'Higher conversion and more completed purchases.' },
        ] },
        { type: 'media', eyebrow: 'Solution 06', title: 'Relevant offers at checkout', rows: [
          { k: 'Problem', v: 'Offers shown during checkout weren’t relevant, so people ignored them.' },
          { k: 'Hypothesis', v: 'Choosing offers logically, based on what’s already in the cart, will make people add them to their order.' },
          { k: 'Metric', v: 'More items added during checkout.' },
        ] },
      ],
    },
    {
      label: 'Outcome',
      heading: 'Four teams worked on the same brief, and the stakeholder selected all of our solutions for further development.',
      blocks: [{ type: 'outcomes', items: [
        { title: '29 interviews synthesised', text: 'Patterns behind checkout abandonment, backed by frequency, not anecdotes.' },
        { title: 'Six hypotheses with metrics', text: 'Six solutions, each with a metric to show whether it worked.' },
        { title: 'Selected for development', text: 'The team’s solutions were chosen to move forward.' },
      ] }],
    },
  ],
  next: 'vchasno',
};

const vchasno: Case = {
  slug: 'vchasno',
  number: '05',
  title: 'Vchasno: closing a revenue leak in team signing',
  subtitle: 'Product discovery for an e-document platform used by over half a million companies: architecture analysis with OOUX and BPMN, two tested solutions, and one of the client’s top two picks.',
  eyebrow: ['B2B e-signature', 'Projector study project'],
  category: 'B2B e-signature',
  tag: 'Research case',
  cardTitle: 'Vchasno: closing a revenue leak in a B2B e-signature product',
  cardMeta: 'OOUX · BPMN · Usability testing',
  cover: { src: 'vchasno/card.png', alt: 'Vchasno company settings screen with plan details and employee permissions' },
  coverBg: 'linear-gradient(160deg, #FBF5DC, #F1E7B8)',
  hero: { src: 'vchasno/hero.png', alt: 'Vchasno company settings screen', ratio: '16 / 9' },
  snapshot: [
    { k: 'Client', v: 'Vchasno · Ukraine' },
    { k: 'Format', v: 'Projector study project on a real product: real brief, real users' },
    { k: 'Industry', v: 'B2B SaaS · E-documents & e-signature' },
    { k: 'My role', v: 'Product Designer: architecture analysis, OOUX, BPMN, ideation, prototyping, usability testing' },
    { k: 'Team', v: '5 product designers' },
    { k: 'Year', v: '2022' },
  ],
  tldr: {
    challenge: 'Clients that sign as a department shared one account between many employees. Vchasno charges per user account, so every shared login meant lost revenue.',
    did: 'Mapped the product’s objects and document flows with OOUX and BPMN before designing anything, then took on the more complex solution direction on my own initiative. Both directions were prototyped and tested with users.',
    outcome: 'The client selected our solution as one of its top two options.',
  },
  numbers: [
    { v: '500K+', l: 'Companies on the platform' },
    { v: '5', l: 'Product designers' },
    { v: '2', l: 'Solutions prototyped & tested' },
    { v: 'Top 2', l: 'Client’s pick' },
  ],
  sections: [
    {
      label: 'Problem',
      heading: 'Departments signed documents through one shared account, and every shared login was revenue Vchasno never saw.',
      lead: 'When documents had to be signed by a department rather than a person, clients created a department email account and let whoever was on shift log in and sign. Vchasno treated that account as one user, even though many people used it, and Vchasno charges by the number of user accounts.',
      blocks: [{ type: 'cards', columns: 2, items: [
        { eyebrow: 'Before', title: 'One shared login, billed as 1 user', text: 'Anna, Oleh and Iryna all sign through design@company, one department inbox shared by everyone on shift.' },
        { eyebrow: 'Goal', title: 'Own accounts, billed as 3 users', text: 'Everyone signs from their own account, on behalf of the department.' },
      ] }],
    },
    {
      label: 'Task',
      heading: 'Find the most efficient way for one employee on shift to sign on behalf of a department, without breaking the business logic clients and users already rely on.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'Constraint', title: 'Easy to implement', text: 'Changes the development team can ship step by step.' },
        { eyebrow: 'Constraint', title: 'Keeps business logic intact', text: 'No disruption to existing signing and approval processes.' },
        { eyebrow: 'Constraint', title: 'Simple for users', text: 'Clear for admins setting it up and for employees signing.' },
      ] }],
    },
    {
      label: 'Approach',
      heading: 'A product this complex needed its architecture understood before any user research.',
      lead: 'Vchasno has many roles and access levels, so starting with interviews risked proposing changes that would break the service logic. We began by breaking the product down into its “atoms and molecules”.',
      blocks: [{ type: 'steps', items: [
        { title: 'Discover · Context', text: 'Stakeholder briefing and business research.' },
        { title: 'Define · Structure', text: 'OOUX, BPMN diagrams and a list of main pains and opportunities.' },
        { title: 'Develop · Options', text: 'Brainstorming and prioritisation of ideas.' },
        { title: 'Deliver · Proof', text: 'Prototypes, usability testing and the final presentation.' },
      ] }],
    },
    {
      label: 'Object-oriented UX',
      heading: 'I mapped the product into objects, properties, actions and access roles, so every idea could be checked against how Vchasno actually works.',
      lead: 'OOUX exposed the corner cases and document-security rules that a screen-by-screen view would hide.',
      blocks: [{ type: 'image', image: { src: 'vchasno/ooux.png', alt: 'OOUX map of Vchasno: objects such as documents, companies and employees with their properties, actions and access roles', caption: 'The product mapped into objects, properties, actions and roles.' } }],
    },
    {
      label: 'BPMN diagrams',
      heading: 'BPMN diagrams showed how documents move through approval and signing, inside a company and between companies.',
      lead: 'With the flow on one page, it was easy to see which processes and components any change would touch.',
      blocks: [{ type: 'image', image: { src: 'vchasno/bpmn.png', alt: 'BPMN diagram of document approval and signing inside a company and between companies', caption: 'Document approval and signing as a BPMN flow.' } }],
    },
    {
      label: 'Ideation',
      heading: 'The team aimed for one optimal option. I also took on a second, more ambitious idea on my own initiative.',
      lead: 'It had different requirements and needed more development time, but it modelled real-life signing more closely and could become the next iteration of the feature.',
      blocks: [{ type: 'image', image: { src: 'vchasno/ideation.png', alt: 'Ideation board with solution directions for department signing', caption: 'Two solution directions came out of ideation.' } }],
    },
    {
      label: 'Solution 1 · Departments',
      heading: 'Departments as a new object: create one, add employees, and give it signing permissions.',
      lead: 'A series of small, gradual changes the team could ship without disrupting current users.',
      blocks: [
        { type: 'cards', columns: 2, items: [
          { eyebrow: 'Hypothesis', text: 'Departments with their own signing permissions make document signing more efficient and secure, and move people onto personal accounts.' },
          { eyebrow: 'Metric', text: 'More accounts in the product and fewer active sessions per account.' },
          { eyebrow: 'Test task', text: '“Create a Design department, then upload a document with parallel or alternate signing, using departments and individual employees.”' },
          { eyebrow: 'Result', text: 'Creating departments felt natural to the participant, who completed the task without problems.' },
        ] },
        { type: 'image', image: { src: 'vchasno/solution-departments.png', alt: 'BPMN flow of solution 1: creating a department, adding employees and choosing the department as a signer', caption: 'Solution 1 as a flow. What changes: a new “department” object, department management and updated signer selection in the upload dialog.' } },
      ],
    },
    {
      label: 'Solution 2 · Group shortcuts',
      heading: 'My solution: sign for any employee through grouped shortcuts, with signature and access merged into one step.',
      lead: 'Closer to how signing works in real life. Merging the Signature and Access tabs means a signer can always open the document they are asked to sign.',
      blocks: [
        { type: 'cards', columns: 2, items: [
          { eyebrow: 'Hypothesis', text: 'If any employee can be added as a signer through a group shortcut, everyone can sign from their own account.' },
          { eyebrow: 'Metric', text: 'More accounts in the product and fewer active sessions per account.' },
          { eyebrow: 'Test task', text: '“Upload a document with alternate signing and add a shortcut with a group of people.”' },
          { eyebrow: 'Result', text: 'The participant immediately understood that a group can be added as a shortcut and that access status can be changed per person.' },
        ] },
        { type: 'image', image: { src: 'vchasno/solution-shortcuts.png', alt: 'BPMN flow of solution 2: adding a group of signers through a shortcut, with signature and access in one step', caption: 'Solution 2 as a flow. What changes: merged Signature and Access tabs, signers picked from grouped shortcuts with individual rights.' } },
      ],
    },
    {
      label: 'Outcome',
      heading: 'The client selected our solution as one of its top two options.',
      lead: 'The streamlined approach, improving existing features instead of rebuilding the product, is what won the client over.',
      blocks: [{ type: 'outcomes', items: [
        { title: 'Architecture first', text: 'OOUX and BPMN kept every idea consistent with the service logic.' },
        { title: 'Both directions tested', text: 'Participants completed both tasks and understood the new concepts right away.' },
        { title: 'A next-iteration concept', text: 'The more ambitious direction gave the client a path beyond the quick fix.' },
      ] }],
    },
  ],
  next: 'takraf',
};

export const cases: Case[] = [takraf, allyz, cleanconnect, liki24, vchasno];
export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
