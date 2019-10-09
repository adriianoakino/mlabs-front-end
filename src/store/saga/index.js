import { all, takeLatest } from 'redux-saga/effects';

import { PageTypes } from '../ducks/Page/page';

import { selectPage, socialMediaPages, getPage, mountCardPages } from './Page/page';

export default function* rootSoga() {
    yield all ([
        takeLatest(PageTypes.CHANNEL_PAGES, socialMediaPages),
        takeLatest(PageTypes.PAGE_PERSIST, selectPage),
        takeLatest(PageTypes.GET_PAGE, getPage),
       takeLatest(PageTypes.MOUNT_LIST, mountCardPages),
    ]);
}