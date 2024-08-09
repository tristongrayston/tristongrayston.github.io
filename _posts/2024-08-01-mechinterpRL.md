---
title:  "Mechanistic Interpretability with Reinforcement Learning Agents"
mathjax: true
layout: post
categories: media
---

# Mechanistic Interpretability

Being in an AI club inevitably results in hearing about fields of AI and machine learning outside your current realm of consideration. Peole are drawn to
the power of AI for many different reasons, and are simultanously skeptical of it for many reasons. One of which is the lack of interpretability available
for large (and even small) machine learning agents. It makes sense, then, that a field of study that would allow us to make machine learning agents 
verifiable would be increasing in popularity in correlation with the explosion of LLM's and other models. 

Our directed studies project, oversaw by Dr. George Tzanetakis, investigated a PPO agent trained on procedurally generated mazes specifically designed to
test for goal misgeneralization using various mechanistic interpretability methods. The PPO model was trained on a large impala model (2.2 million parameters) consisting of 3 impala blocks, which is quite overkill for a maze environment. Our goal was to identify various kernel structures and purpose, diving into the layers of the model and attempting to gather insight on the model's process. 

A priliminary search into the model was done via feature visualization, which allowed us to look at the model's outputs from each corresponding layer. Visual inspection might allow us to identify the model's interesting kernels. We then did some map investigation, which was aided by previous work done by the original authors by providing a customizable map interface by using jupyter notebook widgets. We identified some behavioural patterns with saliency
mapping, and then were able to identify how the model percieved the corresponding goal and agents in the grid via some grand tour visualization.

The corresponding paper we wrote at the end of the project can be found [here](https://github.com/tristongrayston/MechInterpOnDRL/blob/master/Mech__Interp__of_RL_Agents.pdf)
