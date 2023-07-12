import "./index.css";

import { StrictMode, Suspense } from "react";

import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Loading } from "./Loading.tsx";

// Mock Service Worker
if (process.env.NODE_ENV === "development") {
    // MOCK value comes from the webpack.DefinePlugin
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // Test
    if (USE_MSW) {
        import("./mocks/browser.ts").then(({ worker }) => {
            worker.start();
        });
    }
}

const root = createRoot(document.getElementById("root")!);
root.render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </StrictMode>
);
