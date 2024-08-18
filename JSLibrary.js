export const JSLibrary = {
    create(ComponentFunction, props = {}) {
        const renderLibrary = {
            create: JSLibrary.create,
            refresh() {
                componentInstance.element.innerHTML = '';
                renderComponent();
            }
        }

        const componentInstance = ComponentFunction(props, {library: renderLibrary});

        function renderComponent() {
            ComponentFunction.render({
                element: componentInstance.element,
                localState: componentInstance.localState,
                props: componentInstance.props,
                library: renderLibrary,
            });
        }

        renderComponent();

        return componentInstance;
    }
}