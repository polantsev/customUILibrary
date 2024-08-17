export function CounterComponent() {
    const element = document.createElement('div');

    console.log('CounterComponent mount');

    const localState = {
        value: 1,
    }

    const interval = setInterval(() => {
        localState.value++
        CounterComponent.render({element, localState})
    }, 1000)

    CounterComponent.render({element, localState})

    return {
        localState,
        element,
        cleanup: () => {
            clearInterval(interval)
        }
    }
}

CounterComponent.render = ({element, localState}) => {
    element.innerHTML = ''
    console.log('CounterComponent');

    element.append(localState.value)
}