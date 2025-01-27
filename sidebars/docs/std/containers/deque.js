const {
  docsClass,
  cat,
  docsClassCat,
} = require("../../../common");

module.exports = docsClassCat("deque", "std/containers/queues/deque", "", [
  "constructors",
  "destructor",
  "op:operator_assign",
  "m:assign",
  "m:get_allocator",
  cat("Element access"),
  "m:at",
  "op:operator_subscript",
  "m:front",
  "m:back",
  cat("Iterators"),
  ["m:begin", "since-cpp11"],
  ["m:end", "since-cpp11"],
  ["m:rbegin", "since-cpp11"],
  ["m:rend", "since-cpp11"],
  cat("Capacity"),
  "m:empty",
  "m:size",
  "m:max_size",
  ["m:shrink_to_fit", "since-cpp11"],
  cat("Modifiers"),
  "m:clear",
  "m:insert",
  ["m:emplace", "since-cpp11"],
  "m:erase",
  "m:push_back",
  ["m:emplace_back", "since-cpp11"],
  "m:pop_back",
  "m:push_front",
  ["m:emplace_front", "since-cpp11"],
  "m:pop_front",
  "m:resize",
  "m:swap"
]);