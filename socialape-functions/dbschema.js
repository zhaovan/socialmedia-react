let db = {
  users: [
    {
      userId: "dsafdafasd4324132dfdsa",
      email: "djssdad@email.com",
      handle: "user",
      createdAt: "2019-03-15T11:46:01.018Z",
      imageUrl: "image/what/png",
      bio: "Hello!",
      website: "https://user.com",
      location: "Paris, FR"
    }
  ],

  screams: [
    {
      userHandle: "user",
      body: "this is a scream body",
      createdAt: "2019-03-15T11:46:01.018Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N43KJ5H43KJHREW4J5H3JWMERHB",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "London, UK"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa"
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO"
    }
  ]
};
