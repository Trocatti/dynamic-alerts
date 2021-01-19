<template>
  <div id="alert">
    <b-alert
      class="octa-alert"
      :class="currentAlert.color"
      :show="currentAlert.show"
      :fade="currentAlert.fade"
    >
      <div class="octa-header">
        <div
          class="octa-close ml-auto"
          v-if="currentAlert.dismissible"
          @click="close()"
        >
          <IconClose></IconClose>
        </div>
        <template v-else-if="notifications.length > 1">
          <div class="octa-previus" v-if="currentIndex >= 1" @click="previus">
            <b-avatar class="octa-icon">
              <IconChevronLeft></IconChevronLeft>
            </b-avatar>
            <span class="octa-hover ml-1">Anterior</span>
          </div>

          <div
            class="octa-next"
            :class="currentIndex == 0 ? 'ml-auto' : ''"
            @click="next"
          >
            <span class="octa-hover mr-1">Próximo</span>
            <b-avatar class="octa-icon">
              <IconChevronRight></IconChevronRight>
            </b-avatar>
          </div>
        </template>
      </div>

      <div class="octa-body">
        <b-avatar class="octa-avatar">
          <component
            v-if="currentAlert.icon"
            :is="currentAlert.icon.component || currentAlert.icon"
            :params="currentAlert.icon.params"
          ></component>
        </b-avatar>

        <div class="octa-content">
          <span class="octa-title" v-if="currentAlert.title">
            {{ $t(currentAlert.title) }}
          </span>

          <div class="octa-subtitle">
            <span v-if="currentAlert.subtitle">
              {{ $t(currentAlert.subtitle) }}
            </span>
            <span
              class="octa-tooltip"
              v-if="currentAlert.tooltip"
              v-b-tooltip.bottom
              :title="$t(currentAlert.tooltip.hover)"
            >
              {{ $t(currentAlert.tooltip.title) }}
            </span>
          </div>

          <a
            class="octa-link"
            target="_blank"
            rel="noopener noreferrer"
            v-if="currentAlert.link"
            :href="currentAlert.link.href"
          >
            {{ $t(currentAlert.link.title) }}
          </a>

          <div
            class="octa-btn-modal"
            v-if="currentAlert.modal"
            @click="modalShow = true"
          >
            {{ $t(currentAlert.modal.title) }}
          </div>
        </div>
      </div>

      <div class="octa-footer" v-if="notifications.length > 1">
        mais {{ notifications.length }} notificações
      </div>
    </b-alert>

    <component
      v-if="currentAlert.modal && modalShow"
      :is="currentAlert.modal.component"
      :numbers="currentAlert.modal.params.numbers"
      :modalShow.sync="modalShow"
    ></component>
  </div>
</template>

<script>
  import IconClose from '@/components/IconClose'
  import IconChevronLeft from '@/components/IconChevronLeft'
  import IconChevronRight from '@/components/IconChevronRight'

  export default {
    name: 'alertComponent',
    components: {
      IconClose,
      IconChevronLeft,
      IconChevronRight,
      InternetDisconnectIcon: () => import('./InternetDisconnectIcon'),
      InternetSuccessIcon: () => import('./InternetSuccessIcon'),
      WhatsAppDisconnectModal: () => import('./WhatsAppDisconnectModal')
    },
    props: {
      notifications: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        modalShow: false,
        currentIndex: 0
      }
    },
    computed: {
      currentAlert() {
        return this.notifications[this.currentIndex]
      }
    },
    watch: {
      'currentAlert.show'(show) {
        if (typeof show === 'number') {
          setTimeout(() => this.next(), show * 1000)
        }
      }
    },
    methods: {
      previus() {
        this.currentIndex =
          this.currentIndex <= 0
            ? this.notifications.length - 1
            : (this.currentIndex -= 1)
      },
      next() {
        this.currentIndex =
          this.currentIndex >= this.notifications.length - 1
            ? 0
            : (this.currentIndex += 1)
      },
      close() {
        this.notifications.splice(this.currentIndex, 1)
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
  $color-dark: #333333;
  $color-white: white;

  .octa-alert {
    display: grid;
    grid-template-rows: 20px 1fr 20px;
    grid-template-areas:
      'header'
      'body'
      'footer';
    flex-direction: column;
    align-items: center;
    border: 0px;
    border-radius: 10px;
    padding: 5px;
    margin: 20px;
    width: 325px;
    height: 100px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Helvetica, Arial, sans-serif;
    font-size: 0.688rem;

    .octa-icon {
      height: 1.188rem;
      width: 1.188rem;
      background-color: $color-dark;
      opacity: 0.3;
    }

    .octa-header {
      grid-area: header;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .octa-hover {
        display: none;
      }

      .octa-previus:hover,
      .octa-next:hover {
        .octa-hover {
          display: inline-block;
        }
      }
    }

    .octa-body {
      grid-area: body;
      display: flex;
      align-content: center;
      width: 100%;
      padding: 0 20px;

      .octa-avatar {
        height: 3.5rem;
        width: 3.5rem;
        margin-right: 10px;
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

        .octa-tooltip {
          text-decoration: underline;
        }

        .octa-link {
          cursor: pointer;
          text-decoration: underline;
        }

        .octa-btn-modal {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    .octa-footer {
      grid-area: footer;
      width: 100%;
      display: flex;
      margin-top: 5px;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .success {
    color: $color-white;
    background-color: #07e88d;

    svg {
      fill: $color-white;
    }

    .octa-close {
      stroke: $color-white;
    }

    .octa-avatar {
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

    svg {
      fill: $color-white;
    }

    .octa-close {
      stroke: $color-white;
    }

    .octa-avatar {
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

    .octa-icon,
    .octa-avatar {
      cursor: pointer;
      svg {
        fill: $color-dark;
      }
    }

    .octa-close {
      stroke: $color-dark;
    }

    .octa-avatar {
      background-color: #e59b2d;
    }

    .octa-btn-modal,
    .octa-link {
      color: $color-dark;
    }
  }
</style>
