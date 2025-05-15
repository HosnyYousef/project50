- [ ] Movie Watchlist App
    - [ ] Users can log in to create personal movie watchlists, rate films, and write reviews.


Explination
- CSS puts stars in the spans so that you can use a star rating system where when you click on a star it makes all the stars up to that point have the 'active' class that is a filled in star, and the stars following unfilled to show an x/5 star rating.

WHat I need to do:
- you'd need to add new books to the db with a default/blank rating, 
- and then add some code so that when you do rate a book using the click event that it extrapolates how many stars you gave it 
    - and sends a PUT request to the server to update the relevant db entry with the correct rating.

- your EJS has to be able to correctly render the rating of existing db entries on page load. 
    - One way to do that would be instead of hard coding 5 spans for the starts, loop 5 times adding a span inside each book being rendered, 
        - and use conditional logic to either add the 'active' class or not to the span. 
            - I.e., a book with 3 stars should check a conditional the first 3 times it renders a span that gives it the active class, and the last two the conditional evaluates to false and does not get the class.