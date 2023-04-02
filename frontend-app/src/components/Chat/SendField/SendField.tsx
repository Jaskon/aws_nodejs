import React, { useState } from 'react';

export function SendField({ onSend }: { onSend: Function }) {
    const [input, setInput] = useState('');

    return <>
        <input onChange={event => setInput(event.target.value)} value={input}/>
        <button onClick={() => { onSend(input); setInput(''); }}>Send</button>
    </>;
}
