Ext.define('Hertogin.store.Leader', {
    extend: 'Ext.data.Store',
    model: 'Hertogin.model.Leader',
	
	autoLoad: true,
	
    proxy: {
        type: 'ajax',
        url: site_url + '/leader/read',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
        }
    }
});