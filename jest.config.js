import swcConfig from "./swc.dev.js";

export default {
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfig]
    },
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    extensionsToTreatAsEsm: [".ts", ".tsx"]
};
