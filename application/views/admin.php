<html>
    <head>
        <base href="<?php echo base_url(); ?>" target="_blank" />
        <link rel="stylesheet" type="text/css" href="http://cdn.sencha.io/ext-4.1.0-gpl/examples/ux/css/ItemSelector.css" />
        <script type="text/javascript">
            var site_url = '<?php echo site_url(); ?>/';
            var base_url = '<?php echo base_url(); ?>/';
            var isAdmin = <?php echo (isAdmin() ? 'true' : 'false'); ?>
        </script>
        <script type="text/javascript" charset="utf-8" src="js/extensible/Extensible-config.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
    </head>
</html>