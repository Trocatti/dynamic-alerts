<template>
  <div id="app">
    <template v-for="(notification, index) in notifications">
      <Alert :bind="notification" :key="index" />
    </template>
  </div>
</template>

<script>
  import Alert from './components/Alert'

  export default {
    name: 'app',
    components: {
      Alert
    },
    data() {
      return {
        notifications: [
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
            show: 5
          },
          {
            color: 'danger',
            title: 'alert.internetDisconnect.title',
            subtitle: 'alert.internetDisconnect.subtitle',
            icon: {
              component: 'InternetSuccessIcon'
            },
            dismissible: true,
            fade: false,
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
            dismissible: false,
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
      }
    }
  }
</script>
