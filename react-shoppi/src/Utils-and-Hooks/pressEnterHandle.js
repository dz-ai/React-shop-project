export const handleKeypress = (e, fun, funArg) => {
    if (e.keyCode === 13) {
       funArg && fun(funArg);
       fun();
    }
};