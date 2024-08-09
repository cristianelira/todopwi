import { render } from '../../../../__tests__/utils/customRender'
import { act, fireEvent, screen } from '@testing-library/react-native'
import { TaskItem } from '..'

describe('Component: Task', () => {
  test('should be render', () => {
    const task = {
      id: 1,
      title: 'taskteste',
      done: false,
      editable: false
    }
    render(
      <TaskItem
        task={task}
        toggleTaskDone={() => {}}
        toggleTaskEdit={() => {}}
        toggleTaskSaveEdit={() => {}}
        removeTask={() => {}}
      />
    )
  })

  test('should be updating task', () => {
    let task = {
      id: 1,
      title: 'taskteste',
      done: false,
      editable: false
    }
    render(
      <TaskItem
        task={task}
        toggleTaskDone={() => {}}
        toggleTaskEdit={() => {
          task.editable = true
        }}
        toggleTaskSaveEdit={(newTaskTitle, id) => {
          task.title = newTaskTitle
        }}
        removeTask={() => {}}
      />
    )

    const buttonEditTaskID = screen.getByTestId('buttonEditTaskID')
    act(() => {
      fireEvent.press(buttonEditTaskID)
    })
    const taskDescriptionID = screen.getByTestId('taskDescriptionID')

    fireEvent.changeText(taskDescriptionID, 'ALTERADO TASK')

    screen.update(
      <TaskItem
        task={task}
        toggleTaskDone={() => {}}
        toggleTaskEdit={() => {
          task.editable = true
        }}
        toggleTaskSaveEdit={(newTaskTitle, id) => {
          task.title = newTaskTitle
        }}
        removeTask={() => {}}
      />
    )
    const buttonSaveEditTaskID = screen.getByTestId('buttonSaveEditTaskID')
    act(() => {
      fireEvent.press(buttonSaveEditTaskID)
      taskDescriptionID._fiber.pendingProps.onFocus()
    })
  })

  test('should be task done', () => {
    const task = {
      id: 1,
      title: 'taskteste',
      done: false,
      editable: false
    }
    render(
      <TaskItem
        task={task}
        toggleTaskDone={() => {
          task.done = true
        }}
        toggleTaskEdit={() => {}}
        toggleTaskSaveEdit={() => {}}
        removeTask={() => {}}
      />
    )
    const checkTaskID = screen.getByTestId('checkTaskID')
    fireEvent.press(checkTaskID)
    screen.update(
      <TaskItem
        task={task}
        toggleTaskDone={() => {
          task.done = true
        }}
        toggleTaskEdit={() => {}}
        toggleTaskSaveEdit={() => {}}
        removeTask={() => {}}
      />
    )
  })

  test('should be task deleted', () => {
    let task = {
      id: 1,
      title: 'taskteste',
      done: false,
      editable: true
    }
    const removeTaskHandle = jest.fn()
    render(
      <TaskItem
        task={task}
        toggleTaskDone={() => {}}
        toggleTaskEdit={() => {}}
        toggleTaskSaveEdit={() => {}}
        removeTask={removeTaskHandle}
      />
    )
    const deleteTaskID = screen.getByTestId('deleteTaskID')
    fireEvent.press(deleteTaskID)
    expect(removeTaskHandle).toHaveBeenCalledWith(task.id)
  })
})
