const time = 10;

const deportes = {
  title: 'Deportes',
  image: 'https://www.pergamino.gob.ar/wp-content/uploads/2021/03/WEB-05ABR-DEPORTES-PORTADA-FOTO.jpg',
  questions: [
    {
      text: '¿Cuantos mundiales tiene Brasil?',
      image: 'https://www.banderas-mundo.es/data/flags/w580/br.png',
      lifetimeSeconds: time,
      options: [
        { text: '6', correct: false },
        { text: '5', correct: true },
        { text: '4', correct: false },
        { text: '3', correct: false },
      ],
    },
    {
      text: '¿Cuantos mundiales tiene Argentina?',
      image: 'https://m.media-amazon.com/images/I/51g4us3PrUL._AC_SX425_.jpg',
      lifetimeSeconds: time,
      options: [
        { text: '2', correct: true },
        { text: '1', correct: false },
        { text: '3', correct: false },
        { text: '5', correct: false },
      ],
    },
    {
      text: '¿Que franquicia de la NBA Michael Jordan ganó sus 6 anillos?',
      image: 'https://elcomercio.pe/resizer/NV3kcPZxnJOtZg_XdHaOK09u4c4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SUQTZ5WBDBAGJBWIW2T6ZDGEC4.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'Los Angeles Lakers',correct: false },
        { text: 'Boston Celtics', correct: false },
        { text: 'Detroit Pistons', correct: false },
        { text: 'Chicago Bulls', correct: true },
      ],
    },
    {
      text: '¿Que pais sera el anfitrion de la copa del mundo 2022?',
      image: 'https://as01.epimg.net/futbol/imagenes/2018/06/14/mundial/1528970625_105851_1528975129_noticia_normal.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'Arabia Saudita', correct: false },
        { text: 'España', correct: false },
        { text: 'Qatar', correct: true },
        { text: 'Estados Unidos', correct: false },
        
      ],
    },
    {
      text: '¿Quien es el maximo campeon de la liga de futbol de Italia?',
      image: 'https://sites.google.com/site/futboldanii/_/rsrc/1423474640072/liga-italiana/thumb.php.png',
      lifetimeSeconds: time,
      options: [
        { text: 'Juventus', correct: true },
        { text: 'Milan', correct: false },
        { text: 'Inter', correct: false },
        { text: 'Napoli', correct: false },
        
      ],
    },
    {
      text: '¿Quien es el maximo campeon de la liga de futbol de España?',
      image: 'https://img.planetafobal.com/2020/07/laliga-2020-2021-equipaciones-qw.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'Atletico Madrid', correct: false },
        { text: 'Barcelona', correct: false },
        { text: 'Real Madrid', correct: true },
        { text: 'Valencia', correct: false },
        
      ],
    },
    {
      text: '¿En que equipo de la NBA jugo Kobe Bryant?',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nbGmAbD7MKiIaGXF4g1UMXdQppIwrgJ9vg&usqp=CAU',
      lifetimeSeconds: time,
      options: [
        { text: 'Boston Celtics', correct: false },
        { text: 'Miami Heat', correct: false },
        { text: 'Los Angeles Lakers', correct: true },
        { text: 'New York Knicks', correct: false },
        
      ],
    },
    {
      text: '¿Cuantos balones de oro tiene Leonel Messi?',
      image: 'https://resizer.glanacion.com/resizer/VIFzbl5QgFwpyOA-UOPOpkVBS7M=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7W2DMZC7TBGKBASN6WMIGSX52E.JPG',
      lifetimeSeconds: time,
      options: [
        {text: '5', correct: false},
        {text: '7', correct: true},
        {text: '6', correct: false},
        {text: '4', correct: false},
      ]
    }
  ],
};

module.exports = deportes;
