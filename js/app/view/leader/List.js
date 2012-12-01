Ext.define('Hertogin.view.leader.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.leaderlist',
	store: 'Leader',
	allowDeselect:true,
    border:false,
	dockedItems:
	[{
		xtype: 'toolbar',
		items: [
			{
				itemId: 'Nieuw',
				text: 'Nieuw',
				id: 'leaderAddBtn',
				icon: 'images/icons/add.png',
				scope: this,
				handler: function(){
					Ext.getCmp("leaderform").getForm().reset();

					Ext.getCmp("leaderlist").getSelectionModel().deselectAll();
				}
			}]
	}],
    initComponent: function() {
		this.columns = [{
			header: 'Name',
			dataIndex: 'name',
			flex: 1
		},{
            header: 'Email',
            dataIndex: 'email',
            flex: 1
        }];

        this.callParent(arguments);
    }
});

Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask('Loading... Please wait', 'loading');}, Ext.getBody());
Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
Ext.Ajax.on('requestexception', Ext.getBody().unmask , Ext.getBody());
