Ext.define('Hertogin.store.Booking', {
    extend: 'Ext.data.Store',
    model: 'Hertogin.model.Booking',
	
	autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: site_url + '/booking/read',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
        }
    }
});