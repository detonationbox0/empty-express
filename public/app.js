$(() => {
    // Document is loaded.
    console.log("Loaded. Let's rock! 🤘");
});

/**
 * User clicks "Talk to Servevr"
 */
$("#talk").on("click", () => {
    fetch("/hello")
        .then( (response) => response.json() )
        .then( (responseJson) => $("#response").text(responseJson.message) )
})