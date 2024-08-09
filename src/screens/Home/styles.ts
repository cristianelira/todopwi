import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Tasks = styled.View`
  align-items: center;
  width: 100%;
`
export const Bottom = styled.View`
  align-items: center;
  width: 100%;
  height: 64px;
`
