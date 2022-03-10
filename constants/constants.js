import spotify from "./images/spotify.png";
import bloxy from "./images/bloxy.png";
import camby from "./images/camby.png";

export const projects = [
  {
    title: 'Spotify',
    description: "Spotify Clone in Next.JS. In this I have used Spotify API for songs and playlists,Tailwind for CSS, Next.JS Middleware, Next-Auth for user authentication and Recoil for Global State Management.",
    image: spotify,
    tags: ['React', 'Next.js', 'Recoil', 'Next-Auth'],
    live: 'https://mks-spotify.netlify.app',
    code: 'https://google.com',
    id: 0,
  },
  {
    title: 'Blog',
    description: "Personal Blog in Next.JS. In this I have used Tailwind for CSS, GraghQl which is a query language and GraphCMS as Content Management System.",
    image: bloxy,
    tags: ['React', 'Next.JS', 'Tailwind', 'GraphCMS'],
    live: 'https://mks-bloxy.netlify.app',
    code: 'https://google.com',
    id: 1,
  },
  {
    title: 'Kanban Board',
    description: "Kanban Board in React.JS. In this I have used nothing spacial but it's part of learning in which i have learned how we can do state management by just prop drilling into nested deep hierachy and yeah it's not a good practice.",
    image: camby,
    tags: ['React'],
    live: 'https://camby.netlify.app',
    code: 'https://google.com',
    id: 2,
  },
];