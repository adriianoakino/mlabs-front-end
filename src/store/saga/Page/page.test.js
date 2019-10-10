import * as saga from './page'
import { call, put } from 'redux-saga/effects';
import singlePageFacebook from '../../../__tests-helpers__/singlePageFacebook.json'
import { ICONS } from '../../../assets/images/index';

it('should persist page from API on local storage', () => {
    
    const mockPage = singlePageFacebook

    const gen = saga.selectPage({page: mockPage}) 
  
    gen.next();
    expect(gen.next(true).value)
});


it('should error undefined persist page from API on local storage', () => {
    try {
        const mockPage = singlePageFacebook
        const gen = saga.selectPage(mockPage) 
        gen.next();
        expect(gen.next(true).value)
      fail();
    } catch (object) {
        console.log("OBJECT", object)
      expect(object.error).toEqual(undefined);
    }
});


it('should mount list medias sociais', async () => {
    try {
        
        let list = [
            { icon: ICONS.FACEBOOK,     channel: 'facebook',            color: "#3A589B",                                        logged: {},  iconLogged: ICONS.FACEBOOK_LOGGED  },
            { icon: ICONS.TWITTER,      channel: 'twitter',             color: "#50ABF1",                                        logged: {},  iconLogged: ICONS.TWITTER_LOGGED   },
        ];

        const gen = await saga.mountCardPages() 

        console.log("GEEEN @ => ", gen.next(true).value.return)
        expect(gen.next().value).toEqual(call(saga.getPage()))


    } catch (object) {
        console.log("OBJECT", object)
      expect(object.error).toEqual(undefined);
    }
});