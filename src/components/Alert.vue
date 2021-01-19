<template>
  <div id="alert">
    <b-alert
      class="octa-alert"
      :class="bind.color"
      :show="bind.show"
      :fade="bind.fade"
      :dismissible="bind.dismissible"
    >
      <template #dismiss>
        <CloseIcon class="octa-close"></CloseIcon>
      </template>

      <b-avatar class="octa-icon">
        <component
          v-if="bind.icon"
          :is="bind.icon.component"
          :color="bind.icon.color"
        ></component>
      </b-avatar>

      <div class="octa-content">
        <span class="octa-title" v-if="bind.title">
          {{ $t(bind.title) }}
        </span>

        <div class="octa-subtitle">
          <span v-if="bind.subtitle">
            {{ $t(bind.subtitle) }}
          </span>
          <span
            class="octa-tooltip"
            v-if="bind.tooltip"
            v-b-tooltip.bottom
            :title="$t(bind.tooltip.hover)"
          >
            {{ $t(bind.tooltip.title) }}
          </span>
        </div>

        <a
          class="octa-link"
          target="_blank"
          rel="noopener noreferrer"
          v-if="bind.link"
          :href="bind.link.href"
        >
          {{ $t(bind.link.title) }}
        </a>

        <b-button
          class="octa-btn-modal"
          v-if="bind.modal"
          @click="modalShow = true"
        >
          {{ $t(bind.modal.title) }}
        </b-button>
      </div>
    </b-alert>

    <component
      v-if="bind.modal && modalShow"
      :is="bind.modal.component"
      :numbers="bind.modal.params.numbers"
      :modalShow.sync="modalShow"
    ></component>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    components: {
      CloseIcon: () => import('./icon/Close'),
      InternetDisconnectIcon: () => import('./icon/InternetDisconnectIcon'),
      InternetSuccessIcon: () => import('./icon/InternetSuccessIcon'),
      WhatsAppDisconnectModal: () => import('./modal/WhatsAppDisconnectModal')
    },
    props: {
      bind: {
        type: Object,
        required: true,
        default: () => ({
          color: 'transparent',
          title: '',
          subtitle: '',
          show: false,
          dismissible: true,
          fade: true,
          icon: {},
          link: {},
          tooltip: {},
          modal: {}
        })
      }
    },
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>

<style>
  .tooltip > .tooltip-inner {
    border-radius: 0.313rem;
  }

  button:focus {
    outline: none !important;
  }
</style>

<style lang="scss" scoped>
  .octa-alert {
    border: 0px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    width: 325px;
    height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Helvetica, Arial, sans-serif;

    .octa-icon {
      height: 3.5rem;
      width: 3.5rem;
      margin-right: 10px;
    }

    .octa-close {
      top: 5px;
      right: 5px;
      position: inherit;
    }

    .octa-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .octa-title {
        font-weight: 700;
        font-size: 0.875rem;
      }

      .octa-subtitle {
        font-size: 0.75rem;

        .octa-tooltip {
          text-decoration: underline;
        }
      }

      .octa-link {
        font-size: 0.75rem;
        cursor: pointer;
        text-decoration: underline;
      }

      .octa-btn-modal {
        background-color: transparent;
        border: 0;
        margin: 0;
        padding: 0;
        font-size: 0.75rem;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
</style>

<style lang="scss" scoped>
  $color-dark: #333333;
  $color-white: white;

  .success {
    color: $color-white;
    background-color: #07e88d;

    .octa-icon {
      background-color: #0cbd76;
    }

    .octa-btn-modal,
    .octa-link {
      color: $color-white;
    }
  }

  .danger {
    color: $color-white;
    background-color: #ee316b;

    .octa-icon {
      background-color: #d62158;
    }

    .octa-btn-modal,
    .octa-link {
      color: $color-white;
    }
  }

  .warning {
    color: $color-dark;
    background-color: #fcb54b;

    .octa-icon {
      background-color: #e59b2d;
    }

    .octa-btn-modal,
    .octa-link {
      color: $color-dark;
    }
  }
</style>
