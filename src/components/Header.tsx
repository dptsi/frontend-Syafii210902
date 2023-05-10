import AppSettingContext from '@/providers/AppSettingProvider'
import {
    Flex, Image, Link, Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useContext } from 'react'

const Header = () => {
    const { logoMyIts } = useContext(AppSettingContext)

    return (
        <>
            <Flex as="header" pos="fixed" justifyContent="center" alignItems="center" w="full" maxH="100vh" zIndex="1000">
                <Flex as="nav" justifyContent="space-between" bg="bg-surface" w="full" maxW="1445px" py="15px">
                    <Flex>
                        <Link as={NextLink} href="/" display="flex" justifyContent="center" alignItems="center">
                            <Image src={logoMyIts} w="55px" mt="5px" />
                            <Text as="p" ml="2" fontSize="20px">{process.env.NEXT_PUBLIC_APP_NAME}</Text>
                        </Link>
                    </Flex>
                    <Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Header