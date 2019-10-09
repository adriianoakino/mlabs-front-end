import { call, put } from 'redux-saga/effects';
import { PageTypes } from '../../ducks/Page/page';
import { ModalTypes } from '../../ducks/Modal/modal';
import * as _ from 'lodash';
import { connectToMediaSocial } from '../../../services/Auth/auth.service'
import { ICONS } from '../../../assets/images/index';


let list = [
    { icon: ICONS.FACEBOOK,     channel: 'facebook',            color: "#3A589B",                                        logged: {},  iconLogged: ICONS.FACEBOOK_LOGGED  },
    { icon: ICONS.TWITTER,      channel: 'twitter',             color: "#50ABF1",                                        logged: {},  iconLogged: ICONS.TWITTER_LOGGED   },
    { icon: ICONS.INSTAGRAM,    channel: 'instagram',           color: "linear-gradient(51deg,#f79f5e,#e6405c,#b536a0)", logged: {},  iconLogged: ICONS.INSTAGRAM_LOGGED },
    { icon: ICONS.GOOGLE,       channel: 'google meu negocio',  color: "linear-gradient(51deg,#5190f6,#72aafb)",         logged: {},  iconLogged: ICONS.GOOGLE_LOGGED    },
    { icon: ICONS.PINTEREST,    channel: 'pinterest',           color: "#CF0000",                                        logged: {},  iconLogged: ICONS.PINTEREST_LOGGED },
    { icon: ICONS.LINKEDIN,     channel: 'linkedin',            color: "#3279AA",                                        logged: {},  iconLogged: ICONS.LINKEDIN_LOGGED  },
    { icon: ICONS.YOUTUBE,      channel: 'youtube',             color: "#EE1317",                                        logged: {},  iconLogged: ICONS.YOUTUBE_LOGGED   },
    { icon: ICONS.WHATSAPP,     channel: 'whatsapp',            color: "linear-gradient(51deg,#23d244,#5bf979)",         logged: {},  iconLogged: ICONS.WHATSAPP_LOGGED  },
    { icon: ICONS.ANALYTICS,    channel: 'google analytics',    color: "#F27902",                                        logged: {},  iconLogged: ICONS.ANALYTICS_LOGGED },
]

function pagePersist(channel) {
    const { channel_key } = channel
    const storage = JSON.parse(localStorage.getItem(`pages-logged`)) || {};
    storage[channel_key] = channel;
    localStorage.setItem(`pages-logged`, JSON.stringify(storage));
}

export function* getPage(action) {
    try {
        const channels = yield JSON.parse(localStorage.getItem(`pages-logged`));
         list = yield list.map(element => {
            element.logged = _.find(channels, function(o) { return _.isEqual(o.channel_key, element.channel) }) ;
            return element;
        });
        yield put({ type: PageTypes.PAGES_CHANNELS, channels: list });
    } catch (error) {

    }
}

export function* socialMediaPages (action) {
    try {
        yield put({ type: ModalTypes.SHOW_MODAL, modalOptions: { show: true } });
        const response = yield call(connectToMediaSocial, action.pages);
        const channel = yield _.find(list, function(o) { return _.isEqual(o.channel, action.pages) });
        yield put({ type: PageTypes.SOCIAL_MEDIA_PAGES, channels: response, channel });
    } catch (error) {
       
    }
}

export function* mountCardPages () {
   try {
        yield getPage()
   } catch(error) {

   }
}

/**
 * Função para realizar conexão com a api e colocar o usuário no local storage para manter logado
 */
export function* selectPage(action) {
    try {
        yield pagePersist(action.page)
        yield getPage()
        if(!_.isEmpty(action.page)) {
            debugger
            yield put({ type: ModalTypes.CLOSE_MODAL, modalOptions: { show: false }, error : false });
        }
    } catch(error) {
        console.log("EERROR : ", error)
    }
}