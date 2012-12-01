Ext.define('Hertogin.view.booking.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.bookinglist',
	store: 'Booking',
	allowDeselect:true,
    border:false,
	dockedItems:
	[{
		xtype: 'toolbar',
		items: [
			{
				itemId: 'Nieuw',
				text: 'Nieuw',
				id: 'bookingAddBtn',
				icon: 'images/icons/add.png',
				scope: this,
				handler: function(){
					Ext.getCmp("bookingform").getForm().reset();

					var grid = Ext.getCmp("bookinglist");
					grid.getSelectionModel().deselectAll();
                    
                    Ext.getCmp('bookingcards').getLayout().setActiveItem('form');
				}
			}]
	}],
    initComponent: function() {
        
        this.features = {
            ftype: 'filters',
            // encode and local configuration options defined previously for easier reuse
            encode: false, // json encode the filter query
            local: true,
        };
        
		this.columns = [{
			header: 'Datum',
			dataIndex: 'date',
            xtype: 'datecolumn',
            filterable: true,
            format: 'd M Y',
			flex: 1
		},{
            header: 'Van',
            dataIndex: 'from',
            flex: 1
        },{
            header: 'Tot',
            dataIndex: 'to',
            flex: 1
        },{
            header: 'Ruimte',
            dataIndex: 'room',
            filterable: true,
            flex: 1
        },{
            header: 'Workshop',
            dataIndex: 'workshop',
            filterable: true,
            flex: 1
        },{
            header: 'Leider',
            dataIndex: 'leader',
            filterable: true,
            flex: 1
        },{
            header: 'Status',
            dataIndex: 'booking_status',
            filterable: true,
            flex: 1
        }];

        this.callParent(arguments);
    }
});

Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask('Loading... Please wait', 'loading');}, Ext.getBody());
Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
Ext.Ajax.on('requestexception', Ext.getBody().unmask , Ext.getBody());
