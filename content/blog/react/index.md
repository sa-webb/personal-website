# Dynamic CORS with Apollo Server in TypeScript

Software engineers work with numerous tools and services that need access to the server across in development, testing, and production environments. Because of this configuring proper access to a server is a critical and arduous process. In this article we take a deep dive at how to configure Cross-Origin Resource or CORS policies using the Apollo Server framework. 

### UBL 
Before we start writing code let's declare some ubiquitous language or UBL that will be used throughout this article.

Meanwhile need to assume every other origin other than the allowed set do not have any access to often need to accept requests from multiple domains.

In this post I would like to not only show you how to configure CORS dynamically, but also like to use this example to a very common scenario that developers stumble upon when using TypeScript, which is - converting JavaScipt code.

## Starter Code

Here is a link to the starter code.

## Adding Dynamic CORS

The starter code that I would like to provide is from the CORS npm package for dynamic configuration. In some cases, developers need to provide more than one origin or domain access to server resources. 

In the corsOptions object we are wanting to whitelist URLs that are allowed access to our resources and block access to those not included in the list.

Below is the exact example that is provided by the CORS package. 

```
1 var whitelist = ["example.com", "example2.com"]
2 var corsOptions = {
3     origin: function(origin, callback) {
4         if(whitelist.indexOf('origin') !== -1) {
5             callback(null, true)
6         } else {
7             callback(new Error("Not allowed by CORS))
8         }
9     },
10    allowCredentials: true
11 }
12
13 app.use(cors(corsOptions))
```

Let's translate the above snippet first to pseudocode line by line and then refactor it to TypeScript.

### Pseudocode

1. Declare the origins that allowed in the whitelist array.
2. Create an options object to be instantiated by cors (line 13)
3. The origin option is a function that takes a origin and a callback.
4. Check to see if the incoming origin exists anywhere throughout the array of allowed origins.
5. Call returns two arguments: arg1 = null, arg2 = true
6. Else ..
7. The callback throws an error
..
10. Allow credentials to be accepted from the origin.
..
13. Apply the cors middleware with the options object.

#### indexOf vs includes

If any of you wondered why the origin function uses the `indexOf` array method instead of `includes` then there are a multiude of reasons. First, `indexOf` is in **es5** and not **es6** but even at the time of writing many of us are using **es6** however even with it `indexOf` fits this use-case better. Because the return type of `indexOf` is an actual element of the array where instead `includes` simply returns only a boolean. 

Whichever method you choose to use is up to you because I have encountered both in the wild. However, using the `indexOf` method makes more sense to me in this scenario.

I know what you're thinking - **Show me the TypeScript**.

**Drum Roll**

## Final thoughts

Hopefully this article helped you develop an intuition about TypeScript and may this snippet serve you.