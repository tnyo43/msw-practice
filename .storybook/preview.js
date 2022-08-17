export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

if (typeof global.process === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('../src/mocks/browser');
  worker.start();
  window.msw = { worker };
}
