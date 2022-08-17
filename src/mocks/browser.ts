import { setupWorker, SetupWorkerApi } from 'msw';
import { handlers } from './handlers';

export * from 'msw';

export const worker: SetupWorkerApi = setupWorker(...handlers);
