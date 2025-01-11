import { setupServer } from 'msw/node';
import { handlers } from './handlers'; // Import your handlers

export const server = setupServer(...handlers);
