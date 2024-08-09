import React, { useState } from 'react'

import { ButtonAdd, Container, IconAdd, Input } from './styles'

export interface TodoInputProps {
  addTask: (task: string) => void
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('')
  const [active, setActive] = useState(false)

  function handleAddNewTask() {
    if (task != '') {
      addTask(task)
      setTask('')
    } else return
  }

  return (
    <Container testID="InputCompponent">
      <Input
        testID="inputID"
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={task}
        onChangeText={setTask}
        onFocus={() => setActive(true)}
        active={active}
        onBlur={() => setActive(false)}
        maxLength={50}
        multiline
      />
      <ButtonAdd testID="addTaskID" onPress={handleAddNewTask}>
        <IconAdd name="pluscircleo" />
      </ButtonAdd>
    </Container>
  )
}
