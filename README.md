# keadatabase-survey

A React-based survey tool for the Department of Conservation-backed kea population trends study.

## Setup

You will need to have Node >= 8 installed (and npm). Then run:  
`npm install`

## Running

To run on your local machine at <http://localhost:3000/> run:  
`npm start`

You will need to ensure that the SCSS has been compiled beforehand by running:  
`npm run watch-css`

## Building

To build the app for production use, run:  
`npm build-css` then `npm run build`

## Documentation

Some basic documentation can be generated using:
`jsdoc src/**/*.js`

## Deploying

Ensure you have the following:

- The `awscli` Python package installed and configured with id and secret key.
- `REACT_APP_MAPBOX_API_KEY`, `REACT_APP_LINZ_API_KEY`, defined in `.env.local`

To deploy to Amazon S3 (and hence make available at https://keadatabase.nz/):  
`npm run deploy`

**This will automatically build the SCSS and source code, and then invalidate the CloudFront cache.**

## Licence

Kea Survey Tool  
Copyright (C) 2019 Greenstone Limited  
hello@greenstone.org.nz

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see http://www.gnu.org/licenses/.
