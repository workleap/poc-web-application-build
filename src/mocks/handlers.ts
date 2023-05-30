import { rest, type RestHandler } from "msw";

export const handlers: RestHandler[] = [
    rest.get("/response-to-the-question", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                response: 42
            })
        );
    })
];
