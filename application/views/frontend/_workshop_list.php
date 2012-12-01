<table width="815" height="400" border="0">
    <tr>
        <td colspan="3" align="center" valign="top">
            <p>
                <strong>CURSUsSen:</strong><br />
            </p>
        </td>
    </tr>
    <tr>
        <td align="left" valign="top" width="59">
        </td>
        <td align="left" valign="top">        
            <?php
                $odd = true;
                foreach ($classes as $workshop) {
                    if ($odd) {
                        echo '<p class="grijs"><a target="_self" href="' . site_url('frontend/workshop/' . $workshop->getId()) . '">&middot; ' . $workshop->getName() . '</a></p>';
                    }
                    $odd = !$odd;
                }    
            ?>
        </td>
        <td align="left" valign="top">
            <?php
                $odd = false;
                foreach ($classes as $workshop) {
                    if ($odd) {
                        echo '<p class="grijs"><a target="_self" href="' . site_url('frontend/workshop/' . $workshop->getId()) . '">&middot; ' . $workshop->getName() . '</a></p>';
                    }
                    $odd = !$odd;
                }    
            ?>
        </td>
    </tr>
    <tr>
        <td colspan="3" align="center" valign="top">
            <p>
                <strong><br />
                    Workshops:</strong><br />
            </p>
        </td>
    </tr>
    <tr>
        <td align="left" valign="top" width="59">
        </td>
        <td align="left" valign="top">        
            <?php
                $odd = true;
                foreach ($workshops as $workshop) {
                    if ($odd) {
                        echo '<p class="grijs"><a target="_self" href="' . site_url('frontend/workshop/' . $workshop->getId()) . '">&middot; ' . $workshop->getName() . '</a></p>';
                    }
                    $odd = !$odd;
                }    
            ?>
        </td>
        <td align="left" valign="top">
            <?php
                $odd = false;
                foreach ($workshops as $workshop) {
                    if ($odd) {
                        echo '<p class="grijs"><a target="_self" href="' . site_url('frontend/workshop/' . $workshop->getId()) . '">&middot; ' . $workshop->getName() . '</a></p>';
                    }
                    $odd = !$odd;
                }    
            ?>
        </td>
    </tr>
    <tr>
        <td colspan="3" align="center" valign="top">&nbsp;</td>
    </tr>
    <tr>
        <td align="left" valign="top">&nbsp;</td>
        <td align="left" valign="top">&nbsp;</td>
        <td align="left" valign="top">&nbsp;</td>
    </tr>
</table>