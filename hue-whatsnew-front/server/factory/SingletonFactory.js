


module.exports = () => {
    let instance = null;
    return {
        set: val => {
          instance = val;
        },
        get: () => instance
    }
};