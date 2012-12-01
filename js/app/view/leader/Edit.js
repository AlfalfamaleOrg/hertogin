Ext.define('Hertogin.view.leader.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.leaderedit',
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
                    Ext.getCmp("leaderform").submit({
                        url: site_url + 'leader/save',
                        success: function() {
                            Ext.getCmp("leaderlist").getStore().load();
                            Ext.getCmp("bookinglist").getStore().load();
                        }
                    });
                }
            }, {
                text: 'Stuur login gegevens',
                formBind: true,
                handler: function(){
                    Ext.getCmp("leaderform").submit({
                        url: site_url + 'leader/createLogin',
                        success: function() {
                        }
                    });
                }
            }]
        }];
        
        this.items = [{
            name: 'id',
            hidden: true,
            xtype: 'hiddenfield',
        }, {
            fieldLabel: 'Naam',
            name: 'name',
            xtype: 'textfield',
            allowBlank: false
        }, {
            fieldLabel: 'Email',
            name: 'email',
            xtype: 'textfield',
            allowBlank: false
        }];

        this.callParent(arguments);
    }
});