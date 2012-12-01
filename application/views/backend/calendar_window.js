/*!
 * Extensible 1.5.1
 * Copyright(c) 2010-2011 Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */


var calendar_window;

Ext.onReady(function(){
    
    calendar_window = Ext.create('Ext.Window', {
        layout: 'fit',
        title: 'Calendar Window',
        width: 600,
        height: 600,
        modal: true,
        closeAction: 'hide',
        items: {
        }
    });
});