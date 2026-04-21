import { Box, Flex, Text, VStack, HStack, Input, Button, Image } from "@chakra-ui/react";
import React from "react";
import img from "../../assets/image copy 39.png";
import img1 from "../../assets/image copy 40.png";

export default function Footer() {
  return (
    <Box bg="#3B3B3B" py={10} color="white">
      <Box w="95%" maxW="1200px" m="auto">
        <Flex 
          direction={{ base: "column", lg: "row" }} 
          justify="space-between" 
          align="flex-start" 
          gap={10}
          mb={10}
        >
          <VStack align="flex-start" spacing={6} flex="1">
            <HStack spacing={3}>
              <Box color="#A259FF" fontSize="32px"><Image src={img} alt="Logo" /></Box>
              <Text fontSize="22px" fontWeight="bold">
                NFT Marketplace
              </Text>
            </HStack>
            
            <Text color="gray.400" fontSize="16px">
              NFT marketplace UI created <br /> with Anima for Figma.
            </Text>

            <Box>
              <Text color="gray.400" mb={4}>Join our community</Text>
              <HStack spacing={4} color="gray.400" fontSize="24px">
                <Image
                width={"40%"}
                  src={img1}
                  alt="Social Media Icon 1"
                />
              </HStack>
            </Box>
          </VStack>

          <VStack align="flex-start" spacing={6} flex="0.5">
            <Text fontSize="22px" fontWeight="bold">
              Explore
            </Text>
            <VStack align="flex-start" spacing={4} color="gray.400">
              <Text cursor="pointer" _hover={{color: "white"}}>Marketplace</Text>
              <Text cursor="pointer" _hover={{color: "white"}}>Rankings</Text>
              <Text cursor="pointer" _hover={{color: "white"}}>Connect a wallet</Text>
            </VStack>
          </VStack>

          <VStack align="flex-start" spacing={6} flex="1.2">
            <Text fontSize="22px" fontWeight="bold">
              Join Our Weekly Digest
            </Text>
            <Text color="gray.400">
              Get exclusive promotions & updates <br /> straight to your inbox.
            </Text>
            
            <Flex 
              direction={{ base: "column", md: "row" }} 
              w="100%" 
              bg={{ md: "white" }} 
              borderRadius="20px" 
              overflow="hidden"
              p={{ md: 1 }}
            >
              <Input 
                placeholder="Enter your email here" 
                h="60px" 
                border="none" 
                bg="white" 
                color="black"
                borderRadius={{ base: "20px", md: "20px" }}
                _focus={{ boxShadow: "none" }}
              />
              <Button 
                bg="#A259FF" 
                h="60px" 
                px={10} 
                borderRadius="20px"
                _hover={{ bg: "#8b3dff" }}
                color="white"
                mt={{ base: 4, md: 0 }}
              >
                Subscribe
              </Button>
            </Flex>
          </VStack>
        </Flex>

        <Box h="1px" bg="gray.600" w="100%" mb={5} />
        
        <Text color="gray.400" fontSize="12px">
          © NFT Market. Use this template freely.
        </Text>
      </Box>
    </Box>
  );
}