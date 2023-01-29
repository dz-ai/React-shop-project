# Description
#### A simple shop with fake store api catalog for products.

It includes:  
Cart | User Login Option | Submit Order Action.  
the front end build with react library and the server side with node.js and express library,  
use mongoDB as database and mongoose library to connect them.

## Front End
#### the shopping cart:
- is allowing to add or remove items from cart.
- save cart. (must login first)
- fetch the saved cart. (must log-in first)
- submit the order. (must log-in first)

#### user:
- sign in.
- login.
- logout.  
  use jwt token.

## Back End
#### server:
- route the requests to routs.
- connect to env.
#### routs:
- route to more specific route.
- trigger the right controller.
- trigger a middleware if necessary.

#### middleware:
- for authorization process with jwt library.
- for dummy credit cart check system.(which gives positive/negative answer 50% of cases)

#### controllers:
- connect the data to data base use mongoose Schema.

#### Schema:
- User.(contain carts and orders section to ref to other Schemas)
- Cart.
- Order.

In order to activate this project you have to add to the backend directory:
- config directory.
- .env file inside config with JWT_SECRET=" *** secret *** "
