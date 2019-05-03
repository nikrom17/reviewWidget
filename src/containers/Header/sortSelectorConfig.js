// JSON data used to configure the Selector component

export const sortSelectorConfig = {
    description: "Sort By:",
    optgroup: "Sort Reviews By:",
    options: [
        { value: "mostRecent", displayValue: "Most Recent"},
        { value: "mostHelpful", displayValue: "Most Helpful"},
        { value: "lowestRated", displayValue: "Lowest Rated"},
        { value: "highestRated", displayValue: "Highest Rated"},
        { value: "oldest", displayValue: "Oldest"},
    ],
    value: "mostRecent"
}