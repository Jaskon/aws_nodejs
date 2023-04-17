import React, { useState } from 'react';
import styles from './SendField.module.css';

export function SendField({ onSend }: { onSend: Function }) {
    const [input, setInput] = useState('');

    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSend(input);
        setInput('');
    }

    return <form onSubmit={formSubmit} className={styles.form}>
        <input
            className={styles.input}
            onChange={event => setInput(event.target.value)}
            value={input}
        />
        <button type={"submit"}>Send</button>
    </form>;
}
