export default [
  {
    color: 'success',
    title: 'alert.internetSuccess.title',
    icon: {
      component: 'IconInternetSuccess'
    },
    dismissible: true,
    fade: true,
    show: true
  },
  {
    show: true,
    color: 'danger',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'IconInternetDisconnect',
      color: 'white'
    },
    modal: {
      title: 'alert.internetDisconnect.resolve',
      id: 'ModalWhatsAppDisconnect',
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
  },
  {
    show: true,
    color: 'success',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'IconInternetDisconnect',
      color: 'white'
    },
    modal: {
      title: 'alert.internetDisconnect.resolve',
      id: 'ModalWhatsAppDisconnect3',
      params: {
        numbers: [
          {
            name: 'Facebook',
            phone: '+55 11 99107-4224'
          },
          {
            name: 'WhatsApp',
            phone: '+55 11 99107-4224'
          },
          {
            name: 'Instagram',
            phone: '+55 11 99107-4224'
          }
        ]
      }
    }
  },
  {
    color: 'warning',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: 'IconInternetDisconnect',
    dismissible: false,
    show: true
  },
  {
    color: 'danger',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'IconInternetDisconnect'
    },
    show: true,
    link: {
      href: 'https://www.whatsapp.com/legal/privacy-policy',
      title: 'alert.internetDisconnect.link'
    }
  },
  {
    show: true,
    color: 'warning',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'IconInternetDisconnect',
      color: 'white'
    },
    modal: {
      title: 'alert.internetDisconnect.resolve',
      id: 'ModalWhatsAppDisconnect2',
      params: {
        numbers: [
          {
            name: 'Financeiro',
            phone: '+55 11 99107-4224'
          }
        ]
      }
    }
  },
  {
    color: 'danger',
    title: 'alert.internetDisconnect.title',
    subtitle: 'alert.internetDisconnect.subtitle',
    icon: {
      component: 'IconInternetSuccess'
    },
    show: true,
    tooltip: {
      hover: '991074224, 99153214',
      title: 'alert.internetDisconnect.tooltip'
    }
  }
]
