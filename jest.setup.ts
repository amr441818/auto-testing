import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from './mocks/server'; // Adjust path to your MSW server file




// Start the server before all tests
beforeAll(() => {
  server.listen();
});

// Reset handlers after each test to avoid interference
afterEach(() => {
  server.resetHandlers();
});

// Close the server after all tests
afterAll(() => {
  server.close();
});
