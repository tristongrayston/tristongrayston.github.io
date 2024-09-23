---
title:  "Empirical Design in RL"
mathjax: true
layout: post
categories: media
---

Big fan of RL work. The theoretical basis of RL and it's promise of superhuman performance in certain domains is definitely enchanting. 

But, when you start to actually test your models, you're met with some hurt. 

I've come to find out that the minor implementation details with certain models matter a lot when training your RL system, even more so than with normal
machine learning methods. These details will often be the difference between convergence and divergence. 

This is my attempt at recording what works for me. This is heavily inspired by a paper dubbed **Empirical Design in Reinforcement Learning** which can be found [here](https://arxiv.org/pdf/2304.01315).

For starters, I'll unless otherwise stated, I'll be performing various benchmarks on a PPO model (the code for which can be found here) with 3 dense layers, 64 neurons wide each for both actor and critic models. (The actor and critic models have no overlapping layers as of now, that will probably be one of the tests).

The figures regarding reward curves will also always be a mean of 4 different runs, lapping somewhere between 500-2000 rollouts. 
