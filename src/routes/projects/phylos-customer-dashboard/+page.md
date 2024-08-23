---
title: Phylos Customer Dashboard
date: '2018-08-11'
---

<script>
    import { page } from '$app/stores';
    const slug = $page.url.pathname;
    import Figure from '$lib/components/Figure.svelte'
</script>

<Figure imgUrl={`${slug}project-display.png`} altname="Images of a dashboard web site" caption="The customer dashboard for Phylos." figClass="title"/>

# Phylos Bioscience

## Customer Dashboard and Genetic Fingerprint

Phylos Bioscience hired me to improve the interface for their customer facing report site. Customers who sent in samples from their plants could then see categorizations of the DNA of their plants, what plants weere related or in similar families, and the uniqueness of their particular strain. In re-designing this interface, the Lead data scientist and I also discovered that we could create a graphic (utilizing D3's [Circos](https://circos.ca)) that would uniquely identify a grower's strain. Growers put these seals on their web sites and product packaging. In addition, growers could also print out a PDF version of their reporting to use as a sales tool for retail locations.

<Figure imgUrl={`${slug}showcase.jpg`} altname="Images of a dashboard web site" caption="The customer dashboard for Phylos." figClass="normal"/>

## An interactive version of the DNA Fingerprint running at Observable

<div class="experiment">
<iframe title="Interactive Observable Notebook" width="100%" height="600" frameborder="0" style="background-color: white;"
  src="https://observablehq.com/embed/@russellbits/phylos-cannabis-genetic-fingerprint?cell=*"></iframe>
</div>

<style>
.experiment {
    margin: 2em 0 0 0;
}
</style>
