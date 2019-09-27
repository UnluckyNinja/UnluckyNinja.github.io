export interface Project {
  asset: string;
  description: string;
}

const projects: Project[] = [
  {
    asset: require('@/assets/cp2077.png'),
    description: 'Cyberpunk 2077 Meme Generator',
  },
];

export default projects;
