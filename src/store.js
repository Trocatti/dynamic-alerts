export default [
  {
    color: 'warning',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: 'InternetDisconnectIcon',
    dismissible: false,
    show: true
  },
  {
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
  },
  {
    color: 'success',
    title: 'alert.internetSuccess.title',
    icon: {
      component: 'InternetSuccessIcon'
    },
    dismissible: true,
    fade: true,
    show: true
  },
  {
    color: 'danger',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'InternetSuccessIcon'
    },
    show: true,
    tooltip: {
      hover: '991074224, 99153214',
      title: 'alert.internetDisconnect.tooltip'
    }
  },
  {
    color: 'danger',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'InternetDisconnectIcon',
      color: 'white'
    },
    show: true,
    modal: {
      title: 'alert.internetDisconnect.resolve',
      component: 'WhatsAppDisconnectModal',
      params: {
        numbers: [
          {
            name: 'Financeiro',
            phone: '+55 11 99107-4224'
          },
          {
            name: 'Vendas',
            phone: '+55 11 99107-4224'
          },
          {
            name: 'Suporte',
            phone: '+55 11 99107-4224'
          }
        ]
      }
    }
  }
]
