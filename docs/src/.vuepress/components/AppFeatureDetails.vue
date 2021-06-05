<template>
    <div class="app-features-details">
        <AppFeatureDetailsLeft v-for="appFeature in appFeatures"
            :image=appFeature.image
            :thumbnailImage=appFeature.thumbnailImage
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
                        image: "/images/eventfahrplan-tablet-events-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-events-256x192.png",
                        imageDescription: "Screenshot of the grid schedule view on a tablet",
                        title: "View program by day and rooms (side by side)",
                        description: "You are looking for guidance at an event. We got you prepared. The schedule screen presents all sessions in a neatly arranged grid, one column for each virtual or physical room. You can navigate between the rooms by swiping horizontally. A vertical swipe takes you to sessions at an earlier or later point in time.\n\n" +
                        "You never loose track. This grid presentation allows you to intuitively understand which session take place in parallel or overlap.\n\n" +
                        "You can focus. The screen only renders one day at a time. You can simply select another day by tapping the dropdown menu at the top."
                    },
                    {
                        image: "/images/eventfahrplan-tablet-phone-layout-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-favorites-256x192.png",
                        imageDescription: "Screenshot of the six columns on a tablet in landscape mode and the four columns on a smartphone in landscape mode",
                        title: "Custom grid layout for smartphones and tablets",
                        description: "You choose your device - the app automatically adapts. Regardless of whether you run the app on a tablet, phablet or smartphone the layout is optimized to the available screen estate.\n\n" +
                        "On tablets sessions are shown in up to six columns in landscape and four columns in portrait mode. On smartphones one column is shown in portrait and four columns in landscape mode."
                    },
                    {
                        image: "/images/eventfahrplan-phone-details-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-events-256x192.png",
                        imageDescription: "Screenshot of the details screen on a tablet and a smartphone",
                        title: "Read detailed descriptions",
                        description: "You have a place to rest. In the details screen you can comfortably read through the abstract and the long description of the session. Website links and email addresses are clickable right there is the text. Any website link is listed below if provided by the authors. At the bottom there is a link to the specific website of the selected session.\n\n" +
                        "You got all the information in one place. Title, subtitle, speaker names, room name and of course the start time is there so you don't have to search for them.\n\n" +
                        "While the session details are shown as a separate screen on a smartphone they open as an integrated view on the right side on a tablet in landscape mode."
                    },
                    {
                        image: "/images/eventfahrplan-tablet-favorites-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-events-256x192.png",
                        imageDescription: "TODO",
                        title: "Add events to favorites list",
                        description: "Your personal program. In preparation for the event, during the happing or afterwards you can browse and choose sessions of your interest to compile a very personal program.\n\n" +
                        "You can mark a session as a favorite wherever you are. On the schedule screen long-tap a session to open the context menu and add it to your favorites. It will be highlighted once it is favored. On the details screen you can favor the opened session with one tap on the star icon at the top bar of the screen."
                    },
                    {
                        image: "/images/eventfahrplan-tablet-favorites-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-events-256x192.png",
                        imageDescription: "TODO",
                        title: "Manage your favorites",
                        description: "Your selection in one place. Once you have marked all your sessions they are visually highlighted in schedule screen. Additionally, the favorites screen shows them in chronologically order separated by days.\n\n" +
                        "Sharing is fun. Whether you want to advertise a very interesting talk on social media or notify a friend of a upcoming workshop - it is so easy. Long-tap a session in the schedule screen to open the context menu and share the session or tap the share icon at the top bar if you have the details screen open.\n\n" +
                        "Your data is available. If you have the favorites screen open and you tap the share icon at top bar then you can export all you favorites it one step."
                    }
                ],
                isActive: true
            }
        }
    }
</script>
