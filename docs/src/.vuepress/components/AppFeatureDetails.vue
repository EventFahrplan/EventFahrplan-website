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
                        imageDescription: "Alternative image text.",
                        title: "View program by day and rooms (side by side)",
                        description: "You run the event, you deserve the fame. Our mobile- and tablet-friendly ticket shop adjusts to your event and comes in your colors and style and with your logo. Your customers will immediately identify the shop with you – our own branding is subtle and in the background.\n\n" +
                                    "If you want to go even further, you can run the shop on your own domain. We'll provide an SSL certificate for free, just contact us.\n\n" +
                                    "If you bring attendees from multiple cultural backgrounds together, you will love that you can publish your ticket shop in multiple languages at the same time. Our interface currently supports German, Dutch, and English.\n\n" +
                                    "Using our mini-CMS, you can add static content directly to the ticket shop website. This provides an easy way for you to host e.g. your terms of service, an event description or other static content. For small events, it might even replace an event website."
                    },
                    {
                        image: "/images/eventfahrplan-tablet-favorites-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-favorites-256x192.png",
                        imageDescription: "Alternative image text.",
                        title: "Custom grid layout for smartphones and tablets",
                        description: "You run the event, you deserve the fame. Our mobile- and tablet-friendly ticket shop adjusts to your event and comes in your colors and style and with your logo. Your customers will immediately identify the shop with you – our own branding is subtle and in the background.\n\n" +
                                    "If you want to go even further, you can run the shop on your own domain. We'll provide an SSL certificate for free, just contact us.\n\n" +
                                    "If you bring attendees from multiple cultural backgrounds together, you will love that you can publish your ticket shop in multiple languages at the same time. Our interface currently supports German, Dutch, and English.\n\n" +
                                    "Using our mini-CMS, you can add static content directly to the ticket shop website. This provides an easy way for you to host e.g. your terms of service, an event description or other static content. For small events, it might even replace an event website."
                    },
                    {
                        image: "/images/eventfahrplan-tablet-events-640x480.png",
                        thumbnailImage: "/images/eventfahrplan-tablet-events-256x192.png",
                        imageDescription: "Alternative image text.",
                        title: "Drei",
                        description: "You run the event, you deserve the fame. Our mobile- and tablet-friendly ticket shop adjusts to your event and comes in your colors and style and with your logo. Your customers will immediately identify the shop with you – our own branding is subtle and in the background.\n\n" +
                                    "If you want to go even further, you can run the shop on your own domain. We'll provide an SSL certificate for free, just contact us.\n\n" +
                                    "If you bring attendees from multiple cultural backgrounds together, you will love that you can publish your ticket shop in multiple languages at the same time. Our interface currently supports German, Dutch, and English.\n\n" +
                                    "Using our mini-CMS, you can add static content directly to the ticket shop website. This provides an easy way for you to host e.g. your terms of service, an event description or other static content. For small events, it might even replace an event website."
                    }
                ],
                isActive: true
            }
        }
    }
</script>
