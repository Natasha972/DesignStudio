const posts = [
  {id: "3", image: 'images/interior3.jpg', tag: 'holiday', title: 'Ideas For Styling Your Holiday Greenery', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam atque recusandae autem adipisci ullam."},
  {id: "4", image: 'images/interior5.jpg', tag: 'design', title: 'Historic Loft', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam atque recusandae autem adipisci ullam."},
  {id: "1", image: 'images/interior1.jpg', tag: 'design', title: 'Historic Loft', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam atque recusandae autem adipisci ullam."},
]

const sm_posts_1 = [
  {id: "1", image: 'images/interior1.jpg', tag: 'lifestyle', title: 'Preset Inspiration', short: true},
  {id: "3", image: 'images/interior4.jpg', tag: 'design', title: 'The Sunset House: Office and Dining Room', short: 'short'},
  {id: "5", image: 'images/interior5.jpg', tag: 'lifestyle', title: 'Preset inspiration', short: false},
  {id: "1", image: 'images/interior1.jpg', tag: 'design', title: 'Our Favorite Colors', short: 'short'},

]

const sm_posts_2 = [
  {id: "3", image: 'images/interior3.jpg', tag: 'lifestyle', title: 'Preset Inspiration', short: 'short'},
  {id: "5", image: 'images/interior5.jpg', tag: 'design', title: 'Historic Loft', short: false},
  {id: "3", image: 'images/interior3.jpg', tag: 'holiday', title: 'Preset inspiration', short: false},
]

$(function() {
 renderLgPosts()
 renderSmPosts1()
 renderSmPosts2()

 function renderLgPosts() {
  let template = $('#lg-post-template').html(),
      compiled = Handlebars.compile(template)
      rendered = compiled({ lg_posts: posts })
      $('#lg-posts').html(rendered)
 }

 function renderSmPosts1() {
  let template = $('#sm-post-template').html(),
      compiled = Handlebars.compile(template)
      rendered = compiled({ sm_posts: sm_posts_1 })
      $('#sm-posts1').html(rendered)
 }

 function renderSmPosts2() {
  let template = $('#sm-post-template').html(),
      compiled = Handlebars.compile(template)
      rendered = compiled({ sm_posts: sm_posts_2 })
      $('#sm-posts2').html(rendered)
 }
})