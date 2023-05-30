import type { Meta, StoryObj } from "@storybook/react";

import { UnmanagedError } from "./RootErrorBoundary.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/RootErrorBoundary",
    component: UnmanagedError,
    tags: ["autodocs"]
} satisfies Meta<typeof UnmanagedError>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        message: "This is an error message"
    }
};
