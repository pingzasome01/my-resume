<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const change = (e) => {
  locale.value = e
}

onMounted(() => {
  console.log(screen.width)
  setTimeout(() => {
    AOS.init({
      disableMutationObserver: true,
      offset: 100,
      anchorPlacement: 'top-bottom',
      delay: 200,
      duration: 800
    })

    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }

    window.onload = function () {
      AOS.refresh()
    }
  }, 1000)
})
</script>

<template>
  <div class="overflowpage">
    <header class="text-gray-700 body-font border-b border-gray-200">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col fixed z-10 md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="https://tailblocks.cc"
          target="_blank"
        >
          <img class="h-12 w-12 rounded-full" src="../assets/images/Lemon.jpg" alt="" />
          <span class="ml-3 text-xl profilefont">My Personal Profile</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#Home" class="mr-5 hover:text-gray-900">{{ $t('Navigator.Home') }}</a>
          <a href="#Aboutme" class="mr-5 hover:text-gray-900">{{ $t('Navigator.about') }}</a>
          <a href="#Tools" class="mr-5 hover:text-gray-900">{{ $t('Navigator.tool') }}</a>
          <a class="mr-5 hover:text-gray-900">{{ $t('Navigator.contact') }}</a>
        </nav>
        <div class="flex">
          <img
            class="w-9 h-9 p-1 mt-1"
            src="../assets/images/flag/Thailand.png"
            @click="change('th')"
          />
          <img
            class="w-11 p-1 h-11"
            src="../assets/images/flag/England-Flag-Transparent-Free-PNG.png"
            @click="change('en')"
          />
        </div>
        <!-- <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> -->
      </div>
    </header>
    <!-- MyHome -->
    <section id="Home" class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 class="title-font sm:text-4xl text-4xl font-bold mb-4   text-yellow-400">
            {{ $t('MyHome.Me') }}<a class="title-font sm:text-4xl text-4xl font-bold mb-4   text-gray-800">o</a>
            <br />
          </h1>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {{ $t('MyHome.Nickname') }}
          </h1>
          <p class="mb-8 leading-relaxed">{{ $t('MyHome.subNickname') }}</p>
          <div class="flex justify-center">
            <a
              href="#Aboutme"
              class="inline-flex text-white hover:animate-bounce bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >AboutMe</a
            >
          </div>
        </div>
        <div data-aos="fade-left" class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../assets/images/imageprofile/imagepingpong.jpg"
          />
        </div>
      </div>
    </section>
    <!-- <section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->
    <!-- Myaboutme -->
    <section id="Aboutme" class="text-gray-700 body-font border-t border-gray-200">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div
          data-aos="fade-right"
          class="lg:w-1/2 sm:flex sm:flex-col sm:items-center w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
        >
          <img
            alt="feature"
            class="object-cover object-center"
            src="../assets/images/imageprofile/imagepingpong2.jpg"
          />
        </div>
        <div
          class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
        >
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              data-aos="fade-left"
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <div class="flex-grow">
              <h2
                data-aos="fade-left"
                data-aos-delay="500"
                class="text-gray-900 text-lg title-font font-medium mb-3 profilefont"
              >
                {{ $t('Myabout.head') }}
              </h2>
              <p data-aos="fade-left" data-aos-delay="700" class="leading-relaxed text-base">
                {{ $t('Myabout.graduated') }}
              </p>
              <!-- <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> -->
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              data-aos="fade-left"
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </div>
            <div class="flex-grow">
              <h2
                data-aos="fade-left"
                data-aos-delay="500"
                class="text-gray-900 text-lg title-font font-medium profilefont"
              >
                {{ $t('Myabout.head1') }}
              </h2>
              <p data-aos="fade-left" data-aos-delay="700" class="leading-relaxed text-base">
                - {{ $t('Myabout.experience1') }}
              </p>
              <br />
              <p data-aos="fade-left" data-aos-delay="700" class="leading-relaxed text-base">
                - {{ $t('Myabout.experience2') }}
              </p>
              <br />
              <p data-aos="fade-left" data-aos-delay="700" class="leading-relaxed text-base">
                - {{ $t('Myabout.experience3') }}
              </p>
              <!-- <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> -->
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              data-aos="fade-left"
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2
                data-aos="fade-left"
                data-aos-delay="500"
                class="text-gray-900 text-lg title-font font-medium mb-3 profilefont"
              >
                {{ $t('Myabout.head2') }}
              </h2>
              <p data-aos="fade-left" data-aos-delay="700" class="leading-relaxed text-base">
                {{ $t('Myabout.aptitude') }}
              </p>
              <p data-aos="fade-left" data-aos-delay="700" class="leading-relaxed text-base">
                {{ $t('Myabout.aptitude2') }}
              </p>
              <a
                href="../assets/images/Lemon.jpg"
                download
                class="mt-3 text-indigo-500 inline-flex items-center"
                >Dowloade Myresume
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- MyTools -->
    <section id="Tools" class="text-gray-700 body-font border-t border-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            data-aos="fade-up"
          >
            {{ $t('Myskill.headskill') }}
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base" data-aos="fade-up">
            {{ $t('Myskill.title') }}
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3 md:w-full p-4 sm:w-full w-full">
            <div class="border border-gray-300 p-6 rounded-lg" data-aos="fade-up">
              <div class="lg:flex md:flex sm:flex-none">
                <div
                  class="w-10 h-10 animate-pulse inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2
                  class="text-lg p-1 px-2 text-gray-900 text-center font-medium title-font profilefont mb-2"
                >
                  Framework
                </h2>
              </div>
              <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                <div class="p-4 flex flex-col items-left">
                  <img class="w-8 h-8" src="../assets/images/logo/vue-js.png" alt="" />
                  <a>vue.js</a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-full sm:w-full w-full p-4" data-aos="fade-up">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="lg:flex md:flex sm:flex-none">
                <div
                  class="w-10 h-10 animate-pulse inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2
                  class="text-lg text-gray-900 font-medium title-font mb-2 p-1 px-2 profilefont flex flex-col sm:items-center items-center"
                >
                  Css Framework & Tools
                </h2>
              </div>
              <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/Tailwind.png" alt="" />
                  <a>Tailwind</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/bootstap.png" alt="" />
                  <a>Bootsrap</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/swal2-logo-square.png" alt="" />
                  <a>Swal2</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/vuetify.svg" alt="" />
                  <a>Vuetify</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-12 h-12 -my-2" src="../assets/images/logo/flowbite.jpeg" alt="" />
                  <a>Flowbite</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/swiper.png" alt="" />
                  <a>Swiper</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/daisy.webp" alt="" />
                  <a>DaisyUi</a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-full sm:w-full w-full p-4" data-aos="fade-up">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="lg:flex md:flex">
                <div
                  class="w-10 h-10 animate-pulse justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex flex-col items-center"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2
                  class="text-lg text-gray-900 font-medium title-font mb-2 p-1 px-2 profilefont flex flex-col sm:items-center items-center"
                >
                  Other
                </h2>
              </div>
              <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/github.png" alt="" />
                  <a>Github</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/gitlab.png" alt="" />
                  <a>Gitlab</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/bitbug.png" alt="" />
                  <a>Bitbucket</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/sourcetree.png" alt="" />
                  <a>Sourcetree</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-12 h-8" src="../assets/images/logo/Adobe_XD.png" alt="" />
                  <a>AdobeXD</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/figma_ogo.png" alt="" />
                  <a>Figma</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/vscode.png" alt="" />
                  <a>Vscode</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/gitlens.png" alt="" />
                  <a>Gitlens</a>
                </div>
                <div class="p-4 flex flex-col items-center">
                  <img class="w-8 h-8" src="../assets/images/logo/firebase.png" alt="" />
                  <a>Firebase</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button
        class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Button
      </button> -->
      </div>
    </section>
    <!-- <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
          farm-to-table. Franzen you probably haven't heard of them.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
              <p class="text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/84x84/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
              <p class="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/88x88/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
              <p class="text-gray-500">Founder</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/90x90/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
              <p class="text-gray-500">DevOps</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/94x94/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
              <p class="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/98x98/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
              <p class="text-gray-500">UX Researcher</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/100x90/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
              <p class="text-gray-500">QA Engineer</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/104x94/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
              <p class="text-gray-500">System</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/108x98/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
              <p class="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

    <!-- <section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p class="text-gray-500">Senior Product Designer</p>
    </div>
  </div>
</section> -->
    <!-- <section class="text-gray-700 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email">
      <textarea class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section> -->
    <footer class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto"></div>

      <div class="bg-gray-200">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Nattapon udomsil create
            <a
              href="https://www.instagram.com/ping______eiei/"
              class="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
              >@ping______eiei</a
            >
          </p>
          <span
            class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100003824553217 "
              target="_blank"
              class="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ping______eiei/"
              target="_blank"
              class="ml-3 text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://linevoom.line.me/user/_dYAp0sMGdG78FXxDeqkHgCrkpoX-ZalVnlMeJGI"
              target="_blank"
              class="ml-3 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-line"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
    <a
      href="https://bitbucket.org/datafirst-front/resume/src/master/"
      class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border "
      title="name"
      alt="name"
      target="_blank"
      >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z"/></svg>
    </a>
    
  </div>
</template>
<style>
@font-face {
  font-family: 'profilefont';
  src: url('../assets/styles/font/Ubuntu-Bold.ttf') format('truetype');
  /* Add additional formats such as woff, woff2, etc. for better browser compatibility */
}
@font-face {
  font-family: 'profilefont2';
  src: url('../assets/styles/font/Ubuntu-Regular.ttf') format('truetype');
  /* Add additional formats such as woff, woff2, etc. for better browser compatibility */
}
.profilefont {
  font-family: 'profilefont', sans-serif;
  color: black;
}
a {
  font-family: 'profilefont2', sans-serif;
}
p {
  font-family: 'profilefont2', sans-serif;
}

.overflowpage {
  overflow-x: hidden;
}
</style>
