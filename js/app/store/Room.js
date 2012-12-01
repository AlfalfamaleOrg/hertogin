Ext.define('Hertogin.store.Room', {
    extend: 'Ext.data.Store',
    model: 'Hertogin.model.Room',
	
	autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: site_url + '/room/read',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
        }
    }
});