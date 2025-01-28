new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: "images/recuerdo3.jpeg",
          img2: "images/recuerdo2.jpeg",
          img3: "images/recuerdo1.jpeg",
          title: "RECUERDOS",
          isOpen: false,
        },
        {
          img1: "images/concierto1.jpeg",
          img2: "images/concierto2.jpeg",
          img3: "images/concierto4.jpeg",
          title: "CONCIERTOS",
          isOpen: false,
        },
        {
          img1: "images/notfound.jpg",
          img2: "images/notfound.jpg",
          img3: "images/notfound.jpg",
          isOpen: false,
        },
        {
          img1: "images/notfound.jpg",
          img2: "images/notfound.jpg",
          img3: "images/notfound.jpg",
          title: "PICNIC",
          isOpen: false,
        },
        {
          img1: "images/notfound.jpg",
          img2: "images/notfound.jpg",
          img3: "images/notfound.jpg",
          title: "MUSEOS",
          isOpen: false,
        },
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
});
