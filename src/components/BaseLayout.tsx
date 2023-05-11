import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import MainMenuItem from "./molecules/MainMenuItem";
import { menuItem } from "@/data/dummy";
import NextLink from 'next/link'
import { IoChevronBack } from "react-icons/io5";

const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Flex flexDir="column" minH="100vh">
                <Header />

                <Box h="100vh" pos="relative">
                    <Flex flexDir="column" minH="calc(100vh - 80px)">
                        <Flex justifyContent="start" alignItems="center" minH="100vh">
                            <Flex flexDir="column" pos="relative" justifyContent="start" style={{ position: "sticky" }} top="95px" h="calc(100vh - 120px)" w="261px">
                                <Box display={{ base: "none", lg: "block" }} w="full" ml="13px" borderRadius="10px">
                                    <Link as={NextLink} href="/" display="flex" justifyContent="center" alignItems="center">
                                        <Box w="42px" h="42px" ml={{ lg: "4px" }}>
                                            <Image src="/images/app/profile-default.jpg" borderRadius="full" />
                                        </Box>
                                        <Flex flexDir="column" flex="1 1 auto" justifyContent="center" alignItems="start" ml="15px">
                                            <Text>Administrator</Text>
                                            <Text>Sulthon Nashir</Text>
                                        </Flex>
                                    </Link>

                                    <Button display="flex" pos="absolute" right="-10px" top="14px">
                                        <IoChevronBack />
                                    </Button>
                                </Box>
                                <Box display={{ base: "none", lg: "block" }} w="full">
                                    <Box as="ul" w="full" borderRadius="lg">
                                        {
                                            menuItem.map((item, index) =>
                                                <MainMenuItem menuItem={item} menuIndex={index} key={"mobile-menu-item-" + index} />
                                            )
                                        }
                                    </Box>
                                </Box>
                            </Flex>

                            <Flex flex="1">

                            </Flex>
                        </Flex>
                    </Flex>

                    <Footer />
                </Box>
            </Flex>
        </>
    )
}

export default BaseLayout