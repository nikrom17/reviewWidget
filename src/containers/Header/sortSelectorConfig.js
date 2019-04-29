export const sortSelectorConfig = {
    elementType: 'select',
    elementConfig: {
        header: 'Sort By:',
        options: [
            { value: 'mostRecent', displayValue: 'Most Recent'},
            { value: 'mostHelpful', displayValue: 'Most Helpful'},
            { value: 'lowestRated', displayValue: 'Lowest Rated'},
            { value: 'highestRated', displayValue: 'Highest Rated'},
            { value: 'oldest', displayValue: 'Oldest'},
        ]
    },
    value: 'mostRecent',
}