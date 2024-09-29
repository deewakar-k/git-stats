import { Hono } from "hono";

export const statsRouter = new Hono();

statsRouter.get('/', (c) => c.text('hello from git stats!'))
