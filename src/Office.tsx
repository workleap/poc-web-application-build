import { TheAnswer } from "./TheAnswer.tsx";
import { PngExample } from "./assets/PngExample.tsx";

export interface OfficeProps {
    title?: string;
}

export function Office({ title = "Welcome to Office!" }: OfficeProps) {
    return (
        <>
            <h1>{title}</h1>
            <div>
                Office is the place where the coffee flows and the creativity grows.<br />
                Office is the place where you can collaborate with your colleagues to achieve greatness.<br />
                Office is the place where you can turn your ideas into reality, one project at a time.<br />
            </div>
            <br />
            <h2>FAQ</h2>
            <TheAnswer />
            <img src={PngExample} alt="Something went wrong..." title="Don't forget your towel" />
        </>
    );
}
