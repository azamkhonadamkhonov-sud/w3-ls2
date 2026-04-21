import { Box, Button, Flex, Image, Text, SimpleGrid, Input } from "@chakra-ui/react";
import React from "react";
import icon1 from "../../../assets/image copy 36.png"; 
import icon2 from "../../../assets/image copy 37.png";
import icon3 from "../../../assets/image copy 38.png";
import astroImg from "../../../assets/image copy 35.png";

export default function Sekshen3() {
  const steps = [
    {
      img: icon1,
      title: "Setup Your Wallet",
      desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      img: icon2,
      title: "Create Collection",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      img: icon3,
      title: "Start Earning",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <Box w="90%" m="auto" py={{ base: 10, md: 20 }} color="white">
      
      <Box mb={20}>
        <Text fontSize={{ base: "28px", md: "38px" }} fontWeight="bold" mb={2}>
          How It Works
        </Text>
        <Text fontSize={{ base: "16px", md: "22px" }} color="gray.400" mb={10}>
          Find Out How To Get Started
        </Text>

        <Box className="lg:flex md:flex items-center justify-between "  spacing={8}>
          {steps.map((step, i) => (
            <Box
            mb={8}
            width={{base:"100%",md:"32%"}}
              key={i}
              bg="#3B3B3B"
              p={{ base: "20px", md: "30px" }}
              borderRadius="20px"
              display="flex"
              flexDirection={{ base: "row", md: "column" }} 
              alignItems="center"
              textAlign={{ base: "left", md: "center" }}
              gap={{ base: 5, md: 6 }}
            >
              <Image 
                src={step.img} 
                boxSize={{ base: "100px", md: "160px", lg: "250px" }} 
              />
              <Box>
                <Text fontSize={{ base: "16px", md: "22px" }} fontWeight="bold" mb={3}>
                  {step.title}
                </Text>
                <Text fontSize={{ base: "12px", md: "16px" }} color="gray.300">
                  {step.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box 
        bg={{ base: "transparent", md: "#3B3B3B" }}
        borderRadius="20px" 
        p={{ base: 0, md: 16 }} 
        display="flex" 
        flexDirection={{ base: "column", md: "row" }} 
        alignItems="center" 
        gap={{ base: 8, md: 20 }}
      >
        <Image 
          src={astroImg} 
          borderRadius="20px" 
          w={{ base: "100%", md: "250px", lg: "425px" }} 
          height={{base:"300px",md:"400px",lg:"500px"}}
        />
        
        <Box w="100%">
          <Text 
            fontSize={{ base: "28px", md: "38px" }} 
            fontWeight="bold" 
            mb={4} 
            lineHeight="1.2"
          >
            Join Our Weekly  Digest
          </Text>
          <Text fontSize={{ base: "16px", md: "22px" }} color="gray.300" mb={10}>
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </Text>

          <Flex 
            direction={{ base: "column", lg: "row" }} 
            gap={4} 
            bg={{ lg: "white" }} 
            borderRadius="20px" 
            p={{ lg: 1 }}
            w="100%"
          >
            <Input 
              placeholder="Enter your email here" 
              h="60px" 
              bg="white"
              color="black"
              border="none"
              borderRadius="20px"
              _focus={{ boxShadow: "none" }}
              _placeholder={{ color: "gray.500" }}
            />
            <Button 
              bg="#A259FF" 
              color="white" 
              h="60px" 
              px={10} 
              borderRadius="20px"
              fontSize="16px"
              fontWeight="bold"
              leftIcon={<span>📧</span>}
              _hover={{ bg: "#8b3dff" }}
              w={{ base: "100%", lg: "auto" }}
            >
              Subscribe
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}