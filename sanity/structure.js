export const structure = (S) =>
  S.list()
    .title('Dr. Uttama Dixit Gallery')
    .items([
      S.documentTypeListItem('artwork').title('Artworks'),
      S.documentTypeListItem('post').title('Blog Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('exhibition').title('Exhibitions'),
      S.divider(),
      S.listItem()
        .title('Available for Sale')
        .child(
          S.documentList()
            .title('Available Artworks')
            .filter('_type == "artwork" && availabilityStatus == "available"')
        ),
    ])