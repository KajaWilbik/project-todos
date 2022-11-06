/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useSyncExternalStore } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';
import { HeaderDate } from './HeaderDate';
import { StyledButton } from './StyledComponents/StyledButton'

export const ToDoList = ({ id, complete }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('ToDoList'));
    if (listFromStorage) {
      dispatch(tasks.actions.setAllItems(listFromStorage));
    }
    console.log('saved', listFromStorage)
  }, [dispatch])

  const tasksList = useSelector((store) => store.tasks.list)

  // Function to read the change of checkbox
  const onTaskChangeToggle = () => {
    dispatch(
      tasks.actions.toggleComplete({ id, complete: !complete })
    );
  };

  /*  ---TRIED TO MAKE LENGTH OF COMPLETED TASKS; BUT IT IS NOT SHOWING PROPER DATA,
    improvment possibility ----

  const completedTasks = useSyncExternalStore(() => tasksList.filter(
    (task) => task.complete === true
  ))
*/

  const onDeleteItemButton = (itemIndex) => {
    dispatch(
      tasks.actions.removeTask(itemIndex)
    );
  }
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasksList))
  }, [tasksList]);
  return (
    <StyledToDoList>
      <h1>🦁 To do list 🦁</h1>
      {tasksList.map((item, index) => {
        return (
          <div className="toDoList" key={item.id}>
            <input
              type="checkbox"
              checked={complete}
              onChange={onTaskChangeToggle} />
            <label>{item.text}</label>
            <StyledButton type="button" onClick={() => onDeleteItemButton(index)}>Delate 💀

            </StyledButton>
            <HeaderDate />

          </div>

        )
      })}
      {/* <p>Completed tasks {completedTasks.length}</p> */
      /* improvement possibility, check line 28 */}
      <p>Tasks for today: {tasksList.length}</p>
    </StyledToDoList>

  )
}

const StyledToDoList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

.toDoList {
  display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;

  border: solid black 1px;
border-radius:20px;
margin:5px;
padding: 10px;
}
`