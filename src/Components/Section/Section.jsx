import React from 'react'
import { useState } from 'react'

import { Box, Text, Button, Flex, Stack } from "@chakra-ui/react";

export default function Section() {

  const [count, setCount] = useState(0)

  return (


    <Flex flexDirection='column' justify='center' align='center' h='100vh' bg='gray'>


      <Box maxW={['auto', null, 200]} maxH={['auto']} textAlign='center' >
        <Text fontFamily='fantasy' fontSize='2xl' bg='green.400' borderTopRadius='lg' >Empieza a contar!</Text>

        <Stack spacing='15px' py='25px' bg='green.200'  >
          <Text fontSize='3xl'>{count}</Text>


          <Flex justifyContent={'space-evenly'}>
            <Button
              onClick={() => setCount((count) => count - 1)}
              transition='all 0.5s cubic-bezier(.1,.8,.52,1)'
              _active={{
                bg: '#dddfe2',
                transform: 'scale(1.2)',
                borderColor: '#bec3c9',
              }}
            >
              -
            </Button>

            <Button
              onClick={() => setCount((count) => count + 1)}
              transition='all 0.5s cubic-bezier(.1,.8,.52,1)'
              _active={{
                bg: '#dddfe2',
                transform: 'scale(1.2)',
                borderColor: '#bec3c9',
              }}
            >
              +
            </Button>
          </Flex>


        </Stack>
        <Text fontFamily={'sans-serif'} bg='green.400' borderBottomRadius='lg' >
          Puedes contar tanto en numeros positivos como negativos ¡Pero solo numeros enteros!
        </Text>
      </Box>

    </Flex>

  )
}
