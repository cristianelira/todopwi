import styled from 'styled-components/native'
import Feather from '@expo/vector-icons/Feather'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { TextInput, TextInputProps } from 'react-native'

interface InputProps {
  active: boolean
}

export const Container = styled.View<InputProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 8px;
  width: 86%;
  height: ${RFValue(64)}px;
  margin-top: ${RFValue(20)}px;
  margin-left: ${RFValue(24)}px;
  margin-right: ${RFValue(22)}px;
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ active, theme }) =>
    active ? theme.colors.green : theme.colors.blue};
`
export const InputEdit = styled(TextInput)<InputProps>`
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 8px;
  width: 58%;
  height: ${RFValue(60)}px;
`

export const Check = styled.TouchableOpacity``

export const IconCheck = styled(Feather)`
  font-size: ${RFValue(18)}px;
  margin-right: ${RFValue(8)}px;
  margin-left: ${RFValue(12)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.green};
`

export const Edit = styled.TouchableOpacity``

export const IconEdit = styled(Feather)`
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.green};
`

export const Delete = styled.TouchableOpacity``

export const IconDelete = styled(Feather)`
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.green};
`
