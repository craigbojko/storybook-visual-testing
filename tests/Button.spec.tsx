import React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as buttonStories from '../src/stories/Button.stories.jsx'

// compile the "Button" story with the library
const { Primary } = composeStories(buttonStories)

describe('Button component', () => {
  let onClickSpy

  beforeEach(() => {
    onClickSpy = cy.spy().as('onClickSpy')
  })

  it('should render', () => {
    // and mount the story using @cypress/react library
    mount(<Primary onClick={onClickSpy} />)

    const button = cy.get('button').contains('Button')

    button.click()

    cy.get('@onClickSpy').should('have.been.calledOnceWithExactly', 'Clicked')
  })
})
