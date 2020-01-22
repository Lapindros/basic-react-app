export default (store) => (next) => (action) => {
    console.log('---', 'state', store.getState())
    console.log('---', 'dispatching', action)
    console.log('---', 'action', next(action))
}