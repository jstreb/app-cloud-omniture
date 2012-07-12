( function ( document, omniture, undefined ) {
  
  if( bc === undefined || omniture === undefined ) {
    console.warn( "bc-omniture.js requires that App Cloud SDK and AppMeasurement (Script provided by Omniture) be included first." );
    return;
  }
  
  /* By default the page title, but completely configurable. */
  omniture.pageName = document.title;

  /* Setup our namespace */
  bc.omniture = {};
  
  /**
   * The public API to send custom events via Omniture through.  Takes an object of any data that you would like
   * send along to Omniture.  For example to send an event of event1, we would send an object of { events: "event1" }.
   */
  bc.omniture._trackEvent = function( eventInfo ) {
    for( var prop in eventInfo ) {
      omniture[prop] = eventInfo[prop];
    }

    omniture.track();
    clearProperties( eventInfo );
  }

  /* Clears out any of the custom event info we sent, so that it isn't sent with each event */
  function clearProperties(eventInfo) {
    for( var prop in eventInfo ) {
      omniture[prop] = "";
    }
  }

}( document, s ) );