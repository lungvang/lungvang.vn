import { Box, chakra, Container, Stack, Heading, Spacer, Link, LinkBox, LinkOverlay, Image, useDisclosure, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";
import type { FC } from 'react';

const navLinks = [
  { name: 'Trang chủ', link: '/' },
  { name: 'Đầu tư', link: '/dautu' },
  { name: 'Doanh nghiệp', link: '/gobiz' },
  { name: 'Tin tức', link: '/blog' },
]

const DesktopSidebarContents = ({ name }: any) => {
  return (
    <Container maxW={['full', 'container.lg']} p={0}>
      <Stack justify="space-between" p={[0, 4]} w="full" direction={['column', 'row']}>
        <Box display={{ base: 'none', md: 'flex' }}>
          <Heading fontSize="xl">{name}</Heading>
        </Box>
        <Spacer />
        <Stack align="flex-start" spacing={[4, 10]} direction={['column', 'row']}>
          {navLinks.map((navLink: any, i: number) => {

            return (
              <Link href={navLink.link} key={`navlink_${i}`} fontWeight={500} variant="ghost">
                {navLink.name}
              </Link>
            )
          })}
        </Stack>
        <Spacer />
        <LinkBox>
          <LinkOverlay href={`https://lungvang.com`} isExternal>
            <Image src='lungvang.svg' />
          </LinkOverlay>
        </LinkBox>
      </Stack>
    </Container>
  )
}

const MobileSidebar = ({ name }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex w="full" align="center">
        <Heading fontSize="xl">{name}</Heading>
        <Spacer />
        <IconButton aria-label='Search database' icon={<HamburgerIcon />} onClick={onOpen} />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg="gray.50">
            <DrawerCloseButton />
            <DrawerHeader>{name}</DrawerHeader>

            <DrawerBody>
              <DesktopSidebarContents />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  )
}

interface SidebarProps {
  name: string
}

const Sidebar: FC<SidebarProps> = ({ name }: SidebarProps) => {
  return (
    <chakra.header id="header">
      <Box display={{ base: 'flex', md: 'none' }} p={4}>
        <MobileSidebar name={name} />
      </Box>

      <Box display={{ base: 'none', md: 'flex' }} bg="gray.50">
        <DesktopSidebarContents name={name} />
      </Box>
    </chakra.header>
  )
}

interface HeaderProps {
  name: string
}

const Header: FC<HeaderProps> = ({ name }: HeaderProps) => {
  return (
    <Box w="full">
      <Sidebar name={name} />
    </Box>
  );
}
export default Header;