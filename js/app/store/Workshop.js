Ext.define('Hertogin.store.Workshop', {
    extend: 'Ext.data.Store',
    model: 'Hertogin.model.Workshop',
	
	autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: site_url + '/workshop/read',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
        }
    }
});