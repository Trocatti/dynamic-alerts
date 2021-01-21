/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import { BAlert, BAvatar } from 'bootstrap-vue'

import i18n from '@/plugins/i18n'
import Alert from '@/components/Alert'

import IconClose from '@/components/IconClose'
import IconChevronLeft from '@/components/IconChevronLeft'
import IconChevronRight from '@/components/IconChevronRight'
import InternetDisconnectIcon from '@/components/Alert/InternetDisconnectIcon'

const mockBeforeEach = () => {
  // by deleting _Ctor we force Vue system to recompile the
  // component and render the new component tree
  delete Alert._Ctor

  const notifications = [
    {
      color: 'warning',
      title: 'alert.internetDisconnect.title',
      subtitle: 'alert.internetDisconnect.subtitle',
      icon: 'InternetDisconnectIcon',
      show: true
    }
  ]

  cy.stub(Alert, 'components').callsFake(() => {
    BAlert,
      BAvatar,
      IconClose,
      IconChevronLeft,
      IconChevronRight,
      InternetDisconnectIcon
  })

  mount(Alert, {
    propsData: {
      notifications
    },
    i18n
  })

  cy.get('.octa-alert').should($el => {
    expect($el).to.have.css('width', '325px')
    expect($el).to.have.css('height', '100px')
  })

  cy.get('.octa-avatar')
    .should('be.visible')
    .then(() => cy.get('#InternetDisconnectIcon').should('be.visible'))

  cy.get('.octa-title')
    .should('be.visible')
    .contains('Celular Desconectado')

  cy.get('.octa-subtitle')
    .should('be.visible')
    .contains('Certifique-se que seu celular está conectado a internet.')
}

describe('Alert', () => {
  describe('actions', () => {
    beforeEach(() => mockBeforeEach())

    it('link', () => {
      const notifications = [
        {
          color: 'warning',
          title: 'alert.internetDisconnect.title',
          subtitle: 'alert.internetDisconnect.subtitle',
          icon: 'InternetDisconnectIcon',
          show: true,
          link: {
            href: 'http://google.com',
            title: 'alert.internetDisconnect.resolve'
          }
        }
      ]

      mount(Alert, {
        propsData: {
          notifications
        },
        i18n
      })

      cy.get('.octa-alert').should('have.class', 'warning')

      cy.get('.octa-link')
        .should('be.visible')
        .contains('Resolver')
    })
  })

  describe('carousel', () => {
    beforeEach(() => mockBeforeEach())

    it('next', () => {
      const notifications = [
        {
          color: 'warning',
          title: 'alert.internetDisconnect.title',
          subtitle: 'alert.internetDisconnect.subtitle',
          icon: 'InternetDisconnectIcon',
          show: true
        },
        {
          color: 'danger',
          title: 'alert.internetDisconnect.title',
          subtitle: 'alert.internetDisconnect.subtitle',
          icon: 'InternetDisconnectIcon',
          show: true
        }
      ]

      mount(Alert, {
        propsData: {
          notifications
        },
        i18n
      })

      cy.get('.octa-alert').should('have.class', 'warning')

      cy.get('.octa-footer')
        .should('be.visible')
        .contains('mais 2 notificações')

      cy.get('.octa-header')
        .should('be.visible')
        .then(() => {
          cy.get('.octa-next')
            .should('be.visible')
            .click()

          cy.get('.octa-alert').should('have.class', 'danger')

          cy.get('.octa-previus').should('be.visible')

          cy.get('.octa-footer')
            .should('be.visible')
            .contains('mais 1 notificações')
        })
    })
  })
  //
})
