export const JSLibrary = {
    create(ComponentFunction, props = {}) {
        const componentInstance = ComponentFunction(props);

        ComponentFunction.render({
            element: componentInstance.element,
            localState: componentInstance.localState,
            props: componentInstance.props,
            library: JSLibrary,
        });
        return componentInstance;
    }
}