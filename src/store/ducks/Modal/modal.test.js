import * as types from './modal';

describe('app reducer modal', () => {
    it('should handle initial PageTypes', () => {
        expect({ type: types.ModalTypes })
        .toEqual(
            { 
                "type": { 
                            "SHOW_MODAL"  : "SHOW_MODAL", 
                            "REQUEST_FAIL": "REQUEST_FAIL",
                            "CLOSE_MODAL" : "CLOSE_MODAL" 
                        }
            }
        )
    });

    it('should handle INITIAL_STATE', () => {
        expect(types.reducer(undefined, {}))
        .toEqual( 
            {
                error: false, modalOptions: { show: false }
            }
        )
    });

});

describe('actions creators', () => {

    it('start fetching should dispatch a SHOW_MODAL action', () => {

        const mockModalOptions = { show: true }

        expect(types.reducer({}, {
            type: "SHOW_MODAL",
            modalOptions: mockModalOptions,
            
        }))
        .toEqual({ modalOptions : mockModalOptions });
    });


    it('start fetching should dispatch a CLOSE_MODAL action', () => {

        const mockModalOptions = { show: true }
        
        expect(types.reducer({}, {
            type: "CLOSE_MODAL",
            modalOptions: mockModalOptions,
            
        }))
        .toEqual({ modalOptions : {...mockModalOptions, show: false }, error: false });
    });



    it('start fetching should dispatch a SHOW_MODAL action', () => {

        const mockModalOptions = { show: true }
        
        expect(types.reducer({}, {
            type: "REQUEST_FAIL",
            modalOptions: mockModalOptions,
            
        }))
        .toEqual({ modalOptions : { ...mockModalOptions, title: "Ops, ocorreu um erro." } });
    });
});