import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.scss';
import { Send } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Scrollbars } from 'react-custom-scrollbars-2';
// import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import { get_history, get_public_key, encryptMsg, decrypt_msg} from './chat';
// import Cookies from 'js-cookie';
import { socket } from './socket';

const ChatPage = () => {

    const msg_scrollbar = useRef(null);
    const history = useHistory();
    const [msgList, setMsgList] = useState([]);
    const [contactList, setContactList] = useState([]);
    const currentMe = localStorage.getItem('username');
    const [inputForm, setInputForm] = useState('');
    const [currentContact, setCurrentContact] = useState("");
    const [publicKey,setPublicKey] = useState("");
    // const [msgCounts,setMsgCounts] = useState({});

    let publicKeys = {};

    socket.emit('join', {});

    socket.on('message', function (data) {
        console.log("---------new msg---------");
        const new_msg = decrypt_msg(data);
        const from = data['from'];
        // console.log("from:",from);
        console.log("new_nsg:",new_msg);
        // console.log("data:", data);
        if(from == currentContact || from == currentMe){
            setMsgList([...msgList,{msg:new_msg,date:data['datetime'],to:data['data']['to']}]);
            msg_scrollbar.current.scrollToBottom();
        }else{
            if(!contactList.includes(from) && from != currentMe) setContactList([...contactList,from]); 
            // setMsgCounts({...msgCounts,[msgCounts[from]]:msgCounts[from]+=1});
        }
        // console.log(msgCounts);

        
    });


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
                // console.log(result);
            },
            error: (result, statusText) => {
                // console.log(result);
            },
        });
    };

    const sendInputMsgByEnter = (e) => {
        if(e.key !== 'Enter') return;
        sendInputMsg();
    }

    const sendInputMsg = async () => {
        setInputForm('');
        // const publicKey = await get_public_key(contactList[currentContact]);
        encryptMsg(inputForm, currentContact, publicKey).then((response) => {
            socket.emit('message', response);
        });
        
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
                // console.log(result.usernames);
                setContactList(result.usernames.filter((word) => word !== currentMe));

                // for(let i=0;i<result.usernames.length;i++){
                //     if(!msgCounts.hasOwnProperty(result.usernames[i]) && result.usernames[i] != currentMe){
                //         setMsgCounts({...msgCounts,[result.usernames[i]]:0});
                //     }
                // }
            },
            error: (result, statusText) => {
                // console.log(result);
            },
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleCurrentContact = async (e)=>{

        const currentC = contactList[e.target.id];

        setCurrentContact(currentC);

        // console.log("currentContact: ",currentContact);

        if(publicKeys.hasOwnProperty(currentC)){
            setPublicKey(publicKeys[currentC]);
        }else{
            await get_public_key(currentC).then((response)=>{
                setPublicKey(response);
                publicKeys[currentC] = response;
            });
        }

        // console.log("publicKey: ",publicKey);

        await get_history(currentC).then((response) => {
            setMsgList(response);
        });
        
        msg_scrollbar.current.scrollToBottom();

    };

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
            <div className={styles.container} onKeyDown={sendInputMsgByEnter}>
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
                                        id={index}
                                        className={styles.chat_app_contactList_contact}
                                        onClick={handleCurrentContact}
                                    >
                                        {contact}
                                    </li>
                                ))}
                        </div>
                        <div className={styles.chat_app_body}>
                            <div className={styles.chat_app_contact}>
                                <h2>{currentContact !== "" && currentContact}</h2>
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
