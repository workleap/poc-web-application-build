import { render, screen } from "@testing-library/react";

import { Loading } from "./Loading.tsx";

it("Default text is \"Loading...\"", () => {
    render(<Loading />);

    const element = screen.getByText("Loading...");

    expect(element).not.toBeNull();
});

it("Text can be overrided", () => {
    render(<Loading message="Processing..." />);

    const element = screen.getByText("Processing...");

    expect(element).not.toBeNull();
});
