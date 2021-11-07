import React, { useState } from 'react';
import styles from './styles.scss';

const ChatPage = () => {
    const [inMessage, setInMessage] = useState(['hello', 'hi', 'c']);
    const [outMessage, setOutMessage] = useState(['chat', 'test', 'df']);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} />
                <div className={styles.chat_container}>
                    <div className={styles.chatheader}>
                        <h1>contact</h1>
                    </div>
                    <div className={styles.chatbody}>
                        {inMessage.map((content) => (
                            <p className={styles.message_in}>{content}</p>
                        ))}
                        {outMessage.map((content) => (
                            <p className={styles.message_out}>{content}</p>
                        ))}
                    </div>
                    <div className={styles.chatfooter}>
                        <form>
                            <input type="text" name="" />
                            <button id="send_btn">></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;
