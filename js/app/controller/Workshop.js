Ext.define('Hertogin.controller.Workshop', {
    extend: 'Ext.app.Controller',

	stores: ['Workshop'],
	views: ['workshop.List', 'workshop.Edit'],
	models: ['Workshop'],

	
    init: function() {
		this.control({
			'workshoplist': {
				select: this.selectWorkshop,
				deselect: this.deselectWorkshopRow,
            },
        });
    },
	deselectWorkshopRow : function(model, record, index, obj) {
		Ext.getCmp("workshopform").getForm().reset();
	},
	selectWorkshop: function(model, record) { 
        Ext.getCmp("workshopform").loadRecord(record);
	}
});