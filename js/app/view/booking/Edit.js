Ext.define('Hertogin.view.booking.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bookingedit',
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
                handler: function() {
                    Ext.getCmp("bookingform").submit({
                        url: site_url + '/booking/create'
                    });
                }
            }]
        }];
        
        this.items = [{
            name: 'id',
            hidden: true
        }, {
            fieldLabel: 'Datum',
            name: 'date',
            xtype: 'datefield',
            submitFormat: 'Y-m-d',
            format: 'd M Y',
            allowBlank: false
        }, {
            fieldLabel: 'Van',
            name: 'from',
            xtype: 'timefield',
            format: 'H:i',
            submitFormat: 'H:i:s',
            minValue: '09:00',
            maxValue: '21:00',
            allowBlank: false
        }, {
            fieldLabel: 'Tot',
            name: 'to',
            xtype: 'timefield',
            format: 'H:i',
            submitFormat: 'H:i:s',
            minValue: '09:00',
            maxValue: '21:00',
            allowBlank: false
        }, {
            fieldLabel: 'Workshop',
            xtype: 'combo',
            store: 'Workshop',
            displayField: 'name',
            valueField: 'id',
            name: 'workshop_id',
            allowBlank: false
        }, {
            fieldLabel: 'Ruimte',
            xtype: 'combo',
            store: 'Room',
            displayField: 'name',
            valueField: 'id',
            name: 'room_id',
            allowBlank: false
        }, {
            fieldLabel: 'Leider',
            xtype: 'combo',
            store: 'Leader',
            displayField: 'name',
            valueField: 'id',
            name: 'leader_id',
            allowBlank: false
        }];

        this.callParent(arguments);
    }
});