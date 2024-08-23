---
title: Holiday Inn Express Interactive Map
date: '2020-19-18'
---

<script>
    import { page } from '$app/stores';
    const slug = $page.url.pathname;
    import Figure from '$lib/components/Figure.svelte'
</script>

<Figure imgUrl={`${slug}project-display.png`} altname="Map of Holiday Inn locations" caption="An interactive map created for Holiday Inn Express." figClass="title"/>

# Holiday Inn Express Interactive Map

## And interactive map utilizing Google Maps API and the business' database.

The agency [Bridge86](http://www.bridge86.com) in Singapore hired me to design an interactive map for the site they were developing for Holiday Inn Express. The map utilized an XML document from the Holiday Inn Express business database to mark locations and a scripts to cluster locations at different zoom distances. Graphic overlays were used with Google maps to showcase different regions.

<Figure imgUrl={`${slug}sample-map.png`} altname="Showcase of Holiday Inn Express map features" caption="Some elements of the interactive map design." figClass="normal"/>

<Figure imgUrl={`${slug}showcase.jpg`} altname="Map of Holiday Inn locations" caption="A sample of the map as it appeared on the Holiday Inn Express site." figClass="normal"/>
