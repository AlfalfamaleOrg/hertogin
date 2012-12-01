Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        "Extensible": "js/extensible/src",
        "Extensible.example": "js/extensible/examples",
        "Ext.ux": "http://cdn.sencha.io/ext-4.1.0-gpl/examples/ux"
    }
});

Ext.require([
    'Ext.ux.form.ItemSelector',
    'Ext.ux.grid.FiltersFeature'
]);

var userLevel;

Ext.application({
    name: 'Hertogin',

    appFolder: 'js/app',

    controllers: ['Workshop', 'Agenda', 'Booking', 'Room', 'Leader'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            fullscreen: true,
            layout: 'border',
            renderTo: Ext.getBody(),
            items: [{
                xtype: 'tabpanel',
                region: 'center',
                border: false,
                items: [{
                    title: 'Boekingen',
                    layout: 'border',
                    border: false,
                    items: [{
                        region: 'center',
                        xtype: 'bookinglist',
                        id: 'bookinglist'
                    }, {
                       region: 'south',
                       layout: 'card',
                       border: false, 
                       id: 'bookingcards',
                       items: [{
                           xtype: 'bookingedit',
                           id: 'bookingform',
                           itemId: 'form'
                       }, {
                           xtype: 'bookingdisplay',
                           id: 'bookingshow',
                           itemId: 'show'
                       }] 
                    }]
                }, {
                    title: 'Workshops',
                    layout: 'border',
                    hidden: !isAdmin,
                    border: false,
                    items: [{
                        region: 'west',
                        width: 400,
                        id: 'workshoplist',
                        xtype: 'workshoplist'
                    }, {
                        region: 'center',
                        xtype: 'workshopedit',
                        id: 'workshopform'
                    }]
                }, {
                    title: 'Leiders',
                    layout: 'border',
                    hidden: !isAdmin,
                    border: false,
                    items: [{
                        region: 'center',
                        xtype: 'leaderlist',
                        id: 'leaderlist'
                    }, {
                       region: 'south',
                       xtype: 'leaderedit',
                       id: 'leaderform'
                    }]
                }, {
                    title: 'Ruimtes',
                    layout: 'border',
                    hidden: !isAdmin,
                    border: false,
                    items: [{
                        region: 'center',
                        xtype: 'roomlist',
                        id: 'roomlist'
                    }, {
                       region: 'south',
                       xtype: 'roomedit',
                       id: 'roomform'
                    }]
                }]
            }, {
                region: 'east',
                hidden: true,
                layout: 'border',
                width: 200,
                dockedItems: [{
                    hidden: true,
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                        xtype: 'agendabutton'
                    }, '->', {
                        text: 'Log uit'
                    }]
                }],
                items: [{
                    border: false, 
                    region: 'center',
                    title: 'Komende 2 weken'
                }]
            }]
        });
    }
});