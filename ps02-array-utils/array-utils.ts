// TODO: Add Honor Code Header
/*
 *
 * Author: Rui Li
 *
 * ONYEN: lirui
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

/*
 * 1. count
 * Given an array of numbers and a number to search for, returns a count of the
 * number of times the number occurs in the array.
 */
export let count = (a: number[], b: number): number => {
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (b === a[i]) {
            c++;
        }
    }
    return c;
};

 /*
  * 2. max
  * Given an array of numbers, returns the largest number in the 
  * array. When the array is empty, returns Number.MIN_VALUE.
  */
export let max = (a: number[]): number => {
    if (a.length === 0) {
        return Number.MIN_VALUE;
    } else {
        let b = a[0];
        for (let i = 1; i < a.length; i++) {
            if (b <= a[i]) {
            b = a[i];
            }
        }
        return b;
        }
};

/*
  * 3. has
  * Given an array of numbers and a number to search for, returns 
  * true when the number is an element of the array or false
  * otherwise. 
  */
export let has = (a: number[], b: number): boolean => {
    let c = 0;
    if (a.length === 0) {
        return false;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b) {
                c++;
            } 
        } 
        return c > 0;
    }
};

 /*
  * 4. all
  * Given an array of numbers and a number to search for, returns  
  * true when every element in the array is equal to that number or 
  * false otherwise. 
  */
export let all = (a: number[], b: number): boolean => {
    let c = 0;
    if (a.length === 0) {
        return false;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b) {
                c++;
            } 
        }
        return c === a.length;
    }
};

 /*
  * 5. equals
  * Given two arrays of numbers, returns true when two arrays have   
  * the same elements in the same order. Two empty arrays are  
  * equal to one another. 
  */ 
export let equals = (a: number[], b: number[]): boolean => {
    let c = 0;
    if (((a.length === 0) && (b.length !== 0)) || ((a.length !== 0) && (b.length === 0))) {
        return false;
    } else if ((a.length === 0) && (b.length === 0)) {
        return true;
    } else if (a.length !== b.length) {
        return false;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                c++;
            }
        }
        return c === a.length;
    }
};

 /*
  * 6. cycle
  * Given a number as an upper bound, and a count of elements to   
  * generate, generate an array that cycles from 1 to the upper   
  * bound with the correct length.
  * For example, if the cycle function is given 3 as an upper bound 
  * and a count of 7 would generate the following array:
  * [1, 2, 3, 1, 2, 3, 1]
  * When either the upper bound or the count is zero or negative, 
  * cycle returns an empty array.
  * Hint: How might the remainder operator help you here?
  */ 
export let cycle = (a: number, b: number): number[] => {
    if ((a <= 0) || (b <= 0)) {
        return [];
    } else {
        let c: number[] = [];
        for (let i = 0; i < b; i++) {
            c[i] = 1 + i % a;
        }
        return c;
    }
};

  /*
  * 7. concat
  * Given two arrays, return a single array that contains all of the   
  * elements of the first array followed by all of the elements of the 
  * second array.
  */ 
export let concat = (a: number[], b: number[]): number[] => {
    let d: number[] = [];
    for (let i = 0; i < a.length; i++) {
        d[i] = a[i];
    }
    for (let j = 0; j < b.length; j++) {
        d[a.length + j] = b[j];
    }
    return d;
};

 /*
  * 8. sub
  * Given an array, a starting index, and an ending index, return an   
  * array that contains only the elements of the input array from start  
  * index to (end index - 1).
  * When the start index is negative, start from the beginning of the array.
  * When the end index is greater than the length of the array, end 
  * with the end of the array.
  */ 
export let sub = (a: number[], b: number, c: number): number[] => {
    let d: number[] = [];
    if ((b >= c) || (b >= a.length) || (c <= 0) || (a === [])) {
        return [];
    }
    if ((b < 0) && (c > a.length)) {
        return d;
    } else if ((b < 0) && (c <= a.length)) {
            for (let i = 0; i < c; i++) {
                d[i] = a[i]; 
            }
        } else if ((b >= 0) && (c > a.length)) {
            for (let i = 0; i < a.length; i++) {
                d[i] = a[b + i];
            }
        } else if ((b >= 0) && (c <= a.length)) {
            for (let i = 0; i < c - b; i++) {
                d[i] = a[b + i];
            }
        }
    return d;
};

  /*
  * 9. splice
  * Given an array we'll refer to as the first array, an integer index,    
  * and another array we'll refer to as second array, splice or "insert"   
  * the elements of the second array at the integer index of the first array.
  * For example, if the first array is [1, 9], the index is 1, and the 
  * second array is [4, 5], the splice function will return [1, 4, 5, 9].
  * If the index is less than zero, insert the second array before the first array.
  * If the index is greater than the length of the first array, append 
  * the second array to the first array.
  * Hint: consider how you might call upon your working 
  * implementations of concatenate and subarray.
  */ 
export let splice = (a: number[], b: number, c: number[]): number[] => {
    let d: number[] = [];
    if (b < 0) {
        let h = c.length;
        for (let i = 0; i < a.length; i++) {
            c[h + i] = a[i];
        }
        return c;
    } else if (b > a.length) {
        let e = a.length;
        for (let i = 0; i < c.length; i++) {
            a[e + i] = c[i];
        }
        return a;
    } else {
        for (let i = 0; i < b; i++) {
            d[i] = a[i];
        }
        let f = d.length;
        for (let j = 0; j < c.length; j++) {
            d[f + j] = c[j]; 
        }
        let g = d.length;
        for (let k = 0; k < a.length - b; k++) {
            d[g + k] = a[b + k];
        }
    }
    return d;
};