import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../../../assets/image copy 3.png";
import img1 from "../../../assets/image copy 4.png";
import img2 from "../../../assets/image copy 5.png";
import img3 from "../../../assets/image copy 6.png";
import img4 from "../../../assets/image copy 7.png";
import img5 from "../../../assets/image copy 8.png";
import img6 from "../../../assets/image copy 9.png";
import img7 from "../../../assets/image copy 10.png";
import img8 from "../../../assets/image copy 11.png";
import img9 from "../../../assets/image copy 12.png";
import img10 from "../../../assets/image copy 13.png";
import img11 from "../../../assets/image copy 14.png";
import img12 from "../../../assets/image copy 15.png";
import img13 from "../../../assets/image copy 16.png";
import img14 from "../../../assets/image copy 17.png";
import img15 from "../../../assets/image copy 18.png";
import img16 from "../../../assets/image copy 19.png";
import img17 from "../../../assets/image copy 20.png";
import img18 from "../../../assets/image copy 21.png";
import img19 from "../../../assets/image copy 22.png";
import img20 from "../../../assets/image copy 23.png";
import img21 from "../../../assets/image copy 24.png";
import img22 from "../../../assets/image copy 25.png";
import img23 from "../../../assets/image copy 26.png";
import img24 from "../../../assets/image copy 27.png";

const collections = [
  { title: "DSGN Animals" },
  { title: "Magic Mushrooms" },
  { title: "Disco Machines" },
];

const topCreators = [
  { name: "Keepitreal", igm: img5 },
  { name: "DigiLab", igm: img6 },
  { name: "GravityOne", igm: img7 },
  { name: "Juanie", igm: img8 },
  { name: "BlueWhale", igm: img9 },
  { name: "mr fox", igm: img10 },
  { name: "Shroomie", igm: img11 },
  { name: "robotica", igm: img12 },
  { name: "RustyRobot", igm: img13 },
  { name: "animakid", igm: img14 },
  { name: "Dotgu", igm: img15 },
  { name: "Ghiblier", igm: img16 },
];
const card=[
    {name:"Art",img:img17},
    {name:"Collectibles",img:img18},
    {name:"Music",img:img19},
    {name:"Photography",img:img20},
    {name:"Video",img:img21},
    {name:"Utility",img:img22},
    {name:"Sport",img:img23},
    {name:"Virtual Worlds",img:img24}
]

export default function Sekshen1() {
  return (
    <Box w="90%" m="auto">
      <Text fontSize={{ base: "28px", md: "40px" }} mt="10px">
        Trending Collection
      </Text>

      <Text fontSize={{ base: "16px", md: "22px" }} color="gray.400">
        Checkout our weekly updated trending collection.
      </Text>

      <Box
        mt={8}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={6}
        justifyContent="space-between"
      >
        {collections.map((item, i) => (
          <Box 
            display={{ base: i === 0 ? "block" : "none", md: i < 2 ? "block" : "none", lg: "block" }} 
            key={i} 
            w={{ base: "100%", md: "48%", lg: "31%" }}
          >
            <Image src={img} borderRadius="10px" />
            <Box mt={4} display="flex" justifyContent="space-between" gap={2}>
              <Image w="32%" src={img1} />
              <Image w="32%" src={img2} />
              <Image w="32%" src={img3} />
            </Box>

            <Text fontSize="24px" mt={4}>
              {item.title}
            </Text>

            <Box display="flex" alignItems="center" gap={3} mt={2}>
              <Image boxSize="30px" borderRadius="full" src={img4} />
              <Text fontSize="18px">MrFox</Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box mt={16} pb={8}>
        <Text fontSize={{ base: "30px", md: "50px" }}>
          Top creators
        </Text>
        <Box
          mt={4}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Text fontSize="18px">
            Checkout Top Rated Creators on the NFT Marketplace
          </Text>
          <Button
            w={{ base: "100%", md: "auto" }}
            bg="#2B2B2B"
            border="1px solid gray"
            color="#A259FF"
          >
            View Rankings
          </Button>
        </Box>
      </Box>

      <Box className="flex items-center justify-between flex-wrap">
        {topCreators.map((item, i) => (
          <Box 
            key={i} 
            bgColor={"#3B3B3B"} 
            pt={4} pb={4} 
            display={"flex"} 
            mt={6} mb={6} 
            rounded={"2xl"} 
            flexDirection={{ base: "row", md: "row", lg: "column" }} 
            textAlign={{ base: "start", md: "start", lg: "center" }} 
            alignItems="center" 
            width={{ lg: "23%", md: "48%", base: "100%" }} 
            gap={6}
          >
            <Box display="flex" alignItems="start" p={2}>
              <Text 
                p={2} 
                ml={{ base: "10px", md: "10px", lg: "-90px" }} 
                pt={1} pb={1} 
                textAlign={"start"} 
                bgColor={"#2B2B2B"} 
                rounded={"3xl"}
              >
                {i + 1}
              </Text>
              <Image 
                boxSize={{ base: "60px", md: "80px" }} 
                ml={{ base: "15px", md: "15px", lg: "60px" }} 
                borderRadius="full" 
                src={item.igm} 
              />
            </Box>
            <Box>
              <Text fontSize="18px" mb={{ base: 1, md: 1, lg: 6 }}>{item.name}</Text>
              <Text fontSize={{ base: 16, md: 16, lg: 20 }} color={"gray.400"}>
                Total Sales: <span className="text-white">34.53 ETH</span>
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
        <Text fontSize={40} mt={8} mb={6}>Browse Categories</Text>
      <Box className="flex items-center justify-between flex-wrap gap-6">
        {card.map((el,i)=>(
            <Box
  key={i}
  width={{ base: "46%", md: "21%", lg: "23%" }}
  bg="#3B3B3B" // Ранги заминаи қисми поёнӣ
  borderRadius="20px" // Гӯшаҳои мудаввар
  overflow="hidden" // Барои он ки сурат аз ҳудуди Box берун набарояд
  mb={6}
>
  {/* Қисми болоӣ бо сурат ва эффект */}
  <Box position="relative">
    <Image 
      src={el.img} 
      w="100%" 
      filter="blur(2px)" // Эффекти хира дар заминаи сурат
    />
    {/* Икона дар мобайни сурат (агар лозим бошад) */}
    <Center
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
    >
      <Image src={el.icon} boxSize="80px" /> 
    </Center>
  </Box>

  {/* Қисми поёнӣ бо матн */}
  <Box p={5}>
    <Text 
      color="white" 
      fontSize="22px" 
      fontWeight="semibold"
    >
      {el.name}
    </Text>
  </Box>
</Box>
        ))}
      </Box>
    </Box>
  );
}