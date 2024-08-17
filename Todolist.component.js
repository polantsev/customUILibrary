import {TaskComponent} from "./Task.component.js";

export function TodolistComponent() {
    console.log('TodolistComponent mount');

    const element = document.createElement('ul')

    const localState = {
        tasks: [
            {id: 1, title: 'React', isDone: false},
            {id: 2, title: 'Vue', isDone: true},
            {id: 3, title: 'Angular', isDone: true},
        ],
        setIsDone(taskId, isDone) {
            localState.tasks = localState.tasks.map(task => task.id !== taskId ? task : {...task, isDone})
        }
    }

    TodolistComponent.render({element, localState});

    return {
        element,
        localState,
    }
}

TodolistComponent.render = ({element, localState}) => {
    console.log('TodolistComponent render');

    element.append('TODOLIST')

    for (let task of localState.tasks) {
        const taskInstance = TaskComponent({
            task,
            setIsDone: localState.setIsDone,
        })
        element.append(taskInstance.element)
    }

}