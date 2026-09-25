import { withBase } from '../utils/urls';

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Projects', href: withBase('projects') },
  { label: 'Blog', href: withBase('blog') },
  { label: 'Contact', href: 'mailto:graystontriston@gmail.com' },
];
