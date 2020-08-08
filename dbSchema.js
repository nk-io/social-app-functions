let db = {
    users: [
        {
            userId: "a65sd4f6ss6a5d4f65",
            email: "user@email.com",
            handle: "user",
            createdAt: "2020-07-01T13:42:19.154Z",
            imageUrl: "",
            bio: "bio text",
            website: "https://example.com",
            location: "London, UK",
        },
    ],
    screams: [
        {
            userHandle: "user",
            body: "Post text",
            createdAt: "2020-07-01T13:42:19.154Z",
            likeCount: 5,
            commentCount: 3,
        },
    ],
    comments: [
        {
            userHandle: "user",
            screamId: "sdg65sd4fgsd6fg",
            body: "you suck",
            createdAt: "2020-07-01T13:42:19.154Z",
        },
    ],
};

const UserDetails = {
    //Redux Data
    credentials: {
        userId: "a65sd4f6ss6a5d4f65",
        email: "user@email.com",
        handle: "user",
        createdAt: "2020-07-01T13:42:19.154Z",
        imageUrl: "",
        bio: "bio text",
        website: "https://example.com",
        location: "London, UK",
    },
    likes: [
        {
            userHandle: "user",
            screamId: "asfasdfasdf",
        },
        {
            userHandle: "user",
            screamId: "a6s5df4as6df54",
        },
    ],
};
