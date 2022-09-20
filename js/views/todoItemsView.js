let TodoItemsView = Backbone.View.extend({
    tagName:'ul',
    id: 'todoItems',

    initialize : function(options){
        if(!options && options.model){
            throw new Error('model isnot working');
        }
        this.model.on('add', this.onAddTodoItem , this)
    },
    onAddTodoItem : function(todoItem){
        console.log('Added');
        let view = new TodoItemView({model : todoItem});
        this.$el.append(view.render().$el);
    } ,
    events:{
        'click #add' : 'onClickAdd',
        'keypress #newTodoItem' : 'onKeypress'
    },

    onKeyPress: function(e){
        if(!e.keyCode == 13){
           this.onClickAdd();
        }
    },

    onClickAdd : function(){
        console.log('Clicked');
        let $textBox = this.$('#newTodoItem');

        if($textBox.val()){
            let todoItem = new TodoItem({description : $textBox.val()});
            this.model.add(todoItem);
    
            $textBox.val('');
        }
        else{
            throw new Error('Enter the Data');
        }
       
    },

   

    render:function(){
        let self = this;

        this.$el.append("<input type='text' autofocus id='newTodoItem'></input>")
        this.$el.append("<button id='add'>Add</button>");

        this.model.each(function(todoItem){
            let view = new TodoItemView({model:todoItem});
            self.$el.append(view.render().$el);
        });
        return this;
    }
})