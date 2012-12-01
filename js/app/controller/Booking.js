Ext.define('Hertogin.controller.Booking', {
    extend: 'Ext.app.Controller',

	stores: ['Booking'],
	views: ['booking.List', 'booking.Edit', 'booking.Display'],
	models: ['Booking'],

	
    init: function() {
		this.control({
			'bookinglist': {
				select: this.selectWorkshop,
				deselect: this.deselectWorkshopRow,
            },
        });
    },
	deselectWorkshopRow : function(model, record, index, obj) {
        Ext.getCmp('bookingcards').getLayout().setActiveItem('form');
		Ext.getCmp("bookingshow").getForm().reset();
	},
	selectWorkshop: function(model, record) {     
        Ext.getCmp('bookingcards').getLayout().setActiveItem('show');
        Ext.getCmp("bookingshow").loadRecord(record);
	}
});