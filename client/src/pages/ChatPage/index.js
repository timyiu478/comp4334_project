import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.scss';
import { Send, StayPrimaryLandscapeSharp, Menu } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Scrollbars } from 'react-custom-scrollbars-2';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import { get_history, get_public_key, sendMsg} from './chat';
import Cookies from 'js-cookie';

const ChatPage = () => {

    const msg_scrollbar = useRef(null);
    const history = useHistory();
    const [msgList, setMsgList] = useState([]);

    const [contactList, setContactList] = useState([]);
    const currentMe = localStorage.getItem('username');
    const [inputForm, setInputForm] = useState('');
    const [currentContact, setCurrentContact] = useState("");
    const [publicKey,setPublicKey] = useState("");

    const handleInputFormChange = (e) => {
        setInputForm(e.target.value);
    };
    const logOut = () => {
        $.ajax({
            method: 'GET',
            url: '/api/logout/',
            headers: {
                'X-CSRF-TOKEN': Cookies.get('csrf_access_token'),
            },
            success: (result, statusText) => {
                history.push('/');
                console.log(result);
            },
            error: (result, statusText) => {
                console.log(result);
            },
        });
    };
    const sendInputMsg = async () => {
        setInputForm('');
        // const publicKey = await get_public_key(contactList[currentContact]);
        sendMsg(inputForm, currentContact, publicKey);
    };
    const getUser = () => {
        $.ajax({
            method: 'GET',
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': Cookies.get('csrf_access_token'),
            },
            url: '/api/usernames/',
            success: (result, statusText) => {
                console.log(result.usernames);
                setContactList(result.usernames.filter((word) => word !== currentMe));
            },
            error: (result, statusText) => {
                console.log(result);
            },
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleCurrentContact = async (currentContact) => {
        setCurrentContact(currentContact);

        await get_public_key(currentContact).then((publicKey)=>{
            setPublicKey(publicKey);
            console.log("publicKey: ",publicKey);
        });
        
        if(msgList.length>0) setMsgList([]);

        const msgs = await get_history(currentContact);
        for(let i=0;i<msgs.length;i++){
            setMsgList(()=>[...msgList,msgs[i]]);
        }
        console.log("Msglist: ",msgList);
        msg_scrollbar.current.scrollToBottom();

    }

    // useEffect(async () => {
    //     if (contactList !== []) {
    //         // setMsgList(get_history(contactList[currentContact]));
    //         // setMsgList(messages);
    //         setPublicKey(get_public_key(contactList[currentContact]));
    //         console.log("publicKey: ",publicKey);
    //         get_history(contactList[currentContact]).then((response) => {
    //             setMsgList(response);
    //         });
    //     }
    // }, [currentContact]);



    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} />
                <div className={styles.chat_container}>
                    <div className={styles.logOut}>
                        <IconButton aria-label="LogOut" size="small" onClick={logOut}>
                            <LogoutIcon fontSize="inherit" />
                            LogOut
                        </IconButton>
                    </div>
                    <div className={styles.chat_header}>
                        <h1>ChatPage</h1>
                        <h5>Welcome! {currentMe}</h5>
                    </div>
                    <div className={styles.chat_app_container}>
                        <div className={styles.chat_app_contactList_container}>
                            {contactList !== [] &&
                                contactList.map((contact, index) => (
                                    <li
                                        key={index}
                                        className={styles.chat_app_contactList_contact}
                                        onClick={() => handleCurrentContact(contact)}
                                    >
                                        {contact}
                                    </li>
                                ))}
                        </div>
                        <div className={styles.chat_app_body}>
                            <div className={styles.chat_app_contact}>
                                <h2>{currentContact !== null}</h2>
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
                                    {/* {msgList !== [] && */}
                                    {   msgList.map((content) => (
                                            <p
                                                className={
                                                    content.to === currentMe
                                                        ? styles.chat_app_msg_inMsg
                                                        : styles.chat_app_msg_outMsg
                                                }
                                            >
                                                <p>{content.msg}</p>
                                                <span>{content.date}</span>
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
