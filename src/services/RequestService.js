import axios from 'axios';

const RequestService = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default RequestService;

