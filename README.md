I had problem: (cannot assign to read only property of object quantity)

```
const newItem = action.payload
newItem.quantity = 1
state.items = [...state.items, newItem]

```

I had not problem when I wrote the code like this

```
const newItem = action.payload
state.items = [...state.items, { ...newItem, quantity: 1 }]
```
