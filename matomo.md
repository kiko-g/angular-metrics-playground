# Matomo

## Useful Links

- [Docker containers to setup and run the Matomo Analytics](https://matomo.org/faq/how-to-install/faq_31413/)

## Tracking code for Angular Metrics Playground

To track your web traffic with Matomo you need to make sure some extra code is added to each of your webpages.
In most websites, blogs, CMS, etc. you can use a pre-made plugin to do the technical work for you (see our [list of plugins used to integrate Matomo](https://matomo.org/integrate/)). If no plugin exists you can edit your website templates and add the JavaScript tracking code to the `</head>` tag which is often defined in a `header.php`, `header.tpl` or similar template file.

### JavaScript Tracking Code

Make sure this code is on every page of your website. We recommend pasting it immediately before the closing `</head>` tag.

```html
<!-- Matomo -->
<script>
  var _paq = (window._paq = window._paq || []);
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "//localhost/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "1"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = u + "matomo.js";
    s.parentNode.insertBefore(g, s);
  })();
</script>
<!-- End Matomo Code -->
```

If you want to do more than track page views, please check out the [Matomo Javascript Tracking documentation](https://developer.matomo.org/guides/tracking-javascript-guide) for the list of available functions. Using these functions you can track goals, custom variables, ecommerce orders, abandoned carts and more.

> Note: After installation, you can generate customized tracking code in the Tracking Code admin section.

### Log Analytics

If the Javascript tracking method isn’t feasible, you can [use server log analytics](https://matomo.org/log-analytics/) as an alternative method for tracking your website’s users.

### Mobile apps and SDKs

Not tracking a website? You can alternatively track a mobile app or any other type of application using one of the [available SDKs](https://matomo.org/integrate/#programming-language-platforms-and-frameworks).

### HTTP Tracking API

The [HTTP Tracking API](https://developer.matomo.org/api-reference/tracking-api) allows you to track anything. This may be useful if you are using a programming language for which no SDK exists yet. It may also be useful when you want to track devices or application in a special way.

### Single-Page Application or Progressive Web App

For Single-Page Application or Progressive Web App Tracking. Check out our [guide](https://developer.matomo.org/guides/spa-tracking).

### Help for users with high-traffic websites

For medium and high-traffic websites, certain optimizations help Matomo run faster (such as [setting up auto-archiving](https://matomo.org/faq/on-premise/how-to-set-up-auto-archiving-of-your-reports/)).

> [Read this to learn more](https://matomo.org/faq/on-premise/matomo-requirements/)

## Aditional General Information

### Performance Settings

Once Matomo is set up and ready to track and report on your website's traffic, set up [CLI archiving](https://matomo.org/faq/on-premise/how-to-set-up-auto-archiving-of-your-reports/) if you find it to be slow. This generates reports in the background, rather than on demand. This requires adding a Matomo command to Cron which can't be done automatically by the installer. [Read this FAQ to learn to set it up yourself](https://matomo.org/faq/on-premise/how-to-set-up-auto-archiving-of-your-reports/).

### Default Matomo settings

Matomo comes with default settings. You can customize them now or do so later in the admin screen.

- **Automatically configure geolocation using a dbip database**: For a proper geolocation Matomo requires an external database. Using this option, Matomo will automatically be configured to download and use the latest dbip city level database. [[View licensing terms](https://db-ip.com/db/lite.php?refid=mtm)]
- **Enable Do Not Track support**: When users have set their web browser to "I do not want to be tracked" (DoNotTrack is enabled) then Matomo will not track these visits.
- **Anonymize the last byte(s) of visitors IP addresses to comply with your local privacy laws/guidelines.**: When users visit your website, Matomo will not use the full IP address (such as 213.34.51.91) but instead Matomo will anonymize it first (to 213.34.0.0). IP address anonymisation is one of the requirements set by the privacy laws in some countries such as Germany.
