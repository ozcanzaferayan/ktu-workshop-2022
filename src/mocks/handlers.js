import { rest } from 'msw';

export const handlers = [
    rest.get(
        'http://localhost:3004/posts',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        id: 1,
                        title: 'json-server',
                        content: 'Lorem Ipsum',
                        author: 'typicode',
                        image: 'https://loremflickr.com/1234/2345/cats',
                    },
                    {
                        id: 2,
                        title: 'json-server',
                        content: 'Lorem Ipsum',
                        author: 'typicode',
                        image: 'https://loremflickr.com/1234/2345/cats',
                    },
                    {
                        id: 23,
                        title: 'json-server',
                        content: 'Lorem Ipsum',
                        author: 'typicode',
                        image: 'https://loremflickr.com/1234/2345/cats',
                    },
                ]),
            );
        },
    ),
];
