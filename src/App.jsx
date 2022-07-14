import React from 'react';
import ElegantShoes from './assets/elegant-shoes.jpg';
import Camera from './assets/camera.jpg';
import Chair from './assets/chair.jpg';
import Headphones from './assets/headphones.jpg';
import Lipstick from './assets/lipstick.jpg';
import Plant from './assets/plant.jpg';
import RunningShoes from './assets/running-shoes.jpg';
import SmartWatch from './assets/smart-watch.jpg';
import Sunglasses from './assets/sunglasses.jpg';

import { Flex, Text, Image, Box } from '@chakra-ui/react';
import { Pagination, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/lazy';

const Card = ({ name, price, imageUrl }) => {
  return (
    <Box mb={12}>
      <Image src={imageUrl} alt={name} boxSize='xs' objectFit='cover' boxShadow='md' borderRadius={5}/>
      <Text
        size='xs'
        letterSpacing={2}
        color='#FFF'
      >
        {name}
      </Text>
      <Text
        fontSize='20px'
        letterSpacing={2}
        color='#FFF'
        fontWeight={500}
      >
        ${price}
      </Text>
    </Box>
  )
}

function App() {
  const products = [
    {
      name: 'Elegant shoes',
      price: 230,
      imageUrl: ElegantShoes
    },
    {
      name: 'Vintage camera',
      price: 500,
      imageUrl: Camera
    },
    {
      name: 'Chair',
      price: 45,
      imageUrl: Chair
    },
    {
      name: 'Headphones',
      price: 95,
      imageUrl: Headphones
    },
    {
      name: 'Lipstick',
      price: 15,
      imageUrl: Lipstick
    },
    {
      name: 'Plant',
      price: 9,
      imageUrl: Plant
    },
    {
      name: 'Running shoes',
      price: 80,
      imageUrl: RunningShoes
    },
    {
      name: 'Smart watch',
      price: 230,
      imageUrl: SmartWatch
    },
    {
      name: 'Sunglasses',
      price: 9,
      imageUrl: Sunglasses
    }
  ]

  return (
    <Flex 
      align='center' 
      px={50} 
      height='100vh' 
      backgroundColor='#63676f'
    >
      <Swiper
        modules={[Pagination, Autoplay, Lazy]}
        spaceBetween={10}
        slidesPerView={3}
        slidesPerGroup={3}
        speed={2000}
        loop={true}
        autoplay={{ delay: 6000 }}
        lazy={{ loadPrevNextAmount: 3 }}
        pagination={{ clickable: true }}
      >
        {
          products?.map(({ name, price, imageUrl }) => (
            <SwiperSlide key={name}>
              <Card name={name} price={price} imageUrl={imageUrl}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Flex>

  )
}

export default App;
