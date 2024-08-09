import React from 'react'

import { BorderEmpty, EmptyContainer, TextEmpty, IconEmpty } from './styles'
import { TaskItem } from '../Task'
import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export interface Task {
  id: number
  title: string
  done: boolean
  editable: boolean
}

interface TasksListProps {
  tasks: Task[]
  toggleTaskDone: (id: number) => void
  toggleTaskEdit: (id: number) => void
  toggleTaskSaveEdit: (newTaskTitle: string, id: number) => void
  removeTask: (id: number) => void
}

export function TaskList({
  tasks,
  toggleTaskDone,
  toggleTaskEdit,
  toggleTaskSaveEdit,
  removeTask
}: TasksListProps) {
  return (
    <FlatList
      testID="listID"
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ marginBottom: RFValue(50), flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <TaskItem
            task={item}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            toggleTaskEdit={toggleTaskEdit}
            toggleTaskSaveEdit={toggleTaskSaveEdit}
          />
        )
      }}
      ListEmptyComponent={() => (
        <EmptyContainer>
          <BorderEmpty>
            <IconEmpty name="list" />
            <TextEmpty testID="textEmptyID">
              Você ainda não tem tarefas cadastradas
            </TextEmpty>
          </BorderEmpty>
        </EmptyContainer>
      )}
      style={{
        marginTop: RFValue(32)
      }}
    />
  )
}
