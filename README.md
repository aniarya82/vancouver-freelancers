# ☕ vancouver freelancers

Just a fun idea to have a map app that shows some good freelancer workspaces in Vancouver.

Built on react, gatsby, emotion, and react-leaflet. Hosting with surge. Pulling extra data fromthe Foursquare API using axios.

[View the demo](https://feeble-eggnog.surge.sh/)

The suggestion form is unoptimized and more of a placeholder.
## Adding new places to map.
To add new places to the map, one can head over to the src/components/leaflets.js and add your place to markers data set.
One needs to follow the manner other places are being added, only other information one needs is to search for latitude and longitude of the place, which can be retrieved by simple online search.

## todo

* [x] Fix map attribution
* [ ] Add more location data
* [ ] Add a page per venue that can be bulk generated and linked to from the main map
* [x] Fix form styling
* [ ] Ensure forms are React friendly
* [ ] Optimize the Mapbox title API call
* [x] Pull more location data from the Foursquare API
* [x] CSS Sticky Footer
* [ ] Pull 1 header image for each card
