export interface LoadingProps {
    message?: string;
}

export function Loading({ message = "Loading..." }: LoadingProps) {
    return (
        <div>{message}</div>
    );
}