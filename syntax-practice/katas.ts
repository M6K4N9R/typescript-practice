


// Remove duplicates from list 8

// export const distinct = (a:number[]): number[] => {
//     const compareArray: number[] = [];
    
//     for (let i = 0; i<a.length; i++) {
//       if(!compareArray.includes(a[i])) {
//     compareArray.push(a[i]);
//       }
//     }
//       return compareArray;
//     }
    
//     console.log(distinct([1, 2, 1, 1, 3, 2, 9, 7, 9, 5, 2, 4]));
    

    // ======= consise version

    // export const distinct = (a: number[]): number[] => {
    //     return [...new Set(a)];
    //   };


//   Perplexity challenge for Set() constructor

const getFriendSuggestions = (currentFriends: number[], friendsOfFriends: number[], coworkers: number[], excludeList: number[] = []): number[] => {

const currentFriendsSet = new Set(currentFriends);
const excludeSet = new Set(excludeList);

const potentialFriendsSuggestionsSet = new Set([...friendsOfFriends, ...coworkers]);

potentialFriendsSuggestionsSet.forEach((userId) => {if (currentFriendsSet.has(userId) || excludeSet.has(userId)) {
    potentialFriendsSuggestionsSet.delete(userId)
}})
return Array.from(potentialFriendsSuggestionsSet)
} 

const currentFriends = [1, 2, 3, 4, 5];
const friendsOfFriends = [3, 4, 5, 6, 7, 8];
const coworkers = [5, 6, 7, 9, 10];
const excludeList = [8, 10];

const suggestions = getFriendSuggestions(currentFriends, friendsOfFriends, coworkers, excludeList);
console.log(suggestions);
    