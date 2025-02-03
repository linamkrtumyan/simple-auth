# Profile Management Application

This is a React-based application that fetches user profile data, displays it, and handles JWT authentication. It includes a `ProfileCard` component, a custom `useProfile` hook to fetch profile data from an API, and a `useLogout` hook to handle user logouts when errors like invalid JWTs are detected.

## Features

- Fetch user profile data using React Query.
- Display loading skeletons while fetching data.
- Handle `bad_jwt` errors and log out the user if JWT is invalid.
- Provide a logout button for the user to manually log out.
- Support for custom error handling (e.g., 403 and 404 errors).
- Animated transitions using Framer Motion.

## Installation

To get started with this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/linamkrtumyan/simple-auth.git
cd simple-auth

npm install
npm run dev
```

```
/src
  /api
    profile.ts      # API call to fetch user profile data
  /components
    /ui
      card.tsx      # UI card component used in ProfileCard
      skeleton.tsx  # Skeleton loader component
      alert.tsx     # Alert component for error messages
      button.tsx    # Custom button component
  /hooks
    useProfile.ts  # Custom hook to fetch profile data using React Query
    useLogout.ts   # Custom hook to handle logout
  /pages
    profile.tsx    # Profile page that displays the ProfileCard component
```