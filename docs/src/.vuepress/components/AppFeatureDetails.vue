<template>
    <div class="app-features-details">
        <AppFeatureDetail v-for="appFeature in appFeatures"
            :imagePositionStart=appFeature.imagePositionStart
            :image=appFeature.image
            :imageDescription=appFeature.imageDescription
            :title=appFeature.title
            :description=appFeature.description
        />

    </div>
</template>

<script>
    export default {
        data() {
            return {
                appFeatures: [
                    {
                        imagePositionStart: false,
                        image: "/images/eventfahrplan-tablet-events-640x480.png",
                        imageDescription: "Grid schedule view on a tablet",
                        title: "View program by day and rooms (side by side)",
                        description: "You are looking for guidance at an event? We got you prepared. The schedule screen presents all sessions in a neatly arranged grid, one column for each virtual or physical room. You can navigate between the rooms by swiping horizontally. A vertical swipe takes you to sessions at an earlier or later point in time.\n\n" +
                        "You never loose track. This grid presentation allows you to intuitively understand which session take place in parallel or overlap so you can plan your day.\n\n" +
                        "You can focus. The screen only renders one day at a time. You can simply select another day by tapping the dropdown menu at the top."
                    },
                    {
                        imagePositionStart: true,
                        image: "/images/eventfahrplan-tablet-phone-layout-640x480.png",
                        imageDescription: "Six columns on a tablet in landscape mode and the four columns on a smartphone in landscape mode",
                        title: "Custom grid layout for smartphones and tablets",
                        description: "You choose your device - the app automatically adapts. Regardless of whether you run the app on a tablet, phablet or smartphone the layout is optimized to the available screen estate.\n\n" +
                        "On tablets sessions are shown in up to six columns in landscape and four columns in portrait mode. On smartphones one column is shown in portrait and four columns in landscape mode."
                    },
                    {
                        imagePositionStart: false,
                        image: "/images/eventfahrplan-tablet-smartphone-details-640x480.png",
                        imageDescription: "Details screen on a tablet and a smartphone",
                        title: "Read detailed descriptions",
                        description: "You have a place to rest. In the details screen you can comfortably read through the abstract and the long description of the session. Website links and email addresses are clickable right there is the text. Additional website links are listed below the text if provided by the authors. At the bottom you find a link to the specific website of the selected session.\n\n" +
                        "You got all the information in one place. Title, subtitle, speaker names, room name and of course the start time are there so you don't have to search for them.\n\n" +
                        "While the session details are shown as a separate screen on a smartphone they open as an integrated view on the right side of your tablet in landscape mode."
                    },
                    {
                        imagePositionStart: true,
                        image: "/images/eventfahrplan-tablet-smartphone-favorites1-640x480.png",
                        imageDescription: "Add to favorites menu on a smartphone and star icon button on a tablet",
                        title: "Add events to favorites list",
                        description: "Your personal program. In preparation for the event, during the happening or afterwards you can browse and choose sessions of your interest to compile a very personal program.\n\n" +
                        "You can mark a session as a favorite wherever you are. On the schedule screen long-tap a session to open the context menu and add it to your favorites. It will be highlighted once it is favored. On the details screen you can favor the opened session with one tap on the star icon at the top bar of the screen."
                    },
                    {
                        imagePositionStart: false,
                        image: "/images/eventfahrplan-tablet-smartphones-favorites2-640x480.png",
                        imageDescription: "Share event menu on a smartphone and favorites on a tablet",
                        title: "Manage your favorites",
                        description: "Your selection in one place. Once you have marked all your sessions they are visually highlighted in the schedule screen. Additionally, the favorites screen shows them in chronologically order separated by days.\n\n" +
                        "Sharing is fun. Whether you want to advertise a very interesting talk on social media or notify a friend of a upcoming workshop - it is so easy. Long-tap a session in the schedule screen to open the context menu and share the session - or tap the share icon at the top bar if you have the details screen open.\n\n" +
                        "Your data is available. If you have the favorites screen open and you tap the share icon at top bar then you can export all your favorites in one step."
                    },
                    {
                        imagePositionStart: true,
                        image: "/images/eventfahrplan-tablet-smartphones-alarms-640x480.png",
                        imageDescription: "Set alarm menu and choose alarm times on a smartphone and alarms screen on a tablet",
                        title: "Setup alarms for individual events",
                        description: "You won't miss a session. It can be challenging to remember all talks and workshops at a larger conference. No worries - we got you equipped. You can setup alarms for individual sessions.\n\n" +
                        "You choose your alarm time. On the schedule screen long-tap a session to open the context menu and set an alarm. On the details screen tap the bell icon at the top bar of the screen.\n\n" +
                        "You customize alarms to your taste. In the app settings you can select the default alarm time, enable insistent alarms and pick the alarm tone."
                    },
                    {
                        imagePositionStart: false,
                        image: "/images/eventfahrplan-tablet-smartphone-calendar-640x480.png",
                        imageDescription: "Calendar icon on a smartphone and on a tablet",
                        title: "Add events to your personal calendar",
                        description: "You have the full session information available to add it to your calendar if you like to. The start and end time of the session are automatically used to construct the correct time and duration of the calendar entry.\n\n" +
                        "On the schedule screen long-tap a session and choose add to calendar. On the details screen tap the calendar icon at the top bar of the screen."
                    },
                    {
                        imagePositionStart: true,
                        image: "/images/eventfahrplan-tablet-smartphone-settings-updates-640x480.png",
                        imageDescription: "Automatic updates settings on a smartphone and on a tablet   ",
                        title: "Automatic program updates (configurable in settings)",
                        description: "You are up-to-date at all times. Regardless whether a session is added, moved to a new room or even canceled - you are informed.\n\n" +
                        "The app periodically checks for program updates and loads them from the server if needed.\n\n" +
                        "You decide. You can disable automatic updates in the settings. To manually retrieve program updates visit the schedule screen and tap the refresh entry in the overflow menu at the top bar."
                    },
                    {
                        imagePositionStart: false,
                        image: "/images/eventfahrplan-tablet-smartphone-changes-640x480.png",
                        imageDescription: "Schedule changes on a smartphone and on a tablet",
                        title: "Keep track of program changes",
                        description: "You know what changed. Whenever the program changes then the app notifies you about it.\n\n" +
                        "You won't miss it. There three places where changes are communicated: the app shows a notification at the top status bar, a dialog with a short summary of the changes and the schedule changes screen.\n\n" +
                        "You know what changes. The schedule changes screen list all sessions which changed since the last program update. You can easily spot if a speaker was added, the language was specified or a session was moved to the afternoon."
                    },
                    {
                        imagePositionStart: true,
                        image: "/images/eventfahrplan-tablet-smartphone-vote-640x480.png",
                        imageDescription: "Feedback icon on a smartphone and on a tablet",
                        title: "Vote and leave comments on talks and workshops",
                        description: "Your opinion will be heard. You enjoyed a session so much that you want to tell the speakers? Please do so.\n\n" +
                        "Depending on the backend system you can leave a textual comment for the speakers and rate the talk via a five-stars system. Your response is only accessible to the speakers and the conference organizers.\n\n" +
                        "To provide feedback open the session details screen and tap the feedback icon at the top bar."
                    }
                ]
            }
        }
    }
</script>
