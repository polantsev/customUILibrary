import {TaskComponent} from "./Task.component.js";

export function TodolistComponent(_, {library}) {
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
            library.refresh()
        },
        childrenComponents: []
    }

    return {
        element,
        localState,
    }
}

TodolistComponent.render = ({element, localState, library}) => {
    localState.childrenComponents.forEach(component => component.cleanup?.())
    // localState.childrenComponents = [];
    console.log('TodolistComponent render');

    element.append('TODOLIST')

    for (let i = 0; i < localState.tasks.length; i++) {
        const alreadyExistedComponent = localState.childrenComponents[i];

        // if (alreadyExistedComponent) {
        //     if (localState.tasks[i] !== alreadyExistedComponent.props.task) {
        //         alreadyExistedComponent.props.task = localState.tasks[i]
        //
        //         TaskComponent.render({
        //             element: alreadyExistedComponent.element, props: {
        //                 task: localState.tasks[i],
        //                 setIsDone: localState.setIsDone,
        //             }
        //         });
        //     }
        //     element.append(alreadyExistedComponent.element)
        // } else {
        const taskInstance = library.create(TaskComponent, {
            task: localState.tasks[i],
            setIsDone: localState.setIsDone,
        })
        element.append(taskInstance.element)
        localState.childrenComponents.push(taskInstance)
        // }
    }

}