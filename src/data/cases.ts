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
      label: 'Fixes in the design system',
      heading: 'Instead of patching screens one by one, we fixed the tokens and components, so every vertical got the fix at once.',
      blocks: [{ type: 'cards', items: [
        { eyebrow: 'Token change', title: 'Emerald 500 → Emerald 700', text: 'Green text and success states: Emerald 700 #227344 reaches 5.8:1. Emerald 600 (3.9:1) stays for icons, which need only 3:1.' },
        { eyebrow: 'Token change', title: 'Slate 500 → Slate 600', text: 'Secondary text and icons: from 4.3:1 (fail) to 5.6:1 (pass). Slate 500 stays for borders, where 3:1 is enough.' },
        { eyebrow: 'Token change', title: 'Badge colours → Ruby 900', text: 'Badge text on tinted backgrounds: Ruby 900 on Ruby 100 reaches 8.1:1.' },
        { title: 'One focus style', text: 'A single purple focus ring for every interactive element, instead of two competing styles.' },
        { title: '24×24 targets', text: 'Minimum target size for every control, including icon buttons.' },
        { title: 'Required fields marked', text: 'An asterisk on required fields, with clear error text and suggestions.' },
      ] }],
    },
    {
      label: 'Independent audit',
      heading: 'We didn’t wait for the independent audit, and our self-audit had already covered 12 of its 18 findings.',
      lead: 'Siteimprove’s audit of account creation (May 2025) flagged 18 WCAG criteria. Our self-audit had already covered 12 of them, from contrast to keyboard focus, and the contrast fix was in progress. I turned the other design-side findings into design system fixes (required markers, clear eye icons) and handed the code-side ones to developers, so every vertical got them at once.',
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
  draft: true,
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
  sections: [{
    label: 'Outcome',
    heading: 'Every feature I designed is live across 5 products, from first concept to detailed states.',
    blocks: [{ type: 'outcomes', items: [
      { title: 'Concepts in 2–3 days', text: 'Happy-path prototypes from existing components, instead of 1–2 weeks per concept.' },
      { title: 'Approved in 1–2 rounds', text: 'Clients and partners agreed on direction before detailed design began.' },
      { title: '2 pilot agreements', text: 'Partners saw the features in my concept demos before they were built.' },
    ] }],
  }],
  next: 'liki24',
  draft: true,
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
    outcome: 'The stakeholder selected the team’s solutions for further development.',
  },
  numbers: [
    { v: '29', l: 'In-depth interviews' },
    { v: '5', l: 'Interviews by me' },
    { v: '6', l: 'Hypotheses with metrics' },
    { v: '20–30%', l: 'Target cut in checkout errors' },
  ],
  sections: [],
  next: 'vchasno',
  draft: true,
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
  sections: [],
  next: 'takraf',
  draft: true,
};

export const cases: Case[] = [takraf, allyz, cleanconnect, liki24, vchasno];
export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
