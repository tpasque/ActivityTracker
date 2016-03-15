
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({
      facebook_id:"10153509558071342",
      author: "Scott Christensen",
      title: "Check out this cool activity",
      address: "1735 franklin street denver colorado",
      child_name: "billy.b",
      picture_url: "http://www.greenchildrenshouse.com/wp-content/uploads/2012/12/group-of-kids-on-bikes.jpg",
      description: "GCH Bike Camp is back this summer by popular demand!  Camper will explore the local routes, make new friends and improve their biking skills.  All activities and rides will be geared to the unique needs of each group.  To ensure safety and maximize fun, there will be 6:1 student to instructor ratio when out on the route.",
      hours: 1
  }),
    knex('posts').insert({
      facebook_id:"10206469723361673",
      author: "Brian Jackson",
      title: "We went rafting!",
      address: "1735 franklin street denver colorado",
      child_name: "maria.s",
      picture_url: "https://cdn2.content.compendiumblog.com/uploads/user/75e473c2-1c08-40ec-a10b-1ccaac601a6f/d7c53c2f-d361-4297-b1c1-ff01dde8ba2e/Image/fab3d6320f57473e90cdd70ae6c97235/sportyak_on_the_kennebec_low_resjpg_w640.jpeg",
      description: "As a Maine whitewater rafting guide, there’s nothing better than guiding a kid on the river for their first time.  Even from the very beginning of the trip, things like teaching them how to hold our perfect kid sized paddles to how to sit in the raft are moments of excitement.  Some kids are nervous and other are full of anticipation.  One thing is for sure, as the day progresses and we hit the whitewater, the pure thrill of adventure can be seen in their eyes",
      hours: 2

  })

 );

};
