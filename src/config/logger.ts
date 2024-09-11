import { createConsola } from 'consola/browser';

const logger = createConsola({}).withTag('games');

logger.wrapConsole();

export default logger;
