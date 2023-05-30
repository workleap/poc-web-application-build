import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

// The global.process check ensures Storybook doesn’t attempt to activate the Service Worker in a non-browser environment,
// as preview.ts also gets executed during the Storybook build that runs in Node.js.
if (typeof global.process === "undefined") {
    import("../src/mocks/browser").then(({ worker }) => {
        worker.start();
    });
}

export default preview;
