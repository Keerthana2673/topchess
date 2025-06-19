// src/data/reviews.js

export const reviews = [
  {
    name: "Saranya Saranya",
    time: "2 weeks ago",
    rating: 5,
    quote: "Thirumal chess academy is one of the best academy in Chennai. The chess coaches are truly dedicated. My son is currently studying at this academy.",
  },
  {
    name: "Swarna Gopal",
    time: "2 weeks ago",
    rating: 5,
    quote: "Thirumal chess academy is one of the best academy I would recommend to a chess player at any level. He is an amazing mentor. He analyses every student amazingly. He takes his class according to the student's need. His classes are very engaging.",
  },
  {
    name: "Sriram Vijayakumar",
    time: "2 weeks ago",
    rating: 5,
    quote: "Best Coaching Center for Chess. My Son's game has improved with help of coaching by Kalyan sir. Kalyan Sir's coaching is tailored to the need of the players.",
  },
  {
    name: "Vijaya Baskar",
    time: "5 months ago",
    rating: 5,
    quote: "One of the best chess academy in Chennai. I can see great improvement in my son's game. We are lucky to have coach like Mr. Kalyan sir. His knowledge, commitment and dedication towards chess is astonishing. Students mingle with him easily and affectionately call him as 'ANNA'.",
  },
  {
    name: "Sukumar Kothandapani",
    time: "6 months ago",
    rating: 5,
    quote: "My daughter has been taking chess classes at Thirumal Chess Academy for the past year, and we have seen remarkable progress in her game. She has started winning trophies in age group categories and is now on the verge of obtaining her FIDE rating.",
  },
  {
    name: "Priya Shankar",
    time: "a year ago",
    rating: 5,
    quote: "My son has joined this academy before 2 months. His performance improved lot. About Kalyan, he is not only a good coach but also good human being. His family also supportive. Wish he bring more champions from his academy.",
  },
  {
    name: "Lakshmin Narayanan",
    time: "a year ago",
    rating: 5,
    quote: "One of the best place to improve your strategic thinking. Best teaching methods of the game of Chess .Well qualified coaches. Good environment to learn , play and improve Chess.",
  },
  {
    name: "Kamalini Murugan",
    time: "a year ago",
    rating: 5,
    quote: "I would pat myself for that one good move I made for my son and that is joining him here!  Yes.. I believe in destiny!  I should thank Almighty Thirumal for showing me Thirumal Academy!!",
  },
  {
    name: "abirami Tp",
    time: "a year ago",
    rating: 5,
    quote: "We are associated with Thirumal chess academy for almost 4 yrs now. The coaching is very nice and kids are extremely comfortable with the master. The academy treats everyone as a family member. The master care for every student. Thanks",
  },
  
].map(review => ({
  ...review,
  avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(review.name)}`
}));