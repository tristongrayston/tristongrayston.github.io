---
title:  "Tetris with DQN"
mathjax: true
layout: post
categories: media
---

# TetrisRL

When I embarked on the "TetrisRL" project, I aimed to combine my fascination with Tetris and the cutting-edge techniques of Deep Reinforcement Learning (DRL). This project utilizes Deep Q-Learning (DQN) to train an AI to play Tetris. The repository includes essential scripts, such as `DQ_Agent.py` for defining the DQN agent and `tetris_gym_env.py` for creating the gym environment where the agent learns and plays Tetris.

The journey began with setting up the environment and understanding the complex interactions within the code. Writing this in my second term of my first year, it was a leap that proved to be incredibly challenging as many of the prerequisites required for this project (machine learning methods, a sufficient understanding of linear algebra and math in multi-dimensionality, and interactions with PyTorch in general) were not quite set in place. In fact, the mere reading of the original DQN paper proved to be a hard challenge in and of itself.

That all being said, the mere concept of reinforcement learning became progressively more and more interesting to me as the project went on. The concepts of learning from experiences, learning about setting up environments in a Markovian way, and more or less everything about this project became more interesting than any of the courses I was in.

The code for the environment itself was more or less inspired by Tech With Tim's implementation of Tetris, with my changes to his code being more or less in the form of transforming his code to one that would work under OpenAI's Gym Environments paradigms.

After that, much of the struggles in this project came from messing with reward functions and hyperparameters, as well as updates to the environment to let the agent have an easier time generalizing. The agent was designed to interact with the environment, observe the state, select actions based on the Q-values, and update its policy using the Bellman equation:

$$\[ Q(s, a) = r + \gamma \max_{a'} Q(s', a') \]$$

where $\( Q(s, a) \)$ is the Q-value for state $\( s \)$ and action $a$, $r$ is the reward, $\gamma$ is the discount factor, and $s'$ is the next state.

One of the core components of the project is the `DQ_Agent.py` script, which defines the DQN agent. The agent uses a neural network to approximate the Q-values. The architecture includes layers that process the state inputs (the Tetris game board) and output Q-values for each possible action (moving or rotating the Tetris pieces). The network is trained using experience replay, where experiences (state, action, reward, next state) are stored in a replay buffer and sampled randomly during training to break the correlation between consecutive experiences.

Another crucial script is `tetris_gym_env.py`, which sets up the Tetris environment using the OpenAI Gym framework. This environment provides the necessary interface for the DQN agent to interact with the game, including methods for resetting the game, taking actions, and rendering the game state.

The `model_params_8.pt` file contains pre-trained model parameters that can be loaded to initialize the DQN agent and evaluate its performance without retraining from scratch. This saves time and computational resources, especially during experimentation with different hyperparameters and reward functions.

In summary, the "TetrisRL" project showcases the application of DQN to a classic game, highlighting the challenges and rewards of implementing DRL. The experience has deepened my understanding of reinforcement learning and its potential to solve complex problems.
