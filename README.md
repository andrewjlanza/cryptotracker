![](https://imgur.com/JkRGo66)
Above is a screenshot of my application.


I originally had been statically generating data from a json library to show the prices of the cryptocurrencies. 
In order to complete the assignment, I had to dynamically generate the data by creating components like Data.js and Coin.js
Data.js is where the fetching of the API is done, and it is repeated using the lifecycle method componentDidMount() so that the data of the cryptocurrencies updates every 10000 milliseconds (10 seconds). This however may not be representative of the actual amount of time it takes to update, as the API updates are not congruent with my app's updates. Rest assured however that when the API is updated, my app will update the loaded content within 10 seconds!
