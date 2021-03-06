const seminar1 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-1.png';
const seminar2 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-2.png';
const seminar3 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-3.png';
const seminar4 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-4.png';
export const carouselList = [
  {
    id: 1,
    image: seminar1,
    text: 'ประทับใจการตอบคำถาม ที่สามารถตอบคำถามได้เป็นอย่างดี'
  },
  {
    id: 2,
    image: seminar2,
    text: 'รายละเอียดครบถ้วน วิทยากรพูดเข้าใจง่ายและมีตัวอย่างทำให้เห็นภาพและเข้าใจง่าย'
  },
  {
    id: 3,
    image: seminar3,
    text: 'ได้รับความรู้ใหม่ๆ ที่บางอย่างเรานึกว่ารู้แล้ว เราก็ยังไม่รู้ และอาจารย์เรียงเนื้อหาคอร์สดี ปูทางให้เข้าใจแต่ละจุดได้ง่าย'
  },
  {
    id: 4,
    image: seminar4,
    text: 'เป็นกันเองดี ใส่ใจตอบทุกคำถามมากครับ'
  },
];

export const particleConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: '#DD3236',
    },
    shape: {
      type: 'edge',
      stroke: {
        width: 0,
        color: '#DD3236',
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#DD3236',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
