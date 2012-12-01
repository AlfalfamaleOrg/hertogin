Ext.define('Hertogin.view.agenda.Window', {
    extend: 'Ext.Window',
    alias: 'widget.agendawindow',

    initComponent: function() {
        this.layout = 'fit';
        this.title = 'Agenda';
        this.modal = true;
        this.closeAction = 'hide';
        this.items = {
            // xtype is supported:
            xtype: 'extensible.calendarpanel',
            eventStore: Ext.create('Extensible.calendar.data.MemoryEventStore', {
                // defined in ../data/Events.js
                data: Ext.create('Extensible.example.calendar.data.Events')
            })
        }
        
        this.callParent(arguments);
    }
});