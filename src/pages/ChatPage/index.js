import React, { useState } from 'react';
import styles from './styles.scss';

const ChatPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} />
                <div className={styles.chat_container}>
                    <div className={styles.chatheader}>
                        <h1>contact</h1>
                    </div>
                    <div className={styles.chatbody}>
                        <p className={styles.message_in}>Hello</p>
                        <p className={styles.message_out}>hi!</p>
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
