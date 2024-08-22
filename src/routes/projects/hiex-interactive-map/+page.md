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

# Interactive Map Utilizing Google Maps API and layers.

Pull the map in?
