# naive-implementation-of-react-hooks
A way to understand why react hooks can be conditional


## steps
- starting from "initial" tag
- remove `useState` import, create a `useState` local function
- add a `console.log` in the setter => new value set, but nothing visible
- force rerender (ok, this is a hack)
- add states cache
- handle state exists in the cache
- in `setValue`, update value from the statesCache

=> useState can't be called conditionally
