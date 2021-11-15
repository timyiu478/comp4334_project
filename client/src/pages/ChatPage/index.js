import React, { useState, useRef, Component } from 'react';
import styles from './styles.scss';
import { Send, StayPrimaryLandscapeSharp } from '@material-ui/icons';

const ChatPage = () => {
    const [msgList, setMsgList] = useState([
        { isFromSelf: false, msg: 'hello', time: '01:00' },
        { isFromSelf: true, msg: 'hi', time: '01:01' },
        { isFromSelf: false, msg: 'how are you doing', time: '01:02' },
        { isFromSelf: true, msg: 'well', time: '01:03' },
        { isFromSelf: true, msg: 'And you?', time: '01:04' },
        { isFromSelf: false, msg: 'wonderful!', time: '01:05' },
    ]);

    const [contactList, setContactList] = useState([
        { name: 'Peter', id: '001', sessionkey: '999' },
        { name: 'Tony', id: '002', sessionkey: '989' },
        { name: 'Greg', id: '003', sessionkey: '789' },
    ]);

    const [inputForm, setInputForm] = useState('');
    const [currentContact, setCurrentContact] = useState(contactList[0]);

    const contactSelector = (index) => {
        setCurrentContact(contactList[index]);
    };

    const sendInputMsg = () => {
        if (inputForm != '') {
            const newMsg = {
                isFromSelf: true,
                msg: inputForm,
                time: '02:00',
            };
            setMsgList((msgList) => [...msgList, newMsg]);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} />
                <div className={styles.chat_container}>
                    <div className={styles.chat_header}>
                        <h1>ChatPage</h1>
                    </div>
                    <div className={styles.chat_app_container}>
                        <div className={styles.chat_app_contactList_container}>
                            {contactList.map((contact, index) => (
                                <li
                                    key={contact.id}
                                    className={styles.chat_app_contactList_contact}
                                    onClick={() => contactSelector(index)}
                                >
                                    {contact.name}
                                </li>
                            ))}
                        </div>
                        <div className={styles.chat_app_body}>
                            <div className={styles.chat_app_contact}>
                                <h2>{currentContact.name}</h2>
                            </div>
                            <div className={styles.chat_app_msg_container}>
                                {msgList.map((content) => (
                                    <p
                                        className={
                                            !content.isFromSelf ? styles.chat_app_msg_inMsg : styles.chat_app_msg_outMsg
                                        }
                                    >
                                        {content.msg}
                                    </p>
                                ))}
                            </div>
                            <div className={styles.chat_app_footer}>
                                <input type="text" onChange={() => setInputForm(event.target.value)} />
                                <button onClick={() => sendInputMsg()}>
                                    <Send></Send>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;
