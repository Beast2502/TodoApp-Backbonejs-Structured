$(document).ready(function(){

    let todoItem = new TodoItem({desciption:'TodoItem 1'})

    let todoItemView = new TodoItemView({model : todoItem });
    $('body').append(todoItemView.render().$el);
})