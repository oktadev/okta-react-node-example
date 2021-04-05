# Basic CRUD App with Node + React

This example app shows how to create a Node.js API and display its data with a React UI. To follow along step-by-step, [check out the blog post](https://developer.okta.com/blog/2018/07/10/build-a-basic-crud-app-with-node-and-react).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**Prerequisites**: [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/lang/en/), and [SQLite](https://www.sqlite.org/index.html).

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-react-node-example.git
cd okta-react-node-example
yarn
```

This will get a copy of the project install locally. You will need to set up some environment variables before the app will run properly.

Before you begin, you'll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com/) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`.

Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Change the Redirect URI to `http://localhost:3000/login/callback` and accept the default Logout Redirect URI of `http://localhost:3000`.

The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for `http://localhost:3000`. You will see output like the following when it's finished:

```
Okta application configuration:
Issuer:    https://dev-133337.okta.com/oauth2/default
Client ID: 0oab8eb55Kb9jdMIr5d6
```

NOTE: You can also use the Okta Admin Console to create your app. See [Create a React App](https://developer.okta.com/docs/guides/sign-into-spa/react/create-okta-application/) for more information.

Now create a file called `.env.local` in the project root and add the following variables, replacing the values with your own from the previous steps. Your Okta domain is the first part of your issuer, before `/oauth2/default`.

**.env.local**
```bash
REACT_APP_OKTA_CLIENT_ID={yourClientId}
REACT_APP_OKTA_ORG_URL={yourOktaOrgUrl}
```

Now you can run both the Node API server and the React frontend with the same command:

```bash
yarn start
```

## Links

This example uses the following libraries provided by Okta:

* [Okta JWT Verifier](https://github.com/okta/okta-oidc-js/tree/master/packages/jwt-verifier)
* [Okta React SDK](https://github.com/okta/okta-react)

## Help

Please [raise an issue](https://github.com/oktadeveloper/okta-react-node-example/issues) if you find a problem with the example application, or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
