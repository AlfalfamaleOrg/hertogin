var image_window;

Ext.onReady(function(){

    var image_form = Ext.create('Ext.form.Panel', {
        title: 'Upload een foto',
        width: '100%',
        bodyPadding: 10,
        frame: true,
        items: [{
            xtype: 'filefield',
            name: 'image',
            fieldLabel: 'Foto',
            labelWidth: 50,
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            buttonText: 'Selecteer Foto...'
        }],

        buttons: [{
            text: 'Upload',
            handler: function() {
                var form = this.up('form').getForm();
                if(form.isValid()){
                    form.submit({
                        params: {
                            workshop_id: image_window.workshop_id    
                        },
                        url: site_url + '/admin/post/image',
                        waitMsg: 'Bezig met uploaden...',
                        success: function(fp, o) {
                            image_store.load({
                                params: {
                                    workshop_id: image_window.workshop_id
                                }
                            });
                            Ext.Msg.alert('Succes', 'Uw foto "' + o.result.data.name + '" is opgeslagen.');
                        }
                    });
                }
            }
        }]
    });
    
    Ext.define('image', {
        extend: 'Ext.data.Model',
        fields: ['id', 'name', 'location']
    });

    var image_store = Ext.create('Ext.data.Store', {
        model: 'image',
        proxy: {
            type: 'ajax',
            url: site_url + '/admin/read/image/',
            reader: {
                type: 'json',
                root: 'data'
            }
        }
    });

    image_window = Ext.create('Ext.window.Window', {
        workshop_id: 0,
        height: 500,
        width: 500,
        layout: 'border',
        closeAction: 'hide',
        listeners: {
            show: function() {
                image_store.load({
                    params: {
                        workshop_id: image_window.workshop_id
                    }
                });
            }
        },
        items: [{
            region: 'north',
            items: [image_form]
        },Ext.create('Ext.grid.Panel', {
            id: 'images',
            region: 'center',
            layout: 'fit',
            store: image_store,
            overflowY: 'auto',
            columns: [
                { header: 'Id', dataIndex: 'id', hidden: true },
                { 
                    header: 'Afbeelding', 
                    dataIndex: 'location', 
                    width: 100,
                    renderer: function(value) {
                        return '<img width="100px" src="' + base_url + value + '">';
                    }
                },
                { header: 'Naam',  dataIndex: 'name', width: 200 },
                {
                    xtype: 'actioncolumn',
                    width: 25,
                    items: [{
                        icon: 'images/icons/delete.png',
                        tooltip: 'Verwijder',
                        handler: function(grid, rowIndex, colIndex, row, thnigy, record) {
                            Ext.Ajax.request({
                                url: site_url + '/admin/action/image/delete',
                                params: {
                                    id: record.data.id
                                },
                                success: function() {
                                    image_store.load({
                                        params: {
                                            workshop_id: image_window.workshop_id
                                        }
                                    });
                                }
                            });
                        }
                    }]
                }
            ]
        })]
    });
});