import React from 'react';
import AboutMe from './';
import { shallow } from 'enzyme'

let wrapper;

const setup = (props = {}) => {
    const defaultProps = {
        show: false
    }
    const setupProps = { ...defaultProps, ...props }
    return shallow(<AboutMe {...setupProps} />)
}

it('render successfully', () => {
    wrapper = setup()
    expect(wrapper.exists()).toBe(true)
})

describe('`show` property', () => {
    it('renders AboutMe component on true', () => {
        wrapper = setup({ show: true })
        expect(wrapper.find("[data-test='component-AboutMe-container']").exists()).toBe(true)
    })

    it('renders AboutMe component on true', () => {
        wrapper = setup({ show: false })
        expect(wrapper.find("[data-test='component-AboutMe-container']").exists()).toBe(true)
    })

})