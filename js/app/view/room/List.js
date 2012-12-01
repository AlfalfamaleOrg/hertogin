Ext.define('Hertogin.view.room.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.roomlist',
	store: 'Room',
	allowDeselect:true,
    border:false,
	dockedItems:
	[{
		xtype: 'toolbar',
		items: [
			{
				itemId: 'Nieuw',
				text: 'Nieuw',
				id: 'roomAddBtn',
				icon: 'images/icons/add.png',
				scope: this,
				handler: function(){
					Ext.getCmp("roomform").getForm().reset();

					Ext.getCmp("roomlist").getSelectionModel().deselectAll();
				}
			}]
	}],
    initComponent: function() {
		this.columns = [{
			header: 'Name',
			dataIndex: 'name',
			flex: 1
		}];

        this.callParent(arguments);
    }
});

Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask('Loading... Please wait', 'loading');}, Ext.getBody());
Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
Ext.Ajax.on('requestexception', Ext.getBody().unmask , Ext.getBody());
