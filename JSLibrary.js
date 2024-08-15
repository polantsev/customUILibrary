export const JSLibrary = {
    create(ComponentFunction) {
        const componentInstance = ComponentFunction();
        return componentInstance;
    }
}