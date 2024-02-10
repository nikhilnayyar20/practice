$(document).ready(function () {
    // Animation for the card on mouse enter/leave
    $(".container").mouseenter(function () {
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function () {
        $(".card").stop().animate({
            top: "0"
        }, "slow");
    });

    // Array of messages for the "No" response
    const noMessages = [
        "Pretty please?🙏",
        "Think about the yk what😏",
        "I'm gonna kill you. Last chance😐",
    ];
    let messageIndex = 0; // To cycle through messages

    // Function to handle the "No" response
    function handleNo() {
        const tryAgain = confirm(noMessages[messageIndex]);
        messageIndex = (messageIndex + 1) % noMessages.length; // Cycle to next message
        if (!tryAgain) {
            handleNo(); // Recursively call handleNo if they choose not to try again
        }
    }

    // Handle the "Yes" button click
    $('#btnYes').click(function () {
        // Explicitly remove the buttons
        $('#btnYes, #btnNo').remove();

        // Update the container's content to only show the gif and message
        $(".container").html(`
            <img src="mocha.gif" alt="Love Animation" style="display: block; margin: 0 auto;">
            <div class="new-message" style="text-align: center;">YAY I love you so much, Kimi!</div>
        `);
    });

    // Handle the "No" button click
    $('#btnNo').click(function () {
        handleNo();
    });
});

