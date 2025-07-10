# Treehouse_Full-Stack_JavaScript_Techdegree_unit10: Full Stack App with React and a REST API
[]he CourseDetail component redirects users to the /notfound path if the requested course isn't returned from the REST API.

[]The UpdateCourse component redirects users to the /notfound path if the requested course isn't returned from the REST API.

[]The UpdateCourse component redirects users to the /forbidden path if the requested course isn't owned by the authenticated user.

[]Components redirect users to the /error path when requests to the REST API return a "500 Internal Server Error" HTTP status code.


[] If an unauthenticated user is redirected to the sign in page, the UserSignIn component redirects users back to the previous screen after successfully signing in.

[] Components redirect users to the /error path when requests to the REST API return a "500 Internal Server Error" HTTP status code.



[] The following routes and components are configured (listed in the format path - component):
        * /notfound - NotFound - Renders a message letting the user know that the requested page can't be found.
        * /forbidden - Forbidden - Renders a message letting the user know * that they can't access the requested page.
        * /error - UnhandledError - Renders a message letting the user know that an unexpected error has occurred.

[] React Router is configured so that if a route isn't matched the NotFound component is rendered.

[] The app persists user credentials using an HTTP cookie or local storage so that the user's authenticated state is maintained even if the application is reloaded or loaded into a new browser tab.

