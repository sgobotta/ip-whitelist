# IP Whitelist
## A very simple firewall for [Meteor](https://www.meteor.com/)

The aim of this package is to only allow access to your Meteor application from a whitelist of IP addresses you define. Deploy your in-development application to a hosting service so you can test on different devices or perfect your deployment pipeline whilst keeping it safe from prying eyes.

### Meteor Compatibility

Tested with Meteor v1.x.

### Installation
```ssh
meteor add simonrycroft:ip-whitelist
```

### Configuration
The package expects to find a private ipWhitelist key in your METEOR_SETTINGS environment variable e.g:
```json
{
    "ipWhitelist": [
        '90.201.1.243',
        '91.154.1.123'
    ]
}
```

### Usage
Add this line to your server-side code:
```javascript
IPWhitelist();
```

### Behaviour
If you have defined a whitelist and the client's IP is in that list they will be granted access. If you have defined a whitelist but their IP is not in the list they will receive a 404 response with an empty body.

**Note that if you do not define a whitelist all requests will be granted access.**

