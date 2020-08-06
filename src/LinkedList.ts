import { ListNode } from './ListNode';
import { indexOf } from 'core-js/fn/array';

export class LinkedList {

    private head: ListNode = null;

    /**
     * Add the given data value to the beginning of the list.
     * @param value the data value to be contained in the new ListNode.
     * @returns the ListNode that was created, containing the given data value.
     */
    public addToHead(value: string): ListNode {

        // TODO
        let ln = new ListNode();
        ln.value = value;
        ln.isHead = true;
        if (this.head == null) {
            ln.next = null;
        } else {
            this.head.isHead = false;
            ln.next = this.head;  
        }
        this.head = ln;
        return ln;
    }

    /**
     * Returns the 'head' node of the linked list.
     */
    public getHead(): ListNode {

        // TODO
        let ln = new ListNode;
        if(Object.keys(ln).length === 0){
            return this.head
        }
        return ln;
    }

    /**
     * Returns the ListNode from the list at the given index.
     * @param index the index of the node, starting with the head at index 0.
     * @throws an error if the given index is invalid.
     */
    public get(index: number): ListNode {
        
        let current: ListNode = this.head;
        let counter: number = 0;
        
        while ( current != null ) {
            if (index === counter) {
                return current;
            } else {
                counter++
                current = current.next
            }
        }
        throw new Error(`Invalid index ${index}`)
    }

    /**
     * Returns an array containing the values contained in the list starting
     * with the head node. If there are no items in the list, then an empty
     * list is returned.
     */
    public values(): Array<string> {
        // TODO
        let array = [];
        let current: ListNode = this.head;
        while(current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}
