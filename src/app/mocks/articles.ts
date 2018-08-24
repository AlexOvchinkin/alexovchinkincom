import IArticle from "../interfaces/IArticle";

export const articles: IArticle[] = [
  {
    id: 0,
    title: 'It is title',
    description: 'It is description of this article. Short text.',
    text: '<p class="font-weight-bold">It is main text of article.</p>',
    source: ''
  },
  {
    id: 1,
    title: 'It is title',
    description: 'It is description of this article. Short text.',
    text: '<p class="font-weight-bold">It is main text of article.</p>',
    source: ''
  },
  {
    id: 2,
    title: 'It is title',
    description: 'It is description of this article. Short text.',
    text: '<p class="font-weight-bold">It is main text of article.</p>',
    source: ''
  },
  {
    id: 3,
    title: 'It is title lorem ipsum',
    description: 'It is description of this article. Short text.',
    text: '<p class="font-weight-bold">It is main text of article.</p>',
    source: ''
  },
  {
    id: 4,
    title: 'It is title',
    description: 'It is description of this article. Short text.',
    text: '<p class="font-weight-bold">It is main text of article.</p>',
    source: ''
  },
  {
    id: 5,
    title: 'How to use Environment Variables keep your secret keys safe & secure!',
    description: 'Avoid (accidentally) committing (exposing) your private keys, passwords or other sensitive details(by hard-coding in them in your script) to GitHub by storing them as environment variables',
    text: `
    <p>Follow these steps:</p>
    
    <p>1. List all the Default Environment Variables</p>

    <p class="ml-3">$ printenv</p>

    <p>2. For storing our secret data like tokens, API keys, passwords create a file named app-env</p>
    
    <p class="ml-3">export API_KEY="ABDJFdfrpf956irjglkfmgi5kgf"</p>
    <p class="ml-3">export TOKEN="213j29rhdfn94htrfuh94"</p>
    `,
    source: 'https://hackernoon.com/how-to-use-environment-variables-keep-your-secret-keys-safe-secure-8b1a7877d69c'
  }
];