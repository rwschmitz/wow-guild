// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import person schema from separate file
// import person from './person';
import bossKill from './bossKills';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    // person, // good example schema
    bossKill
  ])
})
