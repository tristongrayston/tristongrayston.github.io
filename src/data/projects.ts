export type Project = {
  title: string;
  description?: string;
  tags?: string[];
  /** Absolute `http(s)` URL or site path without leading slash (uses `base` on GitHub Pages). */
  href?: string;
};

export const papers: Project[] = [];

export const undergradProjects: Project[] = [
  {
    title: 'Adjustments to certain neurons lead to causal behaviour inferences',
  },
  {
    title: 'Mechanistic interpretability of reinforcement learning agents',
    description:
      'Directed studies (Summer 2024): goal misgeneralization, saliency and feature views, and interactive tools for layer activations — with Dr. George Tzanetakis.',
    tags: ['RL', 'Interpretability', 'Arxiv'],
    href: 'https://arxiv.org/abs/2411.00867',
  },
  {
    title: 'Introduction to reinforcement learning',
    description:
      'Semi-formal UVicAI lecture series from Sutton & Barto with a tabular Q-learning workshop and live Colab builds.',
    tags: ['Teaching', 'UVicAI', 'Colab'],
    href: 'https://docs.google.com/presentation/d/1lChpUem0jhSQd796XzHGl_QQ0wpxQdLqUpvUOnUPRco/edit',
  },
];

/** Not shown on the site; kept so they can be moved back into a list above. */
export const otherProjects: Project[] = [
  {
    title: 'Deep learning architectures as learned world models for RL',
    description:
      'CUCAI 2025: compared ResNet, RNN, and neural circuit policy world models from Lorenz to partially observable pendulum-style environments.',
    tags: ['RL', 'CUCAI', 'PyTorch'],
    href: 'https://github.com/tristongrayston/Expressive_World_Models',
  },
  {
    title: 'Translation between SDSS and MaNGA spectral data',
    description:
      'Proof-of-concept generative bridge (AE, VAE, VQ-VAE) on a large spectroscopic pipeline with collaborators in astrophysics.',
    tags: ['Python', 'VAE', 'Astro'],
    href: 'https://github.com/tristongrayston',
  },
  {
    title: 'Simulating responsive action to wildfire spread',
    description:
      'CUCAI 2024 team project: dynamic fire spread with wind and moisture, PPO and heuristic agents for containment strategies.',
    tags: ['RL', 'Simulation', 'CUCAI'],
    href: 'https://github.com/tristongrayston',
  },
];
