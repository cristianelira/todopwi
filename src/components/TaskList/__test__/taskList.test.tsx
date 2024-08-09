import { TaskList } from '..'
import { screen } from '@testing-library/react-native'
import { render } from '../../../../__tests__/utils/customRender'

describe('Component: Task', () => {
  test('should be render', () => {
    const tasks = [
      {
        id: 1,
        title: 'taskteste',
        done: false,
        editable: false
      },
      {
        id: 2,
        title: 'titulo task 2',
        done: false,
        editable: false
      },
      {
        id: 3,
        title: 'novo titulo task',
        done: false,
        editable: false
      }
    ]

    render(
      <TaskList
        tasks={tasks}
        toggleTaskDone={() => {}}
        toggleTaskEdit={() => {}}
        toggleTaskSaveEdit={() => {}}
        removeTask={() => {}}
      />
    )
    const textEmptyID = screen.queryAllByTestId('textEmptyID')
    expect(textEmptyID[0]).toBeFalsy()
  })

  test('should be render list empty', async () => {
    render(
      <TaskList
        tasks={[]}
        toggleTaskDone={() => {}}
        toggleTaskEdit={() => {}}
        toggleTaskSaveEdit={() => {}}
        removeTask={() => {}}
      />
    )

    const textEmptyID = await screen.findAllByTestId('textEmptyID')
    expect(textEmptyID[0].children[0]).toEqual(
      'Você ainda não tem tarefas cadastradas'
    )
  })
})
