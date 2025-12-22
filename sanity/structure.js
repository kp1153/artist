// sanity/structure.js
export const structure = (S) =>
  S.list()
    .title('Dr. Uttama Dixit Gallery')
    .items([
      S.documentTypeListItem('artwork').title('Artworks'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('exhibition').title('Exhibitions'),
      S.divider(),
      S.listItem()
        .title('Featured Artworks')
        .child(
          S.documentList()
            .title('Featured')
            .filter('_type == "artwork" && featured == true')
        ),
      S.listItem()
        .title('Available for Sale')
        .child(
          S.documentList()
            .title('Available')
            .filter('_type == "artwork" && availabilityStatus == "available"')
        ),
    ])