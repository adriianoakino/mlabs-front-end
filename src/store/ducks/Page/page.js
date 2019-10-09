import { createActions, createReducer } from 'reduxsauce';

/**
 * Criando os Types e ActionCreators
 */
const { Types, Creators } = createActions({
    socialMediaPages    : ['channel', 'channels'],
    pagesChannels       : ['channels'],
    channelPages        : ['pages'],
    pagePersist         : ['page'],
    selectPage          : ['channel'],
    getPage             : [],
    mountList           : []
})

export const PageTypes = Types;
export default Creators;


/**
* INITIAL STATE
*/
const INITIAL_STATE = {
    data: { channel: '', channels: []},
    pagesChannels: []
}

const socialMediaPages = (state = INITIAL_STATE, action) => ({ ...state, data: { channel: action.channel, channels: action.channels } });
const pagesChannels = (state = INITIAL_STATE, action) => ({ ...state, pagesChannels: action.channels });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SOCIAL_MEDIA_PAGES]: socialMediaPages,
    [Types.PAGES_CHANNELS]: pagesChannels,
});