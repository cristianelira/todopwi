import styled from 'styled-components/native'
import Feather from '@expo/vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.FlatList.attrs({})`
  margin-bottom: 50px;
`

export const EmptyContainer = styled.View`
  margin-top: 2px;
  justify-content: space-between;
  flex-direction: row;

  margin-left: ${RFValue(24)}px;
  margin-right: ${RFValue(24)}px;
`
export const BorderEmpty = styled.View`
  align-items: center;
  text-align: center;

  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.blue_light};
  border-style: solid;

  height: 100%;
  width: 100%;
`

export const IconEmpty = styled(Feather)`
  font-size: ${RFValue(58)}px;
  margin-bottom: ${RFValue(16)}px;
  margin-top: ${RFValue(48)}px;
  color: ${({ theme }) => theme.colors.green};
`
export const TextEmpty = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
`
