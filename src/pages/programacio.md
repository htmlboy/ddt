---
title: 'Programació'
permalink: '/programacio/index.html'
layout: 'layouts/contact.njk'
---

Aquesta és la programació de rol online i altres esdeveniments de Daus del Triangle per al setembre de 2020. Totes les activitats són gratuïtes però requereixen inscripció prèvia.

<div id="eventbrite-widget-container">
</div>

<script src="https://www.eventbrite.es/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        //console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '119003291047',
        iframeContainerId: 'eventbrite-widget-container',

        // Optional
        iframeContainerHeight: 650,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>

Si no pots veure la programació, et pots inscriure directament a la <a href="https://www.eventbrite.es/e/entradas-daus-del-triangle-setembre-119003291047" target="_blank">pàgina d'Eventbrite</a>
