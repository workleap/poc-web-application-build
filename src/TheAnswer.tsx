import { useEffect, useState } from "react";

export function TheAnswer() {
    const [response, setResponse] = useState("Deep Thought still processing the question...");

    useEffect(() => {
        fetch("/response-to-the-question")
            .then(res => res.json())
            .then(data => {
                setResponse(data.response);
            })
            .catch(() => {
                setResponse("We can't find the response");
            }) ;
    }, []);

    return (
        <div><em>What is the answer to life the universe and everything?</em>: {response}</div>
    );
}
