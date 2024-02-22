# Redux

## Redux Setup:
- npm install redux
- npm install react-redux

## Store:
- createStore
- Provider

## Redux DevTools:
- npm install @redux-devtools/extension
- devToolsEnhancer

## Store Subscription:
- useSelector(selector)
- Subscription logic using useSelector

## Filter and Display Components:
- StatusFilter component
	- Utilizes useSelector to get the filter value
- src/redux/constants.js for storing filter values
- TaskList component that relies on the StatusFilter component

## Task Components:
- TaskList component
	- Uses useSelector to get tasks and filter values
	- Utilizes a function (getVisibleTasks) to calculate visible tasks based on the filter

## Task Counter:
- TaskCounter component
	- Uses useSelector to get tasks
	- Calculates derived data for the count of active and completed tasks

## Selector Functions:
- Functions declared in src/redux/selectors.js
	- getTasks
	- getStatusFilter
	- Emphasize the benefits of a single source of truth for selectors

## Actions and Action Creators:
- Actions
- Action Creators

## Sending Actions:
- dispatch /useDispatch()

## Reducers:
- Root reducer
- combineReducers
