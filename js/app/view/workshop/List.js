Ext.define('Hertogin.view.workshop.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.workshoplist',
	store: 'Workshop',
	allowDeselect:true,
    border: false,
	dockedItems:
	[{
		xtype: 'toolbar',
		items: [{
			itemId: 'nieuw',
			text: 'Nieuw',
			id: 'workshopAddBtn',
			icon: 'images/icons/add.png',
			scope: this,
			handler: function(){
                
			}
		}]
	}],
    initComponent: function() {
		this.columns = [
            {
				header: 'Naam',
				dataIndex: 'name',
				flex: 1
			}
        ];

        this.callParent(arguments);
    }
});

Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask('Loading... Please wait', 'loading');}, Ext.getBody());
Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
Ext.Ajax.on('requestexception', Ext.getBody().unmask , Ext.getBody());
