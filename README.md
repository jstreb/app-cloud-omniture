Overview
==================

The Omniture plugin was created in order demonstrate how App Cloud and Omniture can work together.  This plugin currently assumes sitecatalyst version 14.  While other versions may work they have not been tested with App Cloud.  Because an app is different then a website we have focused on how to trigger custom events to omniture from within an App Cloud application and this plugin is designed to make this as easy as possible.  At this time the plugin does not support the tracking of events when offline, but is something we hope to add.

Prerequisites
==================
* Omniture account with access to sitecatalyst 14.
* Generated JavaScript files from Omniture for your reports suite.  Steps below for where to do this.

Steps to generate Omniture "Core JavaScript File"

* Go to Admin console -> code manager.  
* Select JavaScript from the drop down.
* Select your report suite from the drop down.
* Choose your character encoding setting, we default to UTF-8.
* Choose your currency.
* Number of periods in domain will be ignored since the events will come from the app, so you can leave the default.
* Click "Generate Code"
* Copy the contents of the "Core JavaScript File" into a new file and save it as AppMeasurement.js. 


Installation
==================
Copy the /lib/bc-omniture.js file and the AppMeasurement.js file you created above into your project and reference them in your HTML files.  Note that the bc-omniture.js must be included **AFTER** the AppMeasurement.js and App Cloud SDK JavaScript files.

Usage
==================

The bc-omniture.js file exposes a single API of `bc.omniture._trackEvent` that takes a single object as a parameter.  Any key/value pairs defined on the object will be sent to Omniture for this event.  In our example application we send an event for event1 when the view gains focus.  Within sitecatalyst the custom name for event1 is 'viewfocus' so that our reports can tell us how many viewfocus events we received.  The syntax for calling `bc.omniture._trackEvent` is simply:

`bc.omniture._trackEvent( { events: "event1" } );`

Credits and thanks
==================
Brandon Aaskov