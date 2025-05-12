// Global variables
const variant = 9;
const divBrowserInfo = document.getElementById("browserInfo");
const divComments = document.getElementById("comments");
const divForm = document.getElementById("form");
const body = document.querySelector("body");

// Browser Info
const browserInfo = {
    appCodeName: navigator.appCodeName,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    onLine: navigator.onLine,
    cookieEnabled: navigator.cookieEnabled
};

let browserInfoHTML = '<h2>Browser Info</h2><ol>';
for (const [key, value] of Object.entries(browserInfo)) {
    browserInfoHTML += `<li>${key}: ${value}</li>`;
}
browserInfoHTML += '</ol>';


divBrowserInfo.innerHTML = browserInfoHTML;

// Comments
const commentsApiCall = 'https://jsonplaceholder.typicode.com/posts/' + variant + '/comments';
let comments;

fetch(commentsApiCall)
    .then(response => response.json())
    .then(data => {
        comments = data;
        displayComments();
    })
    .catch(error => {
        console.error('Error fetching comments:', error);
    });

function displayComments() {
    let commentsHTML = '<h2>Comments</h2><ul class="comments-grid">';
    for (const comment of comments) {
        console.log(comment);
        commentsHTML += `<li>
            PostId: ${comment.postId}<br>
            Id: ${comment.id}<br>
            Name: ${comment.name}<br>
            Email: ${comment.email}<br>
            Body: ${comment.body}
        </li>`;
    }
    commentsHTML += '<ul>';
    divComments.innerHTML = commentsHTML;
}

// Form
function showForm() {
    divForm.hidden = false;
}

function hideForm() {
    divForm.hidden = true;
}

setTimeout(showForm, 15 * 1000);

// Mode
function switchMode() {
    body.classList.toggle('dark');
}

const now = new Date();
var timeString = now.toLocaleTimeString()
var time = timeString.split(":");
if (time[0] < 7 || time[0] >= 21){
    body.classList.add('dark');
}




