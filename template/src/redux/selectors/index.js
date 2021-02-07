import { useSelector } from 'react-redux'

// If you need to access the state from outside the component
// we can define a set of derived state values
export default {
   state: useSelector(state => state.state),
}