import { useState } from "react";

export default function Hooks() {
    const [count, setCount] = useState(0); // Corrected variable names and useState function
    const [name, setName] = useState(""); // Initialized name with an empty string

    function handleInputChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{count}</h1> {/* Corrected the h1 tag closure */}
            <p id="description">{name}</p> {/* Lowercased the ID */}
            <input placeholder="Enter Name" onChange={handleInputChange} /> {/* Corrected the input tag */}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}