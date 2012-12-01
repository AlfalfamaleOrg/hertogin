var preWork;

Ext.onReady(function(){
    Ext.define('leader', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'id',  type: 'int'},
            {name: 'name',   type: 'string'}
        ]
    });
    
    preWork = function() {
        this.name = 'leader';
        
        this.buttons = [];
        
        this.setRecord = function() {};
        
        this.resetForm = function() {};
        
        this.formItems = [{
            fieldLabel: 'Id',
            name: 'id',
            allowBlank: true,
            disabled: true,
            hidden: true
        },{
            fieldLabel: 'Naam',
            name: 'name',
            allowBlank: false
        }]
    }
});