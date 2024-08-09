import React from 'react'
import { Container } from './styles'
import { Image } from 'react-native'

export function Header() {
  return (
    <Container>
      <Image
        source={require('../../assets/header.png')}
        style={{
          width: 270,
          height: 75
        }}
      />
    </Container>
  )
}
