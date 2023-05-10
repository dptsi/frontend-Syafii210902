import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";

const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Flex flexDir="column" minH="100vh">
                <Header />

                <Box h="100vh" pos="relative">
                    <Flex flexDir="column" minH="calc(100vh - 80px)">
                        <Box mt="60px">
                            {children}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default BaseLayout