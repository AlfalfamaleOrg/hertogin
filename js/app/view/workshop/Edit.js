Ext.define('Hertogin.view.workshop.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.workshopedit',
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
                handler: function(){
                    Ext.getCmp("workshopform").submit({
                        url: site_url + 'workshop/save',
                        success: function() {
                            Ext.getCmp("workshoplist").getStore().load();
                            Ext.getCmp("bookinglist").getStore().load();
                        }
                    });
                }
            }]
        }];
        
        this.items = [{
            name: 'id',
            xtype: 'hiddenfield',
            hidden: true
        }, Ext.create('Ext.form.ComboBox',{
            fieldLabel: 'Type',
            name: 'type',
            allowBlank: false,
            xtype: 'comboBox',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            store: Ext.create('Ext.data.Store', {
                fields: ['type', 'name'],
                data : [
                    {"id":"workshop", "name":"workshop"},
                    {"id":"cursus", "name":"cursus"}
                ]
            }),
            disabled: true,
            hidden: true
        }), {
            fieldLabel: 'Naam',
            name: 'name',
            xtype: 'textfield',
            allowBlank: false
        }, {
            xtype: 'multiselect',
            id: 'leadersitemselector',
            name: 'leaders',
            anchor: '100%',
            fieldLabel: 'Leiders',
            store: 'Leader',
            displayField: 'name',
            imagePath: 'http://cdn.sencha.io/ext-4.1.0-gpl/examples/ux/css/images/',
            valueField: 'id',
            msgTarget: 'side',
            fromTitle: 'Beschikbaar',
            toTitle: 'Gekoppeld'
        }, {
            fieldLabel: 'Beschrijving',
            name: 'description_text',
            allowBlank: true,
            xtype: 'htmleditor',
            enableAlignments: false,
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            height: 100,
            hidden: true,
            disabled: true,
        }, {
            fieldLabel: 'Workshop',
            name: 'workshop_text',
            allowBlank: true,
            xtype: 'htmleditor',
            enableAlignments: false,
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            height: 100,
            hidden: true,
            disabled: true,
        }, {
            fieldLabel: 'Duur',
            name: 'duration_text',
            allowBlank: true,
            xtype: 'htmleditor',
            enableAlignments: false,
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            height: 100,
            hidden: true,
            disabled: true,
        }, {
            fieldLabel: 'Aantal personen',
            name: 'attendees_text',
            allowBlank: true,
            xtype: 'htmleditor',
            enableAlignments: false,
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            height: 100,
            hidden: true,
            disabled: true,
        }, {
            fieldLabel: 'Prijzen',
            name: 'price_text',
            allowBlank: true,
            xtype: 'htmleditor',
            enableAlignments: false,
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            height: 100,
            hidden: true,
            disabled: true,
        }, {
            fieldLabel: 'Contact / Aanmelden',
            name: 'contact_text',
            allowBlank: true,
            xtype: 'htmleditor',
            enableAlignments: false,
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            height: 100,
            hidden: true,
            disabled: true,
        }];

        this.buttons = [{
            text: 'Afbeeldingen',
            id: 'image_button',
            disabled: true,
            handler: function() {
                image_window.workshop_id = this.up('form').activeRecord.data.id;
                image_window.show();
            },
            hidden: true 
        },{
            text: 'Leiders',
            id: 'leader_button',
            disabled: true,
            handler: function() {
                if (!this.leader_window) {
                    this.leader_window = Ext.create('widget.leaderwindow')
                }
                this.leader_window.workshop_id = this.up('form').activeRecord.data.id;
                this.leader_window.show();
            },
            hidden: true 
        }];

        this.callParent(arguments);
    }
});