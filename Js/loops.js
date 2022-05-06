// working with Array in js
const todos = [{
        id: 0,
        text: "Meeting Ayman nabil 0",
        IsCompleted: true
    },
    {
        id: 1,
        text: "Meeting Ayman nabil 1",
        IsCompleted: true
    },
    {
        id: 2,
        text: "Meeting Ayman nabil 2 ",
        IsCompleted: true
    },
    {
        id: 3,
        text: "Meeting Ayman nabil 3 ",
        IsCompleted: false
    },
]

// forEach , map , filter   
todos.forEach(function(todo) {
    console.log(todo.text)
})

const ToDoCompleted = todos.filter(function(todo) {
    return todo.IsCompleted === false
}).map(function(todo) {
    return todo.text
})

console.log(ToDoCompleted)