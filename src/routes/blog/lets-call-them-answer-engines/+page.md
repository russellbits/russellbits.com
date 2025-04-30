---
title: Let's Call Them Answer Engines
slug: lets-call-them-answer-engines
publicationDate: '2025-03-12'
blogPreviewImage: 'answer-engine-better-compressed.jpg'
summary: 'What we are calling artificial intelligence is better understood as sophisticated answer engines—tools that can generate plausible-sounding responses but lack true understanding or a conceptual model of the world.'
---

<script>
    import { page } from '$app/stores';
    const slug = $page.url.pathname;
    import Figure from '$lib/components/Figure.svelte';
</script>

<Figure imgUrl={`${slug}answer-engine-better-compressed.jpg`} altname="Article cover" caption="Calling them artifical intelligence is premature. Let's call them answer engines." figClass="title"/>

## We've called it artificial intelligence too soon again.

While studying AI back in graduate school, and even my undergrad days, there was a clear trend in the field of artificial intelligence to move the goal posts. AI is always around the corner, and then it’s not. What it is [remains ill-defined](https://plato.stanford.edu/entries/artificial-intelligence/). We have a new wave of excitement about AI upon us and the reality is starting to dawn on us that perhaps AI is once again too broad a term for what are really savvy answer engines.[^1]

<!--more-->

[^1]: A good indication of the fact that what we have is not AI is the fact that the AI companies need a _new_ term to define what we all mean by AI which is _AGI_ (Artificial _General_ Intelligence). I always thought that's what AI was in the first place: general. That’s called protecting your investments.

John Gruber, over at [Daringfireball](https://daringfireball.net) has some great thoughts on the state of Apple Intelligence, which if you are an iPhone owner, [you already know](https://www.reddit.com/r/iphone/comments/1jehkpm/apple_intelligence_this_apple_intelligence_that/) it's pretty unintelligent. This reminds me once again that I dislike this jump to the term “artificial intelligence” when we are still dealing with machine learning algorithms that speak well, but don’t actually have a solid underlying framework for the real world. [Paul Kafasis](https://pbones.com) (creator of my favorite [audio software, Piezo](https://rogueamoeba.com)) performs an excellent demonstratioon of this by asking these "AI" pretty simple questions about the Superbowl, like, uh, who won? Patiently asking Siri about Superbowls 1 through 58, [Siri did really bad](https://onefoottsunami.com/2025/01/23/not-so-super-apple/)—34% bad.

All of this got me thinking about a training session I had with an AI. I’m under an NDA and can’t go into specifics, but suffice it to say, what this AI got wrong is similar to Siri’s mistakes in just not knowing what a Superbowl really is.[^2] These large language models (LLMs) don’t have a conceptual framework of the real world beyond a probability matrix and the corpus they’ve been given. The AI I was giving feedback to was just off on simple facts that, as a human, I could spot pretty quick. ChatGPT has an interesting (if coached) notion about the probability of seeing a purple dog. It knows that the probability is low, but when it “invents” instances for seeing one, it says, “Someone used pet-safe dye on their dog.” Why pet-safe? Is it not aware of cruel creeps and idiots in the world? I pursued the question for fun and ChatGPT got a little nosy!

[^2]: I personally could never decide between the two. How would you eat soup without a bowl? (Let's see an AI make sense of that joke.)

> Fair point—unfortunately, some people do irresponsible things to animals. While pet-safe dye is designed to be non-toxic and gentle, there are definitely cases where people use harmful substances or subject animals to unsafe conditions for the sake of novelty or social media attention.

> If you ever see a dyed animal and suspect cruelty, it's always good to check if it's safe and ethical. Some groomers and pet owners use safe dyes for fun or artistic expression, but if an animal seems distressed or harmed, that's a whole different issue.

> Did something specific prompt this question?

Woah. Investigate much?

The long and the short of this post though is just this: if we persist in calling this software artificially intelligent, people will give them more credit than they deserve. We really should be calling them what John Gruber [and others](https://www.fastcompany.com/91152217/what-is-an-answer-engine-search-engine-chatgpt-google-wolframalpha) are referring to them as: **answer engines**. Everyone knows about **search engines** and the precautions necessary when using them. The moniker **answer engine** correctly implies their capabilities. They know a lot. They can spell out what they know in nice human-readable chunks. They don’t have a good over-arching context or framework for the world, and should be double-checked now and again.

> Me: "No. I was just curious about how much you knew about purple dogs."

> Got it! Well, I’d say I know a fair bit about purple dogs—at least as much as anyone who hasn’t actually seen one in the wild. If you’re ever looking for one, your best bet is probably an art installation, a pet grooming contest, or a really dedicated Photoshop user.

> But if you do ever see a naturally occurring purple dog, take a picture—it could be a scientific breakthrough!

Could it? I mean, ChatGPT's not wrong, right?
