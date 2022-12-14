/* data field is for preloading a set of object data, where object would look like this:
 * {
      img: {
        srcset: 'https://vanda-production-assets.s3.amazonaws.com/2019/01/10/14/46/48/7ef4dba2-6810-4b1c-ba5e-8d5089b0358e/320.jpg 320w, https://vanda-production-assets.s3.amazonaws.com/2019/01/10/14/46/48/50fde484-13e4-4e94-a44f-2765ef4a5d21/640.jpg 640w, https://vanda-production-assets.s3.amazonaws.com/2019/01/10/14/46/48/85961b53-60c9-4888-ab3f-6db107f9ede1/960.jpg 960w',
        src: 'https://vanda-production-assets.s3.amazonaws.com/2019/01/10/14/46/48/7ef4dba2-6810-4b1c-ba5e-8d5089b0358e/640.jpg',
        alt: 'poster'
      },
      title: 'Colour lithograph poster advertising the Nord Express train from Paris to Riga',
      href: 'https://collections.vam.ac.uk/item/O89673'
    }
*/

module.exports = {
  title: 'Object Shuffler',
  label: 'Object Shuffler',
  context: {
    objectShufflerData: [
      {
        title: 'Allsorts aggregator',
        feed: 'https://api.vam.ac.uk/v2/objects/search?search_profile=ymal&q=THES260586|AAT112743&q_object_title=trip&q_actor=head',
        exclude: 'O1318092'
      },
      {
        title: 'Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters Posters ',
        feed: 'https://api.vam.ac.uk/v2/objects/search?search_profile=ymal&q=psychedellic',
        data: [
        ]
      },
      {
        title: 'Netsuke',
        feed: 'https://api.vam.ac.uk/v2/objects/search?search_profile=ymal&q_object_type=netsuke',
        data: [
        ]
      },
      {
        title: 'Lego',
        feed: 'https://api.vam.ac.uk/v2/objects/search?search_profile=ymal&q=lego',
        data: [
        ]
      }
    ]
  }
};
