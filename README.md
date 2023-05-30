# redux_react
Basic structure to use Redux without using Toolkit.

## use
* redux
* react-redux

### structure
1. Create structure for redux
   * src/redux
   * src/redux/root-reducer.js
   * src/redux/store.js

   * src/redux/stateName
   * src/redux/stateName/reducer.js
   * src/redux/stateName/actions-types.js
   * src/redux/stateName/actions.js

2. Wrap the component that will consume the state with provider
   * exemple in src/index.js

3. To consume or change state
   * useSelector -> consume the state
   * useDispatch -> change the state
   * exemple in src/App.js
