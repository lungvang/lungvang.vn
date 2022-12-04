import { Box, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Box bg="gray.50">
      <VStack spacing={10} w="full" align="center">
        <Header name="Lung Vang" />
        {children}
      </VStack>
    </Box>
  );
}
export default Layout;