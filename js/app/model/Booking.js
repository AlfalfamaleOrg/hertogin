Ext.define('Hertogin.model.Booking', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'workshop_id',   type: 'int'},
        {name: 'workshop',   type: 'string'},
        {name: 'leader',   type: 'string'},
        {name: 'leader_id',   type: 'int'},
        {name: 'room',   type: 'string'},
        {name: 'room_id',   type: 'int'},
        {name: 'booking_status',   type: 'string'},
        {name: 'booking_status_id',   type: 'int'},
        {name: 'date', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'humandate', type: 'string'},
        {name: 'from',   type: 'time'},
        {name: 'to',   type: 'time'}
    ]
});