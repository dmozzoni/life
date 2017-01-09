# README

  This app allows you to manage your butterfly life list.

# Models
  1. User
    1. used default devise settings (i.e. email, password)
  2. Checklist → belongs to User
    1. location, date, note
    2. coord, country, state, county are hidden input (determined google maps)
  3. Butterfly → belongs to Checklist and User
    1. note, img_url, species, num
  4. CRUD on all models

# Procedure
  Upon launch you will be presented with a login screen, enter credentials or click the sign-up link to create a new account.

  Once logged-in there are buttons in the navbar
  1. Checklist --> shows a user's checklists
  2. Stats --> shows a user's life lists broken down between Life, Country, State, and County
  3. Quiz --> A link to Project One, a RI Butterfly Quiz
  4. Edit Profile -->  Edit user's email and password
  5. Logout --> logout of session_path


# Checklist
  1. A sortable table of user's existing checklists.
  2. Click new to create a new checklist

# New Checklist
  1. A form is presented with date, location and note fields
  2. A Google map is presented and requires you to set a marker at desired location of checklist.
  3. Click submit to create checklist and a new page is presented summarizing inputs and button to add butterflies

# Add butterfly
  1. A form is shown allowing you to select a butterfly species from a dropdown.
  2. Other fields include img_url, number and note.
  3. Click create to create a butterfly record attached to checklist.
  4. Clicking back one can add additional butterflies
  5. Once butterflies are created and attached the life list numbers are updated on the Stats page.

# Miscellaneous
  1. Deleting a checklist will delete all attached butterflies
  2. One can delete any butterfly
  3. One can edit any existing checklists and butterfly records

# Footer
  1. Contains link to external online butterflying resources
  2. Some contact links, like Github and Linked-in

# 3rd-party tools
  1. Google Maps APIs
  2. Tablesorter
  3. Materialize framework (many elements)
  4. W3cSchools for tabs


# Unfinished
  1. I wanted to have a user's leaderboard
  2. I wanted to have the ability to show life lists broken down into years.
     Year listing is quite popular in birding, butterflying, and odeing
  3. better more consistent styling
  4. Add multiple butterflies via one large form instead of dropdown
  5. Area specific selection of butterflies
