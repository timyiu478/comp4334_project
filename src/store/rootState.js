import { initialState as globalState } from 'store/global/state';
import { initialState as userState } from 'store/user/state';

const rootState = {
    'global': globalState,
    'user': userState,
};

export default rootState;
