import React, { useEffect, useRef, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'

import {
  Check,
  Container,
  Delete,
  IconCheck,
  IconDelete,
  Edit,
  IconEdit,
  InputEdit
} from './styles'

import { Task } from '../TaskList'
import { TextInput } from 'react-native'

interface TaskItemProps {
  task: Task
  toggleTaskDone: (id: number) => void
  toggleTaskEdit: (id: number) => void
  toggleTaskSaveEdit: (newTaskTitle: string, id: number) => void
  removeTask: (id: number) => void
}

export function TaskItem({
  task,
  toggleTaskDone,
  toggleTaskEdit,
  toggleTaskSaveEdit,
  removeTask
}: TaskItemProps) {
  const [editTask, setEditTask] = useState(task.title)
  const [active, setActive] = useState(false)
  const { colors } = useTheme()
  const inputRef = useRef<TextInput>(null)

  function handleUpdateTask() {
    toggleTaskSaveEdit(editTask, task.id)
    setActive(false)
  }

  useEffect(() => {
    if (task.editable) {
      inputRef.current?.focus()
    }
  }, [task])
  return (
    <Container active={active} testID="itemTaskID">
      <Check testID="checkTaskID" onPress={() => toggleTaskDone(task.id)}>
        {task.done === true ? (
          <IconCheck name="check-circle" />
        ) : (
          <IconCheck name="circle" />
        )}
      </Check>

      <InputEdit
        testID="taskDescriptionID"
        ref={inputRef}
        editable={task.editable}
        defaultValue={task.title}
        style={
          task.done === true
            ? {
                fontSize: RFValue(14),
                color: colors.gray,
                textDecorationLine: 'line-through'
              }
            : { fontSize: RFValue(14), color: colors.white }
        }
        onChangeText={setEditTask}
        onSubmitEditing={handleUpdateTask}
        onBlur={handleUpdateTask}
        onFocus={() => setActive(true)}
        selectionColor={colors.green}
        maxLength={50}
        multiline
        active={active}
        selectTextOnFocus
      />

      {task.done === false ? (
        task.editable === false ? (
          <Edit
            testID="buttonEditTaskID"
            onPress={() => {
              toggleTaskEdit(task.id)
            }}
          >
            <IconEdit name="edit-2" />
          </Edit>
        ) : (
          <Edit testID="buttonSaveEditTaskID" onPress={handleUpdateTask}>
            <IconEdit name="check" />
          </Edit>
        )
      ) : (
        <></>
      )}

      <Delete testID="deleteTaskID" onPress={() => removeTask(task.id)}>
        <IconDelete name="minus-circle" />
      </Delete>
    </Container>
  )
}
