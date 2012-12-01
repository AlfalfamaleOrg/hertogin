Ext.define('Hertogin.controller.Room', {
    extend: 'Ext.app.Controller',

	stores: ['Room'],
    views: ['room.Edit', 'room.List'],
	models: ['Room'],
    
    init: function() {
        this.control({
            'roomlist': {
                select: this.selectRoom,
                deselect: this.deselectRoomRow,
            },
        });
    },
    deselectRoomRow : function() {
        Ext.getCmp("roomform").getForm().reset();
    },
    selectRoom: function(model, record) {     
        Ext.getCmp("roomform").loadRecord(record);
    }
});