# WEB103 Prework - *Creatorverse*

Submitted by: **Fatimah Hassan**

About this web app: **Creatorverse is a content creator showcase platform where users can discover, add, and manage their favorite content creators. The app features a stunning space-themed interface with full CRUD functionality, allowing users to create, view, update, and delete creator profiles.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] The content creator has an image shown on their content creator card
- [x] Extensive CSS styling is used to for the HTML element

The following **additional** features are implemented:

- [x] **Hero Landing Page**: Full-screen hero section with space/Earth background and smooth animations
- [x] **Dark Theme**: Professional dark theme throughout the application with glassmorphism effects
- [x] **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- [x] **Delete Confirmation Modal**: Elegant confirmation dialog to prevent accidental deletions
- [x] **Loading States**: Smooth loading animations while fetching data
- [x] **Error Handling**: User-friendly error messages and empty states
- [x] **Image Placeholders**: Graceful handling of missing images with placeholder displays
- [x] **Hover Effects**: Interactive hover animations on cards and buttons
- [x] **Form Validation**: Real-time validation for required fields
- [x] **Supabase Integration**: Real-time database with PostgreSQL backend

## Video Walkthrough
    <video controls src="WEB_103_prework_codepath_walkthrough.mp4" title="Title"></video>

## Tech Stack

- **Frontend**: React.js, React Router v6
- **Backend**: Supabase (PostgreSQL)
- **Styling**: Custom CSS with Flexbox/Grid
- **State Management**: React Hooks (useState, useEffect)
- **Deployment**: [Your deployment platform]

## Project Structure

```
creatorverse/
├── src/
│   ├── components/
│   │   ├── creatorcard/
│   │   ├── creatorform/
│   │   └── deletebutton/
│   ├── pages/
│   │   ├── showcreator/
│   │   ├── viewcreator/
│   │   ├── addcreator/
│   │   └── editcreator/
│   ├── App.jsx
│   ├── client.js
│   └── main.jsx
```

## Notes

### Challenges Encountered:
1. **Z-index Issues**: Resolved layering problems with background overlays affecting form inputs
2. **Database Schema**: Handled missing columns gracefully with conditional data insertion
3. **Routing**: Implemented nested routes with dynamic parameters for creator IDs
4. **Responsive Design**: Ensured consistent experience across all device sizes

### Design Decisions:
- Chose a space theme to create an immersive, modern experience
- Implemented component-based CSS architecture for better maintainability
- Used glassmorphism effects for a contemporary UI aesthetic
- Prioritized user experience with confirmation dialogs and loading states

## License

Copyright 2025 [Fatimah Hassan]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.