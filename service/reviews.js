// generate a random date within the
const randomDate = (() => {
  var end = new Date().getTime();
  var start = end - 3 * 30 * 60 * 60 * 24 * 1000;

  return () => {
    return new Date(start + Math.random() * (end - start)).getTime();
  };
})();

const data = {
  page_id: "633298",
  rollup: {
    properties: [],
    rating_histogram: [7, 3, 0, 3, 29],
    average_rating: 4.05,
    review_count: 42,
    media: [],
    faceoff_positive: {
      comments:
        "Just as good as any other tank on the market. There's just variability between how many balloons you can fill. This is partially due to user error, but it's still a bit frustrating when planning a party. That being said, it can be more cost effective and more time effective if done right. It's great if you have a lot of helpers! Give it a shot, you can always fill the rest at your local grocery store.",
      headline: "Give it a shot",
      rating: 4
    },
    faceoff_negative: {
      comments:
        "The helium tank was fine but I purposely ordered online for in store pick up as I knew I would be in a hurry.. when I arrived at the store only one tank was ready.. I was told they didn't have an additional one for me even though the email I received said my order was ready.. when I mentioned my problem (as now I don't have enough helium for all the balloons and I'm on my way to the event)  I was told to drive to a different store in the opposite direction .. I then asked to speak to a manager who (after some searching) found one in the back.. I was disappointed that I had to ask for help and that the order wasn't ready as I was lead to believe.. I will think twice before ordering on line from that particular store..",
      headline: 'Order "ready for pickup" isn\'t always complete',
      rating: 2
    }
  },
  reviews: [
    {
      review_id: 156689054,
      internal_review_id: 143299180,
      details: {
        comments:
          "I love the helium tanks that party city sell they are perfect for getting the job done on the road for merchandising and marketing events while traveling",
        headline: "I would definitely buy this product again!",
        nickname: "Kenneth",
        properties: [],
        location: "Chicago, IL",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 10,
        not_helpful_votes: 4,
        rating: 5,
        helpful_score: 1463
      }
    },
    {
      review_id: 156562435,
      internal_review_id: 143183609,
      details: {
        comments: "Great tank... Filled more than expected!",
        headline: "Filled more than expected!",
        nickname: "Jessica",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: false,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 1,
        not_helpful_votes: 3,
        rating: 3,
        helpful_score: 1073
      }
    },
    {
      review_id: 156522657,
      internal_review_id: 143146950,
      details: {
        comments:
          "We bought this helium tank with the intention of inflating around 20, 12 inch latex balloons. This tank ran out after 10. We had to go rent a helium tank from a local party supply on the day of our party (which we should have done anyways - it was cheaper and had way more helium.)If you have the option, I would suggest that instead of buying this tank, you rent a helium tank. At least that way you know how much you're getting. This definitely did not finish the job. That being said, it was lightweight and easy to use, so 2 stars for that.",
        headline: "Easy to Use, But Not as Advertised",
        nickname: "LI",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: false,
        is_verified_reviewer: false
      },
      media: [],
      metrics: {
        helpful_votes: 10,
        not_helpful_votes: 10,
        rating: 2,
        helpful_score: 1833
      }
    },
    {
      review_id: 156263320,
      internal_review_id: 143124256,
      details: {
        comments:
          "This tank is great. Fill your own balloons and don't worry about picking them up from the store half deflated on the day of your party! I would buy this again!",
        headline: "Perfect tank to fill tons of balloons!",
        nickname: "Theresa",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 20,
        not_helpful_votes: 2,
        rating: 5,
        helpful_score: 1475
      }
    },
    {
      review_id: 156231200,
      internal_review_id: 143096315,
      details: {
        comments: "Product came right on time no issues with it.",
        headline: "Yes I would purchase again",
        nickname: "SHERIE",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 1,
        not_helpful_votes: 1,
        rating: 4,
        helpful_score: 1107
      }
    },
    {
      review_id: 155943760,
      internal_review_id: 143044702,
      details: {
        comments: "such a good credit",
        headline: "i would by this again!",
        nickname: "Bethania",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 0,
        not_helpful_votes: 0,
        rating: 5,
        helpful_score: 841
      }
    },
    {
      review_id: 147135080,
      internal_review_id: 141147927,
      details: {
        comments: "Super handy ,Love it",
        headline: "I would buy it again",
        nickname: "Diana",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 2,
        not_helpful_votes: 0,
        rating: 5,
        helpful_score: 871
      }
    },
    {
      review_id: 147043032,
      internal_review_id: 141137573,
      details: {
        comments: "So convenient and shipped so fast!",
        headline: "Helium tank!",
        nickname: "Jess",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: true,
        is_verified_buyer: false,
        is_verified_reviewer: false
      },
      media: [],
      metrics: {
        helpful_votes: 0,
        not_helpful_votes: 1,
        rating: 5,
        helpful_score: 1026
      }
    },
    {
      review_id: 146232769,
      internal_review_id: 141024545,
      details: {
        comments: "Its perfect for what I needed. Came on time.",
        headline: "I would buy this again.",
        nickname: "Rebecca",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 1,
        not_helpful_votes: 0,
        rating: 5,
        helpful_score: 1101
      }
    },
    {
      review_id: 145711774,
      internal_review_id: 140984365,
      details: {
        comments:
          "Very convenient and in my eyes cheaper than going to a business and paying them to blow your balloons up",
        headline: "I would so buy this product again",
        nickname: "Patricia",
        properties: [],
        location: "undisclosed",
        created_date: randomDate(),
        product_page_id: "633298"
      },
      badges: {
        is_staff_reviewer: false,
        is_verified_buyer: true,
        is_verified_reviewer: true
      },
      media: [],
      metrics: {
        helpful_votes: 1,
        not_helpful_votes: 0,
        rating: 5,
        helpful_score: 1351
      }
    }
  ]
};

module.exports = exports = data;
