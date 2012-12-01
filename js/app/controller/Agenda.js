Ext.define('Hertogin.controller.Agenda', {
    extend: 'Ext.app.Controller',

    stores: [],
    views: ['agenda.Button', 'agenda.Window'],
    models: [],
    
    init: function() {
        this.control({
            'agendabutton': {
                click: this.openAgendaWindow
            },
        });
    },
    openAgendaWindow : function() {
        if (!this.window) {
            this.window = Ext.create('widget.agendawindow');
        }
        this.window.show();
        this.window.maximize();
    }
});