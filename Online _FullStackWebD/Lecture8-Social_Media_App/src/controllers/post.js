const { Posts, Users } = require("../db/model");

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId,
  });
  return post;
}

async function showAllPosts(query) {
  const posts = await Posts.findAll({
    include: [Users],
  });
  return posts;
}

module.exports = {
  createNewPost,
  showAllPosts,
};

//Test code

// async function task() {
//   console.log(
//     await createNewPost(
//       1,
//       "This is a sample post",
//       "Body of the post goes here"
//     )
//   ),
//     console.log(
//       await createNewPost(
//         2,
//         "Another sample post",
//         "Some body example here as well"
//       )
//     );
//   const posts = await showAllPosts();
//   for (let p of posts) {
//     console.log(
//       `${p.title}\nauthor:${p.user.username}\n${p.body}\n===========\n`
//     );
//   }
// }

// task();

// //author:${p.Users.username}
