import { rest } from 'msw';

import db from './db';

export const handlers = [
    rest.get(
        'http://localhost:3004/posts',
        (req, res, ctx) => {
            const posts = db.post.findMany({});
            return res(
                ctx.status(200),
                ctx.json(posts),
            );
        },
    ),
];
