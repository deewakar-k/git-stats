import { Hono } from "hono";
import { statsRouter } from "./stats";

export const mainRouter = new Hono();

mainRouter.route('/stats', statsRouter);
