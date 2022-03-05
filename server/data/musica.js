const time = 10;

const musica = {
  title: 'Musica',
  image: 'http://clasicafmradio.es/wp-content/uploads/2018/05/mefmusicaycuentos.jpg',
  questions: [
    {
      text: '¿En que banda de rock fue vocalista Indio Solari?',
      image: 'https://www.politicargentina.com/advf/imagenes/2020/12/5fedf43410597_750x471.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'Soda Stereo', correct: false },
        { text: 'Los Redondos', correct: true },
        { text: 'Sumo', correct: false },
        { text: 'Hermetica', correct: false },
      ],
    },
    {
      text: '¿Cual es el nombre de la famosa cancion del Indio Solari?',
      image: 'https://www.politicargentina.com/advf/imagenes/2020/12/5fedf43410597_750x471.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'jijiji', correct: true },
        { text: 'jujuju', correct: false },
        { text: 'jejeje', correct: false },
        { text: 'jajaja', correct: false },
      ],
    },
    {
      text: '¿Que genero tocaban The Ramones',
      image: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/01142610/TheRamones.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'Reggae', correct: false },
        { text: 'Pop', correct: false },
        { text: 'Heavy Metal', correct: false },
        { text: 'Punk Rock', correct: true },
      ],
    },
    {
      text: '¿Como se llama el vocalista de The Rolling Stones?',
      image: 'https://www.diariodecultura.com.ar/wp-content/uploads/2021/04/Rolling-ART.jpg',
      lifetimeSeconds: time,
      options: [
        { text: 'Dave Mustaine', correct: false },
        { text: 'Axl Rose', correct: false },
        { text: 'Mick Jagger', correct: true },
        { text: 'Brian Johnson', correct: false },
      ],
    },
    {
      text: '¿Como se llama el vocalista de Nirvana?',
      image: 'https://indiehoy.com/wp-content/uploads/2020/09/nirvana-logo.jpg',
      lifetimeSeconds: time,
      options: [
        {text: 'Axl Rose', correct: false},
        {text: 'Kurt Cobain', correct: true},
        {text: 'Dave Grohl', correct: false},
        {text: 'Paul McCartney', correct: false},
      ]
    },
    {
      text: '¿De que pais es el grupo de rock The Beatles?',
      image: 'https://los40.com/los40/imagenes/2019/08/08/los40classic/1565250101_557933_1565250401_gigante_normal.jpg',
      lifetimeSeconds: time,
      options: [
        {text: 'Inglaterra', correct: true},
        {text: 'Noruega', correct: false},
        {text: 'Francia', correct: false},
        {text: 'Estados Unidos', correct: false},
      ]
    },
    {
      text: '¿Como se llama el guitarrista de AC/DC?',
      image: 'https://rockandblog.net/wp-content/uploads/2020/02/acdc-covers-best.jpg',
      lifetimeSeconds: time,
      options: [
        {text: 'Jimmy Page', correct: false},
        {text: 'Jimi Hendrix', correct: false},
        {text: 'Robert Plant', correct: false},
        {text: 'Angus Young', correct: true},
      ]
    },
    {
      text: '¿De donde era el rapero Notorious B.I.G?',
      image: 'https://ep01.epimg.net/elpais/imagenes/2021/03/01/album/1614622506_091642_1614623394_noticia_normal.jpg',
      lifetimeSeconds: time,
      options: [
        {text: 'Los Angeles', correct: false},
        {text: 'Chicago', correct: false},
        {text: 'Detroit', correct: false},
        {text: 'New York', correct: true},
      ]
    }
  ],
};

module.exports = musica;
