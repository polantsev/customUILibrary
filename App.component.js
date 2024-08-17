import {CounterComponent} from "./Counter.component.js";
import {TodolistComponent} from "./Todolist.component.js";

export function AppComponent() {
    const element = document.createElement('div');

    const localState = {
        page: 'todolist',
        childrenComponents: []
    }

    return {
        localState, element,
    }
}

AppComponent.render = ({element, localState, props, library}) => {
    element.innerHTML = '';
    localState.childrenComponents.forEach(component => component.cleanup?.())
    localState.childrenComponents = [];

    const pageSelector = document.createElement('select');

    const counterPageOptions = document.createElement('option')
    counterPageOptions.append('Counter Page')
    counterPageOptions.value = 'counter'

    const todolistOption = document.createElement('option')
    todolistOption.append('Todolist App')
    todolistOption.value = 'todolist'

    pageSelector.append(counterPageOptions, todolistOption)

    pageSelector.value = localState.page

    element.append(pageSelector)

    pageSelector.addEventListener("change", () => {
        localState.page = pageSelector.value
        AppComponent.render({element, localState, library})
    })

    switch (localState.page) {
        case 'counter': {
            const counterInstance = library.create(CounterComponent);
            localState.childrenComponents.push(counterInstance)
            element.append(counterInstance.element)
            break
        }
        case 'todolist': {
            const todolistInstance = library.create(TodolistComponent);
            localState.childrenComponents.push(todolistInstance)
            element.append(todolistInstance.element)
            break
        }
    }
}