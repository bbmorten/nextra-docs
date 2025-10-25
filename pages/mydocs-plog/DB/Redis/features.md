# Redis Use Cases

Redis is not a replacement for your SQL database but it does offer fast in-memory storage that is more suitable for certain tasks. Add it to your stack and use it when you really feel it’s needed. The following are some scenarios in which Redis could be useful:

- **Counting**:  
  As you have seen, it is very easy to manage counters with Redis. You can use `incr()` and `incrby()` for counting stuff.

- **Storing the Latest Items**:  
  You can add items to the start/end of a list using `lpush()` and `rpush()`. Remove and return the first/last element using `lpop()`/`rpop()`. You can trim the list’s length using `ltrim()` to maintain its length.

- **Queues**:  
  In addition to push and pop commands, Redis offers the blocking of queue commands.

- **Caching**:  
  Using `expire()` and `expireat()` allows you to use Redis as a cache. You can also find third-party Redis cache backends for Django.

- **Pub/Sub**:  
  Redis provides commands for subscribing/unsubscribing and sending messages to channels.

- **Rankings and Leaderboards**:  
  Redis’s sorted sets with scores make it very easy to create leaderboards.

- **Real-Time Tracking**:  
  Redis’s fast I/O makes it perfect for real-time scenarios.
