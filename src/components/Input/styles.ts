import styled from 'styled-components/native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputProps {
  active: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  margin-left: ${RFValue(24)}px;
  margin-right: ${RFValue(24)}px;
  margin-top: ${RFValue(-27)}px;
`
export const Input = styled.TextInput<InputProps>`
  font-size: ${RFValue(14)}px;
  padding: ${RFValue(16)}px;
  width: 100%;
  height: ${RFValue(54)}px;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.white};
  border-style: solid;
  border-color: ${({ active, theme }) =>
    active ? theme.colors.blue_light : theme.colors.blue_dark};
`
export const ButtonAdd = styled.TouchableOpacity`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 4px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`
export const IconAdd = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.green};
`
