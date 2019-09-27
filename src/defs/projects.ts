export interface Project {
  asset: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    asset: require('@/assets/cp2077.png'),
    description: 'Cyberpunk 2077 Meme Generator',
    link: 'https://unlucky.ninja/cyberpunk2077-mememaker/',
  },
];

export default projects;
