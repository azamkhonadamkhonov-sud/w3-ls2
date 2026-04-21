import React from "react";
import img from "../../assets/image.png";
import img1 from "../../assets/image copy.png";
import img2 from "../../assets/image copy 2.png";
import { Box, Button, Text, Image, Card, Flex } from "@chakra-ui/react";

export default function Headers() {
  return (
    <>
      <Box
        pt={6}
        pb={6}
        w="90%"
        m="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
        <img src={img} alt="logo" />

       <Box 
       display={'flex'}
  display={{ base: "none", md: "none",lg:"block flex" }}
  alignItems="center"
  gap={6}
>
  <Text cursor="pointer">Marketplace</Text>
  <Text cursor="pointer">Rankings</Text>
  <Text cursor="pointer">Connect a wallet</Text>

  <Button bg="#A259FF" color="white">
    Sign Up
  </Button>
</Box>
      </Box>
      <Box
        w="90%"
        m="auto"
        mt={10}
        pb={10}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row", md:"row" }}
        gap={10}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Text
            fontSize={{ base: "36px", md: "60px", lg: "80px" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            Discover <br />
            digital art & <br />
            Collect NFTs
          </Text>

          <Text
            fontSize={{ base: "16px", md: "20px", lg: "22px" }}
            color="gray.400"
            mt={6}
          >
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </Text>

          <Button
            bg="#A259FF"
            color="white"
            mt={8}
            p={{ base: 6, md: 8 }}
            fontSize={{ base: "16px", md: "20px" }}
            w={{ base: "100%", sm: "auto" }}
          >
            Get Started
          </Button>
          <Box
            display="flex"
            gap={8}
            mt={10}
          >
            <Box>
              <Text fontSize="24px" fontWeight="bold">
                240k+
              </Text>
              <Text>Total Sale</Text>
            </Box>

            <Box>
              <Text fontSize="24px" fontWeight="bold">
                100k+
              </Text>
              <Text>Auctions</Text>
            </Box>

            <Box>
              <Text fontSize="24px" fontWeight="bold">
                240k+
              </Text>
              <Text>Artists</Text>
            </Box>
          </Box>
        </Box>
        <Card.Root
          w={{ base: "100%",md:"44%", lg: "44%" }}
          overflow="hidden"
        >
          <Image src={img1} alt="NFT" />

          <Card.Body bg="black" color="white">
            <Card.Title>Space Walking</Card.Title>

            <Box display="flex" alignItems="center" gap={3} mt={2}>
              <Image
                boxSize="40px"
                borderRadius="full"
                src={img2}
                alt="artist"
              />
              <Text>Animakid</Text>
            </Box>
          </Card.Body>
        </Card.Root>
      </Box>
    </>
  );
}