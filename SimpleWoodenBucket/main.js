/* This is a simple JMOD that adds a wooden bucket to the game.  This bucket can hold
 * exactly two things: water and milk.  Perfect for games where farming is important before mining. */

// Add the creative tab.
addCreativeTab("SimpleWoodenBucket.general","Survival Industry","SimpleWoodenBucket:itemWoodenBucket");

// Create the bucket.
addItem("itemWoodenBucket", "ItemWoodenBucket", 16, "SimpleWoodenBucket.general");

// Make the recipe for the bucket.  Uses the Ore Dictionary.
addShapedRecipe("SimpleWoodenBucket:itemWoodenBucket", [
  [null,        "stickWood",    null ],
  ["plankWood", null,           "plankWood" ],
  [null,        "plankWood",    null ]]);

/* Something to note: The milk bucket is not drinkable, so it cannot help with status effects.
 * It simply makes recipes requiring milk possible. */