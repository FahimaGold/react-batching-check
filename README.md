# Checking React Batching

An app that checks how batching works in React **18.2**. The app Uses two states variables: a **counter** that is incremented, and a **flag** that is toggled between `0` and `1`. A button when it is clicked, the states are updated, and the `GIF` below shows how many times a re-render takes place. 

![batchOnClick](https://github.com/FahimaGold/react-batching-check/assets/13876176/7c533335-1606-43d1-b6fb-5cb7ba16b100)


Then, the states are updated inside a **timeout**, and the `GIF` below shows how many re-renders take place.

![batchInTimeout](https://github.com/FahimaGold/react-batching-check/assets/13876176/3aa2dd37-2b54-4e75-92bd-5c96a595ed75)

We notice that in the very first state updates, the re-render takes place **twice**, this is due to the fact that we are using `Strict Mode`, and in the next state updates, it will be batched and takes place only **once**.
