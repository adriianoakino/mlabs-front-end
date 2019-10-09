import { createActions, createReducer } from 'reduxsauce';


const { Types, Creators } = createActions({
    showModal   : ['modalOptions'],
    requestFail : ['modalOptions'],
    closeModal  : [],
});


export const ModalTypes = Types;
export default Creators;

const INITIAL_STATE = {
    error: false,

    modalOptions: {
        show: false
    }
};

const showModal     = (state = INITIAL_STATE, action)   => ({ ...state, modalOptions: action.modalOptions });
const requestFail   = (state = INITIAL_STATE, action)   => ({ ...state, modalOptions: {...action.modalOptions, show: true, title: 'Ops, ocorreu um erro.', } });
const closeModal    = (state = INITIAL_STATE)           => ({ ...state, modalOptions: { show: false }, error : false });


export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_MODAL]      : showModal,
    [Types.REQUEST_FAIL]    : requestFail,
    [Types.CLOSE_MODAL]     : closeModal,
});