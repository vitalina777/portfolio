export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

export const site = {
  name: 'Vitalina Plichko',
  role: 'Senior Product Designer',
  email: 'vitalina.plichko52@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vitalina-plichko',
  linkedinLabel: 'linkedin.com/in/vitalina-plichko',
  cv: withBase('/Vitalina_Plichko_CV.pdf'),
  repo: 'https://github.com/vitalinaplichko/vitalinaplichko.github.io',
  description:
    'Senior Product Designer with 6+ years in B2B and B2C. I design products where many roles, rules and data meet.',
};
