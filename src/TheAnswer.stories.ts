import type { Meta, StoryObj } from "@storybook/react";

import { TheAnswer } from "./TheAnswer.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/TheAnswer",
    component: TheAnswer,
    tags: ["autodocs"]
} satisfies Meta<typeof TheAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
};
