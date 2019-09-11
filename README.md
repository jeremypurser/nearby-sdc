# Housemania

A tool to find short-term housing rentals.

## Nearby Service

The nearby service shows listings related by proximity to the current item view. The `NearbyHouses` are resources that belong to a `ParentHouse`, and is linked to it in the database with its `parentHouseId`, as seen in the API below.
<!-- ## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo -->

<!-- ## Table of Contents

1. [API](#API)
1. [Dependencies](#InstallingDependencies) -->

## CRUD API

**Create** . 
`POST   /houses/:parentHouseId`

**Read** . 
`GET    /houses/:parentHouseId`

**Update** . 
`PATCH  /houses/:parentHouseId/:id`

**Delete** . 
`DELETE /houses/:parentHouseId/:id`



### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

