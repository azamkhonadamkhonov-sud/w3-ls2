import { Box, Button, Image, Text,Flex } from '@chakra-ui/react'
import React from 'react'
import img from "../../../assets/image copy 28.png";
import img1 from "../../../assets/image copy 29.png";
import img2 from "../../../assets/image copy 30.png";
import img3 from "../../../assets/image copy 31.png";
import img4 from "../../../assets/image copy 32.png";
import img5 from "../../../assets/image copy 33.png";
import imgMush from "../../../assets/image copy 34.png"

export default function Sekshen2() {
    const data = [
        {img:img,name:"Distant Galaxy",avatar:img1,title:"MoonDancer"},
        {img:img2,name:"Distant Galaxy",avatar:img3,title:"NebulaKid"},
        {img:img4,name:"Distant Galaxy",avatar:img5,title:"Spaceone"}
    ]
  return (
    <>
    <Box width={"90%"} m={"auto"}>
        <Text fontSize={40} mt={6} mb={6}>Discover More NFTs</Text>
        <Box className='flex items-center justify-between ' pb={8}>
            <Text fontSize={20} color={"gray.400"}>Explore new trending NFTs</Text>
            <Button border={"1px solid #A259FF"} bgColor={"#2B2B2B"}>See All</Button>
        </Box>

        <Box className='lg:flex md:flex items-center justify-between ' mb={6}>
            {data.map((el,i)=>(
                <Box
                mb={6}
                display={{base:"block",md:i===2?"none":"block",lg:"block"}}
  key={i}
  bg="#3B3B3B" 
  borderRadius="20px"
  overflow="hidden"
  w={{ base: "100%", md: "46%",lg:"31%" }} 
>
  <Image src={el.img} w="100%" />

  <Box p={5}>
    <Text color="white" fontSize="22px" fontWeight="semibold" mb={2}>
      {el.name}
    </Text>

    <Box display="flex" alignItems="center" gap={3} mb={5}>
      <Image src={el.avatar} boxSize="24px" borderRadius="full" />
      <Text color="white" fontSize="16px" fontFamily="Space Mono">
       {el.title}
      </Text>
    </Box>

    <Box display="flex" justifyContent="space-between">
      <Box>
        <Text color="gray.400" fontSize="12px" mb={1}>
          Price
        </Text>
        <Text color="white" fontSize="16px" fontFamily="Space Mono">
          1.63 ETH
        </Text>
      </Box>
      <Box textAlign="right">
        <Text color="gray.400" fontSize="12px" mb={1}>
          Highest Bid
        </Text>
        <Text color="white" fontSize="16px" fontFamily="Space Mono">
          0.33 wETH
        </Text>
      </Box>
    </Box>
  </Box>
</Box>
            ))}
        </Box>
    </Box> 
    <Box
      w="100%"
      h={{ base: "550px", md: "630px" }}
      pos="relative"
      bgImage={`url(${imgMush})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="flex-end"
      overflow="hidden"
    >
\      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)"
        zIndex={1}
      />

      <Flex
        w="90%"
        m="auto"
        zIndex={2}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "flex-end" }}
        pb={{ base: "40px", md: "60px" }}
        gap={10}
      >
        <Box w={{ base: "100%", md: "auto" }}>
          <Flex
            bg="#3B3B3B"
            px="20px"
            py="10px"
            borderRadius="20px"
            w="fit-content"
            align="center"
            gap={3}
            mb="30px"
          >
            <Image src={imgMush} boxSize="24px" borderRadius="full" />
            <Text color="white" fontSize="16px" fontWeight="regular">Shroomie</Text>
          </Flex>

          <Text
            fontSize={{ base: "38px", md: "51px" }}
            fontWeight="bold"
            color="white"
            lineHeight="1.1"
            mb="30px"
          >
            Magic Mushrooms
          </Text>

          <Button
            display={{ base: "none", md: "flex" }} 
            bg="white"
            color="#2B2B2B"
            h="60px"
            px="50px"
            borderRadius="20px"
            fontSize="16px"
            fontWeight="semibold"
            leftIcon={<span>👁️</span>}
            _hover={{ bg: "gray.200" }}
          >
            See NFT
          </Button>
        </Box>

        <Box
          bg="rgba(59, 59, 59, 0.5)"
          backdropFilter="blur(10px)"
          p="30px"
          borderRadius="20px"
          w={{ base: "100%", md: "295px" }}
          color="white"
        >
          <Text fontSize="12px" mb="10px" fontFamily="'Space Mono', monospace">
            Auction ends in:
          </Text>
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="38px" fontWeight="bold" fontFamily="'Space Mono', monospace">59</Text>
              <Text fontSize="12px">Hours</Text>
            </Box>
            <Text fontSize="38px" fontWeight="bold" mt="-20px">:</Text>
            <Box>
              <Text fontSize="38px" fontWeight="bold" fontFamily="'Space Mono', monospace">59</Text>
              <Text fontSize="12px">Minutes</Text>
            </Box>
            <Text fontSize="38px" fontWeight="bold" mt="-20px">:</Text>
            <Box>
              <Text fontSize="38px" fontWeight="bold" fontFamily="'Space Mono', monospace">59</Text>
              <Text fontSize="12px">Seconds</Text>
            </Box>
          </Flex>
        </Box>

        <Button
          display={{ base: "flex", md: "none" }}
          w="100%"
          bg="white"
          color="#2B2B2B"
          h="60px"
          borderRadius="20px"
          fontSize="16px"
          leftIcon={<span>👁️</span>}
        >
          See NFT
        </Button>
      </Flex>
    </Box>
    </>
  )
}
