import HomeIcon from "./assets/home.svg";

export interface HomeProps {
    title?: string;
}

export function Home({ title = "Welcome Home!" }: HomeProps) {
    return (
        <>
            <h1>{title}</h1>
            <div>
                Home is the place where you feel the most comfortable.<br />
                Home is the place where you hang with your loved ones.<br />
                Home is the place where you wear sweatpants all day!<br />
            </div>
            <HomeIcon />
        </>
    );
}
