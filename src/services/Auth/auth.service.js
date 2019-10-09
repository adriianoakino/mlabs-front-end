import { openURL, eventHandlerError } from '../api';
import { PAGES_URL } from '../../environment/consts';
import * as _ from 'lodash';

export const connectToMediaSocial = (channel) => {
    return openURL.get(PAGES_URL)
    .then((response) => { return response.data.filter((e) => _.isEqual(e.channel_key, channel) )})
    .catch((error)   => { return eventHandlerError(error) });
}


