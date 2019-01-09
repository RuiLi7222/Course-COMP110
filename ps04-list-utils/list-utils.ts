// TODO: Add the honor code pledge with your name and onyen here.
/**    
 * Author: Rui Li 
 * ONYEN: lirui  
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

import { Node, cons, first, rest } from "introcs/list";


export let last = <T> (list: Node<T>): T => {
    if (list === null) {
        return null;
    } else if (list.next === null) {
        return list.value;
    } else {
        return last(rest(list));
    }
    
};

export let valueAt = <T> (list: Node<T>, index: number): T => {
    if (list === null) {
        return null;
    } else if (index < 0) {
        return null;
    } else {
        for (let i = 0; i < index; i++) {
            list = rest(list);
        }
        if (list === null) {
            return null;
        } else {
            return first(list);
        }
               
    }
    
};

export let max = (list: Node<number>, record: number): number => {
    if (list === null) {
        return record;
    } else if (list.next === null) {
        if (list.value > record) {
            record = list.value;
        }
        return record;
    } else {
        if (first(list) <= record) {
        list = rest(list);
        return max(list, record);
        } else {
        record = first(list);
        list = rest(list);
        return max(list, record);
        }
    }
    
};

export let all = <T> (list: Node<T>, value: T): boolean => {
    if (list === null) {
        return true;
    } else if (list.next === null) {
        return value === list.value;
    } else if (first(list) !== value) {
        return false;
    } else {
        list = rest(list);
        return all(list, value);
    }
    
};

export let equals = <T> (a: Node<T>, b: Node<T>): boolean => {
    if (a === null && b === null) {
        return true;
    } else if (a === null || b === null) {
        return false;
    } else {
        if (first(a) === first(b)) {
            a = rest(a);
            b = rest(b);
            return equals(a, b);
        } else {
            return false;
        }
    }
};

export let scale = (list: Node<number>, factor: number): Node<number> => {
    if (list === null) {
        return null;
    } else {
        let a = first(list) * factor;
        list = rest(list);
        let output = new Node<number>(a, scale(list, factor));
        return output;
    }
    
};

export let arrayToList = <T> (array: T[], index: number): Node<T> => {
    if (array.length === 0) {
        return null;
    } else if (index === array.length) {
        return null;
    } else {
        let a = array[index];
        index++;
        let output = new Node<T>(a, arrayToList(array, index));
        return output;
    }
    
};

export let concat = <T> (a: Node<T>, b: Node<T>): Node<T> => {
    if (a === null && b === null) {
        return null;
    } else if (a === null) {
        return b;
    } else if (b === null) {
        return a;
    } else {
        let fa = first(a);
        a = rest(a);
        let output = new Node<T>(fa, concat(a, b));
        return output;
    }
};

export let sub = <T> (list: Node<T>, index: number, length: number): Node<T> => {
    if (list === null) {
        return null;
    } else if (length <= 0) {
        return null;
    } else {
        if (index < 0) {
            index = 0;
        } 
        for (let i = 0; i < index; i++) {
            list = rest(list);
            if (list === null) {
                return null;
            }
        }
        let a = first(list); 
        list = rest(list);
        length--;
        let output = new Node<T> (a, sub(list, 0, length));
        
        return output;
    }
};

export let splice = <T> (a: Node<T>, index: number, b: Node<T>): Node<T> => {
    if (a === null && b === null) {
        return null;
    } else if (a === null) {
        return b;
    } else if (b === null) {
        return a;
    } else if (index <= 0) {
        return concat(b, a);
    } else {
        index--;
        let input = first(a);
        a = rest(a);
        let output = cons(input, splice(a, index, b));
        
        return output;

           
    }

    return null;
};