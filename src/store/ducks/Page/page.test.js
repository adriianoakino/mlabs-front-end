import facebook from '../../../__tests-helpers__/facebook'
import * as types from './page';

describe('app reducer', () => {
    it('should handle initial PageTypes', () => {
        expect({ type: types.PageTypes})
        .toEqual(
            { 
                "type": { "CHANNEL_PAGES": "CHANNEL_PAGES", "GET_PAGE": "GET_PAGE", "MOUNT_LIST": "MOUNT_LIST", "PAGES_CHANNELS": "PAGES_CHANNELS", "PAGE_PERSIST": "PAGE_PERSIST", "SELECT_PAGE": "SELECT_PAGE", "SOCIAL_MEDIA_PAGES": "SOCIAL_MEDIA_PAGES"}
            }
        )
    });

    it('should handle INITIAL_STATE', () => {
        expect(types.reducer(undefined, {}))
        .toEqual( 
            {
                data: { channel: '', channels: []},
                pagesChannels: []
            }
        )
    });

});



describe('actions creators', () => {

    it('start fetching should dispatch a SOCIAL_MEDIA_PAGES action', () => {

        const mockChannel = 'facebook'
        const mockChannels = facebook
        console.log(" MOCK CHANNEL ", mockChannels)
        expect(types.reducer({}, {
            type: "SOCIAL_MEDIA_PAGES",
            channel: mockChannel,
            channels: mockChannels,
            
        }))
        .toEqual({ data : { channel: mockChannel, channels: mockChannels } });
    });




    it('start fetching should dispatch a PAGES_CHANNELS action', () => {

        const mockData = facebook

        expect(types.reducer({}, {
            type: "PAGES_CHANNELS",
            channels: mockData
        }))
        .toEqual({ pagesChannels:  mockData });
    });
    
})

