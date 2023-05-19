type HobbyProject = {
  name: string;
  time: string;
  href: string;
  des: string;
};

const HOBBY_PROJECT: HobbyProject[] = [
  {
    name: 'chatgpt-nextjs',
    time: '2023 - 至今',
    href: 'https://github.com/youngle316/chatgpt-nextjs',
    des: '像官方 ChatGPT 一样使用，再加入更强大的功能'
  },
  {
    name: 'ASRock-Z370M-ITX-AC',
    time: '2019 - 2021',
    href: 'https://github.com/youngle316/ASRock-Z370M-ITX-AC',
    des: '使用i5-8400 + ASRock Z370M-ITX/AC 构建黑苹果'
  }
];

export {
  HOBBY_PROJECT
}
