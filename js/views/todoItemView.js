let TodoItemView =  Backbone.View.extend({
    tagName : 'li',
    initialize : function(options){
        if(!options && options.model){
            throw new Error('model is not specified')
        }

        this.model.on('')
    },

    events:{
        'click #toggle' : 'onClickToggle'
    },

    onClickToggle: function(){
        console.log('Toggle clicked')
        // console.log(this.model.get('description'))

        // On way to toffle the value 
        // this.model.set('isCompleted',!this.model.get('isCompleted'));

        // another way to toggle the value by adding the method on the Model and calling it over here
        this.model.toggle();
        console.log(this.model.toJSON());
    },

    render: function(){
        // this.$el.html(this.model.get('description'));
        this.$el.toggleClass('completed' , this.model.get('isCompleted'));
        this.$el.html("<input id='toggle' type='checkbox'></input>"  + this.model.escape('description'));

        return this;
    }
})