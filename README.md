# Basic CRUD App with Node + React

This example app shows how to create a Node.js API and display its data with a React UI.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**Prerequisites**: [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/).

## Getting Started

To install this example application, run the following commands:

```bash
git clone git@github.com:oktadeveloper/okta-react-node-example.git
cd okta-react-node-example
yarn
```

This will get a copy of the project install locally. You will need to set up some environment variables before the app will run properly.

To integrate Okta's Identity Platform for user authentication, you'll first need to:

* [Sign up for a free Okta Developer account](https://www.okta.com/developer/signup/)
* You will get a URL similar to `https://dev-123456.oktapreview.com`.
  * Save this URL for later
  * You will also use this URL to login to your Okta account

You will need to create an application in Okta:

* Log in to your Okta account, then navigate to **Applications** and click the **Add Application** button
* Select **Single-Page App** and click **Next**
* Give your application a name (e.g. "My React App")
* Change the **Base URI** to `http://localhost:3000/` and the **Login redirect URI** to `http://localhost:3000/implicit/callback`, then click **Done**
* Save your **Client ID** for later

Your Okta application should have settings similar to the following:

![Okta Application Settings](images/okta-app-settings.png)

Now create a file called `.env.local` in the project root and add the following variables, replacing the values with your own from the previous steps.

**.env.local**
```bash
REACT_APP_OKTA_CLIENT_ID={yourClientId}
REACT_APP_OKTA_ORG_URL=https://{yourOktaOrgUrl}
```

Now you can run both the Node API server and the React frontend with the same command:

```bash
yarn start
```

## Links

This example uses the following libraries provided by Okta:

* [Okta JWT Verifier](https://github.com/okta/okta-oidc-js/tree/master/packages/jwt-verifier)
* [Okta React SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react)

## Help

Please [raise an issue](https://github.com/oktadeveloper/okta-react-node-example/issues) if you find a problem with the example application, or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email [developers@okta.com](mailto:developers@okta.com) if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).
