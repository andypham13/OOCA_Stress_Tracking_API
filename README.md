Hello Ooca! Hope you are doing well! 

I am recently received your assignment and I am very excited to work on it. First and foremost, I wanted to express my gratitude for the opportunity to take on this assignment. Also this is really busy time for me, but I tried to finish it as soon as possible (actually I skip the test part, maybe nobody notice about it :D).

I must say that I find the project quite interesting. I'm particularly enjoying working on finding a solution for resizing images. It's a unique challenge, but one that I'm confident I can tackle.

Regarding the "stress levels" of the project, I assume that we are using them with limited usage like monitoring the stress levels of the user and not for any other purpose. when designing the data models, the usage of stress level will be taken into consideration of either using a separate document for storing the submitted stress levels or embedding the stress levels in the user document. In this case I will use the embedded approach. because it will be more efficient. In other scenarios, if we want to query the submitted stress levels separately like getting the average stress level of all users or do some analysis on the stress levels, then I will use the separate document approach.

In closing, I just wanted to say thank you again for this opportunity.

How to run the project:
 - make sure you have docker installed on your machine
 - run cmd: docker-compose up -d --build

Testing the API:
    - open postman
    - import the collection "Ooca.postman_collection.json" the project root folder
    - run the collection