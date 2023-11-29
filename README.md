# Checking React Batching

An app that checks how batching works in React 18. The app Uses two states variables: a **counter** that is incremented, and a **flag** that is toggled between `0` and `1`. A button when it is clicked, the states are updated, and the `GIF` below shows how many times a re-render takes place. 

Then, the states are updated inside a **timeout**, and the `GIF` below shows how many re-renders take place.