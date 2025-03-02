<template>
  <div id="app">
    <div class="container">
      <div class="album" :class="{'album--open': isOpenedTop}">
        <div
          class="album__paper"
          :style="{zIndex: isOpenedTop ? 0 : items.length + 1 }"
          :class="{'open': isOpenedTop}"
          @click="topOpen">
          <div
            class="album__page front"
            :style="{transform: `translateZ(${items.length + 1}px)`}">
            <div>
              <p class="txt-text">TU Y YO</p>
              <p class="txt-text sub">♡</p>
            </div>
          </div>
          <div class="album__page back" :style="{zIndex: 0}"></div>
        </div>
        <div
          class="album__paper"
          v-for="(page, idx) in items"
          :key="idx + 1"
          :style="{zIndex: page.isOpen ? idx + 1 : items.length + 1 - (idx + 1) }"
          :class="{'open': page.isOpen}"
          @click="idx + 1 === items.length ? reset() : open(idx, page.isOpen)">
          <div
            class="album__page front"
            :style="{transform: `translateZ(${items.length + 1 - (idx + 1)}px)`}">
            <div class="content">
              <div class="content__title">{{ page.title }}</div>
              <div class="content__img1">
                <img :src="page.img1" />
                <div class="content__text">{{ idx + 1 }}</div>
              </div>
              <div class="content__img2"><img :src="page.img2" /></div>
              <div class="content__img3"><img :src="page.img3" /></div>
            </div>
          </div>
          <div class="album__page back" :style="{zIndex: idx + 1}"></div>
        </div>
        <div class="album__back"></div>
        <div class="album__bottom"></div>
        <div class="album__shadow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: require('@/assets/recuerdo3.jpeg'),
          img2: require('@/assets/recuerdo2.jpeg'),
          img3: require('@/assets/recuerdo1.jpeg'),
          title: 'RECUERDOS',
          isOpen: false,
        },
        {
          img1: require('@/assets/primer1.jpg'),
          img2: require('@/assets/primer2.jpg'),
          img3: require('@/assets/primer3.jpg'),
          title: 'PRIMER MES',
          isOpen: false,
        },
        {
          img1: require('@/assets/concierto1.jpeg'),
          img2: require('@/assets/concierto2.jpeg'),
          img3: require('@/assets/concierto4.jpeg'),
          title: 'CONCIERTOS',
          isOpen: false,
        },
        {
          img1: require('@/assets/paint1.jpg'),
          img2: require('@/assets/paint2.jpg'),
          img3: require('@/assets/paint3.jpg'),
          title: "CERAMICAS",
          isOpen: false,
        },
        {
          img1: require('@/assets/Botero1.jpg'),
          img2: require('@/assets/Botero2.jpg'),
          img3: require('@/assets/Botero3.jpg'),
          title: "PLAZA BOTERO",
          isOpen: false,
        },
        {
          img1: require('@/assets/Cdc.jpg'),
          img2: require('@/assets/cdc2.jpg'),
          img3: require('@/assets/cdc3.jpg'),
          title: "CASA DE LA CULTURA",
          isOpen: false,
        },
        {
          img1: require('@/assets/palacio1.jpg'),
          img2: require('@/assets/palacio2.jpg'),
          img3: require('@/assets/palacio3.jpg'),
          title: "PALACIO",
          isOpen: false,
        },
        {
          img1: require('@/assets/gim1.jpg'),
          img2: require('@/assets/gim2.jpg'),
          img3: require('@/assets/gim3.jpg'),
          title: "GIMNASIO",
          isOpen: false,
        },
        {
          img1: require('@/assets/dosmeses3.jpg'),
          img2: require('@/assets/dosmeses2.jpg'),
          img3: require('@/assets/dosmeses1.jpg'),
          title: "SEGUNDO MES",
          isOpen: false,
        }
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },
    open(idx, isOpen) {
      if (this.isOpenedTop) {        
        this.items[idx].isOpen = !isOpen;
      }
    },
    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cute+Font&display=swap");
html,
body {
  width: 100%;
  height: 100vw;
  margin: 0;
}

body {
  color: #333;
  font-family:Tahoma, Geneva, cursive;
  background: #3c3c3c;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
*:before,
*:after {
  content: "";
  position: absolute;
}

.container {
  margin: auto;
}

.album {
  transform-style: preserve-3d;
  transition: 1s;
  margin: auto;
  width: 600px;
  height: 700px;
  transform: scale(0.5);
  cursor: pointer;
  position: relative;
}
.txt-text {
  position: absolute;
  top: 46%;
  color: #7883bf;
  left: 30%;
  z-index: 100;
  font-size: 4rem;
}
.sub{
  top: 55%;
  left: 41%;
}
  .album--open {
    transform: translate(20px, 0) rotateX(10deg) rotateY(0deg) rotateZ(0) scale(0.6);
  }
.album__paper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-origin: 0 50%;
  transform-style: preserve-3d;
}
.album__paper:not(.first) .album__page {
  background: #f1f0f0;
  background-size: 100% 1.5em;
}
.album__paper:not(.first) .back {
  background: #d4d3d3;
}
.album__paper:nth-of-type(1) .back {
  background: rgb(200 209 255) !important;
}
.album__paper:nth-of-type(1) .album__page {
  background: radial-gradient(circle, rgba(255,217,251,1) 3%, rgba(123,144,255,1) 100%);
}
.album__paper.open {
  box-shadow: 0 1em 0 0 #aaa;
  transform: rotateX(0) rotateY(-180deg) rotateZ(0);
}
.album__paper .album__page.front {
  transition: 1s;
  -webkit-transition: 1s;
  transform-origin: 0 50%;
  -webkit-transform-origin: 0 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 2;
}
.album__paper .back {
  transition: 1s;
  -webkit-transition: 1s;
  transform-origin: 0 50%;
  -webkit-transform-origin: 0 50%;
  background: #e1e1e1;
}
.album__top-title {
  font-size: 60px;
  line-height: 0.8;
  padding: 20px;
}
.album__page {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(0px);
}
.album__back {
  width: 3em;
  height: 700px;
  background: #007e8a;
  position: absolute;
  left: -3em;
  top: 0;
  transform-origin: 100% 100%;
  -webkit-transform-origin: 100% 100%;
  transform: rotateY(-90deg) rotateX(0deg);
  -webkit-transform: rotateY(-90deg) rotateX(0deg);
}
.album__shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 700px;
  background: transparent;
  transform: translateZ(-3em);
  -webkit-transform: translateZ(-3em);
  box-shadow: 1em 1em 0px 0px #aaa;
  z-index: 1;
}
.album__bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 3em;
  background: #d4d3d3;
  transform-origin: 100% 100%;
  -webkit-transform-origin: 100% 100%;
  transform: rotateX(90deg);
  -webkit-transform: rotateX(90deg);
}

.top-content {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100px auto;
  height: 100%;
}
.content__title {
  grid-row: 1;
  grid-column: 1/3;
  font-size: 50px;
  line-height: 0.8;
  padding: 20px;
  box-sizing: border-box;
}
.content__img1 {
  grid-row: 2/4;
  grid-column: 1/2;
  display: flex;
  align-items: center;
  flex-flow: column;
  box-sizing: border-box;
}
.content__img1 img {
  margin: auto;
  width: 90%;
  border: 10px solid #fff;
  box-sizing: border-box;
}
.content__img2 {
  grid-row: 3/4;
  grid-column: 2/4;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.content__img2 img {
  margin: auto;
  width: 80%;
  border: 10px solid #fff;
  box-sizing: border-box;
}
.content__img3 {
  grid-row: 2;
  grid-column: 2;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.content__img3 img {
  margin: auto;
  width: 70%;
  border: 10px solid #fff;
  box-sizing: border-box;
}
.content__text {
  width: 100%;
  padding: 30px;
  font-size: 30px;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  body {
    overflow: visible;
  }
}

</style>
