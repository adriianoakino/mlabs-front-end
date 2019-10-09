import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
 
describe('Test App Component', () =>{
 
    it('deve montar corretamente', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toMatchSnapshot();
    });

})