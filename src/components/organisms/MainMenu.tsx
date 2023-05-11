import {
    Box
} from '@chakra-ui/react'
import MainMenuItem from '../molecules/MainMenuItem'
import { menuItem } from '@/data/dummy'

const MainMenu = () => {
    return (
        <>
            <Box display={{ lg: "none" }} w="full" borderBottom="1px">
                <Box as="ul" w="full" borderRadius="lg">
                    {
                        menuItem.map((item, index) =>
                            <MainMenuItem menuItem={item} menuIndex={index} key={"mobile-menu-item-" + index} />
                        )
                    }
                </Box>
            </Box>
        </>
    )
}

export default MainMenu