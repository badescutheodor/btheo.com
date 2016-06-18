/**
 *  ===================================
 *          Queue Implementation
 *  ===================================
 *  @created_at 16/06/2016
 *  @creator Badescu Theodor <theo@btheo.com>
 */ 'use strict';

/**
 * Queue Constructor
 * @constructor
 */
 var Queue = function() {
    var t = this;

    /**
     * ==================
     * Default properties
     * ==================
     */
    t.size  = 0;
    t.first = null;
    t.last  = null;

    /**
     * ====================
     * Queue Node structure
     * ====================
     */
    t.node = function(data) {
        this.data = data;
        this.next = null;
    };

    /**
     * =============
     * Queue methods
     * =============
     */

    /**
     * Adds an element to the Queue.
     */
    t.push = function(data) {
        var node  = new t.node(data);

        /**
         *  Reference node's next as next element of Queue
         */ node.next = t.first;

        /**
         *  Add the first element to the Queue
         */ t.first = node;

        /**
         *  Increase size of the Queue
         */ t.size++;
    };

    /**
     * Removes the first element from the Queue
     * returning its data.
     */
    t.pop = function() {
        if ( t.first && t.first.data )
        {
            /**
             *  Decrease the size of the Queue
             */ t.size--;

            /**
             *  Set next Node as first element of Queue
             */ t.first = t.first.next;

            /**
             *  Return the data of the Node
             */ return t.first.data;
        }
    }
};