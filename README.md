The app simulates an API call to a DB, making an asynchronous call,
then once the users are loaded they are stored in users array, which will be the source of truth
for the rest of the operations.

For filtering and sorting we will use a filteredList, which will be a modified list of the
users.

The directory structure is divided in components and helpers, and the styles are using inline tailwind classes.

to run: npm install; npm run dev;
