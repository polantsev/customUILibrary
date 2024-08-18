export function CounterComponent(_, {library}) {
    const element = document.createElement('div');

    console.log('CounterComponent mount');

    const localState = {
        value: 1,
    }

    const interval = setInterval(() => {
        localState.value++
        library.refresh();
    }, 1000)

    return {
        localState,
        element,
        cleanup: () => {
            clearInterval(interval)
        }
    }
}

CounterComponent.render = ({element, localState}) => {
    console.log('CounterComponent');

    element.append(localState.value)
}