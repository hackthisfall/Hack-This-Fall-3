<template>
  <ContainerVue id="faq" name="faq">
    <HeadingVue front="Questions" back="FAQs" />
    <CFlex mt="50px" :mx="{ base: '1rem', sm: '100px' }" justify="center">
      <CGrid
        gap="50px"
        :template-columns="{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }"
      >
        <CAccordion :display="{ base: 'unset', sm: 'unset' }">
          <CGridItem
            v-for="(faq, index) in faqs.slice(0, faqs.length)"
            :key="index"
            class="faq"
          >
            <CAccordionItem
              v-slot="{ isExpanded }"
              :roundedTopRight="index === 0 ? '20px' : '0px'"
              :roundedTopLeft="index === 0 ? '20px' : '0px'"
              :roundedBottomRight="index === faqs.length - 1 ? '20px' : '0px'"
              :roundedBottomLeft="index === faqs.length - 1 ? '20px' : '0px'"
              bg="#0F1929"
              fontFamily="Poppins"
              allowToggle
              border="none"
              class="accordion-header"
            >
              <CAccordionHeader
                _focus="{boxShadow: 'none'}"
                px="30px"
                py="30px"
                :_expanded="{ paddingBottom: '0px' }"
                color="#FFFFFF"
                :borderTop="index !== 0 ? '2px solid #f3f5f633' : 'none'"
                class="title"
              >
                <span class="number">{{
                  `${index + 1}`.padStart(2, '0')
                }}</span>
                <CBox flex="1" text-align="left">{{ faq.title }}</CBox>
                <CBox
                  class="icon"
                  :background="!isExpanded ? '#f3f5f633' : '#FFF'"
                >
                  <CAccordionIcon
                    :color="isExpanded ? '#050C19' : '#FFF'"
                    class="image"
                    ><svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55049 1.13057C8.15997 0.740046 7.5268 0.740046 7.13628 1.13057L0.772316 7.49453C0.381792 7.88506 0.381792 8.51822 0.772316 8.90874C1.16284 9.29927 1.79601 9.29927 2.18653 8.90874L7.84338 3.25189L13.5002 8.90874C13.8908 9.29927 14.5239 9.29927 14.9145 8.90874C15.305 8.51822 15.305 7.88506 14.9145 7.49453L8.55049 1.13057ZM8.84338 2.83768V1.83768H6.84338V2.83768H8.84338Z"
                      />
                    </svg>
                  </CAccordionIcon>
                </CBox>
              </CAccordionHeader>
              <CAccordionPanel class="desc" color="#F3F5F6">{{
                faq.description
              }}</CAccordionPanel>
            </CAccordionItem>
          </CGridItem>
        </CAccordion>
        <CAccordion :display="{ base: 'none', sm: 'unset' }">
          <CGridItem
            v-for="(faq, index) in faqs.slice(0, faqs.length / 2)"
            :key="index"
            class="faq"
          >
            <CAccordionItem
              v-slot="{ isExpanded }"
              :roundedTopRight="index === 0 ? '20px' : '0px'"
              :roundedTopLeft="index === 0 ? '20px' : '0px'"
              :roundedBottomRight="
                index === faqs.length / 2 - 1 ? '20px' : '0px'
              "
              :roundedBottomLeft="
                index === faqs.length / 2 - 1 ? '20px' : '0px'
              "
              bg="#0F1929"
              fontFamily="Poppins"
              allowToggle
              border="none"
              class="accordion-item"
            >
              <CAccordionHeader
                _focus="{boxShadow: 'none'}"
                px="30px"
                py="30px"
                :_expanded="{ paddingBottom: '0px' }"
                color="#FFFFFF"
                :borderTop="index !== 0 ? '2px solid #f3f5f633' : 'none'"
                class="title"
                aria-expanded="false"
                @click="toggleItems(index, $event)"
              >
                <span class="number">{{
                  `${index + 1}`.padStart(2, '0')
                }}</span>
                <CBox flex="1" text-align="left">{{ faq.title }}</CBox>
                <CBox
                  class="icon"
                  :background="!isExpanded ? '#f3f5f633' : '#FFF'"
                >
                  <CAccordionIcon
                    :color="isExpanded ? '#050C19' : '#FFF'"
                    class="image"
                    ><svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55049 1.13057C8.15997 0.740046 7.5268 0.740046 7.13628 1.13057L0.772316 7.49453C0.381792 7.88506 0.381792 8.51822 0.772316 8.90874C1.16284 9.29927 1.79601 9.29927 2.18653 8.90874L7.84338 3.25189L13.5002 8.90874C13.8908 9.29927 14.5239 9.29927 14.9145 8.90874C15.305 8.51822 15.305 7.88506 14.9145 7.49453L8.55049 1.13057ZM8.84338 2.83768V1.83768H6.84338V2.83768H8.84338Z"
                      />
                    </svg>
                  </CAccordionIcon>
                </CBox>
              </CAccordionHeader>
              <CAccordionPanel class="desc" color="#F3F5F6">{{
                faq.description
              }}</CAccordionPanel>
            </CAccordionItem>
          </CGridItem>
        </CAccordion>
        <CAccordion :display="{ base: 'none', sm: 'unset' }">
          <CGridItem
            v-for="(faq, index) in faqs.slice(faqs.length / 2)"
            :key="index"
            class="faq"
          >
            <CAccordionItem
              v-slot="{ isExpanded }"
              :roundedTopRight="index === 0 ? '20px' : '0px'"
              :roundedTopLeft="index === 0 ? '20px' : '0px'"
              :roundedBottomRight="
                index === faqs.length / 2 - 1 ? '20px' : '0px'
              "
              :roundedBottomLeft="
                index === faqs.length / 2 - 1 ? '20px' : '0px'
              "
              bg="#0F1929"
              fontFamily="Poppins"
              allowToggle
              border="none"
            >
              <CAccordionHeader
                _focus="{boxShadow: 'none'}"
                px="30px"
                py="30px"
                :_expanded="{ paddingBottom: '0px' }"
                color="#FFFFFF"
                :borderTop="index !== 0 ? '2px solid #f3f5f633' : 'none'"
                class="title"
              >
                <span class="number">{{
                  `${index + 1}`.padStart(2, '0')
                }}</span>
                <CBox flex="1" text-align="left">{{ faq.title }}</CBox>
                <CBox
                  class="icon"
                  :background="!isExpanded ? '#f3f5f633' : '#FFF'"
                >
                  <CAccordionIcon
                    :color="isExpanded ? '#050C19' : '#FFF'"
                    class="image"
                    ><svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55049 1.13057C8.15997 0.740046 7.5268 0.740046 7.13628 1.13057L0.772316 7.49453C0.381792 7.88506 0.381792 8.51822 0.772316 8.90874C1.16284 9.29927 1.79601 9.29927 2.18653 8.90874L7.84338 3.25189L13.5002 8.90874C13.8908 9.29927 14.5239 9.29927 14.9145 8.90874C15.305 8.51822 15.305 7.88506 14.9145 7.49453L8.55049 1.13057ZM8.84338 2.83768V1.83768H6.84338V2.83768H8.84338Z"
                      />
                    </svg>
                  </CAccordionIcon>
                </CBox>
              </CAccordionHeader>
              <CAccordionPanel class="desc" color="#F3F5F6">{{
                faq.description
              }}</CAccordionPanel>
            </CAccordionItem>
          </CGridItem>
        </CAccordion>
      </CGrid>
    </CFlex>
  </ContainerVue>
</template>
<script>
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  CAccordionIcon,
  CBox,
  CGrid,
  CGridItem,
  CFlex,
} from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionPanel,
    CAccordionIcon,
    HeadingVue,
    ContainerVue,
    CBox,
    CGrid,
    CGridItem,
    CFlex,
  },
  data() {
    return {
      selectedIndex: undefined,
      faqs: [
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
        {
          title: 'Where can I watch?',
          description:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.',
        },
      ],
    }
  },
  methods: {
    toggleItems(indexToToggle, event) {
      // console.log(event)
      if (indexToToggle === this.selectedIndex) {
        this.selectedIndex = undefined
      } else if (this.selectedIndex === undefined) {
        this.selectedIndex = indexToToggle
      } else {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        })

        console.log(
          `click kara ${indexToToggle} ko, already clicked tha ${this.selectedIndex}`
        )

        console.log(
          document.getElementsByClassName('accordion-item')[this.selectedIndex]
        )

        document
          .getElementsByClassName('accordion-item')
          [this.selectedIndex].dispatchEvent(clickEvent)

        // this.toggleItems(this.selectedIndex)
        // toggle selectedIndex

        this.selectedIndex = indexToToggle
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.faq {
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;

    .icon {
      border-radius: 50%;
      padding: 5px 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.75rem;
      width: 1.75rem;

      .image {
        position: absolute;
      }
    }

    .number {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 120%;
      letter-spacing: 0.190942px;
      color: #ffffff80;
      margin-right: 30px;
    }

    @include respond-below(mobile) {
      font-size: 1rem;

      .number {
        font-size: 1.1rem;
        margin-right: 0.75rem;
      }
    }
  }

  .desc {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    padding-left: 75px;
    padding-right: 50px;
    text-align: justify;

    @include respond-below(mobile) {
      font-size: 0.75rem;
      padding-left: 1rem;
    }
  }
}
</style>
