<template>
  <div>
    <section class="content-section">
      <HeadingVue front="Digital Swags" back="SWAGS" />
      <div class="contents">
        <Container name="swagDigital">
          <div class="about">
            <p>
              Get yourself equipped with some amazing official Hack This Fall
              Digital Swags, and flex those by owning them. We have a Digital
              Badge where you can upload your photo and full name to make it
              personalized. Get our cool Hack This Fall wallpapers for your
              desktop computers and mobile phones. Don't forget to use the
              zoom/meet wallpapers in your meetings.
              <br />
              <br />
              Also, to have fun with your team and community members, we have an
              Instagram Bingo for you, which you can share on your stories, tag
              <a target="_blank" href="https://www.instagram.com/hackthisfall/"
                >@hackthisfall</a
              >, and nominate your friends for the same.
            </p>
            <a
              href="https://bit.ly/htf-digital-swags"
              target="blank"
              id="badge"
            >
              <CButton class="button animate-ease"
                ><span>View All</span></CButton
              >
            </a>
          </div>

          <div class="virtualBadge">
            <div class="leftColumn">
              <div class="dummy">
                <canvas id="myCanvas" width="1620" height="1620" />
              </div>
            </div>
            <div class="rightColumn">
              <h1>Digital Badge</h1>
              <div class="rightContent">
                Once you have registered and booked your travels, you are all
                set to attend Hack This Fall 3.0! Now it is time to let the
                world know by sharing this super cool digital badge.

                <br />

                <div style="margin-top: 1rem">
                  To get a personalised Hack This Fall Badge, just add your name
                  & upload your image. Download it and Share it on socials using
                  <a
                    style="color: #f46d24; font-weight: 700"
                    href="https://twitter.com/hashtag/hackthisfall"
                    target="blank"
                  >
                    #HackThisFall </a
                  >and tag
                  <a
                    style="color: #f46d24; font-weight: 700"
                    href="https://twitter.com/hackthisfall"
                    target="blank"
                    >@hackthisfall</a
                  >
                </div>
                <div class="disclaimer">
                  * We respect your privacy and are not storing your pictures on
                  our servers.
                </div>
              </div>
              <div class="cta-inputs">
                <input
                  id="nameInput"
                  v-model="name"
                  type="text"
                  placeholder="Enter your full name"
                />
                <CButton @click="uploadImage" class="button">
                  <img src="~/assets/icons/upload.svg" />
                  Upload your photo
                </CButton>
              </div>

              <input
                id="imageInput"
                type="file"
                accept="image/*"
                style="display: none"
              />
              <div class="cta-buttons" id="digital-swag">
                <CButton
                  :class="['button', !addedImage ? 'disabled' : null]"
                  @click="downloadImage"
                >
                  <img src="~/assets/icons/download.svg" />
                  Download Badge
                </CButton>

                <!-- v-show="addedImage" -->
                <CButton
                  :class="['button', !addedImage ? 'disabled' : null]"
                  @click="shareOnTwitter"
                >
                  <img src="~/assets/icons/share.svg" />
                  Share
                </CButton>

                <a
                  style="display: none"
                  href="https://twitter.com/intent/tweet?text=Hey folks! Super excited to share that I will be attending @hackthisfall 3.0, a 36 Hours in-person hackathon🥳%0A%0ACan't wait to %23InnovateForGood and meet the amazing community🧡%0A%0AGet a personal badge for yourself: hackthisfall.tech/swag 🚀 %23HackThisFall"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="share-button"
                >
                </a>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div class="desktop section">
            <h3>Desktop Wallpapers</h3>
            <div class="grid">
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/desktop/1.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/desktop/2.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/desktop/3.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/desktop/4.jpg"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
            </div>
          </div>

          <div class="zoom section">
            <h3>Zoom Backgrounds</h3>
            <div class="grid">
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/zoom/1.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/zoom/2.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/zoom/3.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
            </div>
          </div>

          <div class="mobile section">
            <h3>Mobile Wallpapers</h3>
            <div class="grid">
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/mobile/1.jpg"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/mobile/2.jpg"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/mobile/3.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/mobile/4.png"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/mobile/5.jpg"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img
                  class="smooth-transition"
                  src="~/assets/swags/mobile/6.jpg"
                />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
            </div>
          </div>

          <div class="mobile section">
            <h3>Instagram Bingo</h3>
            <div class="grid">
              <a
                class="image-overlay"
                href="https://bit.ly/htf-digital-swags"
                target="blank"
              >
                <img class="smooth-transition" src="~/assets/swags/bingo.png" />
                <div class="overlay smooth-transition">
                  <img src="~/assets/icons/download.svg" />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  </div>
</template>

<script>
import { CButton } from '@chakra-ui/vue'
import HeadingVue from '~/components/HeadingComponent'
import Container from '~/components/Container'

export default {
  components: {
    HeadingVue,
    Container,
    CButton,
  },
  data() {
    return {
      addedImage: false,
      name: '',
      imageFile: undefined,
    }
  },
  mounted() {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')
    const defaultBadge = new Image()
    defaultBadge.src = '/default-badge.png'

    defaultBadge.onload = function () {
      ctx.drawImage(defaultBadge, 0, 0, 1620, 1620)
      ctx.font = '700 4.5rem Poppins'
      ctx.fillStyle = 'white'
      ctx.fillText(
        this.name.trim() !== '' ? this.name : 'Your Name Here',
        96,
        1367
      )
    }

    const badge = new Image()
    badge.src = '/badge.png'

    const imgInput = document.getElementById('imageInput')
    const nameInput = document.getElementById('nameInput')

    imgInput.addEventListener('change', (e) => {
      if (e.target.files[0]) {
        this.imageFile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(this.imageFile)

        reader.onloadend = (e) => {
          const myImage = new Image()
          myImage.src = e.target.result
          myImage.onload = (ev) => {
            ctx.clearRect(0, 0, 1620, 1620)
            const inputWidth = myImage.naturalWidth
            const inputHeight = myImage.naturalHeight
            const smallerSide = Math.min(inputWidth, inputHeight)
            let startX = 0
            let startY = 0

            if (inputWidth < inputHeight) {
              startY = (inputHeight - inputWidth) / 2
            } else if (inputWidth > inputHeight) {
              startX = (inputWidth - inputHeight) / 2
            }

            ctx.drawImage(
              myImage,
              startX,
              startY,
              smallerSide,
              smallerSide,
              0,
              0,
              1620,
              1620
            )
            ctx.drawImage(badge, 0, 0, 1620, 1620)
            ctx.font = '700 4.5rem Poppins'
            ctx.fillStyle = 'white'
            ctx.fillText(
              this.name.trim() !== '' ? this.name : 'John Doe',
              96,
              1367
            )
            this.toggleImageAdded()
          }
        }
      }
    })

    nameInput.addEventListener('change', (e) => {
      if (this.imageFile) {
        const reader = new FileReader()
        reader.readAsDataURL(this.imageFile)
        reader.onloadend = (e) => {
          const myImage = new Image()
          myImage.src = e.target.result
          myImage.onload = (ev) => {
            ctx.clearRect(0, 0, 1620, 1620)
            const inputWidth = myImage.naturalWidth
            const inputHeight = myImage.naturalHeight
            const smallerSide = Math.min(inputWidth, inputHeight)
            let startX = 0
            let startY = 0

            if (inputWidth < inputHeight) {
              startY = (inputHeight - inputWidth) / 2
            } else if (inputWidth > inputHeight) {
              startX = (inputWidth - inputHeight) / 2
            }

            ctx.drawImage(
              myImage,
              startX,
              startY,
              smallerSide,
              smallerSide,
              0,
              0,
              1620,
              1620
            )
            ctx.drawImage(badge, 0, 0, 1620, 1620)
            ctx.font = '700 4.5rem Poppins'
            ctx.fillStyle = 'white'
            ctx.fillText(this.name, 96, 1367)
            this.toggleImageAdded()
          }
        }
      } else {
        ctx.drawImage(defaultBadge, 0, 0, 1620, 1620)
        ctx.font = '700 4.5rem Poppins'
        ctx.fillStyle = 'white'
        ctx.fillText(
          this.name.trim() !== '' ? this.name : 'Your Name Here',
          96,
          1367
        )
      }
    })
  },
  methods: {
    uploadImage() {
      document.getElementById('imageInput').click()
    },
    downloadImage() {
      if (!this.addedImage) return

      const image = document.getElementById('myCanvas').toDataURL('image/png')
      const link = document.createElement('a')
      link.download = 'htf-badge.png'
      link.href = image
      link.click()
      link.remove()
    },
    shareOnTwitter() {
      if (!this.addedImage) return

      document.getElementById('share-button').click()
    },
    toggleImageAdded() {
      this.addedImage = true
    },
  },
}
</script>

<style scoped src="~/styles/bootstrap.min.css"></style>
<style lang="scss" scoped>
a {
  color: rgba(233, 83, 34, 1);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';
  padding-top: 4rem;

  a {
    color: rgba(233, 83, 34, 1);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: rgba(233, 83, 34, 1);
    }
  }

  .font-size-18 {
    font-size: 18px;
  }

  .contents {
    @include respond-below(xs) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .virtualBadge {
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 4rem 0rem 3rem 0rem;
    background: transparent;
    border-radius: 1rem;
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    // grid-template-columns: repeat(2, 1fr);

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);

      .leftColumn {
        margin-right: unset;
        margin-bottom: 2rem;

        button {
          margin-top: 2rem;
        }
      }
    }

    @include respond-below(xs) {
      padding: 4rem 2rem 3rem 2rem;
    }

    @media screen and (max-width: 375px) {
      padding: 4rem 0.5rem 3rem 0.5rem;
    }

    @media screen and (max-width: 360px) {
      padding: 4rem 0.5rem 3rem 0.5rem;
    }

    .leftColumn {
      .dummy {
        height: 400px;
        width: 400px;
        margin: 0.2rem auto 1.3rem;
        background: transparent;

        canvas {
          height: 400px;
          width: 400px;
          border-radius: 1.5rem;
        }

        @include respond-below(xs) {
          height: 300px;
          width: 300px;

          canvas {
            height: 300px;
            width: 300px;
          }
        }

        @media screen and (max-width: 360px) {
          height: 280px;
          width: 280px;

          canvas {
            height: 280px;
            width: 280px;
          }
        }
      }

      button {
        margin-bottom: 0rem;
      }
    }

    .rightColumn {
      margin-left: 4rem;
      color: white;
      @include respond-below(lg) {
        margin-right: 4rem;
      }

      @include respond-below(xs) {
        margin-left: unset;
        margin-right: unset;
      }

      h1 {
        font-size: 2rem;
      }

      .rightContent {
        font-weight: 400;
        font-size: 1.1rem;
        margin: 1rem 0;
        justify-content: center;

        .disclaimer {
          font-size: 0.8rem;
          margin-top: 1.25rem;
          font-weight: 500;
          color: #d04d29;
        }
      }

      h4 {
        opacity: 0.6;
        font-size: 1.2rem;
        margin-bottom: 1.2rem;
        font-weight: bold;
        color: rgba(233, 83, 34, 1);
      }

      .cta-inputs {
        display: flex;
        margin-top: 1rem;
        justify-content: flex-start;

        a {
          text-decoration: none;
        }

        #nameInput {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0rem 1rem;
          // height: 55px;
          background: rgba(15, 23, 38, 0.5);
          border: 2px solid #29364f;
          border-radius: 12.4124px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          color: white;
          flex-grow: 2;
        }

        .button {
          display: flex;
          margin-left: 2rem;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 1.5rem 1rem;
          // height: 55px;
          background: #29364f;
          border-radius: 12.4124px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          color: white;
          flex-grow: 1;

          @include respond-below(xs) {
            width: 70vw;
          }
        }

        @include respond-below(sm) {
          flex-direction: column;
          align-items: center;

          #nameInput {
            padding: 0.75rem 1rem;
            width: 70vw;
          }

          .button {
            margin-top: 1rem;
            margin-left: unset;
          }
        }
      }

      .cta-buttons {
        display: flex;
        margin-top: 1rem;
        justify-content: flex-start;

        a {
          text-decoration: none;
        }

        .button {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 1.5rem 1rem;
          // height: 55px;
          background: #d04d29;
          border: 2px solid #f46d24;
          box-shadow: 2px 2px 0px #f46d24;
          border-radius: 12.4124px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 1rem;
          color: white;

          &:hover {
            background: rgb(244, 109, 36);
          }

          &:nth-of-type(2) {
            margin-left: 2rem;
          }

          @include respond-below(xs) {
            width: 70vw;
          }

          &.disabled {
            opacity: 0.5;
            background: #d04d29;
            box-shadow: 2px 2px 0px #f46d24;
            cursor: default;
          }
        }

        @include respond-below(sm) {
          flex-direction: column;
          align-items: center;
          .button {
            &:nth-of-type(2) {
              margin-left: unset;
            }
          }
        }
      }
    }
  }

  .section {
    h3 {
      color: white;
      font-weight: 600;
      font-size: 2rem;
    }

    .grid {
      .image-overlay {
        position: relative;
        cursor: pointer;
        img {
          border-radius: 0.75rem;
          filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.2));
        }

        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 4rem;
            height: 4rem;
          }

          &.smooth-transition {
            -webkit-transition: all 1.1s ease;
            -moz-transition: all 1.1s ease;
            -o-transition: all 1.1s ease;
            transition: all 1.1s ease;
          }
        }

        &:hover {
          .overlay {
            opacity: 1;
          }
        }
      }
    }
  }

  .zoom {
    margin-top: 3rem;
    .grid {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 0.75rem;
    }

    @include respond-below(sm) {
      .grid {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 0.75rem;
      }
    }
  }

  .desktop {
    .grid {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 0.75rem;
    }

    @include respond-below(sm) {
      .grid {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 0.75rem;
      }
    }
  }

  .mobile {
    margin-top: 3rem;
    .grid {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 0.75rem;
    }

    @include respond-below(sm) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 0.75rem;
      }
    }
  }

  .about {
    color: white;
    margin: auto;
    margin-top: 4rem;
    background: linear-gradient(
      180deg,
      #142137 0%,
      #0b121f 99.99%,
      rgb(20, 33, 55) 100%
    );
    border-radius: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      padding: 2rem 2rem 0rem 2rem;
      // margin: 1rem 1rem 2rem;
      font-size: 1rem;

      @include respond-below(md) {
        padding-top: 20px;
      }
    }

    a {
      align-self: center;
      text-decoration: none;
    }

    .button {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1rem 1rem;
      // height: 55px;
      background: #d04d29;
      border: 2px solid #f46d24;
      box-shadow: 2px 2px 0px #f46d24;
      border-radius: 12.4124px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      color: white;

      &:hover {
        background: rgb(244, 109, 36);
      }

      @include respond-below(xs) {
        max-width: 70vw;
      }
    }
  }
}
</style>
