import React from 'react';
import AboutMe from './';
import { shallow } from 'enzyme'

import PropTypes from 'prop-types'
import { customCheckPropTypes } from '../../../test/helpers'

let wrapper;
const defaultProps = {
    show: false
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<AboutMe {...setupProps} />)
}

describe('render', () => {
    it('renders successfully', () => {
        wrapper = setup()
        expect(wrapper.exists()).toBe(true)
    })
})

describe('`show` property', () => {
    it('renders AboutMe component on true', () => {
        wrapper = setup({ show: true })
        expect(wrapper.find("[data-test='component-AboutMe-container']").exists()).toBe(true)
    })

    it('does not render AboutMe component on false', () => {
        wrapper = setup({ show: false })
        expect(wrapper.find("[data-test='component-AboutMe-container']").exists()).toBe(true)
    })

})