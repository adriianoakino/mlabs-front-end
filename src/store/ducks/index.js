import { combineReducers } from 'redux';

import { reducer as page  } from './Page/page';
import { reducer as modal } from './Modal/modal';

export default combineReducers({
    page,
    modal,
});