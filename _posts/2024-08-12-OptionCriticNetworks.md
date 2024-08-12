---
title:  "Option Critic Networks explained In English"
mathjax: true
layout: post
categories: media
---

# Introduction

Trying to understand this architecture in all of it's neuance has been a mindbend. The capabilities of this model (i.e. the conceptual idea
of higherarchically processing actions) is a very interesting concept, but marrying that concept into a coding language has been a difficult process.
The point of this post is to document my attempts at understanding what is happening, and hopefully being able to provide code for the model as well,
later down the line. One could consider this my "first attempt" at explaining the model, with the end result hopefully being to present it to the 
UVicAI club at a level that might be understood. So, with that being said, let's try it out.

# High Level Overview (no math, high level conceptual understanding)

A high level, broad overview of this model is exactly as I've hinted at in the introduction. We create a model that learns, iteratively through
it's interactions with an environment, a way to interpret not only singular actions (move left, move up, move down) but also the higher level procedural
consequences that might appear from a sequence of these actions (e.g. move to the door on the right hand side of the room.) This is a powerful tool, for
many reasons. One of which being that the interpretation of higher level moves allows us to, at least theoretically, conceptualize an environment
through discrete abstracted acts just as humans would in the real world. The process of going from one class to another, for example, requires you to leave
your class, potentially leave the building, walk to a new one, etc. Humans, or even animals (I would assume) don't have to consider the contractions of each 
head of the quadricep as they walk, or even deeper the beats of their hearts or breathing. We've abstracted out larger acts, learn how they work, and 
go through tasks at a higher level using that collection of smaller acts as a given tool. 

In the sense of the model, the "options" in Option Critic are exactly these abstracted out "higher level" moves, otherwise know as options and denoted
by $\omega$, of which we can choose to pick at any
given state. Now, environments typically work with "states" being "generated" after a fixed amount of time, every time. Meaning after an action, there is 
a consistent amount of processing that takes place. A uniform timestep. But what about these actions? I'm sure you can think of examples even in your 
own life of higher level acts taking a larger amount of time to put forth. Sleeping vs walking, jumping vs running, and more. In our case, how do
we decide if we shouldn't take a certain option anymore, and move on to a more optional one? At every single tick of the environment, we effectively have 
a termination process related to every single one of these options, outputting values between 0 and 1. The greater this output is, the higher chance 
of terminating this option is, which the model will then choose to pick a different option. In other words, when you're taking an option, that option
is now your default, from which you have to actively exit to choose another option. 

# Lower level overview 

Okay, let's orient ourselves. So, this model builds off of the foundations of actor-critic models, which you could have probably guessed by the name.
An actor critic model has primarily two components that compute independent (some implementations have them largely integrated with eachother) of each other: The actor, which computes some 
distribution over the action space, and the critic, which computes a value function for every state. The components do different things, one could 
consider the critic as a pseudo-world model, in the sense that it theoretically calculates value over the preceeding states, meaning some understanding
of the model as a whole. And one could understand the actor as a designated behaviour, creating a method of prioritizing certain moves over certain other
moves. An actor, in this sense, behaves in a consistent way throughout the environment which we can call it's policy, denoted as $\pi$.

In this case, what we have is a modification of the actor component of this model. Instead of wanting to choose actions, we want to choose behaviours. 
Each of those behaviours can be considered as their own independent actors, with their own independent policies, which we can denote $\pi_\omega$.
We can choose these behaviours, or which behaviour to pick at which time, as $\pi_\Omega$. An easy way to make this make sense is to consider that:
$$\forall \omega \in \Omega$$
so the policy of choosing a behaviour is a probability distribution over all behaviours. 

We also note, now that we have defined options/behaviours, we want to make the symbols and functions we've learned over our time as reinforcement learners
make sense to this. So, we can denote $Q_\Omega(s, \omega)$ as the Q-function of a specific option. Bit of a trip as to what that actually means. I think it's
equivalent of saying the value function of the behaviour of $\omega$. 

This type of notation is consistent throughout the paper.

Using this notation, the authors of this paper hit us with some pretty crazy new theorems. Such as the \textbf{Intra-Option Policy Gradient Theorem} which,
describes the gradient over $Q_\Omega(s, \omega)$. 


# Implementation level (Not here yet lol

denoted in the paper as $\Beta_\omega(s)$ or the 
termination function of some option on some state. This allows us to run one option 

