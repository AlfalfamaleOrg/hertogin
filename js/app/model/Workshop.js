Ext.define('Hertogin.model.Workshop', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name',   type: 'string'},
        {name: 'description_text',   type: 'string'},
        {name: 'intro_text',   type: 'string'},
        {name: 'workshop_text',   type: 'string'},
        {name: 'price_text',   type: 'string'},
        {name: 'duration_text',   type: 'string'},
        {name: 'attendees_text',   type: 'string'},
        {name: 'contact_text',   type: 'string'},
        {name: 'leaders',   type: 'auto'},
        {name: 'type',   type: 'string'}
    ]
});