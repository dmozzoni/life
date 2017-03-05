# Butterfly Life List

  This Ruby-on-Rails app allows you to manage your butterfly life list for World, Country, State, and County.

# Models
  1. User
    1. Used default Devise Gem settings (i.e. email, password)
  2. Checklist → belongs to User
    1. Location, date, note
    2. Coordinates, country, state, are county are hidden inputs (as determined by Google Maps)
  3. Butterfly → belongs to Checklist and User
    1. Note, img_url, species, num
  4. CRUD on all models

# Procedure
  Upon launching the app you will be presented with a login screen. You can either enter credentials or click the sign-up link to create a new account.

  Once logged-in, the following buttons are displayed in the navbar:
  1. Checklist → Shows a user's checklists.
  2. Stats → Shows a user's life lists broken down between Life, Country, State, and County.
  3. Quiz → A link to ProjectOne, a Quiz for RI Butterflies (https://github.com/dmozzoni/ProjectOne).
  4. Edit Profile → Edit a user's email and password.
  5. Logout → Log a user out of current session.

# Checklist
  1. A sortable table of user's existing checklists.
  2. Click `New` to create a new checklist.

# New Checklist
  1. A form is presented with date, location and note fields.
  2. A Google Map is presented and requires you to set a marker for checklist's desired location.
  3. Click submit to create the checklist and a new page is presented summarizing inputs and provides a button to add butterflies.

# Add butterfly
  1. A form is shown allowing you to select a butterfly species from a dropdown list.
  2. Other fields include img_url, number, and note.
  3. Click `Create` to create a butterfly record and attached it to a checklist.
  4. By clicking `Back` one can add additional butterflies.
  5. Once butterfly records are created and attached, the life list numbers are updated on the Stats page.

# Miscellaneous
  1. Deleting a checklist will delete all attached butterflies.
  2. A user can delete any butterfly record that they've created.
  3. A user can edit any of their existing checklists and butterfly records.

# Footer
  1. Displays links to external online butterflying resources.
  2. Some contact links, like Github and LinkedIn, are provided.

# 3rd-party tools
  1. Google Maps APIs.
  2. Tablesorter.
  3. Materialize framework (many elements).
  4. W3Schools for tabs.

# Unfinished
  1. I wanted to have a user leaderboard.
  2. I wanted to have the ability to show life lists broken down into years. Year listing is quite popular in birding, butterflying, and odeing.
  3. Better more consistent styling.
  4. Add multiple butterflies via one large form instead of a dropdown.
  5. Area specific selection of butterflies.
  6. Upload photos.
