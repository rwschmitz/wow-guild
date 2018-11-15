export default {
  // This is the display name for the type
  title: "Person",
  
  // The identifier for this document type used in the api's
  name: "person",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "Name",

      // The identifier for this field used in the api's
      name: "name",

      // The type of this field
      type: "string",
    }
  ]
}
