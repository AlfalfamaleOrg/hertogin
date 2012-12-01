Ext.define('Hertogin.view.booking.Display', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bookingdisplay',
    layout: 'anchor',
    border: false, 
    defaults: {
        anchor: '100%'
    },
    overflowY: 'auto',
    autoShow: true,
    bodyPadding: 5, 

    initComponent: function() {
        
        this.dockedItems = [{
            xtype: 'toolbar',
            items: []
        }];
        
        this.items = [{
            name: 'id',
            hidden: true
        }, {
            fieldLabel: 'Datum',
            name: 'humandate',
            xtype: 'displayfield'
        }, {
            fieldLabel: 'Van',
            name: 'from',
            xtype: 'displayfield',
        }, {
            fieldLabel: 'Tot',
            name: 'to',
            xtype: 'displayfield',
        }, {
            fieldLabel: 'Workshop',
            xtype: 'displayfield',
            name: 'workshop',
        }, {
            fieldLabel: 'Ruimte',
            xtype: 'displayfield',
            name: 'room',
        }, {
            fieldLabel: 'Leider',
            xtype: 'displayfield',
            name: 'leader',
        }, {
            fieldLabel: 'Status',
            xtype: 'displayfield',
            name: 'booking_status'
        }];

        this.callParent(arguments);
    }
});