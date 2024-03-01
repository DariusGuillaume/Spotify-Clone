
# Spotify Clone

This project is a Spotify clone built using Next.js, React, Stripe for payment processing, Supabase for authentication and database management with PostgreSQL, and Tailwind CSS for styling.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Spotify Clone is a web application designed to replicate the core functionalities of the popular music streaming service, Spotify. Users can sign up, browse music catalogs, create playlists, and listen to their favorite tracks. The application utilizes modern web development technologies to provide a seamless and enjoyable user experience.

## Features

- User authentication and authorization
- Browse music catalogs
- Create and manage playlists
- Search for tracks, albums, and artists
- Play music tracks
- Integration with Stripe for subscription and payment processing

## Installation

To run the Spotify Clone locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/DariusGuillaume/Spotify-Clone 
   ```

2. Navigate to the project directory:

   ```bash
   cd spotify-clone
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add environment variables for database connection, Stripe API keys, and other necessary configurations.

5. Set up the database:
   - Create a PostgreSQL database using Supabase or any other PostgreSQL management tool.
   - Update database configuration in the `.env.local` file.

6. Run the development server:

   ```bash
   npm run dev
   ```

7. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Sign up for a new account or log in if you already have an account.
- Browse music catalogs, search for your favorite tracks, albums, and artists.
- Create and manage playlists.
- Subscribe to premium features using Stripe payment integration.
- Enjoy listening to music!

## Technologies Used

- Next.js
- React
- Stripe
- Supabase
- PostgreSQL
- Tailwind CSS

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

