import React, { useState } from 'react'
import { Container, Tasks } from './styles'
import { Header } from '../../components/Header'
import { TodoInput } from '../../components/Input'
import { Task, TaskList } from '../../components/TaskList'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleTaskAdd(newTaskTitle: string) {
    const data = {
      id: Number(new Date().getTime()),
      title: newTaskTitle,
      done: false,
      editable: false
    }
    const updatedTasks = tasks.map(task => ({ ...task }))
    const checkTask = updatedTasks.find(item => item.title === newTaskTitle)

    if (!checkTask) {
      setTasks(oldState => [...oldState, data])
    } else {
      Alert.alert(
        'Duplicado!',
        'Você não pode cadastrar uma tarefa com o mesmo nome!'
      )
    }
  }

  function handleToggleTaskEdit(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const editTask = updatedTasks.find(item => item.id === id)

    if (!editTask) return

    editTask.editable = !editTask.editable
    setTasks(updatedTasks)
  }

  function handleToggleTaskSaveEdit(newTaskTitle: string, id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const checkTask = updatedTasks.find(
      item => item.title === newTaskTitle && item.id !== id
    )

    if (newTaskTitle === '') {
      Alert.alert('Vazio...', 'A tarefa não pode estar vazia! ')
    } else if (!!checkTask) {
      Alert.alert('Duplicado!', 'Já existe uma tarefa com esse nome!')
    } else {
      setTasks(prevState =>
        prevState.map(task => {
          if (task.id === id) {
            return { ...task, title: newTaskTitle, editable: false }
          }
          return task
        })
      )
    }
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const toggleTask = updatedTasks.find(item => item.id === id)

    if (!toggleTask) return

    toggleTask.done = !toggleTask.done
    setTasks(updatedTasks)
  }

  function handleTaskRemove(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />

        <TodoInput addTask={handleTaskAdd} />
        <KeyboardAwareScrollView>
          <Tasks>
            <TaskList
              tasks={tasks}
              toggleTaskDone={handleToggleTaskDone}
              toggleTaskEdit={handleToggleTaskEdit}
              toggleTaskSaveEdit={handleToggleTaskSaveEdit}
              removeTask={handleTaskRemove}
            />
          </Tasks>
        </KeyboardAwareScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
