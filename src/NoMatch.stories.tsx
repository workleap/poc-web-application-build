import type { Meta, StoryObj } from "@storybook/react";

import { NoMatch } from "./NoMatch.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/NoMatch",
    component: NoMatch,
    tags: ["autodocs"]
} satisfies Meta<typeof NoMatch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
};

export const CustomPath: Story = {
    args: {
        path: "Custom path"
    }
};
