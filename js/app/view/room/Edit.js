Ext.define('Hertogin.view.room.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.roomedit',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    overflowY: 'auto',
    border: false, 
    autoShow: true,
    bodyPadding: 5, 

    initComponent: function() {
        
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: 'Opslaan',
                icon: 'images/icons/disk.png',
                formBind: true,
                handler: function(){
                    Ext.getCmp("roomform").submit({
                        url: site_url + 'room/save',
                        success: function() {
                            Ext.getCmp("roomlist").getStore().load();
                            Ext.getCmp("bookinglist").getStore().load();
                        }
                    });
                }
            }]
        }];
        
        this.items = [{
            name: 'id',
            hidden: true,
            xtype: 'hiddenfield',
        }, {
            fieldLabel: 'Naam',
            name: 'name',
            xtype: 'textfield',
            allowBlank: false
        }];

        this.callParent(arguments);
    }
});