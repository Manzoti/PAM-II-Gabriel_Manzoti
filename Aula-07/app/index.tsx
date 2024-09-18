import React from 'react';
import { Box, Center, NativeBaseProvider } from 'native-base';
import { HStack } from 'native-base';

const Example = () => {
  return <HStack space={3} justifyContent="center">
  <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3}/>
      <Box p="2" bg="primary.500" _text={{
      fontSize: 'md',
      fontWeight: 'medium',
      color: 'warmGray.50',
      letterSpacing: 'lg'
    }} shadow={2}>
        Caixas
      </Box>
    <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3}/>
      
    </HStack>;
  
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    