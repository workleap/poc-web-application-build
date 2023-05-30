import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function getErrorMessage(error: unknown) {
    if (isRouteErrorResponse(error)) {
        return `${error.status} ${error.statusText}`;
    }

    return error instanceof Error
        ? error.message
        : JSON.stringify(error);
}

export function RootErrorBoundary() {
    const error = useRouteError();
    const message = getErrorMessage(error);

    return (
        <UnmanagedError message={message} />
    );
}


export interface UnmanagedErrorProps {
    message: string;
}

export function UnmanagedError({ message }: UnmanagedErrorProps) {
    return (
        <p style={{ color: "red" }}>
            An unmanaged error occurred inside a module. Still, other parts of the application are fully functional!
            <br />
            <span role="img" aria-label="pointer">👉</span> {message}
        </p>
    );
}
