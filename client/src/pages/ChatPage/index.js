import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.scss';
import { Send, StayPrimaryLandscapeSharp, Menu } from '@material-ui/icons';
import { Scrollbars } from 'react-custom-scrollbars-2';
import $ from 'jquery';
import { get_history, get_public_key, sendMsg } from './chat';

const ChatPage = () => {
    const msg_scrollbar = useRef(null);

    const [msgList, setMsgList] = useState([]);

    const [contactList, setContactList] = useState([]);
    const currentMe = localStorage.getItem('username');
    const [inputForm, setInputForm] = useState('');
    const [currentContact, setCurrentContact] = useState(null);

    const handleInputFormChange = (e) => {
        setInputForm(e.target.value);
    };

    const sendInputMsg = async () => {
        console.log('msg: ' + inputForm + 'to: ' + contactList[currentContact]);

        const publicKey = await get_public_key(contactList[currentContact]);
        console.log('publiccc keyyy: ' + publicKey);
        sendMsg(inputForm, contactList[currentContact], publicKey);
    };
    const getUser = () => {
        $.ajax({
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            url: '/api/usernames/',
            success: function (result, statusText) {
                console.log(result.usernames);
                setContactList(result.usernames.filter((word) => word != currentMe));
            },
            error: function (result, statusText) {
                console.log(result);
            },
        });
    };
    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (contactList !== []) get_history(contactList[currentContact]);
    }, [currentContact]);

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
                            {contactList !== [] &&
                                contactList.map((contact, index) => (
                                    <li
                                        key={index}
                                        className={styles.chat_app_contactList_contact}
                                        onClick={() => setCurrentContact(index)}
                                    >
                                        {contact}
                                    </li>
                                ))}
                        </div>
                        <div className={styles.chat_app_body}>
                            <div className={styles.chat_app_contact}>
                                <h2>{currentContact !== null && contactList[currentContact]}</h2>
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
                                    {msgList !== [] &&
                                        msgList.map((content) => (
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
