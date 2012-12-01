Ext.define('Hertogin.view.agenda.Button', {
    extend: 'Ext.Button',
    alias: 'widget.agendabutton',

    initComponent: function() {
        this.text = 'Agenda';
        this.callParent(arguments);
    }
});