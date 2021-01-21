<template>
  <div id="alert">
    <b-alert
      class="octa-alert"
      :class="currentClass"
      :show="currentAlert.show"
      :fade="currentAlert.fade"
    >
      <div class="octa-header">
        <div
          class="octa-close ml-auto"
          v-if="currentAlert.dismissible"
          @click="handleClose"
        >
          <span class="octa-hover mr-1">Fechar</span>
          <b-avatar class="octa-icon">
            <icon-close></icon-close>
          </b-avatar>
        </div>
        <template v-else-if="showCarousel">
          <div class="octa-previus" v-if="showPrevius" @click="handlePrevius">
            <b-avatar class="octa-icon">
              <icon-chevron-left></icon-chevron-left>
            </b-avatar>
            <span class="octa-hover ml-1">Anterior</span>
          </div>

          <div
            class="octa-next"
            :class="currentIndex == 0 ? 'ml-auto' : ''"
            @click="handleNext"
          >
            <span class="octa-hover mr-1">Próximo</span>
            <b-avatar class="octa-icon">
              <icon-chevron-right></icon-chevron-right>
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

      <div class="octa-footer" v-if="notificationsLenght">
        mais {{ moreNotifications }} notificações
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
        currentIndex: 0,
        animatedLeft: false,
        animatedRight: false,
        currentNotifications: []
      }
    },
    computed: {
      currentAlert() {
        return this.currentNotifications[this.currentIndex]
      },
      notificationsLenght() {
        return this.currentNotifications.length
      },
      showCarousel() {
        return this.notificationsLenght > 1
      },
      showPrevius() {
        return this.currentIndex >= 1
      },
      moreNotifications() {
        return this.notificationsLenght - this.currentIndex
      },
      currentClass() {
        return [
          this.currentAlert.color,
          { 'octa-animate-left': this.animatedLeft },
          { 'octa-animate-right': this.animatedRight }
        ]
      }
    },
    methods: {
      handleAnimated() {
        this.animatedLeft = false
        this.animatedRight = false
      },
      handleAnimatedPrevius() {
        this.handleAnimated()
        window.requestAnimationFrame(() => (this.animatedLeft = true))
      },
      handleAnimatedNext() {
        this.handleAnimated()
        window.requestAnimationFrame(() => (this.animatedRight = true))
      },
      handlePrevius() {
        this.currentIndex =
          this.currentIndex <= 0
            ? this.currentNotifications.length - 1
            : (this.currentIndex -= 1)

        this.handleAnimatedPrevius()
      },
      handleNext() {
        this.currentIndex =
          this.currentIndex >= this.currentNotifications.length - 1
            ? 0
            : (this.currentIndex += 1)

        this.handleAnimatedNext()
      },
      handleClose() {
        const notifications = [...this.currentNotifications]
        notifications.splice(this.currentIndex, 1)
        this.currentNotifications = notifications

        this.handleAnimatedNext()
      }
    },
    created() {
      this.currentNotifications = [...this.notifications]
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    padding: 16px;
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
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    .octa-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 100%;
      top: 0;
      padding: 3px;

      .octa-hover {
        display: none;
      }

      .octa-close:hover,
      .octa-previus:hover,
      .octa-next:hover {
        .octa-hover {
          display: inline-block;
        }
      }
    }

    .octa-body {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

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
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 3px 7px;
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

  .octa-animate-left {
    position: relative;
    animation: animateleft 0.4s;
  }

  .octa-animate-right {
    position: relative;
    animation: animateright 0.4s;
  }

  @keyframes animateleft {
    from {
      left: -300px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }

  @keyframes animateright {
    from {
      right: -300px;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
</style>
