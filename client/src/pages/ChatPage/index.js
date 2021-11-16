import React, { useState, useRef, Component } from 'react';
import styles from './styles.scss';
import { Send, StayPrimaryLandscapeSharp, Menu } from '@material-ui/icons';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { decrypt_msg, get_history, get_public_key, sendMsg } from './chat.js';
const ChatPage = () => {
    const msg_scrollbar = useRef(null);

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

    const handleInputFormChange = (e) => {
        setInputForm(e.target.value);
    };

    const contactSelector = (index) => {
        setCurrentContact(contactList[index]);
    };

    const sendInputMsgByEnter = (e) => {
        // console.log(e.key);
        if (e.key !== 'Enter') return;
        sendInputMsg();
    };

    const sendInputMsg = async () => {
        if (inputForm != '') {
            const newMsg = {
                isFromSelf: true,
                msg: inputForm,
                time: '02:00',
            };
            await setMsgList((msgList) => [...msgList, newMsg]);
            setInputForm('');
            get_public_key();
            msg_scrollbar.current.scrollToBottom();
        }
    };

    return (
        <>
            <div className={styles.container} onKeyDown={sendInputMsgByEnter}>
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
                                <Scrollbars
                                    ref={msg_scrollbar}
                                    className={styles.msg_scrollbar}
                                    universal
                                    autoHide
                                    autoHideTimeout={1000}
                                    autoHideDuration={200}
                                >
                                    {msgList.map((content) => (
                                        <p
                                            className={
                                                !content.isFromSelf
                                                    ? styles.chat_app_msg_inMsg
                                                    : styles.chat_app_msg_outMsg
                                            }
                                        >
                                            <p>{content.msg}</p>
                                            <span>{content.time}</span>
                                        </p>
                                    ))}
                                </Scrollbars>
                            </div>
                            <div className={styles.chat_app_footer}>
                                <input
                                    placeholder=" Enter message..."
                                    type="text"
                                    value={inputForm}
                                    onChange={handleInputFormChange}
                                />
                                <button onClick={sendInputMsg} type="button">
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
