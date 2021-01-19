/// <reference types="cypress" />
import { mount } from '@cypress/vue'

import i18n from '@/plugins/i18n'
import Alert from '@/components/Alert.vue'

describe('Alert', () => {
  it('Alert with link', () => {
    const bind = {
      color: 'warning',
      title: 'alert.internetDisconnect.title',
      subtitle: 'alert.internetDisconnect.subtitle',
      icon: {
        component: 'InternetDisconnectIcon'
      },
      show: true,
      link: {
        href: 'http://google.com',
        title: 'alert.internetDisconnect.resolve'
      }
    }

    mount(Alert, {
      propsData: {
        bind
      },
      i18n
    })

    cy.get('.octa-alert').should('be.visible')

    cy.get('.octa-alert').should($el => {
      expect($el).to.have.css('width', '325px')
      expect($el).to.have.css('height', '100px')
    })

    cy.get('.octa-alert').should('have.class', 'warning')

    cy.get('.octa-icon')
      .should('be.visible')
      .then(() => cy.get('#InternetDisconnectIcon').should('be.visible'))

    cy.get('.octa-title').contains('Celular Desconectado')

    cy.get('.octa-subtitle').contains(
      'Certifique-se que seu celular está conectado a internet.'
    )

    cy.get('.octa-link').contains('Resolver')
  })
})
