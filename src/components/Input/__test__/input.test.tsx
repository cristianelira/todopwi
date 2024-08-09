import { TodoInput } from '..'
import { act, fireEvent, screen } from '@testing-library/react-native'
import { render } from '../../../../__tests__/utils/customRender'

describe('Component: Input', () => {
  test('should be render', () => {
    render(<TodoInput addTask={() => {}} />)
  })
  test('should add new task', async () => {
    render(<TodoInput addTask={() => {}} />)
    const inputID = await screen.getByTestId('inputID')
    act(() => {
      inputID._fiber.pendingProps.onFocus()
    })

    fireEvent.changeText(inputID, 'TEXTO TESTE')
    expect(inputID._fiber.pendingProps.value).toEqual('TEXTO TESTE')
    const addTaskID = await screen.getByTestId('addTaskID')
    fireEvent.press(addTaskID)
    act(() => {
      inputID._fiber.pendingProps.onBlur()
    })
  })

  test('should not add new task with empty description', async () => {
    render(<TodoInput addTask={() => {}} />)
    const inputID = await screen.getByTestId('inputID')

    fireEvent.changeText(inputID, '')

    const addTaskID = await screen.getByTestId('addTaskID')
    fireEvent.press(addTaskID)
    expect(inputID._fiber.pendingProps.value).toBeFalsy()
  })
})
