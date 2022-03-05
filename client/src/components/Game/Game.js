import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Image,
  Progress,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import success from './success.mp3';
import error from './error.mp3';
import useSound from 'use-sound';

const Game = () => {
  const navigate = useNavigate();
  const dataGame = useSelector((state) => state.dataGame);
  const name = useSelector((state) => state.name);
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const [indexAnswers, setIndexAnswers] = useState('');
  const [answers, setAnswers] = useState({
    trues: 0,
    falses: 0,
  });

  const [successPlay] = useSound(success);
  const [errorPlay] = useSound(error);

  const goToHome = () => {
    navigate('/');
  };

  if (dataGame.length === 0) {
    return (
      <Box
        minHeight='100vh'
        bg='#2086d8'
        textAlign='center'
        d='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        // eslint-disable-next-line
        fontFamily="'Roboto', sans-serif "
      >
        <Text fontSize='24px' color='#000'>
          No hay datos
        </Text>
        <Button
          mt='2rem'
          outline='none'
          borderRadius='30px'
          transitionDuration='2s'
          bg='rgba(250,250,250,0.0333)'
          boxShadow='5px 5px 10px #ccc8ff'
          _hover={{
            bg: '#000',
            color: '#fff',
            transform: 'rotate(360deg) scale(1.2)',
            borderBottom: '2px solid #ccc8ff',
          }}
          onClick={goToHome}
        >
          Ir al Inicio
        </Button>
      </Box>
    );
  }
  const [time, setTime] = useState(dataGame.questions[0].lifetimeSeconds);

  useEffect(() => {
    if (index < dataGame.questions.length - 1) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setFinish(true);
    }
  }, []);

  if (time === -2) {
    setIndex((index) => index + 1);
    setClick(0);
    setIsTrue(false);
    setIsFalse(false);
    setIndexAnswers('');
    if (index < dataGame.questions.length - 1) {
      setTime(dataGame.questions[index].lifetimeSeconds);
    }
    setTime(10);
  }
  const handleClick = (value, i) => {
    if (value === true && click === 0 && time > 0) {
      setScore((score) => score + 5);
      setClick((click) => click + 1);
      setIsTrue(true);
      setIndexAnswers(i);
      setAnswers({
        ...answers,
        trues: answers.trues + 1,
      });
      successPlay();
    } else if (value === false && click === 0 && time > 0) {
      setClick((click) => click + 1);
      setIsFalse(true);
      setIndexAnswers(i);
      setAnswers({
        ...answers,
        falses: answers.falses + 1,
      });
      errorPlay();
    }
  };

  const resetGame = () => {
    setIndex(0);
    setScore(0);
    setClick(0);
    setIsTrue(false);
    setIsFalse(false);
    setIndexAnswers('');
    setAnswers({
      trues: 0,
      falses: 0,
    });
    setFinish(false);
    setTime(dataGame.questions[0].lifetimeSeconds);
  };

  const saveScore = async () => {
    if (score > 0) {
      const data = {
        username: name,
        score: score,
        categories: dataGame.title,
      };
      await axios
        .post('http://localhost:4000/scores', data)
        .then((response) =>
          Swal.fire({
            icon: 'success',
            title: 'Felicidades',
            text: 'Puntaje guardado',
          })
        )
        .catch((error) =>
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo guardar el puntaje',
          })
        );

      setTimeout(() => {
        goToHome();
      }, 3000);
    }
  };

  return (
    <Box
      bg='#2086d8'
      textAlign='center'
      d='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      minHeight='100vh'
      // eslint-disable-next-line
      fontFamily="'Roboto', sans-serif "
    >
      {!finish && index <= dataGame.questions.length - 1 ? (
        <Box
          bg='rgba(0,0,0,1)'
          w='320px'
          p='5px'
          borderRadius='30px'
          color='#fff'
          boxShadow='rgba(230, 200, 200, 0.4) 5px 5px, rgba(230, 200, 200, 0.3) 10px 10px, rgba(230, 200, 200, 0.2) 15px 15px, rgba(230, 200, 200, 0.1) 20px 20px, rgba(230, 200, 200, 0.05) 25px 25px'
        >
          <Heading as='h2' letterSpacing='4px' fontWeight='light'>
            {dataGame.title}
          </Heading>
          <Image
            h='50px'
            w='170px'
            m='5px auto'
            src={dataGame.image}
            alt='imagen'
            borderRadius='30px'
          />
          <Divider />
          <Text fontSize='20px'>{dataGame.questions[index].text}</Text>
          {time > 0 && (
            <Box
              border='2px solid #fff'
              w='40px'
              h='40px'
              borderRadius='50%'
              m='10px auto'
            >
              <Text fontSize='24px'>{time}</Text>
            </Box>
          )}
          {time <= 0 && (
            <Box
              border='2px solid #fff'
              w='40px'
              h='40px'
              borderRadius='50%'
              m='10px auto'
            >
              <Text fontSize='24px'>X</Text>
            </Box>
          )}

          <Image
            h='110px'
            w='280px'
            m='5px auto'
            src={dataGame.questions[index].image}
            alt='imagen'
            borderRadius='30px'
          />
          <UnorderedList>
            {dataGame.questions[index].options.map((item, inD) => {
              return (
                <ListItem key={inD} listStyleType='none' mr='10px'>
                  <Button
                    mt='5px'
                    mb='5px'
                    w='100%'
                    onClick={() => handleClick(item.correct, inD)}
                    bg={
                      indexAnswers === inD && isFalse
                        ? 'red'
                        : indexAnswers === inD && isTrue
                        ? 'green'
                        : '#fff'
                    }
                    color='#000'
                    _hover={{ bg: '#2086d8', color: '#fff' }}
                  >
                    {item.text}
                  </Button>
                </ListItem>
              );
            })}
          </UnorderedList>
          <Progress
            m='10px'
            value={(index + 1) * 10}
            max={dataGame.questions.length * 10}
            colorScheme='blue'
            hasStripe
          />
          <Text fontSize='22px'>
            {index + 1} / {dataGame.questions.length} preguntas
          </Text>
        </Box>
      ) : (
        <Box
          mt='2rem'
          d='flex'
          flexDir='column'
          w='320px'
          alignItems='center'
          justifyContent='center'
          color='#000'
        >
          <Text fontSize='24px'>Puntaje total : {score}</Text>
          <Text fontSize='24px'>
            Total de preguntas : {dataGame.questions.length}
          </Text>
          <Text fontSize='24px'>Respuestas correctas : {answers.trues}</Text>
          <Text fontSize='24px'>Respuestas incorrectas : {answers.falses}</Text>
          <Button
            onClick={resetGame}
            mt='2rem'
            outline='none'
            borderRadius='30px'
            transitionDuration='2s'
            bg='rgba(250,250,250,0.0333)'
            boxShadow='5px 5px 10px #ccc8ff'
            _hover={{
              bg: '#000',
              color: '#fff',
              transform: 'rotate(360deg) scale(1.2)',
              borderBottom: '2px solid #ccc8ff',
            }}
            w='50%'
          >
            Reiniciar
          </Button>
          <Button
            mt='2rem'
            outline='none'
            borderRadius='30px'
            transitionDuration='2s'
            bg='rgba(250,250,250,0.0333)'
            boxShadow='5px 5px 10px #ccc8ff'
            _hover={{
              bg: '#000',
              color: '#fff',
              transform: 'rotate(360deg) scale(1.2)',
              borderBottom: '2px solid #ccc8ff',
            }}
            onClick={saveScore}
            w='50%'
          >
            Guardar Puntaje
          </Button>
          <Button
            mt='2rem'
            outline='none'
            borderRadius='30px'
            transitionDuration='2s'
            bg='rgba(250,250,250,0.0333)'
            boxShadow='5px 5px 10px #ccc8ff'
            _hover={{
              bg: '#000',
              color: '#fff',
              transform: 'rotate(360deg) scale(1.2)',
              borderBottom: '2px solid #ccc8ff',
            }}
            onClick={goToHome}
            w='50%'
          >
            Ir al Inicio
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Game;
