


// Remove duplicates from list

export const distinct = (a:number[]): number[] => {
    const compareArray: number[] = [];
    
    for (let i = 0; i<a.length; i++) {
      if(!compareArray.includes(a[i])) {
    compareArray.push(a[i]);
      }
    }
      return compareArray;
    }
    
    console.log(distinct([1, 2, 1, 1, 3, 2, 9, 7, 9, 5, 2, 4]));
    
//   
    