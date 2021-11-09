import React, { useState } from 'react';
import { withStylesPropTypes } from 'react-with-styles';
import styles from './styles.scss';
import { PermContactCalendar, Send } from '@material-ui/icons';
import { debug } from 'debug';

const ChatPage = () => {
    const contactList = ['Peter','Tony','Ryan' ]; //testing
    var contactName = contactList[1]; 
    const [inMessage, setInMessage] = useState(['hello', 'hi', 'c']);
    const [outMessage, setOutMessage] = useState(['chat', 'test', 'df']);
    console.log("hi");

    //display mobile contact list
    function toggleMobileContactList(){
        console.log("hi");
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} />
                <div className={styles.chat_container}>
                    <div className={styles.contactListClickable}>
                        <PermContactCalendar onClick={toggleMobileContactList}></PermContactCalendar>
                    </div>
                    <div className={styles.chat_header}>
                        <h1>ChatPage</h1>
                    </div>
                    <div className ={styles.chat_app_container}>
                        <div className={styles.chat_app_contactList}>
                            <h1>contact list</h1>
                        </div>
                        <div className={styles.chat_app_body}>
                            <div className={styles.chat_app_contact}>
                                    <h2>{contactName}</h2>

                            </div>
                            <div className={styles.chat_app_msg_container}>
                                {inMessage.map((content) => (
                                    <p className={styles.chat_app_msg_inMsg}>{content}</p>
                                ))}
                                {outMessage.map((content) => (
                                    <p className={styles.chat_app_msg_outMsg}>{content}</p>
                                ))}
                            </div>                                
                            <div className={styles.chat_app_footer}>
                                <form>
                                    <input type="text" name="" />
                                    <button id="send_btn">
                                        <Send></Send>
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;
