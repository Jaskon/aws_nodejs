import React, { useState } from 'react';

export function SendField({ onSend }: { onSend: Function }) {
    const [input, setInput] = useState('');

    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSend(input);
        setInput('');
    }

    return <form onSubmit={formSubmit} className="flex flex-row gap-2">
        <input
            className="flex-grow text-black w-full"
            onChange={event => setInput(event.target.value)}
            value={input}
        />
        <button type={"submit"}>Send</button>
    </form>;
}
