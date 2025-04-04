---
title: Z Gear
date: '2018-08-11'
---

<script>
    import { page } from '$app/stores';
    const slug = $page.url.pathname;
    import Title from '$lib/components/Title.svelte'
    import Figure from '$lib/components/Figure.svelte'
</script>

<Title title="Z Gear" color="blue" align="center" />

## A retail site full of features

<Figure imgUrl={`${slug}showcase.jpg`} altname="Images of Z Gear retail web site features" caption="Z Gear web site features" figClass="title"/>

A retail site for a purveyor of accessories for the GoPro camera. Beginning with a logo design, I walked Z Gear through a creative process that yielded merchandise designs and a highly interactive retail site. This site utilized many interactive features including a content Management system (CMS), responsive layouts, mapped locations of stores, and 3D rotatable images of their products.
