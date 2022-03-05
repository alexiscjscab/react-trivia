import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  dataCategories,
  getData,
  getScore,
  saveName,
  setCategories,
} from '../../actions/actions';
import {
  Box,
  Heading,
  Select,
  Button,
  Spinner,
  Text,
  Input,
} from '@chakra-ui/react';
import { BsTrophyFill } from 'react-icons/bs';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const categories = useSelector((state) => state.categories);
  const score = useSelector((state) => state.score);
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
    dispatch(getScore());
  }, []);

  const selectCategories = (e) => {
    const value = e.target.value;
    value !== '' && dispatch(setCategories(value));
  };

  const goToGame = () => {
    if (categories !== '' && data.length > 0 && name.trim() !== '') {
      dispatch(saveName(name));
      dispatch(dataCategories());
      setTimeout(() => {
        navigate('/game');
      }, 1500);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Ingresa un nombre y categoria',
      });
    }
  };

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
      <Heading as='h2' letterSpacing='4px' color='#000' fontWeight='light'>
        Trivia Game
      </Heading>
      <Box w='180px'>
        <Text m='10px 0' fontSize='22px' color='#000'>
          Selecciona una categoria
        </Text>
        {data.length > 0 ? (
          <Select
            outline='none'
            border='none'
            borderBottom='2px solid #ccc8ff'
            borderRadius='30px'
            onChange={selectCategories}
            placeholder='...'
            _placeholder={{
              color: '#000',
            }}
            bg='rgba(250,250,250,0.0333)'
            color='#000'
            _focus={{
              outline: 'none',
              border: 'none',
              borderBottom: '2px solid #000',
            }}
            _hover={{
              borderBottom: '2px solid #000',
            }}
          >
            {data.map((item, index) => {
              return (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </Select>
        ) : (
          <Spinner />
        )}
        <Input
          mt='10px'
          placeholder='Nombre...'
          outline='none'
          border='none'
          borderBottom='2px solid #ccc8ff'
          borderRadius='30px'
          onChange={(e) => setName(e.target.value)}
          maxLength='12'
          required
          _placeholder={{
            color: '#000',
          }}
          bg='rgba(250,250,250,0.0333)'
          color='#000'
          _focus={{
            borderBottom: '2px solid #000',
          }}
          _hover={{
            borderBottom: '2px solid #000',
          }}
        />
      </Box>
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
        onClick={goToGame}
      >
        Jugar
      </Button>

      <Box
        w='320px'
        bg='transparent'
        m='20px 0'
        borderRadius='30px'
        boxShadow='rgba(230, 200, 200, 0.4) 5px 5px, rgba(230, 200, 200, 0.3) 10px 10px, rgba(230, 200, 200, 0.2) 15px 15px, rgba(230, 200, 200, 0.1) 20px 20px, rgba(230, 200, 200, 0.05) 25px 25px'
        color='#000'
      >
        <Heading m='3px' as='h2' letterSpacing='4px' fontWeight='light'>
          Mejores Puntajes
        </Heading>
        <Box
          d='flex'
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          flexDirection='column'
          m='10px 0'
        >
          {score.length > 0 ? (
            score.map((item, index) => (
              <Box
                key={index}
                m='3px'
                fontSize='17px'
                p='3px'
                borderRadius='10px'
                color='#ccc8ff'
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
              >
                <Text borderBottom='1px solid #ccc8ff'>
                  Nombre: {item.username} Categoria: {item.categories}
                </Text>
                <Text fontWeight='bold'>
                  Puntaje: {item.score}
                </Text>
                {index === 0 ? (
                    <BsTrophyFill color='#ffbf00' />
                  ) : index === 1 ? (
                    <BsTrophyFill color='#C0C0C0' />
                  ) : index === 2 ? (
                    <BsTrophyFill color='#cd7f32' />
                  ) : null}
              </Box>
            ))
          ) : (
            <Spinner m='10px 0' />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
