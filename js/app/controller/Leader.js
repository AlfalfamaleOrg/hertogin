Ext.define('Hertogin.controller.Leader', {
    extend: 'Ext.app.Controller',

    stores: ['Leader'],
    views: ['leader.Edit', 'leader.List'],
    models: ['Leader'],

    init: function() {
        this.control({
            'leaderlist': {
                select: this.selectLeader,
                deselect: this.deselectLeaderRow,
            },
        });
    },
    deselectLeaderRow : function() {
        Ext.getCmp("leaderform").getForm().reset();
    },
    selectLeader: function(model, record) {     
        Ext.getCmp("leaderform").loadRecord(record);
    }
});